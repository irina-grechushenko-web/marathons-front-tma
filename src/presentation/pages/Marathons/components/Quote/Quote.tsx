import type { ReactNode } from 'react';
import styles from './Quote.module.css';
import { Icon } from '@src/presentation/components/Icon';

interface QuoteProps {
  children: ReactNode;
}

export const Quote: React.FC<QuoteProps> = ({children }) => {

  return (
    <div className={styles.quote}>
      <Icon name={'quote-up'} className={styles.up}/>
      <Icon name={'quote-down'} className={styles.down}/>
      {children}
    </div>
  );
};