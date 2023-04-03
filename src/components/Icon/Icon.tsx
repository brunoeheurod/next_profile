import StyleSheet from '@src/interfaces/StyleSheet';
import BaseComponent from '@src/theme/BaseComponent';
import * as icons from './svg/_index';

const iconSizes = {
  sm: { xs: '30px', md: '30px' },
  md: { xs: '35px', md: '40px' },
  lg: { xs: '22px', md: '48px' },
} as const;

type IconProps = {
  name?: keyof typeof icons;
  size?: keyof typeof iconSizes;
  styleSheet?: StyleSheet;
  isLink?: boolean;
};

export default function Icon({
  size,
  name,
  styleSheet,
  isLink,
  ...props
}: IconProps) {
  // <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <rect width="40" height="40" rx="4" fill="#5C197C" />
  const iconSize = iconSizes[size];
  const isGetHashLogo = name === 'getHashLogo';
  const CurrentIcon = icons[name];
  const iconStyleSheet = {
    ...(isGetHashLogo && { width: '150px' }),
    ...(!isGetHashLogo && { width: iconSize, height: iconSize }),
    ...(!isLink && { fill: 'none' }),
    ...styleSheet,
  };
  return (
    <BaseComponent
      as="svg"
      styleSheet={iconStyleSheet}
      viewBox={isGetHashLogo ? '0 0 133 61' : '0 0 40 40'}
      preserveAspectRatio="xMaxYMax meet"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {isLink && (
        <BaseComponent
          as="rect"
          styleSheet={{
            width: isGetHashLogo ? '133px' : '40xp',
            height: isGetHashLogo ? '61px' : '40xp',
          }}
          rx={4}
        />
      )}
      <CurrentIcon />
    </BaseComponent>
  );
}

Icon.defaultProps = {
  name: 'editFill',
  size: 'md',
  isLink: false,
};
