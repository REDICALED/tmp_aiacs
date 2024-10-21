import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavbarMinimal.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon className='grid place-items-center ' style={{ width: 40, height: 40 }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <div className='w-[70px] h-[70px] grid place-items-center border-b-[1.4px] border-gray-700'>
        <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
    </div>
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
      <div className='relative w-[45px] h-[45px]'>
        <Image className="mr-4" src="/rian_icon.png" alt="logo" layout="fill" />
        </div>
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <div className='w-[70px] h-[70px] grid place-items-center border-b-[1.4px] border-gray-700'>
        <NavbarLink icon={IconLogout} label="Logout" />
      </div>

      <div className='w-[70px] h-[70px] grid place-items-center'>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
    </div>
    
    </nav>
  );
}