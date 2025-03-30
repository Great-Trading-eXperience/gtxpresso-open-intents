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
    {
      address: "0x9EC1bC024132cA18AFC6da7395B7121b73C5E01E",
      chainName: "gtxpresso",
      initialBlock: 543,
    },
    {
      address: "0x87c7Dfd251B2DCfA7aA5E3d117b10009e0f7d770",
      chainName: "arbitrumsepolia",
    },
  ],
  customRules: {
    rules: [
      {
        name: "filterByTokenAndAmount",
        args: {
          "421614": {
            [AddressZero]: null,
            [WETH_ARB]: null,
            [WBTC_ARB]: null,
            [USDC_ARB]: null,
            [TRUMP_ARB]: null,
            [PEPE_ARB]: null,
            [LINK_ARB]: null,
            [DOGE_ARB]: null,
          },
          "1020201": {
            [AddressZero]: null,
            [WETH_GTX]: null,
            [DOGE_GTX]: null,
            [LINK_GTX]: null,
            [TRUMP_GTX]: null,
            [USDC_GTX]: null,
            [WBTC_GTX]: null,
          },
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
