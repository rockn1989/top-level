import React, { useState, useEffect, KeyboardEvent, forwardRef, ForwardedRef, useRef } from 'react';

import { RatingProps } from './Rating.props';
import { StarIcon } from '../Icons';
import cn from 'classnames';
import styles from './Rating.module.css';

const Rating = forwardRef((
  {
    isEditable = false,
    rating,
    setRating,
    error,
    tabIndex,
    ...props
  }: RatingProps,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  const computeFocus = (r: number, i: number): number => {
    if (!isEditable) {
      return -1;
    }

    if (!rating && i == 0) {
      return tabIndex ?? 0;
    }

    if (r == i + 1) {
      return tabIndex ?? 0;
    }

    return -1;
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating, tabIndex]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable
          })}
          onMouseEnter={(() => onHandlerChangeDisplay(i + 1))}
          onMouseLeave={(() => onHandlerChangeDisplay(rating))}
          onClick={() => onClick(i + 1)}
          ref={r => ratingArrayRef.current?.push(r)}
          role={isEditable ? 'slider' : ''}
          aria-valuenow={rating}
          aria-valuemin={1}
          aria-valuemax={5}
          aria-label={isEditable ? 'Укажите рейтинг стрелками вверх или вниз' : ('рейтинг' + rating)}
          aria-invalid={error ? true : false}
        >
          <StarIcon
            width={20}
            height={20}
            onKeyDown={handleKey}
            tabIndex={computeFocus(rating, i)}
          />
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  const onHandlerChangeDisplay = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };


  const onClick = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const handleKey = (e: KeyboardEvent) => {
    if (!isEditable || !setRating) {
      return;
    }

    if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }

      ratingArrayRef.current[rating]?.focus();
    }

    if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

  return (
    <div {...props} ref={ref} className={cn(styles.ratingWrapper, {
      [styles.error]: error
    })}>
      {ratingArray.map((r, i) => {
        return <span key={i}>{r}</span>;
      })}
      {error && <span className={styles.errorMessage} role="alert">{error.message}</span>}
    </div>
  );
});

export { Rating };