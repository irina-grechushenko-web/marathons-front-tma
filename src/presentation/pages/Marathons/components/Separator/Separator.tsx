import type { ReactNode } from 'react';
import styles from './Separator.module.css';

interface SeparatorProps {
  children: ReactNode;
}

export const Separator: React.FC<SeparatorProps> = ({children}) => {

  return (
    <div className={styles.separator}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 375 198" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-14 20.2153C-3.99997 44.2151 19.3204 109.009 48 111.958C122 138.215 159.942 51.0407 183 28.7153C214.5 -1.78418 255 9.21582 255 42.2153C255 78.2153 204 157.215 225.5 182.215C261.5 206.716 277.993 136.628 284.5 111.958C292.859 94.2647 297.443 45.2153 319.5 45.2153C349 45.2153 331.924 99.7158 349 118.716C363.273 134.597 401.475 119.974 406.5 99.2153" stroke="#FFC163" strokeWidth="20" strokeMiterlimit="10" strokeLinecap="round"/>
      </svg>
      <span>{children}</span>
    </div>
  );
};