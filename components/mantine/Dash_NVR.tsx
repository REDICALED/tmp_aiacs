import VideoFeed from "@/components/VideoFeed";
import { useState } from 'react';
import ReactPlayer from "react-player";

export function Dash_NVR({ title }: { title: string }) {
    const [, setLoadingCount] = useState(9);

    const handleLoaded = () => {
      setLoadingCount((count) => count - 1); // VideoFeed 컴포넌트가 로딩을 완료하면 카운트를 감소시킵니다.
    };
  return (
    <>
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <div className="grid grid-cols-2 gap-2">
            {[0, 1].map((i) => (
            <div key={i} className="bg-gray-800 p-2 rounded">
                <div className="bg-gray-700 h-40 rounded">
                {/* <VideoFeed
                    key={i}
                    url={`/DummyDB/wave1.mp4`}
                    // url={`http://118.131.66.49:5003/stream/rian-cam/channel/0/webrtc?uuid=rian-cam&channel=0`}
                    style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    }}
                    onLoaded={handleLoaded}
                /> */}
                <ReactPlayer
                            url={`/DummyDB/wave${i+1}.mp4`}
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
                </div>
                <p className="text-xs mt-1">YW-0{i} - 실시간</p>
            </div>
            ))}
        </div>
    </>
  );
}