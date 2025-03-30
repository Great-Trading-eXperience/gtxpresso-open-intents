-include .env

# Default values
DEFAULT_NETWORK := $(shell grep 'default_network' foundry.toml | cut -d '"' -f2)
FORK_NETWORK := $(shell grep 'mainnet =' foundry.toml | cut -d '"' -f2)

$(info Default Network: $(DEFAULT_NETWORK))

# Custom network can be set via make network=<network_name>
network ?= $(DEFAULT_NETWORK)
$(info Network: $(network))

# Access PRIVATE_KEY from .env
PRIVATE_KEY := $(DEPLOYER_PK)

# .PHONY: account chain compile deploy-core deploy-market deploy-verify-core deploy-verify-market flatten fork format generate lint test verify

# Helper function to run forge script
define forge_script
	forge script $(1) --rpc-url $(network) --broadcast --legacy --private-key $(PRIVATE_KEY) $(2)
endef

deploy-hyperlane7683: build
	$(call forge_script,script/DeployHyperlane7683.s.sol,)

# Define a target to verify core deployment using the specified network
# deploy-verify-all: build
# 	$(call forge_script,script/Deploy.s.sol,--verify)

# # Define a target to verify market deployment using the specified network
# deploy-verify-market: build
# 	$(call forge_script,script/DeployMarket.s.sol,--verify)


# Define a target to compile the contracts
compile:
	forge compile

# Define a target to run tests
test:
	forge test

# Define a target to lint the code
lint:
	forge fmt

# Define a target to build the project
build:
	forge build

# Define a target to display help information
help:
	@echo "Makefile targets:"
	@echo "  deploy-core          - Deploy core contracts using the specified network"
	@echo "  deploy-market        - Deploy market contracts using the specified network"
	@echo "  deploy-verify-core   - Deploy and verify core contracts using the specified network"
	@echo "  deploy-verify-market - Deploy and verify market contracts using the specified network"
	@echo "  compile              - Compile the contracts"
	@echo "  test                 - Run tests"
	@echo "  lint                 - Lint the code"
	@echo "  help                 - Display this help information"
	