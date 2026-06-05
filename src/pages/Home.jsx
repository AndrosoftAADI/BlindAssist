import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Blind Assist AI</h1>

      <Link to="/register">
        <button>Start</button>
      </Link>
    </div>
  );
}