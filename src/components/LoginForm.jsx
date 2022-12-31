import React from "react";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput"; 
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      const sendSubmit = () => {
        navigate("/");
      };
      sendSubmit();
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to login!");
    }
  }
  return (
    <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
      <TextInput
        type="email"
        placeholder="Enter Email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput type="password" placeholder="Enter Password" icon="lock" 
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>

      <Button 
       disabled={loading}  type="submit">
        <span>Submit Now</span>
      </Button>
            {error && <p className="error">{error}</p>}

      <div className="info">
        Don't Have account? <Link to="/signup">Signup</Link> First.
      </div>
    </Form>
  );
}
