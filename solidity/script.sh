source .env

# cast send $WETH_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 100000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"

# cast send $WBTC_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 100000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"

# cast send $USDC_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 100000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"

# cast send $TRUMP_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 100000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"

# cast send $PEPE_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 100000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"

# cast send $LINK_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 100000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"

# cast send $DOGE_ADDRESS "mint(address,uint256)" \
# $ROUTER_OWNER 100000000000000000000 \
# --private-key $HYP_KEY \
# --rpc-url $RPC_URL \
# --quiet > /dev/null 2>&1 && echo "success: true" || echo "success: false"


# Use hyperlane CLI
# hyperlane warp send --relay --symbol USDC --origin arbitrumsepolia --destination gtxpresso --amount 1000000000000000000 --warp USDC/arbitrumsepolia-gtxpresso
# hyperlane warp send --relay --symbol DOGE --origin arbitrumsepolia --destination gtxpresso --amount 1000000000000000000 --warp DOGE/arbitrumsepolia-gtxpresso 
# hyperlane warp send --relay --symbol WBTC --origin arbitrumsepolia --destination gtxpresso --amount 1000000000000000000 --warp WBTC/arbitrumsepolia-gtxpresso
# hyperlane warp send --relay --symbol WETH --origin arbitrumsepolia --destination gtxpresso --amount 1000000000000000000 --warp WETH/arbitrumsepolia-gtxpresso
# hyperlane warp send --relay --symbol TRUMP --origin arbitrumsepolia --destination gtxpresso --amount 1000000000000000000 --warp TRUMP/arbitrumsepolia-gtxpresso
# hyperlane warp send --relay --symbol LINK --origin arbitrumsepolia --destination gtxpresso --amount 1000000000000000000 --warp LINK/arbitrumsepolia-gtxpresso
