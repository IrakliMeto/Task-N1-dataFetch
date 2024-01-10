import { useEffect, useState } from 'react';
import Result from './Result';
import Buttons from './Buttons';

export default function Calculator() {
  const [bill, setBill] = useState<number>(0);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(0);
  const [tipPercent, setTipPercent] = useState<number>(0);
  const [amount, setAmount] = useState<{
    tipAmount: number;
    totalAmount: number;
  }>({
    tipAmount: 0,
    totalAmount: 0,
  });

  const percents = [10, 15, 20, 30, 50];

  const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBill(+event.target.value);
  };

  const handleNumberOfPeople = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(+event.target.value);
  };

  useEffect(() => {
    if (!tipPercent || !numberOfPeople || !bill) return;

    const calculateTip = ((bill / 100) * tipPercent) / numberOfPeople;
    const percentInMoney = (bill / 100) * tipPercent;
    const calculateTotal = (bill + percentInMoney) / numberOfPeople;

    setAmount({
      tipAmount: calculateTip,
      totalAmount: calculateTotal,
    });
  }, [bill, numberOfPeople, tipPercent]);

  return (
    <div>
      <div>
        <h4>Bill</h4>
        <input value={bill ? bill : ''} onChange={handleBillChange} type='number' placeholder='$' />
      </div>

      <Buttons list={percents} setState={setTipPercent} state={tipPercent} />

      <div>
        <h4>number of people</h4>
        <input
          value={numberOfPeople ? numberOfPeople : ''}
          onChange={handleNumberOfPeople}
          type='number'
          placeholder='number of people'
        />
      </div>

      <Result amounts={amount} />

      <button
        onClick={() => {
          setAmount({
            tipAmount: 0,
            totalAmount: 0,
          });
          setBill(0);
          setTipPercent(0);
          setNumberOfPeople(0);
        }}
      >
        Clear
      </button>
    </div>
  );
}
