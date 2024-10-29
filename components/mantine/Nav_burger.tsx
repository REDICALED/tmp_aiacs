import React, { useState } from 'react';
import { Burger } from '@mantine/core';

export default function Nav_burger() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <Burger
      opened={opened}
      onClick={() => setOpened((o) => !o)}
      title={title}
      color="#d0d0d0"
    />
  );
}