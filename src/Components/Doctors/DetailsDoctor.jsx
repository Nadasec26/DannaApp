import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Calendar from "react-calendar";
import { baseURL } from "../../utils/baseURL";
import viza from "../../images/image 18.png";
import "../../styles/DetailsDoctor.css";

const DetailsDoctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(baseURL + "users/getAnotherUser/" + id, { headers: { token } })
      .then((response) => {
        setDoctor(response.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="DetailsDoctor mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-8  col-md-12 col-lg-8 card-img-doctor">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-5 p-3">
                  <img
                    src={doctor.profileImage?.url}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                  <div className="rate-doc">
                    <ul>
                      <li
                        style={{
                          color: "#B2AEAE",
                          fontSize: "18px",
                          fontWeight: "700",
                        }}
                      >
                        6.3
                      </li>
                      <li>
                        <i className="bi bi-star-fill"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h2 className="card-title">Dr. {doctor.userName}</h2>
                    <h4 className="card-title2">The modern mother </h4>
                    <p className="card-text">
                      <small className="text-muted">About a doctor</small>
                    </p>
                    <p className="card-text">
                      The modern mother is under great pre The modern mother is
                      <br /> under great pre The modern mother is under great
                      pre The <br />
                      modern mother is under great pre The modern mother is
                      <br /> under great pre The modern mother is under great
                      pre The
                      <br /> modern mother is under great pre The modern mother
                      is
                      <br /> under great preThe modern mothe
                    </p>
                    <div className="d-flex">
                      <div className="chat-video">
                        <ul>
                          <li>
                            <a className="chat">
                              <i className="bi bi-chat-dots"></i>
                            </a>
                          </li>
                          <li>
                            <a className="video">
                              <i className="bi bi-camera-video"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p className="price">$95</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card section-two">
                  <div className="card-body">
                    <div className="icon">
                      <ul>
                        <li className="user">
                          <i className="bi bi-person-fill"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <h5 className="card-title">Total Patienets</h5>
                      <p className="card-text">1,344</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card section-two">
                  <div className="card-body">
                    <div className="icon">
                      <ul>
                        <li className="exp">
                          <i className="bi bi-stars"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <h5 className="card-title">Experiences</h5>
                      <p className="card-text">10 years</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card section-two">
                  <div className="card-body">
                    <div className="icon">
                      <ul>
                        <li className="star">
                          <i className="bi bi-star-fill"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <h5 className="card-title">Rate</h5>
                      <p className="card-text">1,34</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="time">
              <h2>Time</h2>
              <div className="card card-time">
                <div className="morning">
                  <div className="card-morning">
                    <div className="icon">
                      <ul>
                        <li className="morning">
                          <i className="bi bi-cloud-sun-fill"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <h5 className="card-title">Morning</h5>
                      <p className="card-text">9:00AM to 12.00PM</p>
                    </div>
                  </div>
                  <div className="row row-cols-2 row-cols-lg-3 p-3 me-2">
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date active">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date unactive">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date active">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date">9:00AM</div>
                    </div>
                  </div>
                </div>
                <div className="evening">
                  <div className="card-evening">
                    <div className="icon">
                      <ul>
                        <li className="evening">
                          <i className="bi bi-cloud-moon-fill"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <h5 className="card-title">Evening</h5>
                      <p className="card-text">9:00AM to 12.00PM</p>
                    </div>
                  </div>
                  <div className="row row-cols-2 row-cols-lg-3 p-3 me-2">
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date active">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date unactive">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date">9:00AM</div>
                    </div>
                    <div className="col-4 col-lg-2 col-md-3">
                      <div className="card date active">9:00AM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-9 col-lg-4">
            <div className="card p-3 calender">
              <Calendar />
            </div>
            <div className="card mt-3 card-booking-details">
              <h4 className="booking-details">Booking Details</h4>
              <div className="card_all_booking_details">
                <div className="time_date">
                  <span className="para_time_date">time$date</span>
                  <ul className=" ">
                    <li>
                      <i className="bi bi-clock-history"></i>
                    </li>
                    <li
                      style={{
                        color: "rgba(0, 0, 0, 0.22)",
                        fontWeight: "550",
                      }}
                    >
                      06.00 AM sat , 08 Mar 2018
                    </li>
                  </ul>
                </div>
                <div className="time_date">
                  <span className="para_time_date">Duration</span>
                  <ul className=" ">
                    <li>
                      <i className="bi bi-clock-history"></i>
                    </li>
                    <li
                      style={{
                        color: "rgba(0, 0, 0, 0.22)",
                        fontWeight: "550",
                      }}
                    >
                      30min
                    </li>
                  </ul>
                </div>
                <div className="payment_Detail">
                  <span className="para_time_date">payment Detail</span>
                  <ul className="payment_Detailul1 ">
                    <li
                      style={{
                        color: "rgba(0, 0, 0, 0.22)",
                        fontWeight: "550",
                      }}
                    >
                      Consultation
                    </li>
                    <li>200.00EGP</li>
                  </ul>
                  <ul className="payment_Detailul2">
                    <li
                      style={{
                        color: "rgba(0, 0, 0, 0.22)",
                        fontWeight: "550",
                      }}
                    >
                      Admin Fee
                    </li>
                    <li>01.00EGP</li>
                  </ul>

                  <ul className="payment_Detailul3">
                    <li>Total</li>
                    <li style={{ color: "#32AA90", fontWeight: "400" }}>
                      {" "}
                      201.00EGP
                    </li>
                  </ul>
                  <div>
                    <h5 className="para_Payment_Method">Payment Method</h5>
                    <div>
                      <img src={viza} alt="" className="img_viza w-25" />
                    </div>
                    <div className="total_amount">
                      <ul className="payment_Detailul4">
                        <li>Total_Amount</li>
                        <li style={{ color: "#32AA90", fontWeight: "400" }}>
                          {" "}
                          201.00EGP
                        </li>
                      </ul>
                      <Link to={`/doctor/${doctor._id}`}>
                        <button>procced to pay</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsDoctor;
