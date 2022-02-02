import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SignupSVG from "./SignupSVG";

const SignUp = () => {
  function moveToAccountForm() {
    const personalForm = document.getElementById("personalForm");
    const accountForm = document.getElementById("accountForm");
    const progress = document.getElementById("progress");
    personalForm.style.left = "-450px";
    accountForm.style.left = "40px";
    progress.style.width = "490px";
  }
  return (
    <div>
      <Row>
        <Col className="colContainer">
          <div className="svgContainer">
            <SignupSVG />
          </div>
        </Col>
        <Col>
          <div>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20%",
                color: "#3A2E39",
              }}
            >
              Hey there! We are glad you are here
            </h1>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#3A2E39",
              }}
            >
              Kindly fill this form to sign up
            </h1>
            <div className="signupContainer">
              <form id="personalForm" className="signupForms">
                <h5 className="signupHeaders">PERSONAL</h5>
                <input
                  placeholder="First name"
                  type="text"
                  className="signupInput"
                />
                <input
                  placeholder="Last name"
                  type="text"
                  className="signupInput"
                />
                <input
                  placeholder="Phone number"
                  type="number"
                  className="signupInput"
                />
                <div className="btnBox">
                  <button
                    type="button"
                    id="Next1"
                    className="formButton"
                    onClick={() => moveToAccountForm()}
                  >
                    Next
                  </button>
                </div>
              </form>

              <form id="accountForm" className="signupForms">
                <h5 className="signupHeaders">CREATE ACCOUNT</h5>
                <input
                  placeholder="Email"
                  type="email"
                  className="signupInput"
                />
                <input
                  placeholder="Password"
                  type="text"
                  className="signupInput"
                />
                <input
                  placeholder="Re-enter password"
                  type="text"
                  className="signupInput"
                />
                <div className="btnBox">
                  <button
                    type="button"
                    id="Back1"
                    className="formButton"
                    style={{ fontWeight: "bold", fontSize: 18 }}
                  >
                    Back
                  </button>
                  <Link to="/homescreen">
                    <button
                      type="button"
                      id="Submit"
                      className="formButton"
                      style={{ fontWeight: "bold", fontSize: 18 }}
                    >
                      Submit
                    </button>
                  </Link>
                </div>
              </form>

              <div className="stepRow">
                <div id="progress"></div>
                <div className="stepCol">
                  <small style={{ fontWeight: "bold", fontSize: 18 }}>
                    Step 1
                  </small>
                </div>
                <div className="stepCol">
                  <small style={{ fontWeight: "bold", fontSize: 18 }}>
                    Step 2
                  </small>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
