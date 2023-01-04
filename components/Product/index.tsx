import React, { ForwardedRef, forwardRef, useRef, useState } from 'react';
import Image from 'next/image';

import { ProductProps } from './Product.props';
import cn from 'classnames';
import styles from './Product.module.css';
import { Card } from '../Card';
import { Rating } from '../Rating';
import { Tag } from '../Tag';
import { Button } from '../Button';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider';
import { Review } from '../Review';
import { ReviewForm } from '../ReviewForm';
import { motion } from 'framer-motion';

const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const scrollToReview = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    reviewRef.current?.focus();
  };

  const variants = {
    visible: {
      height: 'auto',
      opacity: 1
    },
    hidden: {
      height: 0,
      opacity: 0
    }
  };

  return (
    <div className={className} {...props} ref={ref}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          <span>
            <span className="visuallyHidden">Цена</span>
            {priceRu(product.price)}
          </span>
          {product.oldPrice && <Tag className={styles.oldPrice} color='green'>
            <span className="visuallyHidden">Скидка</span>
            {priceRu(product.price - product.oldPrice)}
          </Tag>
          }
        </div>
        <div className={styles.credit}>
          <span className="visuallyHidden">Кредит</span>
          {priceRu(product.credit)}/ <span className={styles.month}>мес</span>
        </div>
        <div className={styles.rating}>
          <span className="visuallyHidden">{'Рейтинг' + (product.reviewAvg ?? product.initialRating)}</span>
          <Rating rating={product.reviewAvg ?? product.initialRating} /></div>
        <div className={styles.tags}>
          {product.categories.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}
        </div>
        <div className={styles.priceTitle} aria-hidden={true}>цена</div>
        <div className={styles.creditTitle} aria-hidden={true}>кредит</div>
        <div className={styles.rateTitle}>
          <a href='#ref' onClick={scrollToReview}>
            {product.reviewCount}
            {declOfNum(product.reviewCount, [' отзыв', ' отзыва', ' отзывов'])}
          </a>
        </div>

        <Divider className={styles.hr} />

        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map(c => (
            <div className={styles.characteristics} key={c.name}>
              <span className={styles.characteristicsName}>{c.name}</span>
              <span className={styles.characteristicsDots}></span>
              <span className={styles.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advBlock}>

          {product.advantages && (<div className={styles.advantages}>
            <div className={styles.advTitle}>Преимущества</div>
            <div>{product.advantages}</div>
          </div>
          )}

          {product.disadvantages && (<div className={styles.disadvantages}>
            <div className={styles.advTitle}>Недостатки</div>
            <div>{product.disadvantages}</div>
          </div>
          )}
        </div>

        <Divider className={cn(styles.hr, styles.hr2)} />

        <div className={styles.actions}>
          <Button appearance='primary'>Узнать подробнее</Button>
          <Button appearance='ghost'
            arrow={isReviewOpened ? 'down' : 'right'}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
            aria-expanded={isReviewOpened}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>

      <motion.div
        variants={variants}
        initial={isReviewOpened ? 'visible' : 'hidden'}
        animate={isReviewOpened ? 'visible' : 'hidden'}
      >
        <Card color='blue' className={cn(styles.reviews)} ref={reviewRef} tabIndex={isReviewOpened ? 0 : -1}>

          {product.reviews.map(r => (
            <div key={r._id}>
              <Review review={r} />
              <Divider />
            </div>
          ))}

          <ReviewForm isOpened={isReviewOpened} productId={product._id} />
        </Card>
      </motion.div>
    </div>
  );
}));

export { Product };