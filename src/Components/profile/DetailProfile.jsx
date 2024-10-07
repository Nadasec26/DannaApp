import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../shared/components/Avatar.js";
import { getUserChildren } from "../../store/actions/userActions.js";
import moment from "moment/moment.js";

export default function Section2home() {
  const { user, userChildren } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(userChildren);

  useEffect(() => {
    (async () => await getUserChildren(dispatch))();
  }, []);

  return (
    <div className="Profile p-5">
      <div className="container  ">
        <div className="row gx-5  ">
          <div className="col-lg-3 col-md-3 gy-4 bg-wight shadow-sm text-center rounded-2">
            <div className="p-3 m-auto" style={{ width: "fit-content" }}>
              <Avatar
                username={user.UserName}
                proImage={user.profileImage?.url}
                large={true}
              />
            </div>
            <p className="fw-bold fs-5"> {user.userName}</p>

            <div className="">
              <ul className="p-1">
                <li>
                  <a className="active d-flex gap-4 fs-2 rounded p-3" href="">
                    <i className="bi bi-person"></i>
                    <span className="fs-3">UserInfo</span>
                  </a>
                </li>
                <li>
                  <a className="active d-flex gap-4 fs-2 rounded p-3" href="">
                    <i
                      className="bi bi-bookmark-fill"
                      style={{ color: " rgba(50, 170, 144, 1)" }}
                    ></i>
                    <span className="fs-3">saved</span>
                  </a>
                </li>
                <li>
                  <a className="active d-flex gap-4 fs-2 rounded p-3" href="">
                    <i
                      className="bi bi-journal-bookmark-fill"
                      style={{ color: "rgba(166, 121, 166, 0.87)" }}
                    ></i>
                    <span className="fs-3">Booking</span>
                  </a>
                </li>
                <li>
                  <a className="active d-flex gap-4 fs-2 rounded p-3" href="">
                    <i
                      className="bi bi-bell"
                      style={{ color: "rgba(255, 61, 0, 0.79)" }}
                    ></i>
                    <span className="fs-3">Notices</span>
                  </a>
                </li>
                <li>
                  <a className="active d-flex gap-4 fs-2 rounded p-3" href="">
                    <i
                      className="bi bi-star"
                      style={{ color: "rgba(255, 118, 220, 1)" }}
                    ></i>
                    <span className="fs-3">Favorites</span>
                  </a>
                </li>
                <li>
                  <a className="active d-flex gap-4 fs-2 rounded p-3" href="">
                    <i
                      className="bi bi-play-circle-fill"
                      style={{ color: "rgba(211, 16, 16, 1)" }}
                    ></i>
                    <span className="fs-3">Video</span>
                  </a>
                </li>
                <li>
                  <a className="active d-flex gap-4 fs-2 rounded p-3" href="">
                    <i
                      className="bi bi-question-circle"
                      style={{ color: "rgba(237, 186, 100, 1)" }}
                    ></i>
                    <span className="fs-3">privacy</span>
                  </a>
                </li>
                <li>
                  <a className="active d-flex gap-4 fs-2 rounded p-3" href="">
                    <i
                      className="bi bi-gear-fill"
                      style={{ color: "rgba(166, 121, 166, 1)" }}
                    ></i>
                    <span className="fs-3">Settings</span>
                  </a>
                </li>
                <li>
                  <a className="active d-flex gap-4 fs-2 rounded p-3" href="">
                    <i
                      className="bi bi-diagram-2"
                      style={{ color: "rgba(166, 121, 166, 1)" }}
                    ></i>
                    <span className="fs-3">My Child</span>
                  </a>
                </li>
              </ul>
              <br />
              <div className="info">
                <a className="active d-flex gap-4 fs-2 rounded p-5" href="">
                  <i className="bi bi-box-arrow-right"></i>
                  <span className="fs-3">Log Out</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-md-9 ">
            <div className="row">
              <div className="col-sm-12  bg-wight shadow-sm p-3 gy-4">
                <div>
                  <p
                    className="text-center fw-bold fs-3"
                    style={{ color: "#32AA90" }}
                  >
                    Medical file
                  </p>
                </div>
              </div>
              <div className="col-sm-12 bg-wight shadow-sm p-2 gy-4">
                <ul>
                  <li>
                    <span
                      className="active d-flex gap-4 fs-2 rounded p-2"
                      href=""
                    >
                      <span className="fs-3" style={{ color: "#32AA90" }}>
                        My Children:
                      </span>
                      {userChildren.length
                        ? userChildren.map((child) => (
                            <i className="bi bi-person-circle" key={child._id}>
                              <br />
                              <p className="fs-6 fw-bold">{child.childName}</p>
                            </i>
                          ))
                        : ""}
                      <i
                        className="bi bi-person-plus-fill"
                        style={{ color: "#32AA90" }}
                      >
                        <p className="fs-6 fw-bold">ADD</p>
                      </i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-6 col-md-12 gy-4  bg-wight shadow-sm">
                <span className="p-3 fs-5 fw-bold" style={{ color: "#32AA90" }}>
                  Detils about my child
                </span>

                <form className="form p-3">
                  <div>
                    <label
                      for="exampleInputEmail1"
                      className="form-label ms-3 fw-bold"
                    >
                      Child Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={userChildren.length?userChildren[0].childName:""}
                    />
                  </div>
                  <div>
                    <label
                      for="exampleInputEmail1"
                      className="form-label ms-3 fw-bold"
                    >
                      Father Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={userChildren.length?userChildren[0].parentNames.fatherName:""}
                    />
                  </div>
                  <div>
                    <label
                      for="exampleInputPhone"
                      className="form-label ms-3 fw-bold"
                    >
                      Born Prematurely
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>{userChildren.length?userChildren[0].birthDetails.bornPrematurely?"Yes":"No":""}</option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="exampleInputYear"
                      className="form-label ms-3 fw-bold"
                    >
                      Child Diseases
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputYear"
                      value={userChildren.length?userChildren[0].medicalHistory.childDiseases[0]:""}
                    />
                  </div>
                  <div>
                    <label
                      for="exampleInputYear"
                      className="form-label ms-3 fw-bold"
                    >
                      vaccinations
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputYear"
                      value={userChildren.length?userChildren[0].medicalHistory.vaccinations[0]:""}
                    />
                  </div>
                  <div>
                    <label
                      for="exampleInputYear"
                      className="form-label ms-3 fw-bold"
                    >
                      Date Of Barth
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputYear"
                      value={userChildren.length?moment(userChildren[0].dateOfBirth).format('DD MMMM YYYY'):""}
                      />
                  </div>
                  <div>
                    <label
                      for="exampleInputYear"
                      className="form-label ms-3 fw-bold"
                    >
                      Birth Weight
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputYear"
                      value={userChildren.length?userChildren[0].birthDetails.birthWeight:""}
                      />
                  </div>

                  <label
                    for="exampleInputGender"
                    className="form-label ms-3 fw-bold"
                  >
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
                        checked={userChildren.length?userChildren[0].gender =="Male"?true:false:""}
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
                        checked={userChildren.length?userChildren[0].gender =="Female"?true:false:""}
                      />
                      <label className="form-check-label" for="inlineRadio2">
                        Female
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-md-12 gy-4 ">
                <div className="row ">
                  <div className="col-sm-12 bg-wight gy shadow-sm ">
                    <span
                      className="p-3 fs-5 fw-bold"
                      style={{ color: "#32AA90" }}
                    >
                      detils about mother
                    </span>

                    <form className="form p-3">
                      <div>
                        <label
                          for="exampleInputEmail1"
                          className="form-label ms-3 fw-bold"
                        >
                          Mother Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                      value={userChildren.length?userChildren[0].parentNames.motherName:""}
                        />
                      </div>
                      <div>
                        <label
                          for="exampleInputEmail1"
                          className="form-label ms-3 fw-bold"
                        >
                          pregnancy Period Per Week
                        </label>
                        <input
                          type=" number"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                      value={userChildren.length?userChildren[0].birthDetails.pregnancyPeriodPerWeek:""}
                        />
                      </div>
                      <div>
                        <label
                          for="exampleInputPhone"
                          className="form-label ms-3 fw-bold"
                        >
                          mother infection during pregnancy
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>{userChildren.length?userChildren[0].birthDetails.motherInfectionDuringPregnancy?"Yes":"NO":""}
                        </option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                      </div>

                      <div>
                        <label
                          for="exampleInputPhone"
                          className="form-label ms-3 fw-bold"
                        >
                          complicated natural birth
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>{userChildren.length?userChildren[0].birthDetails.complicatedNaturalBirth?"Yes":"NO":""}</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                      </div>
                      <div>
                        <label
                          for="exampleInputPhone"
                          className="form-label ms-3 fw-bold"
                        >
                          Mother has chornic disease
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>{userChildren.length?userChildren[0].familyMedicalHistory.motherHasChronicDisease?"Yes":"No":""}</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                      </div>
                      <div>
                        <label
                          for="exampleInputPhone"
                          className="form-label ms-3 fw-bold"
                        >
                          Father has chornic disease
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>{userChildren.length?userChildren[0].familyMedicalHistory.fatherHasChronicDisease?"Yes":"No":""}</option>
                          <option value="1">Yes</option>
                          <option value="2">No</option>
                        </select>
                      </div>
                    </form>
                  </div>

                  <div className="col-sm-12 bg-wight gy-4 shadow-sm">
                    <span
                      className="p-3 fs-5 fw-bold"
                      style={{ color: "#32AA90" }}
                    >
                      Current Health Status
                    </span>
                    <form className="form p-3">
                      <div>
                        <label className="form-label ms-3 fw-bold">
                          Weight
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id=""
                          aria-describedby="emailHelp"
                      value={userChildren.length?userChildren[0].currentHealthStatus.weight:""}
                        />
                      </div>
                      <div>
                        <label className="form-label ms-3 fw-bold">
                          height
                        </label>
                        <input
                          type=" number"
                          className="form-control"
                          id=""
                          aria-describedby="emailHelp"
                      value={userChildren.length?userChildren[0].currentHealthStatus.height:""}
                      />
                      </div>
                      <div>
                        <label className="form-label ms-3 fw-bold">
                          blood Type
                        </label>
                        <input
                          type=" text"
                          className="form-control"
                          id=""
                          aria-describedby="emailHelp"
                          value={userChildren.length?userChildren[0].currentHealthStatus.bloodType:""}
                          />
                      </div>
                      <div>
                        <label className="form-label ms-3 fw-bold">
                          Current Medications
                        </label>
                        <input
                          type=" text"
                          className="form-control"
                          id=""
                          aria-describedby="emailHelp"
                          value={userChildren.length?userChildren[0].currentHealthStatus.currentMedications[0]:""}
                          />
                      </div>
                      <div>
                        <label className="form-label ms-3 fw-bold">
                          Last Checkup Date
                        </label>
                        <input
                          type=" text"
                          className="form-control"
                          id=""
                          aria-describedby="emailHelp"
                          value={userChildren.length?moment(userChildren[0].currentHealthStatus.lastCheckupDate).format('DD MMMM YYYY'):""}
                          />
                      </div>
                      <div>
                        <label className="form-label ms-3 fw-bold">
                          Doctor Note
                        </label>
                        <input
                          type=" text"
                          className="form-control"
                          id=""
                          aria-describedby="emailHelp"
                          value={userChildren.length?userChildren[0].currentHealthStatus.doctorNotes:""}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
