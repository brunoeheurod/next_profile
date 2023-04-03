import React from 'react';
import NextLink from 'next/link';
import Text from './Text';
import StyleSheet from '@src/interfaces/StyleSheet';
import { ThemeTypographyVariants } from '@src/theme/theme';
import { useTheme } from '@src/theme/ThemeProvider';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: 'primary' | 'neutral';
  colorVariantEnabled?: boolean;
  isActive?: boolean;
}

const Link = React.forwardRef(
  (
    {
      href,
      children,
      colorVariant,
      styleSheet,
      colorVariantEnabled,
      isActive,
      ...props
    }: LinkProps,
    ref
  ) => {
    const theme = useTheme();
    const isIExternalLink = href.startsWith('http');

    const currentColorSet = {
      color: theme.colors[colorVariant].x250,
      hover: {
        color: theme.colors[colorVariant].x000,
      },
      focus: {
        color: theme.colors[colorVariant].x300,
      },
    };

    const linkProps = {
      ref,
      children,
      href,
      styleSheet: {
        textDecoration: 'none',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '8px',
        border: 'none',
        gap: '10px',
        ...(colorVariantEnabled && {
          backgroundColor: isActive
            ? currentColorSet.focus.color
            : currentColorSet.color,
          fill: isActive ? currentColorSet.focus.color : currentColorSet.color,
        }),
        ...styleSheet,
        hover: {
          ...styleSheet?.hover,
          ...(colorVariantEnabled && {
            backgroundColor: currentColorSet.hover.color,
            textDecoration: 'none',
            fill: currentColorSet.hover.color,
          }),
        },
        focus: {
          ...styleSheet?.focus,
          ...(colorVariantEnabled && {
            backgroundColor: currentColorSet.focus.color,
            color: currentColorSet.focus.color,
            fill: currentColorSet.focus.color,
          }),
        },
      },
      ...props,
    };

    if (isIExternalLink)
      return (
        <Text
          as="a"
          {...{
            target: '_blank',
            ...linkProps,
          }}
        />
      );
    return (
      <NextLink href={href} legacyBehavior passHref>
        <Text as="a" {...linkProps} />
      </NextLink>
    );
  }
);

Link.defaultProps = {
  colorVariant: 'primary',
  colorVariantEnabled: true,
  isActive: false,
};

export default Link;
