import { useState } from "react";
import { sendMail } from "../../services/NodeMailer";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

const ContactPage = (props) => {
  const [emailState, setEmailState] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setEmailState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    try {
      await sendMail({ emailState })
        .then((res) => res.json())
        .then(async (res) => {
          const resData = await res;
          console.log(resData);
          if (resData.status === "success") {
            alert("Message Sent - ATX Animals's team will be in touch soon");
          } else if (resData.status === "fail") {
            alert("Message failed to send");
          }
        })
        .then(() => {
          setEmailState({
            name: "",
            email: "",
            message: "",
          });
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledMain>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 pb-5">
          <form onSubmit={submitEmail}>
            <div className="card  rounded-5">
              {/* Header */}
              <div className="card-header p-0">
                <div className="bg-secondary text-white text-center py-2">
                  <h3>
                    <i className="fa fa-envelope"></i> Contact Us
                  </h3>
                  <p className="m-0">
                    Reach out regarding any questions or concerns!
                  </p>
                </div>
              </div>
              {/* <!--Body--> */}
              <div className="card-body p-3">
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-user text-info"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      value={emailState.name}
                      onChange={handleChange}
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-envelope text-info"></i>
                      </div>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      value={emailState.email}
                      onChange={handleChange}
                      name="email"
                      placeholder="johndoe@gmail.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-comment text-info"></i>
                      </div>
                    </div>
                    <textarea
                      className="form-control"
                      name="message"
                      value={emailState.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      style={{ minHeight: 150 }}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <input
                    type="submit"
                    value="Enter"
                    className="btn btn-secondary btn-block rounded-5 py-2"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </StyledMain>
  );
};

export default ContactPage;
