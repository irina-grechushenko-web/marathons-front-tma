import { Icon } from '@src/presentation/components/Icon';
import styles from './Header.module.css';

interface CardProps {
  header?: string;
  subHeader?: string;
}

export const Header: React.FC<CardProps> = ({header, subHeader}) => {

  return (
    <div className={styles.header}>
      {header && <div className={styles.h1}>{header}</div> }
      {subHeader && <div className={styles.h2}>{subHeader}</div> } 
      <Icon name={'header-line'} className={styles.headerLine}/>
    </div>
  );
};