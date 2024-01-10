import React from 'react';

type ButtonsProps = {
  list: number[];
  setState: React.Dispatch<React.SetStateAction<number>>;
  state: number | '';
};

const Buttons: React.FC<ButtonsProps> = ({ list, setState, state }) => {
  return (
    <div>
      select tip
      <div>
        {list.map((item: number) => {
          return (
            <input key={item} onClick={() => setState(item)} type='button' value={`${item} %`} />
          );
        })}
      </div>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(+e.target.value)}
        type='number'
        placeholder='custom'
        value={state ? state : ''}
      />
    </div>
  );
};

export default Buttons;
