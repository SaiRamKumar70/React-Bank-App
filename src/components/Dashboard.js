import React from 'react';

function Dashboard({ balance }) {
  return (
    <div className="container mt-4">
      <h4>Account Balance</h4>
      <div className="alert alert-success">₹{balance}</div>
    </div>
  );
}

export default Dashboard;