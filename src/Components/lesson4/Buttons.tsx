import React from 'react';

export default function Buttons({ list, setState, state }: any) {
  return (
    <div>
      select tip %
      <div>
        {list.map((item: any) => {
          return (
            <input key={item} onClick={() => setState(item)} type='button' value={`${item} %`} />
          );
        })}
      </div>
      <input
        onChange={(e: any) => setState(e.target.value)}
        type='number'
        placeholder='custom'
        value={state ? state : ''}
      />
    </div>
  );
}
