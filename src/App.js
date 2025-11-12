import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import DepositForm from './components/DepositForm';
import TransferForm from './components/TransferForm';

function App() {
  const [balance, setBalance] = useState(5000);
  const [transactions, setTransactions] = useState([]);

  const handleDeposit = (amount) => {
    const newTransaction = {
      id: Date.now(),
      type: 'Deposit',
      amount,
      date: new Date().toLocaleString()
    };
    setTransactions([newTransaction, ...transactions]);
    setBalance(balance + amount);
  };

  const handleTransfer = (amount, to) => {
    const newTransaction = {
      id: Date.now(),
      type: 'Transfer',
      amount,
      to,
      date: new Date().toLocaleString()
    };
    setTransactions([newTransaction, ...transactions]);
    setBalance(balance - amount);
  };

  return (
    <div>
      <Navbar />
      <Dashboard balance={balance} />
      <DepositForm onDeposit={handleDeposit} />
      <TransferForm onTransfer={handleTransfer} />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;