import { AddressZero } from "@ethersproject/constants";

import {
  type Hyperlane7683Metadata,
  Hyperlane7683MetadataSchema,
} from "../types.js";

const WETH_ARB =
  process.env.WETH_ADDRESS || "0x552256420C00844F77DB871b887A635525cf6840";
const WBTC_ARB =
  process.env.WBTC_ADDRESS || "0xaFDc3DE41a8D3dD69e35e401BF5505C8A7F5041A";
const USDC_ARB =
  process.env.USDC_ADDRESS || "0x1EEC8DA99e0a34481A4b364AF4740C8AC2FF5BC5";
const TRUMP_ARB =
  process.env.TRUMP_ADDRESS || "0xA89EA4eF4cbBCC4cFFd3Dc95D279Ee05054E499e";
const PEPE_ARB =
  process.env.PEPE_ADDRESS || "0x148666827538984Ad99dDA444EcB216BdaCB6Dbe";
const LINK_ARB =
  process.env.LINK_ADDRESS || "0xdeBFCB6A900635aea9C6BF01e0B303a02A4BFb82";
const DOGE_ARB =
  process.env.DOGE_ADDRESS || "0xC50144b9B0284153f1C8660f6381c3DD2D69F1b5";

const WETH_GTX =
  process.env.WETH_GTX_ADDRESS || "0xd786Baf47F03c9b6746f4AB73736a3155F773a0f";
const DOGE_GTX =
  process.env.DOGE_GTX_ADDRESS || "0x3CfA285c5Cc69252093A5a2859869489D5A63650";
const LINK_GTX =
  process.env.LINK_GTX_ADDRESS || "0x13378548Fef28F9C17D2B721C41C7796A740266d";
const TRUMP_GTX =
  process.env.TRUMP_GTX_ADDRESS || "0x6F199125B610A34F3a9A02c24416EAB4Ac1d46F6";
const USDC_GTX =
  process.env.USDC_GTX_ADDRESS || "0xe76CC28AaF7Fb2b778f05392Fd0a668A161F57f7";
const WBTC_GTX =
  process.env.WBTC_GTX_ADDRESS || "0x0a96BeFe6dDf44F8905E3A7E4dC78aA95C0f9327";

const metadata: Hyperlane7683Metadata = {
  protocolName: "Hyperlane7683",
  intentSources: [
    // mainnet
    // {
    //   address: "0x5F69f9aeEB44e713fBFBeb136d712b22ce49eb88",
    //   chainName: "ethereum",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "optimism",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "arbitrum",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "base",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "gnosis",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "berachain",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "form",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "unichain",
    // },
    // {
    //   address: "0x9245A985d2055CeA7576B293Da8649bb6C5af9D0",
    //   chainName: "artela",
    // },

    // testnet
    {
      address: "0x9EC1bC024132cA18AFC6da7395B7121b73C5E01E",
      chainName: "gtxpresso",
      initialBlock: 543,
    },
    {
      address: "0x87c7Dfd251B2DCfA7aA5E3d117b10009e0f7d770",
      chainName: "arbitrumsepolia",
    },
    // {
    //   address: "0xf614c6bF94b022E16BEF7dBecF7614FFD2b201d3",
    //   chainName: "optimismsepolia",
    // },
    // {
    //   address: "0xf614c6bF94b022E16BEF7dBecF7614FFD2b201d3",
    //   chainName: "sepolia",
    // },
    // {
    //   address: "0xf614c6bF94b022E16BEF7dBecF7614FFD2b201d3",
    //   chainName: "basesepolia",
    //   initialBlock: 21491220,
    //   pollInterval: 1000,
    //   confirmationBlocks: 2,
    // },
  ],
  customRules: {
    rules: [
      {
        name: "filterByTokenAndAmount",
        args: {
          "421614": {
            // "0x77C037fbF42e85dB1487B390b08f58C00f438812": null,
            [AddressZero]: BigInt(1e15),
            [WETH_ARB]: BigInt(1e8),
            [WBTC_ARB]: BigInt(1e8),
            [USDC_ARB]: BigInt(1e8),
            [TRUMP_ARB]: BigInt(1e8),
            [PEPE_ARB]: BigInt(1e8),
            [LINK_ARB]: BigInt(1e8),
            [DOGE_ARB]: BigInt(1e8),
          },
          "1020201": {
            // "0x77C037fbF42e85dB1487B390b08f58C00f438812": null,
            [AddressZero]: BigInt(1e15),
            [WETH_GTX]: BigInt(1e8),
            [DOGE_GTX]: BigInt(1e8),
            [LINK_GTX]: BigInt(1e8),
            [TRUMP_GTX]: BigInt(1e8),
            [USDC_GTX]: BigInt(1e8),
            [WBTC_GTX]: BigInt(1e8),
          },
          // "11155420": {
          //   "0x5f94BC7Fb4A2779fef010F96b496cD36A909E818": BigInt(50e18),
          //   [AddressZero]: BigInt(5e15),
          // },
          // "84532": {
          //   "0x5f94BC7Fb4A2779fef010F96b496cD36A909E818": BigInt(50e18),
          //   [AddressZero]: BigInt(5e15),
          // },
          // "11155111": {
          //   "0x5f94BC7Fb4A2779fef010F96b496cD36A909E818": BigInt(5e18),
          //   [AddressZero]: BigInt(5e10),
          // },
        },
      },
      {
        name: "intentNotFilled",
      },
    ],
  },
};

Hyperlane7683MetadataSchema.parse(metadata);

export default metadata;
