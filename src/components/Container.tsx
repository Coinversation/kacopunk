import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const ContainerWarp = styled.div<{ width: number }>`
  width: 100%;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 84%;
  }
  @media screen and (min-width: 1280px) {
    width: ${({ width }) => `${width}px`};
  }
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
  <ContainerWarp width={width} className={classnames(className, 'px-4 md:px-0')}>
    {children}
  </ContainerWarp>
);

export default Container;
