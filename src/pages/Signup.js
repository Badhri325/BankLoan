import React, { useState } from "react";
function Signup({onSignup, onSwitchToLogin}) {
  const [signupDetails, setsignupDetails] = useState({
    userName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Email Validation Regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Password Validation Regex
  const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{8,16}$/;

  // phone validation Regex
  const phoneRegex = /^[6-9]\d{9}$/;



  // Handle changes in the input fields
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setsignupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    // Clear the specific error when user starts typing in the respective field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear error for the current field
    }));
  };

  // Validate form inputs
  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    // Validate email
    if (!signupDetails.userName) {
      newErrors.userName = "Email is Requried";
      formIsValid = false;
    } else if (!emailRegex.test(signupDetails.userName)) {
      newErrors.userName = "Please enter a valid email address";
      formIsValid = false;
    }

    //check if phone field is empty
    if (!signupDetails.phone) {
      newErrors.phone = "Phone Number is Required";
      formIsValid = false;
    } else if (!phoneRegex.test(signupDetails.phone)) {
      newErrors.phone = "Phone Number Must 10 Digits and Start With 6789";
      formIsValid = false;
    }

    // Check if password field is empty
    if (!signupDetails.password) {
      newErrors.password = "Password is Requried";
      formIsValid = false;
    } else if (!passwordRegex.test(signupDetails.password)) {
      newErrors.password =
        "Password must be 8-16 characters long, include at least one uppercase letter,LowerCase,Symbol,number";
      formIsValid = false;
    }

    //check if confirm password field is empty
    if (!signupDetails.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is Required";
      formIsValid = false;
    } else if (signupDetails.confirmPassword!==signupDetails.password) {
      newErrors.confirmPassword = "Password is Didn't Match";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  // Handle form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Validate the form before calling the parent handler
    if (validateForm()) {
      onSignup(signupDetails);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control mb-3"
            name="userName"
            value={signupDetails.userName}
            onChange={handleLoginChange}
          />
          {errors.userName && (
            <div className="text-danger">{errors.userName}</div>
          )}
        </div>

        <div>
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control mb-3"
            name="phone"
            value={signupDetails.phone}
            onChange={handleLoginChange}
          />
          {errors.phone && <div className="text-danger">{errors.phone}</div>}
        </div>

        <div>
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control mb-3"
            name="password"
            value={signupDetails.password}
            onChange={handleLoginChange}
          />
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </div>

        <div>
          <label className="form-label">confirmPassword</label>
          <input
            type="password"
            className="form-control mb-3"
            name="confirmPassword"
            value={signupDetails.confirmPassword}
            onChange={handleLoginChange}
          />
          {errors.confirmPassword && (
            <div className="text-danger">{errors.confirmPassword}</div>
          )}
        </div>

        <button type="submit" className="btn btn-outline-dark w-100 mt-2">
          Signup
        </button>

        <p>Already have an account <button className="btn btn-link " onClick={onSwitchToLogin}>Login</button></p>
      </form>
    </div>
  );
}

export default Signup;