import React from 'react';

import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import { CheckIcon } from '../Icons';

const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map(a => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon width={50} height={50} />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline}></hr>
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};

export { Advantages };