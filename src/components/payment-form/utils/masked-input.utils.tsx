import React from 'react';
import ReactInputMask from 'react-input-mask';
import { Props as InputMaskProps } from 'react-input-mask';

export const MaskedInput = React.forwardRef<InputMaskProps, InputMaskProps>(
  (props, ref) => {
    const { mask, onChange, ...other } = props;
    return (
      <ReactInputMask
        {...other}
        mask={mask}
        alwaysShowMask={false}
        maskChar={''}
        inputRef={ref as any}
        onChange={onChange}
      />
    );
  },
);
