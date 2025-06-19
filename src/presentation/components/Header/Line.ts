import { ReactComponent as Line1 } from './assets/line-1.svg';
import { ReactComponent as Line2 } from './assets/line-2.svg';
import { ReactComponent as Line3 } from './assets/line-3.svg';

export type LineName = 'main' | 'marathon' | 'reviews';

export const lines: Record<LineName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  main: Line1,
  marathon: Line2,
  reviews: Line3,
};