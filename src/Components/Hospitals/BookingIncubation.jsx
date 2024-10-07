import React, { useEffect, useState } from "react";
import img from "../../images/bookdet.png";
import img2 from "../../images/visa.png";
import icon1 from "../../images/Payment method icon.png";
import icon2 from "../../images/Payment method icon (1).png";
import icon3 from "../../images/Payment method icon (2).png";
import { Link, useParams } from "react-router-dom";
import logoLoading from "../../images/wBg-loader.gif";
import { getIncubationDetails } from "../../api.js";
import { useDispatch, useSelector } from "react-redux";
import { getUserChildren } from "../../store/actions/userActions.js";
import { getHospitalAddress } from "../../store/actions/hospitalActions.js";
import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "../../utils/baseURL.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./BookingIncubation.css";

export default function BookingIncubation() {
  const { id } = useParams();
  const [incubationLoading, setIncubationLoading] = useState(true);
  const [incubation, setIncubation] = useState({});
  const { hospital } = useSelector((state) => state.hospital);
  const { userChildren } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await getIncubationDetails(id);
      const childrenPromise = getUserChildren(dispatch);
      const addressPromise = getHospitalAddress(dispatch, data.hospital._id);
      await Promise.all([childrenPromise, addressPromise]);
      setIncubation(data);
      setIncubationLoading(false);
    })();
  }, []);

  // __________________________________________________________

  const [loading, setLoading] = useState(true);
  function sendDataToApi(values) {
    setLoading(false);

    const token = localStorage.getItem("token");

    axios
      .post(baseURL + "bookIncubation", values, { headers: { token } })
      .then(({ data }) => {
        if (data.message == "success") {
          toast.info("Your checkout is ready");
          setLoading(true);
          window.location.href = data.session.url;
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
      });
  }

  const reasons = [
    "Jaundice",
    "Premature Birth",
    "Heart Problems",
    "Respiratory Problems",
    "Down Syndrome",
    "Other",
  ];

  function validationSchema() {
    const schema = new Yup.object({
      child: Yup.string().length(24).required("Your Child is required"),
      reasonForReservation: Yup.string()
        .required("Reason For Reservation is required")
        .oneOf(reasons),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .length(11, "Phone number must be exactly 11 digits")
        .matches(
          /^(012|010|011|015)\d{8}$/,
          "Phone number must be a valid Egyptian number"
        ),
    });
    return schema;
  }

  const bookIncubation = useFormik({
    initialValues: {
      incubation: "",
      child: "",
      reasonForReservation: "",
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: (values) => {
      values.incubation = incubation._id;
      sendDataToApi(values);
    },
  });

  // __________________________________________________________

  return (
    <>
      {incubationLoading ? (
        <div
          className="text-center"
          style={{ height: "100vh", backgroundColor: "white" }}
        >
          <img
            src={logoLoading}
            alt=""
            style={{ width: "40%", backgroundColor: "white" }}
          />
        </div>
      ) : (
        <div className="BookDetail">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6"
                style={{ backgroundColor: "rgba(217, 217, 217, 0.31)" }}
              >
                <img src={img} className="w-100" alt="" />
                <div className="d-flex gap-3 mt-1 p-2">
                  <p className="text-muted">{incubation.name}</p>
                  <div className="d-flex">
                    <div>
                      <i
                        className="bi bi-star-fill"
                        style={{ color: "rgba(255, 199, 0, 1)" }}
                      ></i>
                      <i
                        className="bi bi-star-fill"
                        style={{ color: "rgba(255, 199, 0, 1)" }}
                      ></i>
                      <i
                        className="bi bi-star-fill"
                        style={{ color: "rgba(255, 199, 0, 1)" }}
                      ></i>
                      <i
                        className="bi bi-star-fill"
                        style={{ color: "rgba(255, 199, 0, 1)" }}
                      ></i>
                    </div>
                    <p className="fw-bold">6.4</p>
                  </div>
                </div>
                <h4 className="mt-4" style={{ color: "rgba(50, 170, 144, 1)" }}>
                  Details about your Incubation
                </h4>
                <div>
                  <div className="d-flex mt-5 border-bottom justify-content-between">
                    <div className="d-flex gap-2">
                      <i
                        className="bi bi-geo-alt-fill"
                        style={{ color: "rgba(25, 118, 210, 1)" }}
                      ></i>
                    </div>
                    <p
                      style={{
                        color: "rgba(50, 170, 144, 1)",
                        marginLeft: "5px",
                      }}
                    >
                      {hospital.address}
                    </p>
                  </div>
                  <div className="d-flex mt-4 border-bottom justify-content-between">
                    <p className="text-muted">Name Of Hospital</p>
                    <p className="text-muted fs-5">
                      {incubation.hospital?.userName}
                    </p>
                  </div>
                  <div className="d-flex mt-4 border-bottom justify-content-between">
                    <p className="text-muted">Code Of Incabation</p>
                    <p className="text-muted fs-5">{incubation.name}</p>
                  </div>
                  <div className="d-flex mt-4 border-bottom justify-content-between">
                    <p className="text-muted">1 Day</p>
                    <p className="text-muted fs-5">{incubation.price} .EGP</p>
                  </div>
                  <div className="d-flex mt-4 justify-content-between">
                    <p className="text-muted fw-bold">Price</p>
                    <p className="text-muted fs-5 fw-bold">
                      {incubation.price} .EGP
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-center">
                  <img src={img2} className="w-75" alt="" />
                </div>

                {/* _________________________________________________________________________________________ */}
                {/* _________________________________________________________________________________________ */}

                <div className="bookIncubationForm">
                  <div className="container-fluid px-5">
                    <div className="row gy-5 py-5">
                      <div className="col-md-12 bg-white rounded-4 text-center ">
                        <form onSubmit={bookIncubation.handleSubmit}>
                          <div className="position-relative mb-4">
                            <select
                              className={`form-select  ${
                                bookIncubation.errors.child &&
                                bookIncubation.touched.child
                                  ? "is-invalid"
                                  : bookIncubation.touched.child
                                  ? "is-valid"
                                  : ""
                              }`}
                              name="child"
                              value={bookIncubation.values.child}
                              onChange={bookIncubation.handleChange}
                              onBlur={bookIncubation.handleBlur}
                            >
                              <option value="" hidden>
                                Choose Your Child
                              </option>
                              {userChildren.map((child, index) => (
                                <option key={index} value={child._id}>
                                  {child.childName}
                                </option>
                              ))}
                            </select>
                            <i className="fa-solid fa-sort-down position-absolute "></i>
                            {bookIncubation.errors.child &&
                            bookIncubation.touched.child ? (
                              <div className="error-message">
                                <i
                                  className="fa-solid fa-caret-up"
                                  style={{ color: "#df0016" }}
                                />
                                <p className="m-0 py-1">
                                  {bookIncubation.errors.child}
                                </p>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>

                          <div className="position-relative mb-4">
                            <select
                              className={`form-select  ${
                                bookIncubation.errors.reasonForReservation &&
                                bookIncubation.touched.reasonForReservation
                                  ? "is-invalid"
                                  : bookIncubation.touched.reasonForReservation
                                  ? "is-valid"
                                  : ""
                              }`}
                              name="reasonForReservation"
                              value={bookIncubation.values.reasonForReservation}
                              onChange={bookIncubation.handleChange}
                              onBlur={bookIncubation.handleBlur}
                            >
                              <option value="" hidden>
                                Choose Reason for Reservation
                              </option>
                              {reasons.map((reason, index) => (
                                <option key={index} value={reason}>
                                  {reason}
                                </option>
                              ))}
                            </select>
                            <i className="fa-solid fa-sort-down position-absolute "></i>
                            {bookIncubation.errors.reasonForReservation &&
                            bookIncubation.touched.reasonForReservation ? (
                              <div className="error-message">
                                <i
                                  className="fa-solid fa-caret-up"
                                  style={{ color: "#df0016" }}
                                />
                                <p className="m-0 py-1">
                                  {bookIncubation.errors.reasonForReservation}
                                </p>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>

                          <div className="row gy-4 mb-4">
                            <div className="col-md-12 position-relative">
                              <input
                                type="text"
                                onChange={bookIncubation.handleChange}
                                onBlur={bookIncubation.handleBlur}
                                placeholder="Phone Number"
                                className={`form-control ${
                                  bookIncubation.errors.phoneNumber &&
                                  bookIncubation.touched.phoneNumber
                                    ? "is-invalid"
                                    : bookIncubation.touched.phoneNumber
                                    ? "is-valid"
                                    : ""
                                }`}
                                name="phoneNumber"
                              />
                              {bookIncubation.errors.phoneNumber &&
                              bookIncubation.touched.phoneNumber ? (
                                <div className="error-message">
                                  <i
                                    className="fa-solid fa-caret-up"
                                    style={{ color: "#df0016" }}
                                  />
                                  <p className="m-0 py-1">
                                    {bookIncubation.errors.phoneNumber}
                                  </p>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          {/* __________________________________ */}

                          <div className="d-flex justify-content-between">
                            <div className="d-flex gap-2">
                              <i
                                className="bi bi-check-circle-fill"
                                style={{ color: "rgba(2, 2, 70, 1)" }}
                              ></i>
                              <p style={{ color: "rgba(52, 64, 84, 1)" }}>
                                Pay with Credit Card
                              </p>
                            </div>
                            <div className="d-flex gap-2 my-3">
                              <img
                                src={icon1}
                                style={{ width: "35%" }}
                                alt=""
                              />
                              <img
                                src={icon2}
                                style={{ width: "35%" }}
                                alt=""
                              />
                              <img
                                src={icon3}
                                style={{ width: "35%" }}
                                alt=""
                              />
                            </div>
                          </div>
                          {/* __________________________________ */}

                          <button
                            type="submit"
                            disabled={
                              !(bookIncubation.dirty && bookIncubation.isValid)
                            }
                            className="formBtn btn w-100 rounded-pill text-white mb-4"
                          >
                            {loading ? (
                              "Checkout"
                            ) : (
                              <i className="fa fa-spinner fa-spin"></i>
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
