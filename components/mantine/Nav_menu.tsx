"use client";

import { Menu, Button, rem } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Nav_menu() {
    const [opened, setOpened] = useState(false);

  return (
    <Menu width={200} shadow="md" opened={opened} onChange={setOpened}>
      <Menu.Target>
        <Button variant="light" color="gray">
        ☰
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item >
            <Link href="/Analytics">Dashboard</Link>
        </Menu.Item>
        <Menu.Item
          leftSection={<IconExternalLink style={{ width: rem(14), height: rem(14) }} />}
          component="a"
          href="https://mantine.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}