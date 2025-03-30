import { type WarpCoreConfig } from '@hyperlane-xyz/sdk';
import { zeroAddress } from 'viem';

// const ROUTER = '0xf614c6bF94b022E16BEF7dBecF7614FFD2b201d3';
// const ITT = '0x5f94BC7Fb4A2779fef010F96b496cD36A909E818';

const WETH_ARB = process.env.WETH_ADDRESS || '0x552256420C00844F77DB871b887A635525cf6840';
const WBTC_ARB = process.env.WBTC_ADDRESS || '0xaFDc3DE41a8D3dD69e35e401BF5505C8A7F5041A';
const USDC_ARB = process.env.USDC_ADDRESS || '0x1EEC8DA99e0a34481A4b364AF4740C8AC2FF5BC5';
const TRUMP_ARB = process.env.TRUMP_ADDRESS || '0xA89EA4eF4cbBCC4cFFd3Dc95D279Ee05054E499e';
const PEPE_ARB = process.env.PEPE_ADDRESS || '0x148666827538984Ad99dDA444EcB216BdaCB6Dbe';
const LINK_ARB = process.env.LINK_ADDRESS || '0xdeBFCB6A900635aea9C6BF01e0B303a02A4BFb82';
const DOGE_ARB = process.env.DOGE_ADDRESS || '0xC50144b9B0284153f1C8660f6381c3DD2D69F1b5';

const WETH_GTX = '0xd786Baf47F03c9b6746f4AB73736a3155F773a0f';
const DOGE_GTX = '0x3CfA285c5Cc69252093A5a2859869489D5A63650';
const LINK_GTX = '0x13378548Fef28F9C17D2B721C41C7796A740266d';
const TRUMP_GTX = '0x6F199125B610A34F3a9A02c24416EAB4Ac1d46F6';
const USDC_GTX = '0xe76CC28AaF7Fb2b778f05392Fd0a668A161F57f7';
const WBTC_GTX = '0x0a96BeFe6dDf44F8905E3A7E4dC78aA95C0f9327';

// const ROUTER_ARB = '0x87c7Dfd251B2DCfA7aA5E3d117b10009e0f7d770';
// const ROUTER_GTX = '0x9EC1bC024132cA18AFC6da7395B7121b73C5E01E';

// const NETWORK_SEPARATOR = '101010';

export const TOP_MAX = {
  arbitrumsepolia: {
    [WETH_ARB]: 100e18,
    [WBTC_ARB]: 50e18,
    [USDC_ARB]: 200e18,
    [TRUMP_ARB]: 75e18,
    [PEPE_ARB]: 30e18,
    [LINK_ARB]: 60e18,
    [DOGE_ARB]: 40e18,
    [zeroAddress]: 1e16,
  },
  gtxpresso: {
    [WETH_GTX]: 100e18,
    [DOGE_GTX]: 100e18,
    [LINK_GTX]: 100e18,
    [TRUMP_GTX]: 100e18,
    [USDC_GTX]: 100e18,
    [WBTC_GTX]: 100e18,
    [zeroAddress]: 1e16,
  },
  // bsesepolia: {
  //   [ITT]: 100e18,
  //   [zeroAddress]: 1e16,
  // },
  // optimismsepolia: {
  //   [ITT]: 100e18,
  //   [zeroAddress]: 1e16,
  // },
  // arbitrumsepolia: {
  //   [ITT]: 100e18,
  //   [zeroAddress]: 1e16,
  // },
  // sepolia: {
  //   [ITT]: 100e18,
  //   [zeroAddress]: 1e16,
  // },
};

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      addressOrDenom: '0x363200470A6f8565Db03c5eaf2cAAb676d690698',
      // addressOrDenom: ROUTER_ARB,
      chainName: 'arbitrumsepolia',
      collateralAddressOrDenom: '0x1EEC8DA99e0a34481A4b364AF4740C8AC2FF5BC5',
      connections: [
        {
          token: 'ethereum|gtxpresso|0xe76CC28AaF7Fb2b778f05392Fd0a668A161F57f7',
        },
      ],
      decimals: 6,
      name: 'Mock USDC',
      standard: 'EvmHypCollateral',
      symbol: 'USDC',
      protocol: 'ethereum',
    },
    {
      addressOrDenom: '0xe76CC28AaF7Fb2b778f05392Fd0a668A161F57f7',
      // addressOrDenom: ROUTER_GTX,
      chainName: 'gtxpresso',
      connections: [
        {
          token: 'ethereum|arbitrumsepolia|0x363200470A6f8565Db03c5eaf2cAAb676d690698',
        },
      ],
      decimals: 6,
      name: 'Mock USDC',
      standard: 'EvmHypSynthetic',
      symbol: 'USDC',
      protocol: 'ethereum',
    },
    {
      addressOrDenom: '0x1bfd9867a9B6e89CAAc8e258405F0a484486C8A3',
      // addressOrDenom: ROUTER_ARB,
      chainName: 'arbitrumsepolia',
      connections: [
        {
          token: 'ethereum|gtxpresso|0xfecE754eFCAC66336a80E44F882D1521E54062A1',
        },
      ],
      decimals: 18,
      name: 'Ether',
      standard: 'EvmHypNative',
      symbol: 'ETH',
      protocol: 'ethereum',
    },
    // yaml-language-server: $schema=../schema.json
    {
      addressOrDenom: '0xfecE754eFCAC66336a80E44F882D1521E54062A1',
      // addressOrDenom: ROUTER_GTX,
      chainName: 'gtxpresso',
      connections: [
        {
          token: 'ethereum|arbitrumsepolia|0x1bfd9867a9B6e89CAAc8e258405F0a484486C8A3',
        },
      ],
      decimals: 18,
      name: 'Ether',
      standard: 'EvmHypNative',
      symbol: 'ETH',
      protocol: 'ethereum',
    },
    // {
    //   addressOrDenom: '0x688C62347A0040C5f614F0903E7B6aCd8385b09B',
    //   chainName: 'arbitrumsepolia',
    //   collateralAddressOrDenom: '0x552256420C00844F77DB871b887A635525cf6840',
    //   connections: [
    //     {
    //       token: 'ethereum|gtxpresso|0xd786Baf47F03c9b6746f4AB73736a3155F773a0f',
    //     },
    //   ],
    //   decimals: 18,
    //   name: 'Mock WETH',
    //   standard: 'EvmHypCollateral',
    //   symbol: 'WETH',
    //   protocol: 'ethereum',
    // },
    // {
    //   addressOrDenom: '0xd786Baf47F03c9b6746f4AB73736a3155F773a0f',
    //   chainName: 'gtxpresso',
    //   connections: [
    //     {
    //       token: 'ethereum|arbitrumsepolia|0x688C62347A0040C5f614F0903E7B6aCd8385b09B',
    //     },
    //   ],
    //   decimals: 18,
    //   name: 'Mock WETH',
    //   standard: 'EvmHypSynthetic',
    //   symbol: 'WETH',
    //   protocol: 'ethereum',
    // },

    // {
    //   addressOrDenom: '0x89BC65c8898b3AeDf19a582AA66995A837337DB2',
    //   chainName: 'arbitrumsepolia',
    //   collateralAddressOrDenom: '0xaFDc3DE41a8D3dD69e35e401BF5505C8A7F5041A',
    //   connections: [
    //     {
    //       token: 'ethereum|gtxpresso|0x0a96BeFe6dDf44F8905E3A7E4dC78aA95C0f9327',
    //     },
    //   ],
    //   decimals: 8,
    //   name: 'Mock WBTC',
    //   standard: 'EvmHypCollateral',
    //   symbol: 'WBTC',
    //   protocol: 'ethereum',
    // },
    // {
    //   addressOrDenom: '0x0a96BeFe6dDf44F8905E3A7E4dC78aA95C0f9327',
    //   chainName: 'gtxpresso',
    //   connections: [
    //     {
    //       token: 'ethereum|arbitrumsepolia|0x89BC65c8898b3AeDf19a582AA66995A837337DB2',
    //     },
    //   ],
    //   decimals: 8,
    //   name: 'Mock WBTC',
    //   standard: 'EvmHypSynthetic',
    //   symbol: 'WBTC',
    //   protocol: 'ethereum',
    // },
    // {
    //   addressOrDenom: '0xBddB159e96cc7C68a4f401435ae885c3244F8A42',
    //   chainName: 'arbitrumsepolia',
    //   collateralAddressOrDenom: '0xC50144b9B0284153f1C8660f6381c3DD2D69F1b5',
    //   connections: [
    //     {
    //       token: 'ethereum|gtxpresso|0x3CfA285c5Cc69252093A5a2859869489D5A63650',
    //     },
    //   ],
    //   decimals: 8,
    //   name: 'Mock DOGE',
    //   standard: 'EvmHypCollateral',
    //   symbol: 'DOGE',
    //   protocol: 'ethereum',
    // },
    // {
    //   addressOrDenom: '0x3CfA285c5Cc69252093A5a2859869489D5A63650',
    //   chainName: 'gtxpresso',
    //   connections: [
    //     {
    //       token: 'ethereum|arbitrumsepolia|0xBddB159e96cc7C68a4f401435ae885c3244F8A42',
    //     },
    //   ],
    //   decimals: 8,
    //   name: 'Mock DOGE',
    //   standard: 'EvmHypSynthetic',
    //   symbol: 'DOGE',
    //   protocol: 'ethereum',
    // },
    // {
    //   addressOrDenom: '0x951d452F49ce7D0A450500CCC24436D92da0f557',
    //   chainName: 'arbitrumsepolia',
    //   collateralAddressOrDenom: '0xdeBFCB6A900635aea9C6BF01e0B303a02A4BFb82',
    //   connections: [
    //     {
    //       token: 'ethereum|gtxpresso|0x13378548Fef28F9C17D2B721C41C7796A740266d',
    //     },
    //   ],
    //   decimals: 18,
    //   name: 'Mock Chainlink',
    //   standard: 'EvmHypCollateral',
    //   symbol: 'LINK',
    //   protocol: 'ethereum',
    // },
    // {
    //   addressOrDenom: '0x13378548Fef28F9C17D2B721C41C7796A740266d',
    //   chainName: 'gtxpresso',
    //   connections: [
    //     {
    //       token: 'ethereum|arbitrumsepolia|0x951d452F49ce7D0A450500CCC24436D92da0f557',
    //     },
    //   ],
    //   decimals: 18,
    //   name: 'Mock Chainlink',
    //   standard: 'EvmHypSynthetic',
    //   symbol: 'LINK',
    //   protocol: 'ethereum',
    // },
    // {
    //   addressOrDenom: '0x2490f5D28b81895e6Ae70A3bF4de6b286da2824f',
    //   chainName: 'arbitrumsepolia',
    //   collateralAddressOrDenom: '0xA89EA4eF4cbBCC4cFFd3Dc95D279Ee05054E499e',
    //   connections: [
    //     {
    //       token: 'ethereum|gtxpresso|0x6F199125B610A34F3a9A02c24416EAB4Ac1d46F6',
    //     },
    //   ],
    //   decimals: 18,
    //   name: 'Mock TRUMP',
    //   standard: 'EvmHypCollateral',
    //   symbol: 'TRUMP',
    //   protocol: 'ethereum',
    // },
    // {
    //   addressOrDenom: '0x6F199125B610A34F3a9A02c24416EAB4Ac1d46F6',
    //   chainName: 'gtxpresso',
    //   connections: [
    //     {
    //       token: 'ethereum|arbitrumsepolia|0x2490f5D28b81895e6Ae70A3bF4de6b286da2824f',
    //     },
    //   ],
    //   decimals: 18,
    //   name: 'Mock TRUMP',
    //   standard: 'EvmHypSynthetic',
    //   symbol: 'TRUMP',
    //   protocol: 'ethereum',
    // },
  ],
  // Mainnet Op Arb Base Bera Form
  options: {
    interchainFeeConstants: [
      {
        amount: 1e8,
        origin: 'gtxpresso',
        destination: 'arbitrumsepolia',
        addressOrDenom: '0xfecE754eFCAC66336a80E44F882D1521E54062A1',
      },
      {
        amount: 1e8,
        origin: 'gtxpresso',
        destination: 'arbitrumsepolia',
        addressOrDenom: zeroAddress,
      },
      {
        amount: 1e8,
        origin: 'arbitrumsepolia',
        destination: 'gtxpresso',
        addressOrDenom: '0x1bfd9867a9B6e89CAAc8e258405F0a484486C8A3',
      },
      {
        amount: 1e8,
        origin: 'arbitrumsepolia',
        destination: 'gtxpresso',
        addressOrDenom: zeroAddress,
      },
    ],
  },
};
