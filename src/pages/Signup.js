import React, { Component } from "react";

import { withFormik } from "formik";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import image1 from "../hartleylab.jpg";

class MyForm extends Component {
  render() {
    const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
      this.props;

    return (
      <>
        <div className="w-full h-screen">
          <img
            className="hidden sm:block absolute w-full h-full object-cover"
            src={image1}
            alt="/"
          />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
          <div className="fixed w-full px-4 py-16 z-50">
            <div className="max-w-[450px] h-[550px] mx-auto bg-black/70 text-white">
              <div className="max-w-[320px] mx-auto py-4">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col py-4"
                >
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    name="name"
                    className="p-1 my-2 bg-gray-700 rounded"
                  />
                  {errors.name && touched.name && (
                    <div id="feedback">{errors.name}</div>
                  )}

                  <label htmlFor="LastName">Last Name</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                    name="lastname"
                    className="p-1 my-2 bg-gray-700 rounded"
                  />
                  {errors.lastname && touched.lastname && (
                    <div id="feedback">{errors.lastname}</div>
                  )}
                  <label htmlFor="Email">Email</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Email}
                    name="Email"
                    className="p-1 my-2 bg-gray-700 rounded"
                  />
                  {errors.Email && touched.Email && (
                    <div id="feedback">{errors.Email}</div>
                  )}
                  <label htmlFor="Password">Password</label>
                  <input
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Password}
                    name="Password"
                    className="p-1 my-2 bg-gray-700 rounded"
                  />
                  {errors.Password && touched.Password && (
                    <div id="feedback">{errors.Password}</div>
                  )}

                  <label htmlFor="CPassword">Confirm Password</label>
                  <input
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.CPassword}
                    name="CPassword"
                    className="p-1 my-2 bg-gray-700 rounded"
                  />
                  {errors.CPassword && touched.CPassword && (
                    <div id="feedback">{errors.CPassword}</div>
                  )}

                  <button
                    type="submit"
                    className="bg-red-600 py-3 my-2 rounded font-bold"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const Signup = withFormik({
  mapPropsToValues: () => ({
    name: "",
    lastname: "",
    Email: "",
    Password: "",
    CPassword: "",
  }),

  // Custom sync validation
  validate: (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.Email) {
      errors.Email = "Required";
    }
    if (!values.Password) {
      errors.Password = "Required";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      try {
        createUserWithEmailAndPassword(auth, values.Email, values.Password);
      } catch (error) {
        console.log(error);
      }
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(MyForm);
export default Signup;
