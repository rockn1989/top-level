import React, { useState } from 'react';

import { IReviewSentResponse, ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { Input } from '../Input';
import { Rating } from '../Rating';
import { Button } from '../Button';
import { Textarea } from '../Textarea';
import { CloseIcon } from '../Icons';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../helpers/api';


const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setIsError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {
        ...formData,
        productId
      });

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError('Что-то пошло не так');
      }

    } catch (e) {
      setIsError((e as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', {
            required: { value: true, message: 'Заполните имя' }
          })}
          className={styles.input}
          placeholder='Имя'
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.name ? true : false}
        />

        <Input
          {...register('title', {
            required: { value: true, message: 'Заполните заголовок' }
          })}
          className={styles.input}
          placeholder='Заголовок отзыва'
          error={errors.title}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.title ? true : false}
        />

        <div className={styles.rating} >
          <span>Оценка:</span>
          <Controller
            control={control}
            name='rating'
            rules={{
              required: { value: true, message: 'Укажите рейтинг' },
            }}
            render={({ field }) => (
              <Rating isEditable
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          />

        </div>
        <Textarea
          {...register('description', {
            required: { value: true, message: 'Заполните описание' }
          })}
          className={styles.description}
          placeholder='Текст отзыва'
          error={errors.description}
          tabIndex={isOpened ? 0 : -1}
          aria-label="Текст отзыва"
          aria-invalid={errors.description ? true : false}
        />

        <div className={styles.submit}>
          <Button appearance="primary" tabIndex={isOpened ? 0 : -1} onClick={() => clearErrors()}>Отправить</Button>
          <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>

      {isSuccess &&
        <div className={cn(styles.panel, styles.success)} aria-role="alert">
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>
            Спасибо, Ваш отзыв будет опубликован после проверки.
          </div>
          <button
            onClick={() => setIsSuccess(false)}
            className={styles.close}
            aria-label="Закрыть оповещение"
          >
            <CloseIcon
              width={10}
              height={10}
            />
          </button>
        </div>
      }

      {error &&
        <div className={cn(styles.panel, styles.error)} aria-role="alert">
          Что-то пошло не так, попробуйте обновить страницу

          <button
            className={styles.close}
            onClick={() => setIsError(undefined)}
            aria-label="Закрыть оповещение"
          >
            <CloseIcon width={10} height={10} />
          </button>
        </div>
      }
    </form>
  );
};

export { ReviewForm };