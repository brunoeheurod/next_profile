import StyleSheet from '@src/interfaces/StyleSheet';
import BaseComponent from '@src/theme/BaseComponent';

type ImageProps = {
  src: string;
  alt: string;
  styleSheet?: StyleSheet;
};

export default function Image({ src, alt, styleSheet, ...props }: ImageProps) {
  return (
    <BaseComponent
      as="img"
      styleSheet={styleSheet}
      src={src}
      alt={alt}
      {...props}
    />
  );
}

Image.defaultProps = {
  styleSheet: { width: '160px', height: '160px' },
};
