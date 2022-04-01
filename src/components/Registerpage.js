import { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./login-form.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Registerpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Form onSubmit={Register} className="login-form">
      <h5 className="text-center">Register Page</h5>
      <FormGroup onSubmit={Register}>
        <Label>Name</Label>
        <Input
          type="text"
          className="input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Confirm Password</Label>
        <Input
          type="password"
          className="input"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
          placeholder="Password"
        ></Input>
      </FormGroup>
      <Button color="primary" size="lg" block>
        Sign Up
      </Button>
      <div className="text-center pt-3">Or have an account? Login here</div>
      <Link to="/">
        <Button className="mt-2 mb-2" color="primary" size="lg" block>
          Login
        </Button>
      </Link>
    </Form>
  );
};

export default Registerpage;
