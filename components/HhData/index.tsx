import React from 'react';

import { HhDataProps } from './HhData.props';
import styles from './HhData.module.css';
import { Card } from '../Card';
import { RateIcon } from '../Icons';
import { priceRu } from '../../helpers/helpers';

const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>

      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon width={20} height={20} className={styles.filled} />
            <RateIcon width={20} height={20} />
            <RateIcon width={20} height={20} />
          </div>
        </div>

        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <RateIcon width={20} height={20} className={styles.filled} />
            <RateIcon width={20} height={20} className={styles.filled} />
            <RateIcon width={20} height={20} />
          </div>
        </div>

        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon width={20} height={20} className={styles.filled} />
            <RateIcon width={20} height={20} className={styles.filled} />
            <RateIcon width={20} height={20} className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export { HhData };