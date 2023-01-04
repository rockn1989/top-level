
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import { LogoIcon } from '../../components/Icons';
import { Search } from '../../components';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <div className={styles.logo}><LogoIcon width={160} height={43} /></div>
      <Search />
      <Menu />
    </div>
  );
};

export { Sidebar };