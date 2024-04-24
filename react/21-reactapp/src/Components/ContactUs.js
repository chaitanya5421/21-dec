import React, { Component } from "react";

class ContactUs extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    phoneErr: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateForm();
  };

  // firstName > 4
  // lastName > 1
  // email include ('@')
  // should be 10 digits

  validateForm = () => {
    let firstNameErr = "";
    let lastNameErr = "";
    let emailErr = "";
    let phoneErr = "";

    // firstName > 4
    if (this.state.firstName.length < 4) {
      firstNameErr = "FirstName should be atleast 4 char";
    }

    //lastName
    if (this.state.lastName.length < 1) {
      lastNameErr = "lastName should be atleast 1 char";
    }

    //phone
    if (this.state.phone.length !== 10) {
      phoneErr = "Enter a valid phone number";
    }

    //email
    if (!this.state.email.includes("@")) {
      emailErr = "Enter a valid email";
    }

    if (firstNameErr || lastNameErr || emailErr || phoneErr) {
      this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr });
    } else {
      this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr });
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h2 className="text-center">ContactUs</h2>
          <form>
            <div className="mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your firstName"
                name="firstName"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.firstNameErr}</p>
            </div>
            <div className="mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your lastName"
                name="lastName"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.lastNameErr}</p>
            </div>
            <div className="mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your phone"
                name="phone"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.phoneErr}</p>
            </div>

            <div className="mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.emailErr}</p>
            </div>

            <div className="text-center mt-3">
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  this.handleSubmit(e);
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    );
  }
}

export default ContactUs;
