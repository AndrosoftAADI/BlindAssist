import { useEffect, useRef } from "react";

export default function CameraFeed() {

  const videoRef = useRef(null);

  useEffect(() => {

    async function startCamera() {

      try {

        const stream =
          await navigator.mediaDevices.getUserMedia({
            video: true
          });

        console.log("Camera Started");

        if (videoRef.current) {

          videoRef.current.srcObject = stream;

        }

      } catch (err) {

        console.error("Camera Error:", err);

      }
    }

    startCamera();

  }, []);

  return (

    <div>

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        width="800"
        height="600"
        style={{
          border: "2px solid white"
        }}
      />

    </div>

  );
}