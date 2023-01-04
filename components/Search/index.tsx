import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { SearchProps } from './Search.props';
import cn from 'classnames';
import styles from './Search.module.css';
import { Input } from '../Input';
import { Button } from '../Button';
import { GlassIcon } from '../Icons';

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    });
  };

  const handlerKeyDown = (event: KeyboardEvent) => {
    if (event.key == 'Enter') {
      goToSearch();
    }
  };

  return (
    <form className={cn(className, styles.search)} {...props} role="search">
      <Input
        className={styles.input}
        placeholder='Поиск...'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={handlerKeyDown}
      />

      <Button
        appearance='primary'
        className={styles.button}
        onClick={() => { goToSearch(); }}
        aria-label="Искать по сайту"
      ><GlassIcon width={15} height={15} /></Button>
    </form>
  );
};

export { Search };