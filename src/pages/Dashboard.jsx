import CameraFeed from "../components/CameraFeed";
import VoiceControl from "../components/VoiceControl";
import ObjectDetection from "../components/ObjectDetection";
import TrafficLightDetection from "../components/TrafficLightDetection";
import OCRReader from "../components/OCRReader";
import EmergencySOS from "../components/EmergencySOS";

export default function Dashboard() {

  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        padding: "20px"
      }}
    >
      <h1>
        Blind Assist Dashboard
      </h1>

      <VoiceControl />

      <ObjectDetection />

      <TrafficLightDetection />

      <CameraFeed />
      <OCRReader />
      <EmergencySOS />

      <div
        style={{
          marginTop: "20px",
          fontSize: "20px"
        }}
      >
        AI Navigation Active
      </div>
    </div>
  );
}