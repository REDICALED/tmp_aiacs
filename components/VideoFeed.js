import React, { useEffect, useRef, useState } from "react";

function VideoPlayer({ url, style, onLoaded }) {
  const videoRef = useRef(null);
  const [, setLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {})
          .catch((error) => {
            console.error("Error: ", error);
          });
      }
    }
    return () => {
      if (video) {
        video.pause();
        video.src = "";
        video.load();
      }
    };
  }, [videoRef]);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.onloadeddata = () => {
        setLoading(false);
        onLoaded(); // 비디오가 로드되었을 때 onLoaded 콜백을 호출합니다.
      };
    }
    const webrtc = new RTCPeerConnection({
      iceServers: [
        {
          urls: ["stun:stun.l.google.com:19302"],
        },
      ],
      sdpSemantics: "unified-plan",
    });

    webrtc.ontrack = function (event) {
      console.log(event.streams.length + " track is delivered");
      videoEl.srcObject = event.streams[0];
    };

    webrtc.addTransceiver("video", { direction: "sendrecv" });

    webrtc.onnegotiationneeded = async function handleNegotiationNeeded() {
      const offer = await webrtc.createOffer();
      await webrtc.setLocalDescription(offer);

      fetch(url, {
        method: "POST",
        body: new URLSearchParams({ data: btoa(webrtc.localDescription.sdp) }),
      })
        .then((response) => response.text())
        .then((data) => {
          try {
            webrtc.setRemoteDescription(
              new RTCSessionDescription({ type: "answer", sdp: atob(data) })
            );
          } catch (e) {
            console.warn(e);
          }
        });
    };

    const webrtcSendChannel = webrtc.createDataChannel("rtsptowebSendChannel");
    webrtcSendChannel.onopen = () => {
      console.log(`${webrtcSendChannel.label} has opened`);
      webrtcSendChannel.send("ping");
    };
    webrtcSendChannel.onclose = () => {
      console.log(`${webrtcSendChannel.label} has closed`);
    };
    webrtcSendChannel.onmessage = (event) => console.log(event.data);
    onLoaded();
    // 클린업 함수
    return () => {
      // DataChannel을 닫습니다.
      webrtcSendChannel.close(); 

      // 모든 피어 연결을 종료합니다.
      webrtc.getTransceivers().forEach((transceiver) => {
        if (transceiver.stop) {
          transceiver.stop();
        }
      });

      // 연결을 종료합니다.
      webrtc.close();
    };
  }, [url]);
  /* TODO: 크기 조절 로직  */
  // const handleLoadedData = () => {
  //   setLoading(false);
  //   if (onLoaded) {
  //     onLoaded();
  //   }
  // };
  // const handleMouseDown = (e) => {
  //   setResizing(true);
  //   setStartX(e.clientX);
  //   setStartY(e.clientY);
  //   setWidth(videoRef.current.offsetWidth);
  //   setHeight(videoRef.current.offsetHeight);
  // };

  // const handleMouseMove = (e) => {
  //   if (!resizing || !videoRef.current || !handleRef.current) return;

  //   const newWidth = width + (e.clientX - startX);
  //   const newHeight = height + (e.clientY - startY);

  //   videoRef.current.style.width = `${newWidth}px`;
  //   videoRef.current.style.height = `${newHeight}px`;

  //   handleRef.current.style.right = `${
  //     videoRef.current.offsetWidth - newWidth
  //   }px`;
  //   handleRef.current.style.bottom = `${
  //     videoRef.current.offsetHeight - newHeight
  //   }px`;
  // };

  // const handleMouseUp = () => {
  //   setResizing(false);
  // };

  // const handleRef = useRef(null);

  // useEffect(() => {
  //   if (videoRef.current && handleRef.current) {
  //     handleRef.current.style.top = `${videoRef.current.offsetHeight}px`;
  //     handleRef.current.style.left = `${videoRef.current.offsetWidth}px`;
  //   }
  // }, [videoRef.current?.offsetWidth, videoRef.current?.offsetHeight]);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     if (!resizing) return;
  //     const newWidth = width + (e.clientX - startX);
  //     const newHeight = height + (e.clientY - startY);
  //     videoRef.current.style.width = `${newWidth}px`;
  //     videoRef.current.style.height = `${newHeight}px`;
  //   };

  //   const handleMouseUp = () => {
  //     setResizing(false);
  //     window.removeEventListener("mousemove", handleMouseMove);
  //     window.removeEventListener("mouseup", handleMouseUp);
  //   };

  //   if (resizing) {
  //     window.addEventListener("mousemove", handleMouseMove);
  //     window.addEventListener("mouseup", handleMouseUp);
  //   }

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //     window.removeEventListener("mouseup", handleMouseUp);
  //   };
  // }, [resizing, startX, startY, width, height]);

  return (
    // <div style={{ position: "relative", display: "inline-block" }}>
    //   <video
    //     ref={videoRef}
    //     autoPlay
    //     muted
    //     onLoadedData={handleLoadedData}
    //     // style={{
    //     //   objectFit: "fill",
    //     // }}
    //     style={style}
    //   />
    //   <div
    //     style={{
    //       position: "absolute",
    //       bottom: 0,
    //       right: 0,
    //       width: "20px",
    //       height: "20px",
    //       // backgroundColor: "rgba(0, 0, 0, 0.5)",
    //       cursor: "nwse-resize",
    //     }}
    //     onMouseDown={handleMouseDown}
    //     onMouseMove={handleMouseMove}
    //     onMouseUp={handleMouseUp}
    //   />
    // </div>
    <video
      ref={videoRef}
      autoPlay
      muted
      // onLoadedData={handleLoadedData}
      style={style}
    />
  );
}

export default VideoPlayer;
