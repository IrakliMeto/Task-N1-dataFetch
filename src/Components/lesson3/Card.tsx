import React, { useState } from 'react';
import Button from './Button';

import styles from './style.module.css';

export default function Card() {
  const [active, setActive] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const list = [1, 2, 3, 4, 5];

  const choosePoint = (index: number) => {
    setActive(index === active ? null : index);
  };

  return (
    <div>
      {!submitted && (
        <div className={styles.card}>
          Card 1
          <div>
            {list.map((item, index) => (
              <Button
                onClick={() => choosePoint(index)}
                key={index}
                title={String(item)}
                className={index === active ? styles.active : ''}
              />
            ))}
          </div>
          <Button
            className={active ? styles.buttonActive : styles.buttonDisabled}
            onClick={() => setSubmitted(true)}
            title='Submit'
          />
        </div>
      )}

      {submitted && (
        <div className={styles.card}>
          card2
          <div>
            {active !== null && (
              <div>
                You chose button {active + 1} out of {list.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
