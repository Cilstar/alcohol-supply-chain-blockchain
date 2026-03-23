# 🍷 Blockchain Alcohol Supply Chain Tracker

A decentralized Ethereum DApp for tracking alcohol products through the supply chain - from producer to consumer. This MVP enables producers to create product batches, transfer ownership, and allows anyone to verify authenticity on the blockchain.

![Ethereum](https://img.shields.io/badge/Ethereum-Sepolia-blue)
![React](https://img.shields.io/badge/React-18-blue)
![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- **🍸 Create Batch**: Producers can register new alcohol batches on the blockchain
- **🔄 Transfer Ownership**: Move batches through the supply chain (distributor → retailer)
- **🔍 Verify Authenticity**: Anyone can verify a product's authenticity and view its complete history
- **👛 Wallet Integration**: MetaMask wallet connection
- **📜 Immutable History**: Full ownership history stored on Ethereum

---

## 🏗️ Architecture

```
React Frontend (Vite)
        ↓
    Ethers.js
        ↓
Ethereum Smart Contract (Sepolia)
        ↓
   Blockchain Storage
```

---

## 📁 Project Structure

```
alcohol-supply-chain-tracker/
├── contracts/
│   └── AlcoholSupplyChain.sol    # Smart contract
├── src/
│   ├── components/
│   │   └── WalletConnect.jsx     # MetaMask connection
│   ├── contracts/
│   │   ├── AlcoholSupplyChain.json  # Contract ABI
│   │   └── contractUtils.js      # Ethers.js utilities
│   ├── pages/
│   │   ├── CreateBatch.jsx       # Create new batch form
│   │   ├── TransferBatch.jsx    # Transfer ownership form
│   │   └── VerifyBatch.jsx      # Verify authenticity
│   ├── App.jsx                  # Main app with routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Styling
├── index.html
├── package.json
├── vite.config.js
├── DEPLOYMENT.md                # Step-by-step deployment
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MetaMask browser extension
- Sepolia testnet ETH (get free from [Sepolia Faucet](https://sepoliafaucet.com/))

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000

---

## 📖 Usage Guide

### Step 1: Connect Wallet
Click "Connect Wallet" and approve MetaMask connection.

### Step 2: Create a Batch
As a producer:
1. Go to "Create Batch"
2. Enter product details (name, type, ABV, origin)
3. Click "Create Batch"
4. **Save your Batch ID**

### Step 3: Transfer Ownership
As the batch owner:
1. Go to "Transfer"
2. Enter the Batch ID
3. View batch details
4. Enter the new owner's address
5. Confirm the transfer

### Step 4: Verify Authenticity
Anyone can verify:
1. Go to "Verify"
2. Enter a Batch ID
3. View full product details and ownership history

---

## 🔧 Smart Contract Functions

| Function | Description |
|----------|-------------|
| `createBatch()` | Creates a new alcohol batch |
| `transferBatch()` | Transfers ownership to new owner |
| `getBatch()` | Returns full batch details |
| `verifyBatch()` | Checks if batch exists |
| `batchCount()` | Returns total batches |

---

## 🌐 Networks

- **Sepolia Testnet**: Current default (for testing)
- **Ethereum Mainnet**: Requires real ETH (future)

---

## 📝 Demo Script

Here's a suggested demo for presentations:

> "I am a producer creating a whiskey batch"
> - Fill in product details
> - Show MetaMask transaction
> 
> "Now I transfer to distributor"
> - Enter batch ID
> - Show ownership change
> 
> "Now anyone can verify authenticity"
> - Enter batch ID
> - Show blockchain-stored history

---

## 🔐 Security Features

- Only current owner can transfer batches
- All transactions require wallet signature
- Immutable ownership history
- Input validation on smart contract

---

## 🛠️ Technologies

- **Solidity** - Smart contract language
- **React** - Frontend framework
- **Ethers.js** - Ethereum interaction
- **Vite** - Build tool
- **MetaMask** - Wallet integration
- **Sepolia** - Test network

---

## 📄 License

MIT License - see LICENSE file for details

---

## 🙏 Acknowledgments

- OpenZeppelin for smart contract best practices
- Ethereum community for documentation
- Vite team for excellent tooling

---

## 📞 Support

For issues or questions:
1. Check DEPLOYMENT.md for setup help
2. Review smart contract in `/contracts`
3. Check console for error messages

---

**Built with ❤️ for the blockchain community**
