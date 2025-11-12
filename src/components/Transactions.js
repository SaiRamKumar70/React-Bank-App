import React from 'react';

function Transactions({ transactions }) {
  return (
    <div className="container mt-4">
      <h4>Transaction History</h4>
      <ul className="list-group">
        {transactions.map(tx => (
          <li key={tx.id} className="list-group-item">
            <strong>{tx.date}</strong>: ₹{tx.amount}{" "}
            {tx.type === 'Deposit' ? 'deposited' : `transferred to ${tx.to}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;