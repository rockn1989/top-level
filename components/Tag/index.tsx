import React from 'react';

import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

const Tag = ({ size = 'sm', children, color = 'ghost', href, className, ...props }: TagProps): JSX.Element => {
  return (
    <div className={cn(styles.tag, className, size, {
      [styles.sm]: size == 'sm',
      [styles.m]: size == 'm',
      [styles.ghost]: color == 'ghost',
      [styles.red]: color == 'red',
      [styles.gray]: color == 'gray',
      [styles.green]: color == 'green',
      [styles.primary]: color == 'primary',
    })}
      {...props}
    > {
        href
          ? <a href={href}> {children}</a>
          : <>{children}</>
      }
    </div>
  );
};

export { Tag };