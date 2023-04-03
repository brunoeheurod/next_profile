import Box from '@src/components/Box';
import Icon from '@src/components/Icon';
import Image from '@src/components/Image';
import Link from '@src/components/Link';
import Text from '@src/components/Text';
import { useTheme } from '@src/theme/ThemeProvider';

export default function ProfileHeader() {
  const theme = useTheme();
  const imgUrl = '/assets/svg/bannerPicture.svg';
  return (
    <Box
      as="header"
      styleSheet={{
        position: 'absolute',
        left: { xs: '74px', md: '154px' },
        right: { xs: '26px', md: '56px' },
        top: { xs: '26px', md: '56px' },
        height: '173px',
        alignItems: 'center',
        backgroundImage: `url("${imgUrl}")`,
        backgroundRepeat: 'no-repeat',
        xIndex: 1,
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        borderRadius: '8px',
      }}
    >
      <Link
        href="https://google.com"
        styleSheet={{
          position: 'absolute',
          right: '19px',
          top: '16px',
        }}
      >
        <Icon
          size="lg"
          styleSheet={{ borderRadius: '8px' }}
          isLink
          name="edit"
        />
      </Link>

      <Image
        styleSheet={{
          border: `3px solid ${theme.colors.primary.x950}`,
          borderRadius: '100%',
          position: 'absolute',
          left: { xs: '55px', md: '41px' },
          top: '97px',
        }}
        src="\assets\svg\profilePicture.svg"
        alt="Foto de Perfil"
      />
      <Box
        styleSheet={{
          position: 'absolute',
          left: { xs: '20px', md: '230px' },
          top: { xs: '290px', md: '180px' },
          gap: '8px',
          justifyContent: 'space-between',
          width: { xs: 'calc(100% - 33px)', md: 'calc(100% - 233px)' },
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <Box as="section">
          <Text variant="heading1">Elisangela Lima</Text>
          <Text variant="heading2">UX designer</Text>
        </Box>
        <Box
          styleSheet={{
            marginLeft: 'auto',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '15px',
          }}
          as="section"
        >
          <Text as="span" color="gray">
            Membro desde 22/03/2021
          </Text>
          <Link colorVariant="neutral" href="#!">
            <Icon size="lg" isLink name="bell" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
