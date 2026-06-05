export default function EmergencySOS() {
  function sendSOS() {
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
      }
    );
  }

  return (
    <button onClick={sendSOS}>
      Emergency SOS
    </button>
  );
}