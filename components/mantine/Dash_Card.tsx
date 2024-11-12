import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import ReactPlayer from 'react-player';
import { IconClockHour9 } from '@tabler/icons-react';

export function Dash_card({url}:{url:string}) {
  return (
    <Card shadow="sm" padding="lg" radius="md" style={{backgroundColor: "#1f1f1f"}} >
      <Card.Section component="a" href="https://mantine.dev/">
      <ReactPlayer width={'100%'} height={"50%"} controls={true} url={url} />

      </Card.Section>


      <Text fw={500} size="lg" mt="md" className='flex place-items-center' color='#afafaf'>
          <IconClockHour9 size={18} style={{ marginRight: '0.5rem' }} />
            2024-11-04 12:00  
      </Text>

    </Card>
  );
}