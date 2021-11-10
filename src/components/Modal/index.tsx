import React from 'react';
import Dialog from 'rc-dialog';

import closeIcon from './close.svg';
import './index.css';

const Modal = ({
  visible,
  onClose,
  title,
  footer,
  children,
  style,
  ...otherProps
}: {
  visible: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: object;
}) => {
  /**
   * see more
   * https://github.com/react-component/dialog
   */
  return (
    <Dialog
      visible={visible}
      animation="zoom"
      maskAnimation="fade"
      onClose={onClose}
      title={title}
      closeIcon={<img src={closeIcon} alt="close" className="w-7" />}
      destroyOnClose={true}
      forceRender={false}
      focusTriggerAfterClose={false}
      maskClosable={false}
      footer={footer}
      style={style}
      {...otherProps}
    >
      {children}
    </Dialog>
  );
};

export default React.memo(Modal);
