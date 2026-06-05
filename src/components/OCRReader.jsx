import { useState } from "react";
import Tesseract from "tesseract.js";

export async function runOCR() {
  const video = document.getElementById("camera");

  if (!video) return;

  const canvas = document.createElement("canvas");

  canvas.width = video.videoWidth;

  canvas.height = video.videoHeight;

  const ctx = canvas.getContext("2d");

  ctx.drawImage(video, 0, 0);

  const image = canvas.toDataURL("image/png");

  const result = await Tesseract.recognize(image, "eng");

  const text = result.data.text.trim();

  if (text.length > 0) {
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  } else {
    speechSynthesis.speak(new SpeechSynthesisUtterance("No text detected"));
  }
}
export default function OCRReader() {
  const [reading, setReading] = useState(false);

  async function readText() {
    const video = document.getElementById("camera");

    if (!video) return;

    setReading(true);

    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;

    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0);

    const image = canvas.toDataURL("image/png");

    const result = await Tesseract.recognize(image, "eng");

    const text = result.data.text.trim();

    if (text.length > 0) {
      const speech = new SpeechSynthesisUtterance(text);

      window.speechSynthesis.speak(speech);

      alert("Text Found:\n\n" + text);
    } else {
      alert("No text detected");
    }

    setReading(false);
  }

  return (
    <button onClick={readText}>{reading ? "Reading..." : "Read Text"}</button>
  );
}
