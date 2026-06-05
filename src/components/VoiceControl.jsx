import { useEffect } from "react";
import { runOCR } from "./OCRReader";

export default function VoiceControl() {
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const command =
        event.results[
          event.results.length - 1
        ][0].transcript.toLowerCase();

      console.log(command);

      if (command.includes("charlie read text")) {
        speechSynthesis.speak(
          new SpeechSynthesisUtterance("Reading text")
        );

        runOCR();
      }

      if (command.includes("charlie start")) {
        alert("Detection Started");
      }

      if (command.includes("charlie stop")) {
        alert("Detection Stopped");
      }

      if (command.includes("charlie emergency")) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const maps =
              `https://maps.google.com/?q=${lat},${lon}`;

            window.open(
              `https://wa.me/?text=${encodeURIComponent(
                "EMERGENCY! My location: " + maps
              )}`,
              "_blank"
            );

            speechSynthesis.speak(
              new SpeechSynthesisUtterance(
                "Emergency message sent"
              )
            );
          }
        );
      }
    };

    recognition.start();

    return () => recognition.stop();
  }, []);

  return <h2>Voice Control Active</h2>;
}