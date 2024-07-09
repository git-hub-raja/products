import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const user_credentials = {
  username: "Anand",
  password: "Anand#222",
};

class SignInOrSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      existingUsers: [user_credentials],
      userName: "",
      password: "",
      passwordType: "password",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showOrHidePassword = this.showOrHidePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit = (event) => {
    console.log(event);
    console.log(this.state);
    const filtered_users = this.state.existingUsers.filter((euser) => {
      if (
        euser.username === this.state.userName &&
        euser.password === this.state.password
      ) {
        return true;
      } else {
        return false;
      }
    });

    if (filtered_users.length > 0) {
      alert("Login Successfull");
      const navigate = useNavigate();
      navigate("/view");

      event.preventDefault();
      event.stopPropagation();
    } else {
      alert("Login Failed");
    }
  };

  handleClick = () => {
    // const navigate = useNavigate();
    this.props.navigate("/lpg");
  };

  handleChange = (event, field) => {
    const element = event.currentTarget;
    this.setState({
      [field]: element.value,
    });
  };

  showOrHidePassword = (buttonLabel) => {
    this.setState({
      passwordType: buttonLabel === "Hide" ? "password" : "text",
    });
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={(event) => this.handleSubmit(event)}
          style={{ position: "absolute", inset: "22%",
          padding: "2%",
          borderRadius: "10px" }}>
          <div  style={{ backgroundColor:"gainsboro",
          padding: "2%",
          borderRadius: "10px" }}>
            <Tabs
              defaultActiveKey="signIn"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="signIn" title="Sign In">
                <>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i title="user" className="bi bi-person-fill"></i>
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      type="text"
                      aria-describedby="basic-addon1"
                      value={this.state.userName}
                      onChange={(event) => this.handleChange(event, "userName")}
                      required
                    />
                  </InputGroup>
                  <Link to="/lpg"className="forgot-password-align">Forgot Password</Link>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      <i title="Edit" className="bi bi-lock-fill"></i>
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Password"
                      aria-label="Password"
                      type={this.state.passwordType}
                      aria-describedby="basic-addon2"
                      value={this.state.password}
                      onChange={(event) => this.handleChange(event, "password")}
                      required
                    />
                    <Button
                      variant="outline-secondary"
                      style={{
                        border: "1px solid lightgrey",
                        borderLeftWidth: 0,
                      }}
                      id="button-addon2"
                      onClick={() =>
                        this.showOrHidePassword(
                          this.state.passwordType === "text" ? "Hide" : "Show"
                        )
                      }
                    >
                      {this.state.passwordType === "text" ? (
                        <i title="user" className="bi bi-eye-slash-fill"></i>
                      ) : (
                        <i title="user" className="bi bi-eye-fill"></i>
                      )}
                    </Button>
                  </InputGroup>
                  <p id="passwordHelpBlock" style={{ fontSize: "12px" }}>
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </p>
                  <Button type="submit" onClick={() => this.handleClick()}>
                    Submit
                  </Button>
                </>
              </Tab>
              { <Tab eventKey="signUp" title="Sign Up">
              Sign Up
            </Tab> }
            </Tabs>
          </div>
        </Form>
      </div>
    );
  }
}


const SignInOrSignUpWithRouter = () =>{
        const navigate = useNavigate();
        return <SignInOrSignUp navigate={navigate} />;
}

export default SignInOrSignUpWithRouter;
