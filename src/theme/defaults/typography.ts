export const typography = {
  font1: {
    fontFamily: '"Hind", sans-serif',
  },
  font2: {
    fontFamily: '"Inter", sans-serif',
  },
  variants: {
    body1: {
      letterSpacing: {
        xs: '-0.4px',
      },
      fontWeight: {
        xs: '400',
        md: '400',
      },
      lineHeight: {
        xs: '1.4',
        md: '1.4',
      },
      fontSize: {
        xs: '14px',
      },
    },
    body2: {
      letterSpacing: {
        xs: '-0.4px',
      },
      fontWeight: {
        xs: '500',
        md: '500',
      },
      lineHeight: {
        xs: '4',
        md: '4',
      },
      fontSize: {
        xs: '16px',
        md: '21px',
      },
    },
    heading1: {
      fontWeight: {
        xs: '400',
        md: '400',
      },
      lineHeight: {
        xs: '1.4',
        md: '1.4',
      },
      fontSize: {
        xs: '24px',
        md: '30px',
      },
    },
    heading2: {
      fontWeight: {
        xs: '400',
        md: '400',
      },
      lineHeight: {
        xs: '1',
        md: '1',
      },
      fontSize: {
        xs: '18px',
        md: '22px',
      },
    },
  },
} as const;
