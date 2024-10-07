import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../styles/Login.css";
import logo from "../../images/LOGO 1.png";
import img from "../../images/form-img 2.png";
import axios from "axios";
import { baseURL } from "../../utils/baseURL.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connectWithSocketServer } from "../../realtimeCommunication/socketConnection.js";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  function showPasswordFun() {
    setShowPassword(!showPassword);
  }

  function sendDataToApi(values) {
    setLoading(false);

    axios
      .post(baseURL + "users/login", values)
      .then(({ data }) => {
        console.log(data);
        if (data.message == "success") {
          localStorage.setItem("token", data.token);
          connectWithSocketServer(data.token);
          toast.success(`${data.message}`);
          navigate("/");
          setLoading(true);
        } else {
          toast.error(`${data.map((err) => err)}`, {
            position: "bottom-center",
          });
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
        toast.error(`${err.response.data.message}`, {
          position: "bottom-center",
        });
        // setLoading(true);
      });
  }

  function validationSchema() {
    const schema = new Yup.object({
      email: Yup.string().email().min(5).max(100).trim().required(),
      password: Yup.string()
        .min(8)
        .max(30)
        .transform((value, originalValue) => originalValue.replace(/\s/g, ""))
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z])\S{8,30}$/,
          "password should be {8:30} characters & contain at least 1 {lowercase, uppercase & special} character"
        )
        .trim()
        .required(),
    });
    return schema;
  }

  const register = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      sendDataToApi(values);
    },
  });

  return (
    <div className="signUpForm">
      <div className="container-fluid px-5">
        <div className="row gy-5 py-5">
          <div className="col-md-6 bg-white rounded-4 p-5 text-center ">
            <form onSubmit={register.handleSubmit}>
              <h2>Welcome Back!</h2>
              <p className="subtitle mb-5">Login To Access Your Account</p>

              <div className="position-relative mb-4">
                <input
                  type="email"
                  onChange={register.handleChange}
                  onBlur={register.handleBlur}
                  placeholder="Email"
                  className={`form-control email ${
                    register.errors.email && register.touched.email
                      ? "is-invalid"
                      : register.touched.email
                      ? "is-valid"
                      : ""
                  }`}
                  name="email"
                />
                <i
                  className={`fa-solid fa-envelope position-absolute ${
                    register.errors.email && register.touched.email
                      ? "iconError"
                      : register.touched.email
                      ? "iconSucc"
                      : ""
                  }`}
                ></i>
                {register.errors.email && register.touched.email ? (
                  <div className="error-message">
                    <i
                      className="fa-solid fa-caret-up"
                      style={{ color: "#df0016" }}
                    />
                    <p className="m-0 py-1">{register.errors.email}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="position-relative mb-4">
                <input
                  type={showPassword ? "password" : "text"}
                  onChange={register.handleChange}
                  onBlur={register.handleBlur}
                  placeholder="Password"
                  className={`form-control password ${
                    register.errors.password && register.touched.password
                      ? "is-invalid"
                      : register.touched.password
                      ? "is-valid"
                      : ""
                  }`}
                  name="password"
                />
                <i
                  className={`fa-solid position-absolute ${
                    showPassword ? "fa-eye" : "fa-eye-slash"
                  } ${
                    register.errors.password && register.touched.password
                      ? "iconError"
                      : register.touched.password
                      ? "iconSucc"
                      : ""
                  }   `}
                  onClick={() => {
                    showPasswordFun();
                  }}
                ></i>
                <i
                  className={`fa-solid fa-lock position-absolute ${
                    register.errors.password && register.touched.password
                      ? "iconError"
                      : register.touched.password
                      ? "iconSucc"
                      : ""
                  }`}
                ></i>
                {register.errors.password && register.touched.password ? (
                  <div className="error-message">
                    <i
                      className="fa-solid fa-caret-up"
                      style={{ color: "#df0016" }}
                    />
                    <p className="m-0 py-1">{register.errors.password}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <button
                type="submit"
                disabled={!(register.dirty && register.isValid)}
                className="formBtn btn w-100 rounded-pill text-white mb-4"
              >
                {loading ? "Login" : <i className="fa fa-spinner fa-spin"></i>}
              </button>

              <p className="formLink">
                Don’t have an account ?{" "}
                <Link to={"/auth/signup"}>Sign Up Here</Link>
              </p>
            </form>
          </div>
          <div className="offset-md-1 col-md-5 py-5">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <img src={img} alt="form image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
