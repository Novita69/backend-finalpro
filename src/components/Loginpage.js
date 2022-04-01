import React, {useState} from "react";
import axios from "axios";
import "./login-form.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { FacebookLoginButton } from "react-social-login-buttons";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password
      });
      navigate("/Home");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <Form onSubmit={Auth} className="login-form">
      <h5>
        <span className="text-center">Paimon Recipe Website Login</span>
      </h5>
      <h2 className="text-center">Welcome : </h2>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="paimonuwu@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
      </FormGroup>
      <Button color="primary" size="lg" block>
        Login
      </Button>
      <div className="text-center pt-3">
        Or continue with your social account
      </div>
      <FacebookLoginButton className="mt-3 mb-3" />
      <div className="text-center">
        <Link to="/Registerpage">Sign up</Link>
        <span className="p-2">|</span>
        <Link to="#">Forgot Password</Link>
      </div>
    </Form>
  );
};

export default Loginpage;
