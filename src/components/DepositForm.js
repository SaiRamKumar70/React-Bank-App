import React, { useState } from 'react';

function DepositForm({ onDeposit }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert("Deposit amount must be greater than zero");
      return;
    }
    onDeposit(Number(amount));
    setAmount('');
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">Deposit Money To Your Account</h4>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter deposit amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Deposit
        </button>
      </form>
    </div>
  );
}

export default DepositForm;