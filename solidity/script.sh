source .env

# cast send $USDC_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 250000000000000000000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL_ARB \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"

# cast send $WETH_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 250000000000000000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL_ARB \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"

# cast send $WBTC_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 250000000000000000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL_ARB \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"


# cast send $TRUMP_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 10000000000000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL_ARB \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"

# cast send $PEPE_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 10000000000000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL_ARB \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"

# cast send $LINK_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 10000000000000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL_ARB \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"

# cast send $DOGE_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 10000000000000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL_ARB \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"



# Use hyperlane CLI
# hyperlane warp send --relay --symbol USDC --origin arbitrumsepolia --destination gtxpresso --amount 250000000000000000000000000000000000 --warp USDC/arbitrumsepolia-gtxpresso
# hyperlane warp send --relay --symbol WBTC --origin arbitrumsepolia --destination gtxpresso --amount 25000000000000000000000000000 --warp WBTC/arbitrumsepolia-gtxpresso
# hyperlane warp send --relay --symbol WETH --origin arbitrumsepolia --destination gtxpresso --amount 25000000000000000000000000000 --warp WETH/arbitrumsepolia-gtxpresso
# hyperlane warp send --relay --symbol DOGE --origin arbitrumsepolia --destination gtxpresso --amount 100000000000000000000000000000000 --warp DOGE/arbitrumsepolia-gtxpresso 
# hyperlane warp send --relay --symbol TRUMP --origin arbitrumsepolia --destination gtxpresso --amount 10000000000000000000000000000 --warp TRUMP/arbitrumsepolia-gtxpresso
# hyperlane warp send --relay --symbol LINK --origin arbitrumsepolia --destination gtxpresso --amount 10000000000000000000000000000 --warp LINK/arbitrumsepolia-gtxpresso


gtx_addresses=(
    "$USDC_GTX_ADDRESS"
    "$WETH_GTX_ADDRESS"
    "$WBTC_GTX_ADDRESS"
    "$DOGE_GTX_ADDRESS"
    "$LINK_GTX_ADDRESS"
    "$TRUMP_GTX_ADDRESS"
)

for address in "${gtx_addresses[@]}"; do
    if [ -n "$address" ]; then
        balance=$(cast call "$address" \
            "balanceOf(address)(uint256)" "$ROUTER_OWNER" \
            --rpc-url "$RPC_URL_GTX")
            echo "Address: $address, Balance: $balance"

    else
        echo "Address: Error, Balance: Address is empty or invalid."
    fi
done
