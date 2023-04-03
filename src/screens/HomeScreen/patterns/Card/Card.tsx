import Box from '@src/components/Box';
import Icon from '@src/components/Icon';
import Link from '@src/components/Link';
import Text from '@src/components/Text';
import StyleSheet from '@src/interfaces/StyleSheet';
import { useTheme } from '@src/theme/ThemeProvider';
import * as icons from '@src/components/Icon/svg/_index';
import Image from '@src/components/Image';
type CardProps = {
  isEditable?: boolean;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  bodyTitle?: string;
  iconName?: keyof typeof icons;
  imgSrc?: string;
  imgAlt?: string;
  isComment?: boolean;
  isLastComment?: boolean;
  isTransparent?: boolean;
};

const CardSize = {
  sm: '45%',
  md: '50%',
  lg: '55%',
  xl: '100%',
};

export default function Card({
  children,
  size,
  isTransparent = false,
}: CardProps) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        width: { xs: '100%', md: '100%', lg: '100%', xl: CardSize[size] },
        backgroundColor: isTransparent
          ? 'transparent'
          : theme.colors.neutral.x250,
        padding: 0,
        justifySelf: 'center',
        borderRadius: '8px',
        paddingTop: '20px',
      }}
    >
      {children}
    </Box>
  );
}

Card.Header = ({ iconName, isEditable = true, children }: CardProps) => {
  return (
    <Box
      styleSheet={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px 20px 20px',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Icon name={iconName} />
        <Text variant="heading2">{children}</Text>
      </Box>

      {isEditable && (
        <Link colorVariant="neutral" href="#!">
          <Icon isLink name="editFill" />
        </Link>
      )}
    </Box>
  );
};

Card.Body = ({
  imgSrc,
  imgAlt,
  isLastComment = false,
  isComment = false,
  bodyTitle = '',
  iconName,
  children,
}: CardProps) => {
  return (
    <>
      <Box
        styleSheet={{
          flexDirection: isComment || iconName ? 'row' : '',
          gap: isComment ? '20px' : '',
          alignItems: isComment || iconName ? 'center' : 'start',
          alignSelf: 'start',
          margin: '0 20px 20px 20px',
        }}
      >
        {isComment && (
          <Image
            styleSheet={{ height: '70px', width: '70px' }}
            src={imgSrc}
            alt={imgAlt}
          />
        )}
        {iconName && <Icon name={iconName} />}
        <Box
          styleSheet={{
            flex: 1,
          }}
        >
          {bodyTitle && (
            <Text
              styleSheet={{ alignSelf: 'start', marginBottom: '15px' }}
              variant="heading2"
            >
              {bodyTitle}
            </Text>
          )}
          <Text
            styleSheet={{
              textAlign: 'justify',
              alignSelf: 'start',
              justifySelf: 'start',
              whiteSpace: 'pre-line',
            }}
          >
            {children}
          </Text>
        </Box>
      </Box>
      {isComment && !isLastComment && (
        <Box
          styleSheet={{ opacity: '0.3', margin: '0 20px 20px 20px' }}
          as="hr"
        />
      )}
    </>
  );
};

Card.Footer = ({ imgSrc, children }: CardProps) => {
  return (
    <Box
      styleSheet={{
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'end',
        marginTop: 'auto',
        gap: '20px',
        backgroundImage: `url("${imgSrc}")`,
        backgroundRepeat: 'no-repeat',
        xIndex: 1,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: imgSrc ? '415px' : 0,
        padding: imgSrc ? 0 : '40px 20px 20px',
        borderRadius: '0px 0px 8px 8px',
      }}
    >
      {children}
    </Box>
  );
};

Card.defaultProps = {
  isEditable: true,
  size: 'md',
};
