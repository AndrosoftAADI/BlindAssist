import CameraFeed from "../components/CameraFeed";
import VoiceControl from "../components/VoiceControl";
import OCRReader from "../components/OCRReader";
import ObjectDetection from "../components/ObjectDetection";
import EmergencySOS from "../components/EmergencySOS";

export default function Dashboard() {
  return (
    <div
      style={{
        background: "#120826",
        color: "white",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Blind Assist Dashboard</h1>

      <VoiceControl />

      <CameraFeed />

      <OCRReader />

      <ObjectDetection />

      <EmergencySOS />
    </div>
  );
}