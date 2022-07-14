import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { UserAuth } from "../context/AuthContext";
import image1 from "../hartleylab.jpg";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password || !values.cpassword) {
    errors.password = "password";
  }

  return errors;
};

const Signup = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  console.log(user);
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await signUp(email, password);
  //     navigate("/home");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));

      try {
        signUp(values.email, values.password);
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    },
  });
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
                onSubmit={formik.handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  className="p-1 my-2 bg-gray-700 rounded"
                />
                {formik.errors.firstName ? (
                  <div>{formik.errors.firstName}</div>
                ) : null}

                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  className="p-1 my-2 bg-gray-700 rounded"
                />
                {formik.errors.lastName ? (
                  <div>{formik.errors.lastName}</div>
                ) : null}

                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="p-1 my-2 bg-gray-700 rounded"
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="p-1 my-2 bg-gray-700 rounded"
                />
                {formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}

                <label htmlFor="password">Confirm Password</label>
                <input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.cpassword}
                  className="p-1 my-2 bg-gray-700 rounded"
                />
                {formik.errors.cpassword ? (
                  <div>{formik.errors.cpassword}</div>
                ) : null}

                <button
                  type="submit"
                  className="bg-red-600 py-3 my-2 rounded font-bold"
                >
                  Submit
                </button>
                <p className="py-8">
                  <span className="text-red-700">
                    Already subscribed to Hartley?
                  </span>{" "}
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
