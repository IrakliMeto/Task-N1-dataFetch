import React, { useState } from 'react';
import '../../App.css';

export default function MyForm() {
  const [information, setInformation] = useState({
    name: '',
    number: '',
    date: {
      month: '',
      year: '',
    },
    cvc: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInformation((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleDateChange = (e: any) => {
    const { name, value } = e.target;
    setInformation((prevInfo) => ({
      ...prevInfo,
      date: {
        ...prevInfo.date,
        [name]: value,
      },
    }));
  };

  const handleCVC = (e: any) => {
    const { name, value } = e.target;
    setInformation((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', information);
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' value={information.name} onChange={handleChange} />
        </label>
        <label>
          Number:
          <input type='tel' name='number' value={information.number} onChange={handleChange} />
        </label>
        <label>
          Date:
          <input
            type='number'
            name='month'
            value={information.date.month}
            onChange={handleDateChange}
          />
          <input
            type='number'
            name='year'
            value={information.date.year}
            onChange={handleDateChange}
          />
        </label>

        <label>
          CVC:
          <input type='tel' name='cvc' value={information.cvc} onChange={handleCVC} />
        </label>
        <button type='submit'>Submit</button>
      </form>

      <div>
        <div>card name: {information?.name} </div>
        <div>card number: {information?.number}</div>
        <div>
          expire date: {information?.date.month} / {information?.date.year}
        </div>

        <div>CVC: {information.cvc}</div>
      </div>
    </>
  );
}
