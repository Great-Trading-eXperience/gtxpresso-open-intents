# GTXpresso - Cross-Chain CLOB DEX

GTXpresso is a **cross-chain Central Limit Order Book (CLOB) decentralized exchange** powered by **Espresso**, leveraging its cutting-edge rollup technology for **sequencing, interoperability, and trading efficiency**.

## 🚀 Overview

GTXpresso utilizes **Espresso's high-performance rollup infrastructure** to enable **decentralized, low-cost, and cross-chain** trading. Built with the **Open Intents Framework**, it supports **intent-based trading across EVM-compatible chains**, ensuring secure and efficient execution.

With **ERC-7683 support**, GTXpresso facilitates **standardized cross-chain transactions**, allowing seamless intent activation across the Ethereum ecosystem.

## 🔑 Key Components

### 1️⃣ CLOB Contracts

- **Deployed on an Espresso-powered rollup** for efficient order placement, matching, and settlement.
- Refference: https://github.com/Great-Trading-eXperience/clob-dex/tree/feature/swap

### 2️⃣ Espresso-Powered Rollup

- **Arbitrum Orbit L3 rollup** utilizing **Espresso's shared sequencing** for enhanced trading performance.
- **Parent Chain:** Arbitrum Sepolia
- Built on **Arbitrum Nitro**, integrating **Espresso confirmations** for improved sequencing and interoperability.
- Optimized for **high-speed, low-cost transactions**.

### 3️⃣ Hyperlane Bridge Mechanism

- **Core and Warp Routes** deployed for cross-chain message passing and liquidity bridging.
- Enables **secure and efficient** asset movement across chains.

### 4️⃣ Open Intents Contracts

- Implements **ERC-7683-based contracts** for **on-chain intent creation and settlement**.
- Facilitates seamless execution using **Hyperlane's messaging infrastructure**.

### 5️⃣ Solver

- **Off-chain solver node** that listens for new intents on the rollup.
- **Executes orders** on destination chains based on user-defined actions.

## ⚡ The Problem

On-chain trading still faces key challenges:

- **High Gas Costs** – While rollups reduce fees, active trading remains costly.
- **Execution Bottlenecks** – Many rollups rely on centralized sequencers, causing delays and reordering risks.
- **Liquidity Fragmentation** – Liquidity remains siloed across different rollups, making cross-rollup trading inefficient.

## 🌟 Why Espresso?

Espresso **solves these issues** by offering:

- ✅ **Decentralized & Shared Sequencing** – Removes centralized sequencers for **fair & transparent** transaction ordering.
- ⚡ **Low Latency** – Faster block times enable **near-instant execution**, crucial for high-frequency trading.
- 💰 **Lower Costs** – Transactions are **significantly cheaper** than L1s and traditional L2s.
- 🔄 **Cross-Chain Liquidity** – Seamless integration with **Hyperlane** enables **frictionless multi-chain trading**.
- 🚀 **Optimized Trading Infrastructure** – Advanced sequencing mechanisms tailored for **high-performance decentralized trading**.

## 🔍 How GTXpresso Enables Cross-Chain Trading

### 🛠️ Key Technologies

1️⃣ **Hyperlane Interoperability**

- **Warp Routes** enable direct messaging between **Arbitrum Sepolia & GTXpresso**.
- **Mailbox contracts** ensure **secure & reliable** cross-chain message passing.

2️⃣ **Espresso's Decentralized Sequencing**

- Fair transaction ordering across chains without centralized control.
- **Synchronized execution** of cross-chain trades.

3️⃣ **Open Intents Framework (ERC-7683)**

- Standardized intent execution across chains.
- **Off-chain solvers** optimize order fulfillment for efficiency.

4️⃣ **Dedicated L3 Rollup for Trading**

- **Arbitrum Orbit + Espresso** for **high-speed execution & reduced costs**.
- Built specifically for **cross-chain liquidity aggregation**.

## **🔄 How WETH to WBTC Swap Operates in GTXpresso**

**1. Initiating an Open Intent (User Action)**

- The user creates an open intent to swap WETH for WBTC on the parent chain, such as Ethereum.
- This intent is signed and transmitted through the **Open Intents Framework (OIF)**.

**2. Transmitting Intent to GTXpresso**

- **Hyperlane** facilitates the relay of the signed swap intent from the parent chain to GTXpresso.
- Upon arrival, the **OIF Router** on GTXpresso authenticates the intent and initiates processing.

**3. Matching Orders & Executing Trades**

- GTXpresso examines its **CLOB order book** for a direct WETH/WBTC market order.
- If a direct market order is available, the trade is executed immediately.
- In the absence of a direct match, GTXpresso employs routing strategies:
  - Initially, WETH is sold for USDC (**Market Order 1**).
  - Subsequently, the obtained USDC is used to purchase WBTC (**Market Order 2**).
- These orders are executed sequentially by GTXpresso using its CLOB liquidity to ensure optimal execution.

**4. Bridging Assets Back to the Parent Chain**

- Once the trade is completed, the acquired WBTC is transferred to the user via the **Hyperlane Bridge**.
- The user receives WBTC on the parent chain, such as Ethereum.

**Key Advantages**

- **Low Latency:** Enables near-instant trade execution within GTXpresso.
- **Optimized Routing:** In the absence of a direct market, GTXpresso routes the trade through USDC for optimal execution (WETH → USDC → WBTC).
- **Cross-Chain Settlement:** The user interacts solely with the parent chain, while execution occurs within the high-performance GTXpresso rollup.

## 📌 Deployments

### 1️⃣ Rollup Deployment

- **Chain Name:** `GTXpresso`
- **Chain Slug:** `gtxpresso`
- **Chain ID:** `1020201`
- **RPC URL:** [GTXpresso RPC](http://157.173.201.26:8547)
- **CreateRollup TX:** [View on Arbiscan](https://sepolia.arbiscan.io/tx/0x80768de7eb5f18f567a7d7ad3d6cbe45d40272d34126e754aa775171c1112980)

### 2️⃣ Hyperlane Deployment

- **Core Deployments:**
  - [Arbitrum Sepolia](https://github.com/Great-Trading-eXperience/gtxpresso-open-intents/tree/main/hyperlane/chains/arbitrumsepolia/addresses.yaml)
  - [GTXpresso](https://github.com/Great-Trading-eXperience/gtxpresso-open-intents/tree/main/hyperlane/chains/gtxpresso/addresses.yaml)
- **Warp Routes:**
  - [Arbitrum Sepolia - GTXpresso](https://github.com/Great-Trading-eXperience/gtxpresso-open-intents/tree/main/hyperlane/deployments/warp_routes)

### 3️⃣ Open Intents Framework Deployment

- **Router Deployments:**
  - **Arbitrum Sepolia**: `0x53e4A99A8f06C612ee93D279Ae8C9A3B7549FF3D`
  - **GTXpresso**: `0x16102f66fd353153B5F89838d9d3AA6186B82211`

### 4️⃣ CLOB Addresses

- **GTX Router Contract Address:** `0xf6426F9B25b6c8B3d8Ec12bdB9449077ECEb848b`
- **Balance Manager Contract Address:** `0xFba6012052bA4154960849E05b44092b59e1497a`
- **Pool Manager Contract Address:** `0xA2C73383C4B40d64f7cF1BDDBe00a5B6aa5eA3dF`

### 5️⃣ ERC20 Token Addresses

#### 🔹 Arbitrum Sepolia

- **WETH:** `0x552256420C00844F77DB871b887A635525cf6840`
- **WBTC:** `0xaFDc3DE41a8D3dD69e35e401BF5505C8A7F5041A`
- **USDC:** `0x1EEC8DA99e0a34481A4b364AF4740C8AC2FF5BC5`
- **TRUMP:** `0xA89EA4eF4cbBCC4cFFd3Dc95D279Ee05054E499e`
- **PEPE:** `0x148666827538984Ad99dDA444EcB216BdaCB6Dbe`
- **LINK:** `0xdeBFCB6A900635aea9C6BF01e0B303a02A4BFb82`
- **DOGE:** `0xC50144b9B0284153f1C8660f6381c3DD2D69F1b5`

#### 🔸 GTXpresso

- **USDC:** `0xe76CC28AaF7Fb2b778f05392Fd0a668A161F57f7`
- **WETH:** `0xd786Baf47F03c9b6746f4AB73736a3155F773a0f`
- **WBTC:** `0x0a96BeFe6dDf44F8905E3A7E4dC78aA95C0f9327`
- **DOGE:** `0x3CfA285c5Cc69252093A5a2859869489D5A63650`
- **LINK:** `0x13378548Fef28F9C17D2B721C41C7796A740266d`
- **TRUMP:** `0x6F199125B610A34F3a9A02c24416EAB4Ac1d46F6`

## 🛠️ Tech Stack & References

- **Espresso:** [Espresso Network](https://docs.espressosys.com/network)
- **Hyperlane:** [Hyperlane](https://hyperlane.xyz/)
- **Open Intents:** [Open Intents](https://www.openintents.xyz/)
- **Arbitrum Nitro:** [Arbitrum](https://arbitrum.io/)
