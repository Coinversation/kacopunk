import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const Container = ({
  width,
  children,
  ...otherProps
}: {
  width?: number;
  children: React.ReactNode;
  [other: string]: unknown;
}): JSX.Element => (
  <div {...otherProps} className={classnames(otherProps.className as string)}>
    {children}
  </div>
);

const ContainerWarp = styled(Container)`
  width: ${({ width }) => `${width || 1176}px`};
  margin: auto;
`;

export default ContainerWarp;
