import VideoFeed from "@/components/VideoFeed";
import { useState } from 'react';

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
                <VideoFeed
                    key={i}
                    url={`http://localhost:8080/stream/rian-cam/channel/${i}/webrtc?uuid=rian-cam&channel=${i}`}
                    // url={`http://118.131.66.49:5003/stream/rian-cam/channel/0/webrtc?uuid=rian-cam&channel=0`}
                    style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    }}
                    onLoaded={handleLoaded}
                />
                </div>
                <p className="text-xs mt-1">YW-0{i} - 실시간</p>
            </div>
            ))}
        </div>
    </>
  );
}