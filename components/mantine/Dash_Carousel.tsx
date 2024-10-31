import { Carousel } from '@mantine/carousel';

export function Dash_Carousel() {
  return (
    <Carousel
      withIndicators
      height={400}
      slideSize={{ base: '100%', sm: '100%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop
      align="start"
    >
      <Carousel.Slide><div className='bg-violet-950 h-full w-full'>asdafdasfd</div></Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
    </Carousel>
  );
}