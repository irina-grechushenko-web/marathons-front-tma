import { ReactComponent as HeartIcon } from './assets/heart.svg';
import { ReactComponent as MessageIcon } from './assets/message.svg';
import { ReactComponent as LockIcon } from './assets/lock.svg';
import { ReactComponent as TimerIcon } from './assets/timer.svg';
import { ReactComponent as ArrowRightIcon } from './assets/arrow-right.svg';
import { ReactComponent as ArrowRightFillIcon } from './assets/arrow-right-fill.svg';
import type { IconName } from './types';

export const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
  heart: HeartIcon,
  lock: LockIcon,
  message: MessageIcon,
  timer: TimerIcon,
  arrowRight: ArrowRightIcon,
  arrowRightFill: ArrowRightFillIcon,
};
