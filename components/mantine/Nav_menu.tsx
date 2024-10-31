"use client";

import { Menu, Button } from '@mantine/core';
import { useState } from 'react';
import Link from 'next/link';

export default function Nav_menu() {
    const [opened, setOpened] = useState(false);

  return (
    <Menu width={200} shadow="md" opened={opened} onChange={setOpened}>
      <Menu.Target>
        <Button variant="light" color="gray">
        {opened === true ? `\u00A0X\u00A0` : `☰`}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item >
            <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item >
            <Link href="/Chart">Chart</Link>
        </Menu.Item><Menu.Item >
            <Link href="/CCTV">CCTV</Link>
        </Menu.Item><Menu.Item >
            <Link href="/Analytics">Analytics</Link>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}