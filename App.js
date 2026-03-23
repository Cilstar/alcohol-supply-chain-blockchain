import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import WalletConnect from './components/WalletConnect';
import CreateBatch from './pages/CreateBatch';
import TransferBatch from './pages/TransferBatch';
import VerifyBatch from './pages/VerifyBatch';

function App() {
  const [account, setAccount] = useState(null);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Create Batch', icon: '➕' },
    { path: '/transfer', label: 'Transfer', icon: '🔄' },
    { path: '/verify', label: 'Verify', icon: '🔍' }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🍾</span>
            <h1>Alcohol Supply Chain</h1>
          </div>
          <WalletConnect onAccountChange={setAccount} />
        </div>
      </header>

      <nav className="navigation">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<CreateBatch account={account} />} />
          <Route path="/transfer" element={<TransferBatch account={account} />} />
          <Route path="/verify" element={<VerifyBatch />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>Built on Ethereum • Sepolia Testnet</p>
        <p className="footer-hint">Ensure you are connected to Sepolia network in MetaMask</p>
      </footer>
    </div>
  );
}

export default App;
