export default function EmergencySOS() {
  async function sendEmergency() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;

        const lon = position.coords.longitude;

        const mapsLink = `https://maps.google.com/?q=${lat},${lon}`;

        const message = `EMERGENCY! I need help. My location: ${mapsLink}`;

        const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;

        window.open(whatsappLink, "_blank");

        const speech = new SpeechSynthesisUtterance(
          "Emergency message prepared",
        );

        speechSynthesis.speak(speech);
      },

      (error) => {
        alert("Location access denied");
      },
    );
  }

  return <button onClick={sendEmergency}>Emergency SOS</button>;
}
