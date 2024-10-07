import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Ellipse from "../../images/PROFILE IMG.png";
import "../../styles/ProfileDr.css";
import Avatar from "react-avatar-edit";
import { useSelector } from "react-redux";

export default function ProfileDr() {
  const { user } = useSelector((state) => state.user);

  const [image, setimage] = useState("");
  const [imageCrop, setimageCrop] = useState("");
  const [src, setsrc] = useState(false);
  const [profile, setprofile] = useState([]);
  const [pview, setpview] = useState(false);

  const profileFinal = profile.map((item) => item.pview);

  const onClose = () => {
    setpview(null);
  };
  const onCrop = (view) => {
    setpview(view);
  };
  const saveCropImage = () => {
    setprofile([...profile, { pview }]);
    setimageCrop(false);
  };
  return (
    <div className="profile p-5">
      <div className="container-fluid">
        <div className="row gy-4">
          <div className="col-sm-4">
            <div className="sidebar bg-white shadow rounded w-100">
              <ul className="p-4">
                <li>
                  <span
                    className="active d-flex gap-4 fs-2 rounded p-3"
                    href=""
                  >
                    <i className="bi bi-person"></i>
                    <span>UserInfo</span>
                  </span>
                </li>
                <li>
                  <span
                    className="active d-flex gap-4 fs-2 rounded p-3"
                    href=""
                  >
                    <i
                      className="bi bi-bookmark-fill"
                      style={{ color: " rgba(50, 170, 144, 1)" }}
                    ></i>
                    <span>saved</span>
                  </span>
                </li>
                <li>
                  <span
                    className="active d-flex gap-4 fs-2 rounded p-3"
                    href=""
                  >
                    <i
                      className="bi bi-journal-bookmark-fill"
                      style={{ color: "rgba(166, 121, 166, 0.87)" }}
                    ></i>
                    <span>Booking</span>
                  </span>
                </li>
                <li>
                  <span
                    className="active d-flex gap-4 fs-2 rounded p-3"
                    href=""
                  >
                    <i
                      className="bi bi-bell"
                      style={{ color: "rgba(255, 61, 0, 0.79)" }}
                    ></i>
                    <span>Notices</span>
                  </span>
                </li>
                <li>
                  <span
                    className="active d-flex gap-4 fs-2 rounded p-3"
                    href=""
                  >
                    <i
                      className="bi bi-star"
                      style={{ color: "rgba(255, 118, 220, 1)" }}
                    ></i>
                    <span>Favorites</span>
                  </span>
                </li>
                <li>
                  <span
                    className="active d-flex gap-4 fs-2 rounded p-3"
                    href=""
                  >
                    <i
                      className="bi bi-play-circle-fill"
                      style={{ color: "rgba(211, 16, 16, 1)" }}
                    ></i>
                    <span>Video</span>
                  </span>
                </li>
                <li>
                  <span
                    className="active d-flex gap-4 fs-2 rounded p-3"
                    href=""
                  >
                    <i
                      className="bi bi-question-circle"
                      style={{ color: "rgba(237, 186, 100, 1)" }}
                    ></i>
                    <span>Helping & privacy</span>
                  </span>
                </li>
                <li>
                  <span
                    className="active d-flex gap-4 fs-2 rounded p-3"
                    href=""
                  >
                    <i
                      className="bi bi-gear-fill"
                      style={{ color: "rgba(166, 121, 166, 1)" }}
                    ></i>
                    <span>Settings</span>
                  </span>
                </li>
                <li>
                  <Link
                    className="active d-flex gap-4 fs-2 rounded p-3"
                    to={`/profiledet`}
                  >
                    <i
                      className="bi bi-gear-fill"
                      style={{ color: "rgba(166, 121, 166, 1)" }}
                    ></i>
                    <span>Details about my child</span>
                  </Link>
                </li>
              </ul>
              <br />
              <div className="info">
                <a className="active d-flex gap-4 fs-2 rounded p-5" href="">
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Log Out</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="card border-0 shadow rounded w-100">
              <div className="profileform">
                <div className="profile_img text-center p-4">
                  <div className="flex flex-column justify-content-center align-items-center">
                    <img
                      src={user.profileImage ? user.profileImage.url : Ellipse}
                      style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "4px solid green",
                      }}
                      onClick={() => setimageCrop(true)}
                      alt=""
                    />
                    <br />
                    <label htmlFor="" className="mt-3 text-5xl fs-3 fw-bold">
                      {user.userName}
                    </label>
                    <br />
                    <Dialog
                      visible={imageCrop}
                      header={() => (
                        <p htmlFor="" className="text-2xl textColor">
                          Updata Profile
                        </p>
                      )}
                      onHide={() => setimageCrop(false)}
                    >
                      <div className="confirmation-content flex flex-column align-items-center">
                        <Avatar
                          width={500}
                          height={400}
                          onCrop={onCrop}
                          onClose={onClose}
                          src={src}
                          shadingColor={"#474649"}
                          backgroundColor={"#474649"}
                        />
                        <div className="flex flex flex-column align-items-center mt-5 w-12">
                          <div className="flex justify-content-around w-12 mt-4">
                            <Button
                              onClick={saveCropImage}
                              label="Save"
                              icon="pi pi-check"
                            />
                          </div>
                        </div>
                      </div>
                    </Dialog>
                    <InputText
                      type="file"
                      accept="/image/*"
                      style={{ display: "none" }}
                      onChange={(event) => {
                        const file = event.target.files[0];
                        if (file && file.type.substring(0, 5) === "image") {
                          setimage(file);
                        } else {
                          setimage(null);
                        }
                      }}
                    />
                  </div>
                </div>
                <form className="form p-3">
                  <div className="d-flex" style={{ gap: "39%" }}>
                    <label for="exampleInputFirst" className="form-label ms-3">
                      First Name
                    </label>
                    <label for="exampleInputLast" className="form-label ms-4">
                      Last Name
                    </label>
                  </div>
                  <div className="d-flex gap-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputFirst"
                      aria-describedby="fnameHelp"
                      value={user.fName}
                    />
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputLast"
                      aria-describedby="lnameHelp"
                      value={user.lName}
                    />
                  </div>
                  <div>
                    <label for="exampleInputEmail1" className="form-label ms-3">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={user.email}
                    />
                  </div>
                  <div>
                    <label for="exampleInputPhone" className="form-label ms-3">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPhone"
                      aria-describedby="phoneHelp"
                      value={user.number}
                    />
                  </div>
                  <div>
                    <label for="exampleInputYear" className="form-label ms-3">
                      Year
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputYear"
                      value={user.age}
                    />
                  </div>
                  <label for="exampleInputGender" className="form-label ms-3">
                    Gender
                  </label>
                  <br />
                  <div className=" gender p-2 ps-4 d-flex gap-5">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label className="form-check-label" for="inlineRadio1">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        Female
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputLocation"
                      className="form-label ms-3"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputLocation"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn fs-4 rounded">
                      Save Change
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//   npm i react-avatar-edit
