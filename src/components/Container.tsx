import React from 'react';
import styled from 'styled-components';

const ContainerWarp = styled.div<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  margin: auto;
`;

const Container = ({
  width = 1100,
  children,
  className,
}: {
  width?: number;
  children: React.ReactNode;
  className?: string;
}): JSX.Element => (
  <ContainerWarp width={width} className={className}>
    {children}
  </ContainerWarp>
);

export default Container;
