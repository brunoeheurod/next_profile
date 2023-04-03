import StyleSheet from '@src/interfaces/StyleSheet';
import BaseComponent from '@src/theme/BaseComponent';

type BoxProps = {
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  [key: string]: any;
};

export default function Box({
  styleSheet,
  children,
  as: Tag = 'div',
  ...props
}: BoxProps) {
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}
