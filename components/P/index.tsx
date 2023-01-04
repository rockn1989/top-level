import React from 'react';

import { PProps } from './P.props';
import cn from 'classnames';
import styles from './P.module.css';

const P = ({ size = 'm', children, className, ...props }: PProps): JSX.Element => {
  return (
    <p className={cn(styles.p, className, size, {
      [styles.sm]: size == 'sm',
      [styles.m]: size == 'm',
      [styles.lg]: size == 'lg',
    })}
      {...props}
    >
      {children}
    </p>
  );
};

export { P };