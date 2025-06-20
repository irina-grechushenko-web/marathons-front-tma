import { icons } from "./const";
import classNames from 'classnames';
import type { IconName } from "./types";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

export function Icon({ name, className, ...restProps }: IconProps) {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    return null;
  }

  return (
    <SvgIcon
      className={classNames(className)}
      {...restProps}
    />
  );
}

