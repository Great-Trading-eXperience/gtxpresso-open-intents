import { z } from "zod";

import { chainMetadata as defaultChainMetadata } from "@hyperlane-xyz/registry";

import type { ChainMap, ChainMetadata } from "@hyperlane-xyz/sdk";
import { ChainMetadataSchema } from "@hyperlane-xyz/sdk";
import { objMerge, ProtocolType } from "@hyperlane-xyz/utils";
import { createProviders } from "./providers.js";

const customChainMetadata = {
  // Example custom configuration
  gtxpresso: {
    protocol: ProtocolType.Ethereum,
    chainId: 1020201,
    domainId: 1020201,
    name: "gtxpresso",
    displayName: "GTXpresso",
    nativeToken: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: [
      {
        http: "http://157.173.201.26:8547",
        pagination: {
          maxBlockRange: 3000,
        },
      },
    ],
    blocks: {
      confirmations: 543,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },
    logoURI: "/gtxpresso-logo.png",
  },
};

const chainMetadata = objMerge<ChainMap<ChainMetadata>>(
  defaultChainMetadata,
  customChainMetadata,
  10,
  true,
);

z.record(z.string(), ChainMetadataSchema).parse(chainMetadata);

const providers = createProviders(customChainMetadata);

export { chainMetadata, providers };
