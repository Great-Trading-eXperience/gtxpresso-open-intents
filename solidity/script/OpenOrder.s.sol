// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.25 <0.9.0;

import { Script } from "forge-std/Script.sol";
import { console2 } from "forge-std/console2.sol";

import { TypeCasts } from "@hyperlane-xyz/libs/TypeCasts.sol";
import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import { Hyperlane7683 } from "../src/Hyperlane7683.sol";
import { OrderData, OrderEncoder } from "../src/libs/OrderEncoder.sol";

import { OnchainCrossChainOrder } from "../src/ERC7683/IERC7683.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract OpenOrder is Script {
    function run() public {
        uint256 deployerPrivateKey = vm.envUint("DEPLOYER_PK");

        vm.startBroadcast(deployerPrivateKey);

        address localRouter = vm.envAddress("ORIGIN_ROUTER_ADDRESS");
        address destinationRouter = vm.envAddress("DESTINATION_ROUTER_ADDRESS");
        address sender = vm.envAddress("ORDER_SENDER");
        address recipient = vm.envAddress("ORDER_RECIPIENT");
        address inputToken = vm.envAddress("ITT_INPUT");
        address outputToken = vm.envAddress("ITT_OUTPUT");
        address targetInputToken = vm.envAddress("TG_INPUT");
        address targetOutputToken = vm.envAddress("TG_OUTPUT");
        uint256 amountIn = vm.envUint("AMOUNT_IN");
        uint256 amountOut = vm.envUint("AMOUNT_OUT");
        uint8 orderAction = uint8(vm.envUint("ORDER_ACTION"));
        uint32 originDomain = Hyperlane7683(localRouter).localDomain();
        uint256 destinationDomain = vm.envUint("DESTINATION_DOMAIN");
        uint256 targetDomain = vm.envUint("TARGET_DOMAIN");
        uint32 fillDeadline = type(uint32).max;

        if (inputToken != address(0)) {
            ERC20(inputToken).approve(localRouter, amountIn);
        }
        uint256 lastNonce = Hyperlane7683(localRouter).lastNonce();

        OrderData memory order = OrderData(
            TypeCasts.addressToBytes32(sender),
            TypeCasts.addressToBytes32(recipient),
            TypeCasts.addressToBytes32(inputToken),
            TypeCasts.addressToBytes32(outputToken),
            TypeCasts.addressToBytes32(targetInputToken),
            TypeCasts.addressToBytes32(targetOutputToken),
            amountIn,
            amountOut,
            originDomain,
            uint32(destinationDomain),
            uint32(targetDomain),
            TypeCasts.addressToBytes32(destinationRouter),
            TypeCasts.addressToBytes32(localRouter),
            fillDeadline,
            orderAction,
            lastNonce + 1,
            new bytes(0)
        );

        OnchainCrossChainOrder memory onchainOrder =
            OnchainCrossChainOrder(fillDeadline, OrderEncoder.orderDataType(), OrderEncoder.encode(order));

        if (inputToken == address(0)) {
            Hyperlane7683(localRouter).open{ value: amountIn }(onchainOrder);
        } else {
            Hyperlane7683(localRouter).open(onchainOrder);
        }

        vm.stopBroadcast();
    }
}
