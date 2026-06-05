import { useEffect, useRef } from "react";

export default function TrafficLightDetection() {

  const lastMessage = useRef("");
  const lastTime = useRef(0);

  function speak(text) {

    window.speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(
      utterance
    );
  }

  useEffect(() => {

    const interval = setInterval(() => {

      const canvas =
        document.getElementById(
          "overlay"
        );

      const video =
        document.getElementById(
          "camera"
        );

      if (
        !video ||
        !canvas
      )
        return;

      const ctx =
        document.createElement(
          "canvas"
        ).getContext("2d");

      ctx.canvas.width =
        video.videoWidth;

      ctx.canvas.height =
        video.videoHeight;

      ctx.drawImage(
        video,
        0,
        0
      );

      const imageData =
        ctx.getImageData(
          0,
          0,
          ctx.canvas.width,
          ctx.canvas.height
        );

      let redPixels = 0;
      let greenPixels = 0;
      let yellowPixels = 0;

      for (
        let i = 0;
        i < imageData.data.length;
        i += 4
      ) {

        const r =
          imageData.data[i];

        const g =
          imageData.data[i + 1];

        const b =
          imageData.data[i + 2];

        if (
          r > 200 &&
          g < 120 &&
          b < 120
        ) {
          redPixels++;
        }

        if (
          g > 180 &&
          r < 150 &&
          b < 150
        ) {
          greenPixels++;
        }

        if (
          r > 180 &&
          g > 180 &&
          b < 120
        ) {
          yellowPixels++;
        }
      }

      let message = "";

      if (
        redPixels >
          greenPixels &&
        redPixels >
          yellowPixels &&
        redPixels > 1000
      ) {

        message =
          "Red light. Wait.";

      } else if (

        greenPixels >
          redPixels &&
        greenPixels >
          yellowPixels &&
        greenPixels > 1000

      ) {

        message =
          "Green light. Cross now.";

      } else if (

        yellowPixels >
          redPixels &&
        yellowPixels >
          greenPixels &&
        yellowPixels > 1000

      ) {

        message =
          "Yellow light. Prepare to stop.";

      }

      if (
        message &&
        (
          message !==
            lastMessage.current ||

          Date.now() -
            lastTime.current >
            5000
        )
      ) {

        console.log(
          message
        );

        speak(
          message
        );

        lastMessage.current =
          message;

        lastTime.current =
          Date.now();
      }

    }, 2000);

    return () =>
      clearInterval(
        interval
      );

  }, []);

  return (
    <h2>
      Traffic Light Detection Active
    </h2>
  );
}