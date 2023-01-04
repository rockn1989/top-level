
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import { LogoIcon } from '../../components/Icons';
import { ButtonIcon } from '../../components';
import { motion } from 'framer-motion';
import { Sidebar } from '../Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },

    closed: {
      opacity: 0,
      x: '100%'
    }
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <LogoIcon width={160} height={42} />

      <ButtonIcon
        appearance='white'
        icon='MenuIcon'
        className={styles.button}
        onClick={() => setIsOpened(!isOpened)}
      />

      <motion.div
        variants={variants}
        initial={'closed'}
        className={styles.mobileMenu}
        animate={isOpened ? 'opened' : 'closed'}
      >
        <Sidebar />
        <ButtonIcon
          appearance='white'
          icon='CloseBigIcon'
          className={styles.menuClose}
          onClick={() => setIsOpened(!isOpened)}
        />
      </motion.div>
    </header>
  );
};

export { Header };