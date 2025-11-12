import React, { useState } from 'react';

function TransferForm({ onTransfer }) {
  const [amount, setAmount] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert("Amount must be greater than zero");
      return;
    }
    onTransfer(Number(amount), to);
    setAmount('');
    setTo('');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Transfer Funds</h4>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">To Account</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter account ID"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Transfer
        </button>
      </form>
    </div>
  );
}

export default TransferForm;