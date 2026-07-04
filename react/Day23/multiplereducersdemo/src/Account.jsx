import React from 'react'
import { useSelector } from "react-redux";

function Account() {
 let data = useSelector((state) => {
    console.log(state);
    return state;
  });
  return (
   <>
      <div className="container">
        <h2 className="text-primary">Account Details</h2>
        <table className="table table-bordered w-50">
          <thead>
            <tr>
              <th>Balance</th>
              <th>Full Name</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>{data.account.balance}</td>
              <td>{data.account.fullName}</td>
              <td>{data.account.mobile}</td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-primary">Transaction History</h2>
        <table className="table table-bordered w-50">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.amount}</td>
                <td>{transaction.type}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  )
}

export default Account
