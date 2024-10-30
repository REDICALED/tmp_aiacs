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

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
}

function NavbarLink({ icon: Icon, label }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton className={classes.link}>
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
  const links = mockdata.map((link) => (
    <Link key={link.label} href={ link.label === 'Home' ?  `/` : `/${link.label}`}>
      <div className="w-[70px] h-[70px] grid place-items-center border-b-[1.4px] border-gray-700">
        <NavbarLink {...link} />
      </div>
    </Link>
  ));

  return (
    <nav className={`${classes.navbar} fixed`}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <div className="w-[70px] h-[70px] grid place-items-center border-b-[1.4px] border-gray-700">
        <NavbarLink icon={IconLogout} label="Logout" />
      </div>

      <div className="w-[70px] h-[70px] grid place-items-center">
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
      </div>
    </nav>
  );
}
