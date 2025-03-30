import { MaxUint256 } from "@ethersproject/constants";
import { bytes32ToAddress } from "@hyperlane-xyz/utils";
import z from "zod";

import { Hyperlane7683Rule } from "../filler.js";

const FilterByTokenAndAmountArgs = z.record(
  z.string(),
  z.record(
    z.string(),
    z.union([
      z.null(),
      z.bigint().refine((max) => max > 0n, { message: "Invalid Max Amount" }),
    ]),
  ),
);

export function filterByTokenAndAmount(
  args: z.infer<typeof FilterByTokenAndAmountArgs>,
): Hyperlane7683Rule {
  FilterByTokenAndAmountArgs.parse(args);

  const allowedTokens: Record<string, string[]> = {};

  for (const [chainId, tokens] of Object.entries(args)) {
    allowedTokens[chainId] = [];

    for (const token of Object.keys(tokens)) {
      allowedTokens[chainId].push(token.toLowerCase());
    }
  }
  // console.log("allowedTokens", JSON.stringify(allowedTokens, null, 2));

  return async (parsedArgs) => {
    const tokenIn = bytes32ToAddress(
      parsedArgs.resolvedOrder.minReceived[0].token,
    );
    console.log("tokenIn", tokenIn);
    const originChainId =
      parsedArgs.resolvedOrder.minReceived[0].chainId.toString();
    console.log("originChainId", originChainId);

    const tokenOut = bytes32ToAddress(
      parsedArgs.resolvedOrder.maxSpent[0].token,
    );
    console.log("tokenOut", tokenOut);
    const destChainId = parsedArgs.resolvedOrder.maxSpent[0].chainId.toString();
    console.log("destChainId", destChainId);

    if (
      !allowedTokens[originChainId] ||
      !allowedTokens[originChainId].includes(tokenIn.toLowerCase())
    ) {
      console.log("Input token is not allowed");
      return { error: "Input token is not allowed", success: false };
    }

    if (
      !allowedTokens[destChainId] ||
      !allowedTokens[destChainId].includes(tokenOut.toLowerCase())
    ) {
      console.log("Output token is not allowed");
      return { error: "Output token is not allowed", success: false };
    }

    let maxAmount = args[originChainId][tokenIn];
    console.log("maxAmount", maxAmount);

    if (maxAmount === null) {
      maxAmount = BigInt(MaxUint256.toString());
    }

    const amountIn = parsedArgs.resolvedOrder.minReceived[0].amount;
    console.log("amountIn", amountIn);
    const amountOut = parsedArgs.resolvedOrder.maxSpent[0].amount;
    console.log("amountOut", amountOut);

    if (amountIn.lte(amountOut)) {
      console.log("Intent is not profitable");
      return { error: "Intent is not profitable", success: false };
    }

    if (amountOut.gt(maxAmount.toString())) {
      console.log("Output amount exceeds the maximum allowed");
      return {
        error: "Output amount exceeds the maximum allowed",
        success: false,
      };
    }

    console.log("Amounts and tokens are Ok");
    return { data: "Amounts and tokens are Ok", success: true };
  };
}
