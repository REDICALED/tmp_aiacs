import { useState, useEffect } from 'react';
import { RingProgress, Text, SimpleGrid, Paper, Center, Group, rem } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

const data = [
  { label: '저어새', stats: '66%', progress: 66, color: 'teal', icon: 'up' },
  { label: '새매', stats: '22%', progress: 22, color: 'blue', icon: 'up' },
  { label: '갈매기', stats: '30%', progress: 30, color: 'red', icon: 'down' },
  { label: '고방오리', stats: '50%', progress: 50, color: 'green', icon: 'up' },
] as const;

export function StatsRing() {
  const [animatedProgress, setAnimatedProgress] = useState(
    data.map((stat) => ({ ...stat, animatedValue: 0 }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedProgress((prevProgress) =>
        prevProgress.map((stat) =>
          stat.animatedValue < stat.progress
            ? { ...stat, animatedValue: stat.animatedValue + 1 } // 매번 1씩 증가
            : stat
        )
      );
    }, 1); // 애니메이션 속도 조정 (20ms 마다 1씩 증가)

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 제거
  }, []);

  const stats = animatedProgress.map((stat) => {
    const Icon = icons[stat.icon];

    return (
      <Paper withBorder radius="md" p="xs" key={stat.label} style={{ backgroundColor: '#F0F0F0' }}>
      <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.animatedValue, color: stat.color },
              { value: 100 - stat.animatedValue, color: 'lightgray' }, // 빈 부분의 색상 설정
            ]} // animatedValue 사용
            
            label={
              <Center>
                <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
              </Center>
            }
          />
          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });
``
  return (
    <>
    <div className=' text-black'>
        <SimpleGrid cols={{ base: 2, sm: 2 }}>{stats}</SimpleGrid>
    </div>
    </>
  );
}
