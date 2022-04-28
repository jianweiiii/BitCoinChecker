const currencies = [
    {
        "id": "SOL",
        "name": "Solana",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.000000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 31,
            "sort_order": 31,
            "crypto_address_link": "https://explorer.solana.com/address/{{address}}",
            "crypto_transaction_link": "https://explorer.solana.com/tx/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.05,
            "max_withdrawal_amount": 19066
        }
    },
    {
        "id": "REP",
        "name": "Augur",
        "min_size": "0.000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 85,
            "crypto_address_link": "https://etherscan.io/token/0x1985365e9f78359a9B6AD760e32412f4a445E862?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 4800
        }
    },
    {
        "id": "SKL",
        "name": "SKALE",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 360,
            "crypto_address_link": "https://etherscan.io/token/0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 55,
            "max_withdrawal_amount": 770000
        }
    },
    {
        "id": "MKR",
        "name": "Maker",
        "min_size": "0.001",
        "status": "online",
        "message": "",
        "max_precision": "0.00001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 49,
            "crypto_address_link": "https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2?a={{address}}",
            "crypto_transaction_link": "",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.00001,
            "max_withdrawal_amount": 1800
        }
    },
    {
        "id": "GYEN",
        "name": "GYEN",
        "min_size": "0.000001",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 1015,
            "crypto_address_link": "https://etherscan.io/token/0xc08512927d12348f6620a698105e1baac6ecd911?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.000001,
            "max_withdrawal_amount": 120000000
        }
    },
    {
        "id": "GNT",
        "name": "Golem",
        "min_size": "1",
        "status": "delisted",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": "Ξ",
            "network_confirmations": 35,
            "sort_order": 105,
            "crypto_address_link": "https://etherscan.io/token/0xa74476443119A942dE498590Fe1f2454d7D4aC0d?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 423000
        }
    },
    {
        "id": "EOS",
        "name": "EOS",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.0001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": "",
            "network_confirmations": null,
            "sort_order": 45,
            "crypto_address_link": "https://www.eosx.io/account/{{address}}",
            "crypto_transaction_link": "https://www.eosx.io/tx/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": 360,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 50900
        }
    },
    {
        "id": "SUSHI",
        "name": "SushiSwap",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 340,
            "crypto_address_link": "https://etherscan.io/token/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 141000
        }
    },
    {
        "id": "CRV",
        "name": "Curve DAO Token",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 420,
            "crypto_address_link": "https://etherscan.io/token/0xd533a949740bb3306d119cc777fa900ba034cd52?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 6.3,
            "max_withdrawal_amount": 412000
        }
    },
    {
        "id": "POLY",
        "name": "Polymath Network",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 219,
            "crypto_address_link": "https://etherscan.io/token/0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 1505852
        }
    },
    {
        "id": "ASM",
        "name": "Assemble Protocol",
        "min_size": "10",
        "status": "online",
        "message": "",
        "max_precision": "1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 600,
            "crypto_address_link": "https://etherscan.io/token/0x2565ae0385659badcada1031db704442e1b69982?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 4380000
        }
    },
    {
        "id": "GBP",
        "name": "British Pound",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "fiat",
            "symbol": "£",
            "network_confirmations": null,
            "sort_order": 3,
            "crypto_address_link": null,
            "crypto_transaction_link": null,
            "push_payment_methods": [
                "uk_bank_account",
                "swift_lhv",
                "swift"
            ],
            "group_types": [
                "fiat",
                "gbp"
            ],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": null,
            "max_withdrawal_amount": null
        }
    },
    {
        "id": "SHPING",
        "name": "Shping",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 1457,
            "crypto_address_link": "https://etherscan.io/token/0x7c84e62859d0715eb77d1b1c4154ecd6abb21bec?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 104160000
        }
    },
    {
        "id": "KNC",
        "name": "Kyber Network",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": "Ξ",
            "network_confirmations": 14,
            "sort_order": 120,
            "crypto_address_link": "https://etherscan.io/token/0xdd974d5c2e2928dea5f71b9825b8b646686bd200?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 121000
        }
    },
    {
        "id": "ACH",
        "name": "Alchemy Pay",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 1356,
            "crypto_address_link": "https://etherscan.io/token/0xed04915c23f00a313a544955524eb7dbd823143d?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 29000000
        }
    },
    {
        "id": "USDT",
        "name": "Tether",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 26,
            "crypto_address_link": "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7?a={{address}}",
            "crypto_transaction_link": null,
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 13,
            "max_withdrawal_amount": 10000000
        }
    },
    {
        "id": "ADA",
        "name": "Cardano",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 10,
            "sort_order": 28,
            "crypto_address_link": "https://explorer.cardano.org/en/address?address={{address}}",
            "crypto_transaction_link": "",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 570000
        }
    },
    {
        "id": "POLS",
        "name": "Polkastarter",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 309,
            "crypto_address_link": "https://etherscan.io/token/0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 40000
        }
    },
    {
        "id": "BTC",
        "name": "Bitcoin",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": "₿",
            "network_confirmations": 2,
            "sort_order": 20,
            "crypto_address_link": "https://live.blockcypher.com/btc/address/{{address}}",
            "crypto_transaction_link": "https://live.blockcypher.com/btc/tx/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [
                "btc",
                "crypto"
            ],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.0001,
            "max_withdrawal_amount": 2400
        }
    },
    {
        "id": "GTC",
        "name": "Gitcoin",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 360,
            "crypto_address_link": "https://etherscan.io/token/0xde30da39c46104798bb5aa3fe8b9e0e1f348163f?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 20700
        }
    },
    {
        "id": "GLM",
        "name": "Golem Network",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 500,
            "crypto_address_link": "https://etherscan.io/token/0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 208334
        }
    },
    {
        "id": "XYO",
        "name": "XYO",
        "min_size": "100",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 413,
            "crypto_address_link": "https://etherscan.io/token/0x55296f69f40ea6d20e478533c15a6b08b654e758?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 13880000
        }
    },
    {
        "id": "ALCX",
        "name": "Alchemix",
        "min_size": "0.0001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 242,
            "crypto_address_link": "https://etherscan.io/token/0xdbdb4d16eda451d0503b854cf79d55697f90c8df?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 307
        }
    },
    {
        "id": "MUSD",
        "name": "mStable USD",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 442,
            "crypto_address_link": "https://etherscan.io/token/0xe2f2a5c287993345a840db3b0845fbc70f5935a5?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 130000
        }
    },
    {
        "id": "ENS",
        "name": "Ethereum Name Service",
        "min_size": "0.001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 129,
            "crypto_address_link": "https://etherscan.io/token/0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 4000
        }
    },
    {
        "id": "SPELL",
        "name": "Spell Token",
        "min_size": "10",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 132,
            "crypto_address_link": "https://etherscan.io/token/0x090185f2135308bad17527004364ebcc2d37e5f6?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 4070000
        }
    },
    {
        "id": "MATIC",
        "name": "Polygon",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 350,
            "crypto_address_link": "https://etherscan.io/token/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 1160000
        }
    },
    {
        "id": "PRO",
        "name": "Propy",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 372,
            "crypto_address_link": "https://etherscan.io/token/0x226bb599a12c826476e3a771454697ea52e9e220?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 76220
        }
    },
    {
        "id": "CVC",
        "name": "Civic",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": "Ξ",
            "network_confirmations": 14,
            "sort_order": 125,
            "crypto_address_link": "https://etherscan.io/token/0x41e5560054824ea6b0732e656e3ad64e20e94e45?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 1130000
        }
    },
    {
        "id": "UNI",
        "name": "Uniswap",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 220,
            "crypto_address_link": "https://etherscan.io/token/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 34000
        }
    },
    {
        "id": "BTRST",
        "name": "Braintrust",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 421,
            "crypto_address_link": "https://etherscan.io/token/0x799ebfABE77a6E34311eeEe9825190B9ECe32824?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 125000
        }
    },
    {
        "id": "TRAC",
        "name": "OriginTrail",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.0001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 279,
            "crypto_address_link": "https://etherscan.io/token/0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.0001,
            "max_withdrawal_amount": 284091
        }
    },
    {
        "id": "FOX",
        "name": "ShapeShift FOX Token",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 675,
            "crypto_address_link": "https://etherscan.io/token/0xc770eefad204b5180df6a14ee197d99d808ee52d?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 370000
        }
    },
    {
        "id": "COMP",
        "name": "Compound",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 140,
            "crypto_address_link": "https://etherscan.io/token/0xc00e94cb662c3520282e6f5717214004a7f26888?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 8700
        }
    },
    {
        "id": "AERGO",
        "name": "Aergo",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 500,
            "crypto_address_link": "https://etherscan.io/token/0x91af0fbb28aba7e31403cb457106ce79397fd4e6?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 590000
        }
    },
    {
        "id": "DAI",
        "name": "Dai",
        "min_size": "0.00001",
        "status": "online",
        "message": "",
        "max_precision": "0.00001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 100,
            "crypto_address_link": "https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 1130000
        }
    },
    {
        "id": "SNT",
        "name": "Status",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 500,
            "crypto_address_link": "https://etherscan.io/token/0x744d70FDBE2Ba4CF95131626614a1763DF805B9E?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 1938000
        }
    },
    {
        "id": "GRT",
        "name": "The Graph",
        "min_size": "10",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 290,
            "crypto_address_link": "https://etherscan.io/token/0x0d67f3e4bcbd2d6b7a90150c73bdf9ffc6b6de9b?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 20,
            "max_withdrawal_amount": 835000
        }
    },
    {
        "id": "REQ",
        "name": "Request",
        "min_size": "10",
        "status": "online",
        "message": "",
        "max_precision": "1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 469,
            "crypto_address_link": "https://etherscan.io/token/0x8f8221afbb33998d8584a2b05749ba73c37a938a?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 699496
        }
    },
    {
        "id": "MDT",
        "name": "Measurable Data Token",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 905,
            "crypto_address_link": "https://etherscan.io/token/0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 2770000
        }
    },
    {
        "id": "DIA",
        "name": "DIA",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 542,
            "crypto_address_link": "https://etherscan.io/token/0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 66489
        }
    },
    {
        "id": "RNDR",
        "name": "Render Token",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 500,
            "crypto_address_link": "https://etherscan.io/token/0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 180000
        }
    },
    {
        "id": "MASK",
        "name": "Mask Network",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 387,
            "crypto_address_link": "https://etherscan.io/token/0x69af81e73a73b40adf4f3d4223cd9b1ece623074?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 33069
        }
    },
    {
        "id": "REN",
        "name": "Ren",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 225,
            "crypto_address_link": "https://etherscan.io/token/0x408e41876cccdc0f92210600ef50372656052a38?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 31,
            "max_withdrawal_amount": 590000
        }
    },
    {
        "id": "CRO",
        "name": "Crypto.com Coin",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 75,
            "crypto_address_link": "https://etherscan.io/token/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 660000
        }
    },
    {
        "id": "LINK",
        "name": "Chainlink",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": "Ξ",
            "network_confirmations": 14,
            "sort_order": 67,
            "crypto_address_link": "https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 136000
        }
    },
    {
        "id": "LPT",
        "name": "Livepeer",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 106,
            "crypto_address_link": "https://etherscan.io/token/0x58b6a8a3302369daec383334672404ee733ab239?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 50000
        }
    },
    {
        "id": "BAL",
        "name": "Balancer",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 230,
            "crypto_address_link": "https://etherscan.io/token/0xba100000625a3754423978a60c9317c58a424e3D?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.38,
            "max_withdrawal_amount": 6500
        }
    },
    {
        "id": "MPL",
        "name": "Maple",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 542,
            "crypto_address_link": "https://etherscan.io/token/0x33349b282065b0284d756f0577fb39c158f935e6?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 66489
        }
    },
    {
        "id": "MIR",
        "name": "Mirror Protocol",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 144,
            "crypto_address_link": "https://etherscan.io/token/0x09a3EcAFa817268f77BE1283176B946C4ff2E608?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1.55,
            "max_withdrawal_amount": 51000
        }
    },
    {
        "id": "NCT",
        "name": "Polyswarm",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 1084,
            "crypto_address_link": "https://etherscan.io/token/0x9e46a38f5daabe8683e10793b06749eef7d733d1?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 4901961
        }
    },
    {
        "id": "WCFG",
        "name": "Wrapped Centrifuge",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 352,
            "crypto_address_link": "https://etherscan.io/token/0xc221b7e65ffc80de234bbb6667abdd46593d34f0?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 35920
        }
    },
    {
        "id": "TBTC",
        "name": "TBTC",
        "min_size": "0.00001",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 35,
            "sort_order": 634,
            "crypto_address_link": "https://etherscan.io/token/0x8daebade922df735c38c80c7ebd708af50815faa?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.000001,
            "max_withdrawal_amount": 1
        }
    },
    {
        "id": "ETC",
        "name": "Ether Classic",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 3000,
            "sort_order": 55,
            "crypto_address_link": "https://gastracker.io/addr/{{address}}",
            "crypto_transaction_link": "https://gastracker.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 15350
        }
    },
    {
        "id": "DOGE",
        "name": "Dogecoin",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 60,
            "sort_order": 29,
            "crypto_address_link": "https://dogechain.info/address/{{address}}",
            "crypto_transaction_link": null,
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 17391300
        }
    },
    {
        "id": "UMA",
        "name": "UMA",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 205,
            "crypto_address_link": "https://etherscan.io/token/0x7f08962d948c5c59cac284035748be21134ebc2b?a={{address}}",
            "crypto_transaction_link": null,
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.07,
            "max_withdrawal_amount": 21000
        }
    },
    {
        "id": "CHZ",
        "name": "Chiliz",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 73,
            "crypto_address_link": "https://etherscan.io/token/0x3506424f91fd33084466f402d5d97f05f8e3b4af?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 890000
        }
    },
    {
        "id": "DOT",
        "name": "Polkadot",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 10,
            "sort_order": 30,
            "crypto_address_link": "https://polkascan.io/polkadot/account/{{address}}",
            "crypto_transaction_link": "https://polkascan.io/polkadot/balances/transfer/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1.03,
            "max_withdrawal_amount": 14000
        }
    },
    {
        "id": "ZRX",
        "name": "0x",
        "min_size": "0.00001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 90,
            "crypto_address_link": "https://etherscan.io/token/0xe41d2489571d322189246dafa5ebde1f4699f498?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 600000
        }
    },
    {
        "id": "1INCH",
        "name": "1Inch",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 107,
            "crypto_address_link": "https://etherscan.io/token/0x111111111117dc0aa78b770fa6a738034120c302?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 3.33,
            "max_withdrawal_amount": 68000
        }
    },
    {
        "id": "LQTY",
        "name": "Liquity",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 480,
            "crypto_address_link": "https://etherscan.io/token/0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 28736
        }
    },
    {
        "id": "AXS",
        "name": "Axie Infinity",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 54,
            "crypto_address_link": "https://etherscan.io/token/0xbb0e17ef65f82ab018d8edd776e8dd940327b28b?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 15177
        }
    },
    {
        "id": "DNT",
        "name": "district0x",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 130,
            "crypto_address_link": "https://etherscan.io/token/0x0abdace70d3790235af448c88547603b945604ea?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 1400000
        }
    },
    {
        "id": "DDX",
        "name": "DerivaDAO",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 372,
            "crypto_address_link": "https://etherscan.io/token/0x3a880652f47bfaa771908c07dd8673a787daed3a?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 31250
        }
    },
    {
        "id": "IDEX",
        "name": "IDEX",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 338,
            "crypto_address_link": "https://etherscan.io/token/0xb705268213d593b8fd88d3fdeff93aff5cbdcfae?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 480000
        }
    },
    {
        "id": "ORCA",
        "name": "Orca",
        "min_size": "0.000001",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 31,
            "sort_order": 448,
            "crypto_address_link": "https://explorer.solana.com/address/{{address}}",
            "crypto_transaction_link": "https://explorer.solana.com/tx/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 10000
        }
    },
    {
        "id": "AVT",
        "name": "Aventus",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 950,
            "crypto_address_link": "https://etherscan.io/token/0x0d88eD6E74bbFD96B831231638b66C05571e824F?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 55000
        }
    },
    {
        "id": "JASMY",
        "name": "JasmyCoin",
        "min_size": "10",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 520,
            "crypto_address_link": "https://etherscan.io/token/0x7420b4b9a0110cdc71fb720908340c03f9bc03ec?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 5000000
        }
    },
    {
        "id": "BAT",
        "name": "Basic Attention Token",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 70,
            "crypto_address_link": "https://etherscan.io/token/0x0d8775f648430679a709e98d2b0cb6250d2887ef?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 477000
        }
    },
    {
        "id": "BAND",
        "name": "Band Protocol",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 160,
            "crypto_address_link": "https://etherscan.io/token/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.2,
            "max_withdrawal_amount": 19000
        }
    },
    {
        "id": "AIOZ",
        "name": "Aioz Network",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 500,
            "crypto_address_link": "https://etherscan.io/token/0x626e8036deb333b408be468f951bdb42433cbf18?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 220000
        }
    },
    {
        "id": "SHIB",
        "name": "Shiba Inu",
        "min_size": "100000",
        "status": "online",
        "message": "",
        "max_precision": "1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 30,
            "crypto_address_link": "https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 13213531000
        }
    },
    {
        "id": "POWR",
        "name": "Power Ledger",
        "min_size": "0.000001",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 395,
            "crypto_address_link": "https://etherscan.io/token/0x595832f8fc6bf59c85c527fec3740a1b7a361269?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.000001,
            "max_withdrawal_amount": 320000
        }
    },
    {
        "id": "FIDA",
        "name": "Bonfida",
        "min_size": "0.000001",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 31,
            "sort_order": 218,
            "crypto_address_link": "https://explorer.solana.com/address/{{address}}",
            "crypto_transaction_link": "https://explorer.solana.com/tx/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 20000
        }
    },
    {
        "id": "SUPER",
        "name": "SuperFarm",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 198,
            "crypto_address_link": "https://etherscan.io/token/0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 90000
        }
    },
    {
        "id": "RLC",
        "name": "iExec RLC",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 288,
            "crypto_address_link": "https://etherscan.io/token/0x607F4C5BB672230e8672085532f7e901544a7375?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 6.23,
            "max_withdrawal_amount": 175000
        }
    },
    {
        "id": "BCH",
        "name": "Bitcoin Cash",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": "₿",
            "network_confirmations": 12,
            "sort_order": 40,
            "crypto_address_link": "https://blockchair.com/bitcoin-cash/address/{{address}}",
            "crypto_transaction_link": "https://blockchair.com/bitcoin-cash/transaction/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.00001,
            "max_withdrawal_amount": 10600
        }
    },
    {
        "id": "SYN",
        "name": "Synapse",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 500,
            "crypto_address_link": "https://etherscan.io/token/0x0f2d719407fdbeff09d87557abb7232601fd9f29?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 60000
        }
    },
    {
        "id": "RGT",
        "name": "Rari Governance Token",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 429,
            "crypto_address_link": "https://etherscan.io/token/0xd291e7a03283640fdc51b121ac401383a46cc623?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 13000
        }
    },
    {
        "id": "ETH",
        "name": "Ether",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 25,
            "crypto_address_link": "https://etherscan.io/address/{{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 14900
        }
    },
    {
        "id": "TRIBE",
        "name": "Tribe",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 176,
            "crypto_address_link": "https://etherscan.io/token/0xc7283b66eb1eb5fb86327f08e1b5816b0720212b?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 204918
        }
    },
    {
        "id": "STORJ",
        "name": "Storj",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 440,
            "crypto_address_link": "https://etherscan.io/token/0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 20,
            "max_withdrawal_amount": 162000
        }
    },
    {
        "id": "HIGH",
        "name": "Highstreet",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 500,
            "crypto_address_link": "https://etherscan.io/token/0x71Ab77b7dbB4fa7e017BC15090b2163221420282?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 12000
        }
    },
    {
        "id": "NMR",
        "name": "Numeraire",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 170,
            "crypto_address_link": "https://etherscan.io/token/0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 5000
        }
    },
    {
        "id": "YFII",
        "name": "DFI.Money",
        "min_size": "0.0001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 245,
            "crypto_address_link": "https://etherscan.io/token/0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 31
        }
    },
    {
        "id": "RAI",
        "name": "Rai Reflex Index",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 550,
            "crypto_address_link": "https://etherscan.io/token/0x03ab458634910aad20ef5f1c8ee96f1d6ac54919?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 41000
        }
    },
    {
        "id": "SNX",
        "name": "Synthetix",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 320,
            "crypto_address_link": "https://etherscan.io/token/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1.5,
            "max_withdrawal_amount": 36000
        }
    },
    {
        "id": "KEEP",
        "name": "Keep Network",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 266,
            "crypto_address_link": "https://etherscan.io/token/0x85eee30c52b0b379b046fb0f85f4f3dc3009afec?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 446000
        }
    },
    {
        "id": "UST",
        "name": "TerraUSD",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 59,
            "crypto_address_link": "https://etherscan.io/token/0xa47c8bf37f92abed4a126bda807a7b7498661acd?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 250000
        }
    },
    {
        "id": "TRB",
        "name": "Tellor",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 373,
            "crypto_address_link": "https://etherscan.io/token/0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.17,
            "max_withdrawal_amount": 3300
        }
    },
    {
        "id": "BLZ",
        "name": "Bluzelle",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 511,
            "crypto_address_link": "https://etherscan.io/token/0x5732046a883704404f284ce41ffadd5b007fd668?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 450000
        }
    },
    {
        "id": "EUR",
        "name": "Euro",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "fiat",
            "symbol": "€",
            "network_confirmations": null,
            "sort_order": 2,
            "crypto_address_link": null,
            "crypto_transaction_link": null,
            "push_payment_methods": [
                "sepa_bank_account"
            ],
            "group_types": [
                "fiat",
                "eur"
            ],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": null,
            "max_withdrawal_amount": null
        }
    },
    {
        "id": "AMP",
        "name": "Amp",
        "min_size": "10",
        "status": "online",
        "message": "",
        "max_precision": "1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 65,
            "crypto_address_link": "https://etherscan.io/token/0xff20817765cb7f73d4bde2e66e067e58d11095c2?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 4170000
        }
    },
    {
        "id": "ERN",
        "name": "Ethernity Chain",
        "min_size": "0.001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 375,
            "crypto_address_link": "https://etherscan.io/token/0xbbc2ae13b23d715c30720f079fcd9b4a74093505?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 8000
        }
    },
    {
        "id": "AUCTION",
        "name": "Bounce Token",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 303,
            "crypto_address_link": "https://etherscan.io/token/0xa9b1eb5908cfc3cdf91f9b8b3a74108598009096?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 8000
        }
    },
    {
        "id": "FX",
        "name": "Function X",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 212,
            "crypto_address_link": "https://etherscan.io/token/0x8c15ef5b4b21951d50e53e4fbda8298ffad25057?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 176800
        }
    },
    {
        "id": "BICO",
        "name": "Biconomy",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 500,
            "crypto_address_link": "https://etherscan.io/token/0xF17e65822b568B3903685a7c9F496CF7656Cc6C2?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 500000
        }
    },
    {
        "id": "OGN",
        "name": "Origin Token",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 161,
            "crypto_address_link": "https://etherscan.io/token/0x8207c1ffc5b6804f6024322ccf34f29c3541ae26?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 15.26,
            "max_withdrawal_amount": 368000
        }
    },
    {
        "id": "XRP",
        "name": "XRP",
        "min_size": "1",
        "status": "delisted",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": "$",
            "network_confirmations": null,
            "sort_order": 30,
            "crypto_address_link": "https://bithomp.com/explorer/{{address}}",
            "crypto_transaction_link": "https://bithomp.com/explorer/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": 600,
            "min_withdrawal_amount": 22,
            "max_withdrawal_amount": 130000
        }
    },
    {
        "id": "WLUNA",
        "name": "Wrapped Luna",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 550,
            "crypto_address_link": "https://etherscan.io/token/0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 7336
        }
    },
    {
        "id": "FIL",
        "name": "Filecoin",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 60,
            "sort_order": 250,
            "crypto_address_link": "https://filfox.info/en/address/{{address}}",
            "crypto_transaction_link": "https://filfox.info/en/message/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.2,
            "max_withdrawal_amount": 4000
        }
    },
    {
        "id": "MLN",
        "name": "Enzyme",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 313,
            "crypto_address_link": "https://etherscan.io/token/0xec67005c4e498ec7f55e092bd1d35cbc47c91892?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 1500
        }
    },
    {
        "id": "OXT",
        "name": "Orchid",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 48,
            "crypto_address_link": "https://etherscan.io/token/0x4575f41308EC1483f3d399aa9a2826d74Da13Deb?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 1250000
        }
    },
    {
        "id": "CGLD",
        "name": "Celo",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 4,
            "sort_order": 200,
            "crypto_address_link": "https://explorer.celo.org/address/{{address}}",
            "crypto_transaction_link": "https://explorer.celo.org/tx/{{txId}}/token_transfers",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 180000
        }
    },
    {
        "id": "BADGER",
        "name": "Badger DAO",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 288,
            "crypto_address_link": "https://etherscan.io/token/0x3472a5a71965499acd81997a54bba8d852c6e53d?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 5000
        }
    },
    {
        "id": "UPI",
        "name": "Pawtocol",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 1456,
            "crypto_address_link": "https://etherscan.io/token/0x70d2b7c19352bb76e4409858ff5746e500f2b67c?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 5580357
        }
    },
    {
        "id": "RARI",
        "name": "Rarible",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 400,
            "crypto_address_link": "https://etherscan.io/token/0xfca59cd816ab1ead66534d82bc21e7515ce441cf?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 6050
        }
    },
    {
        "id": "ENJ",
        "name": "Enjin Coin",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 50,
            "crypto_address_link": "https://etherscan.io/token/0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 5.89,
            "max_withdrawal_amount": 243000
        }
    },
    {
        "id": "ALGO",
        "name": "Algorand",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": "A",
            "network_confirmations": 1,
            "sort_order": 93,
            "crypto_address_link": "https://algoexplorer.io/address/{{address}}",
            "crypto_transaction_link": "https://algoexplorer.io/tx/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": 5,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 700000
        }
    },
    {
        "id": "NU",
        "name": "NuCypher",
        "min_size": "10",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 240,
            "crypto_address_link": "https://etherscan.io/token/0x4fe83213d56308330ec302a8bd641f1d0113a4cc?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 43.3,
            "max_withdrawal_amount": 2180000
        }
    },
    {
        "id": "APE",
        "name": "ApeCoin",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 500,
            "crypto_address_link": "https://etherscan.io/token/0x4d224452801aced8b2f0aebe155379bb5d594381?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 31000
        }
    },
    {
        "id": "ANKR",
        "name": "Ankr",
        "min_size": "10",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 400,
            "crypto_address_link": "https://etherscan.io/token/0x8290333cef9e6d528dd5618fb97a76f268f3edd4?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 520,
            "max_withdrawal_amount": 5000000
        }
    },
    {
        "id": "XTZ",
        "name": "Tezos",
        "min_size": "0.000001",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 0,
            "sort_order": 30,
            "crypto_address_link": "https://bithomp.com/explorer/{{address}}",
            "crypto_transaction_link": "",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 100000
        }
    },
    {
        "id": "API3",
        "name": "API3",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 332,
            "crypto_address_link": "https://etherscan.io/token/0x0b38210ea11411557c13457D4dA7dC6ea731B88a?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 38820
        }
    },
    {
        "id": "SUKU",
        "name": "SUKU",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 546,
            "crypto_address_link": "https://etherscan.io/token/0x0763fdccf1ae541a5961815c0872a8c5bc6de4d7?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 500000
        }
    },
    {
        "id": "QSP",
        "name": "Quantstamp",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 500,
            "crypto_address_link": "https://etherscan.io/token/0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 2615000
        }
    },
    {
        "id": "PLA",
        "name": "PlayDapp",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 1500,
            "crypto_address_link": "https://etherscan.io/token/0x3a4f40631a4f906c2bad353ed06de7a5d3fcb430?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 260000
        }
    },
    {
        "id": "KRL",
        "name": "kryll",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.0001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 826,
            "crypto_address_link": "https://etherscan.io/token/0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.0001,
            "max_withdrawal_amount": 534874
        }
    },
    {
        "id": "NKN",
        "name": "NKN",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 308,
            "crypto_address_link": "https://etherscan.io/token/0x5cf04716ba20127f1e2297addcf4b5035000c9eb?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 77,
            "max_withdrawal_amount": 975000
        }
    },
    {
        "id": "BUSD",
        "name": "Binance USD",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 500,
            "crypto_address_link": "https://etherscan.io/token/0x4fabb145d64652a948d72533023f6e7a623c7c53?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 125000
        }
    },
    {
        "id": "ROSE",
        "name": "Oasis Network",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 0,
            "sort_order": 500,
            "crypto_address_link": "https://www.oasisscan.com/accounts/detail/{{address}}",
            "crypto_transaction_link": "https://oasisscan.com/transactions/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 3000000
        }
    },
    {
        "id": "VGX",
        "name": "Voyager Token",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 128,
            "crypto_address_link": "https://etherscan.io/token/0x3c4b6e6e1ea3d4863700d7f76b36b7f3d3f13e3d?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 50000
        }
    },
    {
        "id": "UNFI",
        "name": "Unifi Protocol DAO",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 711,
            "crypto_address_link": "https://etherscan.io/token/0x441761326490cacf7af299725b6292597ee822c2?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 9300
        }
    },
    {
        "id": "QNT",
        "name": "Quant",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 80,
            "crypto_address_link": "https://etherscan.io/token/0x4a220e6096b25eadb88358cb44068a3248254675?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 2500
        }
    },
    {
        "id": "XLM",
        "name": "Stellar",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.0000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 0,
            "sort_order": 50,
            "crypto_address_link": "https://stellar.expert/explorer/public/account/{{address}}",
            "crypto_transaction_link": "https://stellar.expert/explorer/public/tx/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 2,
            "max_withdrawal_amount": 5240000
        }
    },
    {
        "id": "GALA",
        "name": "Gala",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 167,
            "crypto_address_link": "https://etherscan.io/token/0x15d4c048f83bd7e37d49ea4c83a07267ec4203da?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 1260000
        }
    },
    {
        "id": "INV",
        "name": "Inverse Finance",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 789,
            "crypto_address_link": "https://etherscan.io/token/0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 190
        }
    },
    {
        "id": "ZEC",
        "name": "Zcash",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": "ᙇ",
            "network_confirmations": 24,
            "sort_order": 65,
            "crypto_address_link": "https://zcash.blockexplorer.com/address/{{address}}",
            "crypto_transaction_link": "https://zcash.blockexplorer.com/tx/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.00001,
            "max_withdrawal_amount": 15600
        }
    },
    {
        "id": "YFI",
        "name": "yearn.finance",
        "min_size": "0.00001",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 215,
            "crypto_address_link": "https://etherscan.io/token/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.0002,
            "max_withdrawal_amount": 20
        }
    },
    {
        "id": "LCX",
        "name": "LCX Token",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.0001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 507,
            "crypto_address_link": "https://etherscan.io/token/0x037a54aab062628c9bbae1fdb1583c195585fe41?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.0001,
            "max_withdrawal_amount": 180000
        }
    },
    {
        "id": "GODS",
        "name": "Gods Unchained",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 331,
            "crypto_address_link": "https://etherscan.io/token/0xccc8cb5229b0ac8069c51fd58367fd1e622afd97?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 29000
        }
    },
    {
        "id": "DESO",
        "name": "Decentralized Social",
        "min_size": "0.000001",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 6,
            "sort_order": 130,
            "crypto_address_link": "https://explorer.deso.org/?public-key={{address}}",
            "crypto_transaction_link": "https://explorer.deso.org/?transaction-id={{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.02,
            "max_withdrawal_amount": 15000
        }
    },
    {
        "id": "RBN",
        "name": "Ribbon Finance",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 544,
            "crypto_address_link": "https://etherscan.io/token/0x6123b0049f904d730db3c36a31167d9d4121fa6b?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 50000
        }
    },
    {
        "id": "ORN",
        "name": "Orion Protocol",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 230,
            "crypto_address_link": "https://etherscan.io/token/0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 21259
        }
    },
    {
        "id": "DASH",
        "name": "Dash",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 2,
            "sort_order": 47,
            "crypto_address_link": "https://chain.so/address/DASH/{{address}}",
            "crypto_transaction_link": "https://chain.so/tx/DASH/{{address}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.0001,
            "max_withdrawal_amount": 5900
        }
    },
    {
        "id": "OMG",
        "name": "OMG Network",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 57,
            "crypto_address_link": "https://etherscan.io/token/0xd26114cd6EE289AccF82350c8d8487fedB8A0C07?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 69000
        }
    },
    {
        "id": "MCO2",
        "name": "Moss Carbon Credit",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 3655,
            "crypto_address_link": "https://etherscan.io/token/0xfc98e825a2264d890f9a1e68ed50e1526abccacd?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 10000
        }
    },
    {
        "id": "RAD",
        "name": "Radicle",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 240,
            "crypto_address_link": "https://etherscan.io/token/0x31c8eacbffdd875c74b94b077895bd78cf1e64a3?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 17000
        }
    },
    {
        "id": "CTX",
        "name": "Cryptex Finance",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 552,
            "crypto_address_link": "https://etherscan.io/token/0x321c2fe4446c7c963dc41dd58879af648838f98d?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 5992
        }
    },
    {
        "id": "LTC",
        "name": "Litecoin",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": "Ł",
            "network_confirmations": 6,
            "sort_order": 35,
            "crypto_address_link": "https://live.blockcypher.com/ltc/address/{{address}}",
            "crypto_transaction_link": "https://live.blockcypher.com/ltc/tx/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 54400
        }
    },
    {
        "id": "FARM",
        "name": "Harvest Finance",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 509,
            "crypto_address_link": "https://etherscan.io/token/0xa0246c9032bc3a600820415ae600c6388619a14d?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 2500
        }
    },
    {
        "id": "STX",
        "name": "Stacks",
        "min_size": "0.000001",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 3,
            "sort_order": 75,
            "crypto_address_link": "https://explorer.stacks.co/address/{{address}}",
            "crypto_transaction_link": "https://explorer.stacks.co/txid/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 125000
        }
    },
    {
        "id": "MINA",
        "name": "Mina",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 15,
            "sort_order": 500,
            "crypto_address_link": "https://minaexplorer.com/wallet/{{address}}",
            "crypto_transaction_link": "https://minaexplorer.com/transaction/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 165929
        }
    },
    {
        "id": "IOTX",
        "name": "IoTeX (ERC-20)",
        "min_size": "10",
        "status": "online",
        "message": "",
        "max_precision": "1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 197,
            "crypto_address_link": "https://etherscan.io/token/0x6fb3e0a217407efff7ca062d46c26e5d60a14d69?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 6544503
        }
    },
    {
        "id": "RLY",
        "name": "Rally",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 304,
            "crypto_address_link": "https://etherscan.io/token/0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1,
            "max_withdrawal_amount": 117500
        }
    },
    {
        "id": "CLV",
        "name": "Clover Finance",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 212,
            "crypto_address_link": "https://etherscan.io/token/0x80c62fe4487e1351b47ba49809ebd60ed085bf52?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 100000
        }
    },
    {
        "id": "MANA",
        "name": "Decentraland",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 110,
            "crypto_address_link": "https://etherscan.io/token/0x0f5d2fb29fb7d3cfee444a200298f468908cc942?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 700000
        }
    },
    {
        "id": "AAVE",
        "name": "Aave",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 270,
            "crypto_address_link": "https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.07,
            "max_withdrawal_amount": 7000
        }
    },
    {
        "id": "FORTH",
        "name": "Ampleforth Governance Token",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 208,
            "crypto_address_link": "https://etherscan.io/token/0x77fba179c79de5b7653f68b5039af940ada60ce0?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.86,
            "max_withdrawal_amount": 7000
        }
    },
    {
        "id": "BOND",
        "name": "BarnBridge",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 253,
            "crypto_address_link": "https://etherscan.io/token/0x0391d2021f89dc339f60fff84546ea23e337750f?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 2500
        }
    },
    {
        "id": "QUICK",
        "name": "QuickSwap",
        "min_size": "0.001",
        "status": "online",
        "message": "",
        "max_precision": "0.0001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 463,
            "crypto_address_link": "https://etherscan.io/token/0x6c28aef8977c9b773996d0e8376d2ee379446f2f?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.0001,
            "max_withdrawal_amount": 365
        }
    },
    {
        "id": "TRU",
        "name": "TrueFi",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 248,
            "crypto_address_link": "https://etherscan.io/token/0x4c19596f5aaff459fa38b0f7ed92f11ae6543784?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 189365
        }
    },
    {
        "id": "AVAX",
        "name": "Avalanche",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 1,
            "sort_order": 30,
            "crypto_address_link": "https://cchain.explorer.avax.network/address/{{address}}/transactions",
            "crypto_transaction_link": "https://cchain.explorer.avax.network/tx/{{txId}}/token-transfers",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 7750
        }
    },
    {
        "id": "ATOM",
        "name": "Cosmos",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": null,
            "sort_order": 51,
            "crypto_address_link": "https://cosmos.bigdipper.live/account/{{address}}",
            "crypto_transaction_link": "https://cosmos.bigdipper.live/transactions/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": 5,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 302000
        }
    },
    {
        "id": "WBTC",
        "name": "Wrapped Bitcoin",
        "min_size": "0.0001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 230,
            "crypto_address_link": "https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.00054,
            "max_withdrawal_amount": 40
        }
    },
    {
        "id": "PAX",
        "name": "Paxos Standard",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 76,
            "crypto_address_link": "https://etherscan.io/token/0x8e870d67f660d95d5be530380d0ec0bd388289e1?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 125000
        }
    },
    {
        "id": "USD",
        "name": "United States Dollar",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [
            "USDC"
        ],
        "details": {
            "type": "fiat",
            "symbol": "$",
            "network_confirmations": null,
            "sort_order": 1,
            "crypto_address_link": null,
            "crypto_transaction_link": null,
            "push_payment_methods": [
                "bank_wire",
                "fedwire",
                "swift_bank_account",
                "intra_bank_account"
            ],
            "group_types": [
                "fiat",
                "usd"
            ],
            "display_name": "US Dollar",
            "processing_time_seconds": null,
            "min_withdrawal_amount": null,
            "max_withdrawal_amount": null
        }
    },
    {
        "id": "IMX",
        "name": "ImmutableX",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 117,
            "crypto_address_link": "https://etherscan.io/token/0xf57e7e7c23978c3caec3c3548e3d615c346e79ff?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 23540
        }
    },
    {
        "id": "PLU",
        "name": "Pluton",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 1187,
            "crypto_address_link": "https://etherscan.io/token/0xd8912c10681d8b21fd3742244f44658dba12264e?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": 0,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 18000
        }
    },
    {
        "id": "FET",
        "name": "Fetch.ai",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 202,
            "crypto_address_link": "https://etherscan.io/token/0xaea46a60368a7bd060eec7df8cba43b7ef41ad85?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 522735
        }
    },
    {
        "id": "USDC",
        "name": "USD Coin",
        "min_size": "0.000001",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [
            "USD"
        ],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 80,
            "crypto_address_link": "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 35000000
        }
    },
    {
        "id": "PERP",
        "name": "Perpetual Protocol",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 125,
            "crypto_address_link": "https://etherscan.io/token/0xbc396689893d065f41bc2c6ecbee5e0085233447?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.001,
            "max_withdrawal_amount": 17000
        }
    },
    {
        "id": "GFI",
        "name": "Goldfinch",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 501,
            "crypto_address_link": "https://etherscan.io/token/0xdab396cCF3d84Cf2D07C4454e10C8A6F5b008D2b?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 35710
        }
    },
    {
        "id": "CTSI",
        "name": "Cartesi",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 263,
            "crypto_address_link": "https://etherscan.io/token/0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 23.88,
            "max_withdrawal_amount": 802000
        }
    },
    {
        "id": "COTI",
        "name": "COTI",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 220,
            "crypto_address_link": "https://etherscan.io/token/0xddb3422497e61e13543bea06989c0789117555c5?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 1141553
        }
    },
    {
        "id": "ZEN",
        "name": "Horizen",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 12,
            "sort_order": 98,
            "crypto_address_link": "https://explorer.horizen.global/address/{{address}}",
            "crypto_transaction_link": "https://explorer.horizen.global/tx/{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.02,
            "max_withdrawal_amount": 4354.75
        }
    },
    {
        "id": "COVAL",
        "name": "Circuits of Value",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 944,
            "crypto_address_link": "https://etherscan.io/token/0x3d658390460295fb963f54dc0899cfb1c30776df?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 9630000
        }
    },
    {
        "id": "ARPA",
        "name": "ARPA",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.1",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 487,
            "crypto_address_link": "https://etherscan.io/token/0xba50933c268f567bdc86e1ac131be072c6b0b71a?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.1,
            "max_withdrawal_amount": 3680000
        }
    },
    {
        "id": "AGLD",
        "name": "Adventure Gold",
        "min_size": "0.1",
        "status": "online",
        "message": "",
        "max_precision": "0.01",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 308,
            "crypto_address_link": "https://etherscan.io/token/0x32353a6c91143bfd6c7d363b546e62a9a2489a20?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 100000
        }
    },
    {
        "id": "ALICE",
        "name": "My Neighbor Alice",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 500,
            "crypto_address_link": "https://etherscan.io/token/0xac51066d7bec65dc4589368da368b212745d63e8?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.000001,
            "max_withdrawal_amount": 20000
        }
    },
    {
        "id": "LOOM",
        "name": "Loom Network",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 115,
            "crypto_address_link": "https://etherscan.io/token/0x42476f744292107e34519f9c357927074ea3f75d?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.01,
            "max_withdrawal_amount": 1590000
        }
    },
    {
        "id": "BNT",
        "name": "Bancor",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 300,
            "crypto_address_link": "https://etherscan.io/token/0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 5.87,
            "max_withdrawal_amount": 131000
        }
    },
    {
        "id": "CRPT",
        "name": "Crypterium",
        "min_size": "0.00000001",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 500,
            "crypto_address_link": "https://etherscan.io/token/0x08389495d7456e1951ddf7c3a1314a4bfb646d8b?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 1e-8,
            "max_withdrawal_amount": 1021000
        }
    },
    {
        "id": "LRC",
        "name": "Loopring",
        "min_size": "1",
        "status": "online",
        "message": "",
        "max_precision": "0.00000001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 14,
            "sort_order": 210,
            "crypto_address_link": "https://etherscan.io/token/0xbbbbca6a901c926f240b89eacb641d8aec7aeafd?a={{address}}",
            "crypto_transaction_link": "https://etherscan.io/tx/0x{{txId}}",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 2.6,
            "max_withdrawal_amount": 473000
        }
    },
    {
        "id": "ICP",
        "name": "Internet Computer",
        "min_size": "0.01",
        "status": "online",
        "message": "",
        "max_precision": "0.001",
        "convertible_to": [],
        "details": {
            "type": "crypto",
            "symbol": null,
            "network_confirmations": 0,
            "sort_order": 34,
            "crypto_address_link": "https://dashboard.internetcomputer.org/account/{{address}}",
            "crypto_transaction_link": "",
            "push_payment_methods": [
                "crypto"
            ],
            "group_types": [],
            "display_name": null,
            "processing_time_seconds": null,
            "min_withdrawal_amount": 0.04,
            "max_withdrawal_amount": 27000
        }
    }
]

module.exports = currencies;