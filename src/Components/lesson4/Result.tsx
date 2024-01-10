import React from 'react';

export default function Result({ amounts }: any) {
  return (
    <div>
      <h1>result</h1>
      <div>tip amount / person: {amounts.tipAmount ? amounts.tipAmount : 0}</div>
      <div>total amount / person: {amounts.totalAmount ? amounts.totalAmount : 0} </div>
    </div>
  );
}
