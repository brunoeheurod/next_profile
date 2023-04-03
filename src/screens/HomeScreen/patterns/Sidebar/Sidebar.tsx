import Box from '@src/components/Box';
import Icon from '@src/components/Icon';
import { NavLink } from '@src/components/NavLink';
import Text from '@src/components/Text';
import { useTheme } from '@src/theme/ThemeProvider';
import { useState } from 'react';

export default function Sidebar() {
  const theme = useTheme();
  const [expand, useExpand] = useState(false);

  return (
    <Box
      as="aside"
      styleSheet={{
        zIndex: 999,
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        height: '100vh',
        width: expand ? '250px' : { xs: '52px', md: '98px' },
        backgroundColor: theme.colors.primary.x250,
        alignItems: expand ? 'start' : 'center',
        paddingLeft: expand ? '20px' : '',
        gap: '25px',
      }}
      onMouseEnter={() => useExpand(true)}
      onMouseLeave={() => useExpand(false)}
    >
      {expand ? (
        <Icon
          styleSheet={{
            marginTop: '55px',
            marginBottom: '55px',
            alignSelf: 'center',
            marginLeft: expand && '-40px',
          }}
          name="getHashLogo"
        />
      ) : (
        <Icon
          styleSheet={{
            marginTop: '55px',
            marginBottom: '55px',
            alignSelf: 'center',
            marginLeft: expand && '-20px',
          }}
          name="partialGetHashLogo"
        />
      )}
      <NavLink
        styleSheet={{
          ...(!expand && { padding: '15px' }),
          ...(expand && { paddingLeft: '10px' }),
        }}
        href="#!"
      >
        <Icon size="lg" isLink name="speedometer" />
        {expand && (
          <Text
            variant="body2"
            as="a"
            styleSheet={{
              color: theme.colors.neutral.x000,
              width: '140px',
            }}
          >
            Dashboard
          </Text>
        )}
      </NavLink>
      <NavLink
        styleSheet={{
          ...(!expand && { padding: '15px' }),
          ...(expand && { paddingLeft: '10px' }),
        }}
        href="/"
        exact
      >
        <Icon size="lg" isLink name="person" />
        {expand && (
          <Text
            as="a"
            variant="body2"
            styleSheet={{
              color: theme.colors.neutral.x000,
              width: '140px',
            }}
          >
            Perfil
          </Text>
        )}
      </NavLink>
      <NavLink
        styleSheet={{
          ...(!expand && { padding: '15px' }),
          ...(expand && { paddingLeft: '10px' }),
        }}
        href="#!"
      >
        <Icon size="lg" isLink name="clock" />
        {expand && (
          <Text
            as="a"
            variant="body2"
            styleSheet={{
              color: theme.colors.neutral.x000,
              width: '140px',
            }}
          >
            Events
          </Text>
        )}
      </NavLink>
    </Box>
  );
}
