import React from 'react';
import { Button } from 'antd-mobile-rn';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  loading?: boolean;
};

export const MyButton = ({ text, onPress, loading }: ButtonProps) => (
  <Button onPress={onPress} loading={loading}>
    {text}
  </Button>
);
