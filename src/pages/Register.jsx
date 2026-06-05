import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  function register() {

    navigate("/dashboard");
  }

  return (
    <div>

      <h1>Registration</h1>

      <input
        placeholder="Name"
      />

      <br /><br />

      <input
        placeholder="Emergency Contact"
      />

      <br /><br />

      <button onClick={register}>
        Register
      </button>

    </div>
  );
}