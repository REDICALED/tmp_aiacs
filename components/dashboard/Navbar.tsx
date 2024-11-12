'use client';

import { Tooltip, UnstyledButton, Stack } from '@mantine/core';
import {
  IconHome2,
  IconChartBar,
  IconDeviceDesktopAnalytics,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconDeviceCctv
} from '@tabler/icons-react';
import classes from './NavbarMinimal.module.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  isActive: boolean;

}

function NavbarLink({ icon: Icon, label, isActive  }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton className={classes.link}
              data-active={isActive ? 'true' : undefined}
>
        <Icon className="grid place-items-center text-gray-600 " style={{ width: 40, height: 40 }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconChartBar, label: 'Chart' },
  { icon: IconDeviceCctv, label: 'CCTV' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconSettings, label: 'Settings' },
];

export function NavbarMinimal() {

  const pathname = usePathname();

  const links = mockdata.map((link) => {
    const isActive = pathname === (link.label === 'Home' ? '/' : `/${link.label}`);
    return (<Link key={link.label} href={ link.label === 'Home' ?  `/` : `/${link.label}`}>
      <div className="w-[70px] h-[70px] grid place-items-center border-b-[1.4px] border-gray-700">
        <NavbarLink {...link} isActive={isActive} />
      </div>
    </Link>)
    
});

  return (
    <nav className={`${classes.navbar} fixed`}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

    </nav>
  );
}
