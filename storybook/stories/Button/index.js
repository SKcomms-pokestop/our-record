import React from 'react';
import { Button } from 'antd-mobile-rn';

export default function DefaultButton({ onPress, children, loading }) {
  return (
    <Button onPress={onPress} loading={loading}>
      {children}
    </Button>
  );
}
