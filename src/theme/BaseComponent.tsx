import styled from 'styled-components';
import StyleSheet from '@src/interfaces/StyleSheet';
import { parseStyleSheet } from '@skynexui/responsive_stylesheet';
import React from 'react';

interface StyledBaseComponent {
  styleSheet?: StyleSheet;
  ref: any;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;
interface BaseComponentProps {
  styleSheet: StyleSheet;
  [key: string]: any;
}
const BaseComponent = React.forwardRef<unknown, BaseComponentProps>(
  (props, ref) => {
    return <StyledBaseComponent ref={ref} {...props} />;
  }
);

BaseComponent.defaultProps = {
  styleSheet: {},
};

export default BaseComponent;
