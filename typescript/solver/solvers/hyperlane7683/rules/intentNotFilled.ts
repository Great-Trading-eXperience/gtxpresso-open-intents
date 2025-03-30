import { HashZero } from "@ethersproject/constants";
import { bytes32ToAddress } from "@hyperlane-xyz/utils";
import { Hyperlane7683__factory } from "../../../typechain/factories/hyperlane7683/contracts/Hyperlane7683__factory.js";
import { Hyperlane7683Rule } from "../filler.js";
import { chainMetadata, providers } from "../../../config/chainMetadata.js";

const UNKNOWN = HashZero;

export function intentNotFilled(): Hyperlane7683Rule {
  return async (parsedArgs, context) => {
    // console.log(parsedArgs.resolvedOrder);
    // console.log(parsedArgs.resolvedOrder.fillInstructions);

    const destinationSettler = bytes32ToAddress(
      parsedArgs.resolvedOrder.fillInstructions[0].destinationSettler,
    );
    console.log("destinationSettler", destinationSettler);

    const _chainId =
      parsedArgs.resolvedOrder.fillInstructions[0].destinationChainId.toString();
    console.log("_chainId", _chainId);
    // const _originChainId = parsedArgs.resolvedOrder.originChainId.toString();

    // try {
    //   const _provider = await context.multiProvider.getProvider(_chainId);
    //   console.log("_provider get:", _provider);
    // } catch (error) {
    await context.multiProvider.extendChainMetadata(chainMetadata);
    await context.multiProvider.setProviders(providers);
    // const _provider = await context.multiProvider.getProvider(_chainId);
    // console.log("_provider created:", _provider);
    // }

    const filler = await context.multiProvider.getSigner(_chainId);
    // console.log("filler", filler.provider);

    const destination = await Hyperlane7683__factory.connect(
      destinationSettler,
      filler,
    );
    // console.log("destination", destination);

    const orderStatus = await destination.orderStatus(parsedArgs.orderId);
    console.log("orderStatus", orderStatus);

    if (orderStatus !== UNKNOWN) {
      console.log("Intent already filled");
      return { error: "Intent already filled", success: false };
    }
    console.log("Intent not yet filled");
    return { data: "Intent not yet filled", success: true };
  };
}
