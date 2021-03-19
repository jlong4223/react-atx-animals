import { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../services/UserService";
import "./RegisterForm.css";

const RegisterForm = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    admin: "false",
  });

  function handleChange(e) {
    props.updateMessage("");
    setFormState((prevState) => ({
      ...prevState,
      // Using Computed Property Names
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signup(formState);
      props.register();
      // Successfully signed up -sends to another page
      props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      props.updateMessage(err.message);
    }
  }

  function isFormInvalid() {
    return !(
      formState.name &&
      formState.email &&
      formState.password === formState.passwordConf
    );
  }

  return (
    <div className="page signuppage">
      <div className="container">
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <fieldset className="signupfield">
            <legend>Sign Up</legend>
            <div className="form-group">
              <div className="col-sm-12">
                <div className="namebox">
                  <h3 className="icons">
                    <i className="fas fa-user"></i>
                  </h3>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={formState.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <div className="emailbox">
                  <h3 className="icons">
                    <i className="fas fa-envelope-square"></i>
                  </h3>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={formState.email}
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <div className="keybox">
                  <h3 className="icons">
                    <i className="fas fa-key"></i>
                  </h3>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={formState.password}
                    name="password"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <div className="keybox">
                  <h3 className="icons">
                    <i className="fas fa-check"></i>
                  </h3>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={formState.passwordConf}
                    name="passwordConf"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <button
                  className="btn btn-sm btn-primary"
                  style={{ width: "70%" }}
                  disabled={isFormInvalid()}
                >
                  Sign Up
                </button>
              </div>
              <div id="link">
                <Link to="/login">Have an account?</Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
