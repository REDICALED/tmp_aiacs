import { AspectRatio } from '@mantine/core';
import ReactPlayer from 'react-player'
import {DetectedBirds} from '@/lib/Dummy/DetectedBirds';

export function Dash_VideoEmbed() {
  return (
    <>
    <h2 className="text-lg font-semibold mb-2">탐지 조류 정보</h2>
    <div className="grid grid-cols-2 gap-2">
      {DetectedBirds.map((bird, index) => (
        <div key={bird.filename} className="bg-gray-800 p-2 rounded">
          <div className="bg-gray-700 rounded">
          <AspectRatio ratio={16 / 9}>
          <ReactPlayer
            url={`http://localhost:5001/${bird.filename}.mp4`}
            playing={true}
        controls={true}  // 기본 컨트롤을 사용하지 않고 자체 UI로 대체 가능
        width="100%"
        height="100%"
        muted={true}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload noplaybackrate',  // 다운로드 금지, 재생 속도 조절 금지
            },
          },
        }}
          />
        </AspectRatio>      </div>
          <p className="text-xs mt-1">YW-0{index} - 조류 영상</p>
        </div>
      ))}
    </div>
    </>
  );
}