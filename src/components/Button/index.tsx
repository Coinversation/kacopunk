import { Button as ButtonComponent } from '@kaco/uikit';
import styled from 'styled-components';

const ButtonWarp = styled(ButtonComponent)`
  box-shadow: none;
  font-weight: inherit;
  background: ${({ type }) => {
    if (type === 'outline') return 'transparent';
    return type === 'secondary' ? '#F59FEE' : '#1BD3D5';
  }};
  color: ${({ type }) => {
    return type === 'outline' ? '#1BD3D5' : 'white';
  }};
  border: ${({ type }) => {
    return type === 'outline' ? '2px solid #1BD3D5' : '';
  }};
`;

export default ButtonWarp;
