import { Card, Text, Badge, Button, Group,Modal } from '@mantine/core';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { IconClockHour9 } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

export function Dash_card({url}:{url:string}) {

  return (
    <Card shadow="sm" padding="lg" radius="md" style={{backgroundColor: "#1f1f1f"}} >
      <Card.Section component="a" href="https://mantine.dev/">
      <ReactPlayer width={'100%'} height={"50%"} controls={true} url={url} />

      </Card.Section>


      <Text fw={500} size="lg" mt="md" className='flex place-items-center' color='#afafaf'>
          <IconClockHour9 size={18} style={{ marginRight: '0.5rem' }} />
            2024-11-04 12:00
            <div className=" ml-auto border-0 rounded-xl p-1 bg-[#333]	cursor-pointer w-[37px] h-[37px]">
            <Link href={`/CCTV/$`}>
                <Image src='/external-link.png' alt="external link" className=" ml-auto" width={50} height={50} />
            </Link>
            </div>

      </Text>

    </Card>
  );
}