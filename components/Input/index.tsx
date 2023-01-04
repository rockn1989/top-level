import React, { ForwardedRef, forwardRef } from 'react';

import { InputProps } from './Input.props';
import cn from 'classnames';
import styles from './Input.module.css';

const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={cn(className, styles.inputWrapper)}>
      <input className={cn(styles.input, {
        [styles.error]: error
      })} {...props} ref={ref} />
      {error && <span className={styles.errorMessage} role="alert">{error.message}</span>}
    </div>
  );
});

export { Input };