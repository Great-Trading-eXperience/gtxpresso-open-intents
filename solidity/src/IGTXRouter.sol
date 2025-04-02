pragma solidity 0.8.25;

type OrderId is uint48;

type Quantity is uint128;

type Price is uint64;
type Currency is address;

enum Side {
    BUY,
    SELL
}

enum Status {
    OPEN,
    PARTIALLY_FILLED,
    FILLED,
    CANCELLED,
    EXPIRED
}

struct PoolKey {
    Currency baseCurrency;
    Currency quoteCurrency;
}

type PoolId is bytes32;

interface IGTXRouter {
    function swap(
        Currency srcCurrency,
        Currency dstCurrency,
        uint256 srcAmount,
        uint256 minDstAmount,
        uint8 maxHops,
        address user
    ) external returns (uint256 receivedAmount);
}
