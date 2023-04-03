import StyleSheet from '@src/interfaces/StyleSheet';
import BaseComponent from '@src/theme/BaseComponent';
import { ThemeTypographyVariants } from '@src/theme/theme';
import { useTheme } from '@src/theme/ThemeProvider';
import React from 'react';

enum Colors {
  'gray' = 'x750',
  'dark' = 'x999',
}

const tagsVariants = {
  heading1: 'h1',
  heading2: 'h2',
};

type TextProps = {
  variant?: ThemeTypographyVariants;
  children: React.ReactNode;
  as?: 'pre' | 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'a';
  styleSheet?: StyleSheet;
  color?: keyof typeof Colors;
  ref: any;
};

const Text = React.forwardRef(
  ({ color, styleSheet, variant, as, ...props }: TextProps, ref) => {
    const theme = useTheme();
    const textVariant = theme.typography.variants[variant];
    const fontFamily =
      variant === 'body1'
        ? theme.typography.font2.fontFamily
        : theme.typography.font1.fontFamily;

    const tag = tagsVariants[variant] || as;
    return (
      <BaseComponent
        styleSheet={{
          fontFamily: fontFamily,
          color: theme.colors.neutral[Colors[color]],
          ...textVariant,
          ...styleSheet,
        }}
        as={tag}
        ref={ref}
        {...props}
      />
    );
  }
);

Text.defaultProps = {
  color: 'dark',
  as: 'p',
  variant: 'body1',
};

export default Text;
