import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getIncubationsOfHospital } from "../../api.js";
import logoLoading from "../../images/wBg-loader.gif";
import Avatar from "../../shared/components/Avatar.js";
import "./Incubations.css";
import incubator1 from "../../images/incubator1.png";
import incubator2 from "../../images/incubator2.png";
import incubator3 from "../../images/incubator3.png";
import incubator4 from "../../images/incubator4.png";
import incubator5 from "../../images/incubator5.png";
import incubator6 from "../../images/incubator6.png";
import incubator7 from "../../images/incubator7.png";

const imgArray = [
  incubator4,
  incubator7,
  incubator2,
  incubator6,
  incubator5,
  incubator1,
  incubator3,
];

export default function Incubations() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [incubations, setIncubations] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getIncubationsOfHospital(id);
      setIncubations(data);
      setLoading(false);
    })();
  }, []);
  return (
    <>
      {loading ? (
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
        <div id="incubation">
        <div className="text-center">
          <h2 className="pt-sans-bold">Book Incubation</h2>
          <h6 className="title-para position-relative">It is very easy Now</h6>
        </div>

        <div className="container-fluid px-5 mt-5">
          <div className="row gy-5">
            {incubations.map((incubation, index) => (
              <div className="col-md-4" key={incubation._id}>
                <div className="incubation-card">
                  <div className="card overflow-hidden">
                    <div className="position-relative">
                      <img
                        src={imgArray[index]}
                        className="card-img-top"
                        alt=""
                      />
                      <Link
                        to={`/Bookdetail/${incubation._id}`}
                        className="pop-para rounded-2 position-absolute top-100 start-50 translate-middle amaranth-bold text-white"
                      >
                        Booking
                      </Link>
                    </div>
                    <div className="card-body mt-3">
                      <div>
                        <h5 className="card-title">
                          <span>incubation Name : {incubation.name}</span>
                        </h5>
                        <p className="card-text amaranth-bold ">
                          Price : {incubation.price} $
                        </p>
                      </div>
                    </div>
                    <div className="card-footer row d-flex align-items-center justify-content-between ">
                      <div className="col-9 d-flex">
                        <Avatar
                          username={incubation.hospital.userName}
                          proImage={incubation.hospital.profileImage?.url}
                        />
                        <span className="ms-2">
                          {incubation.hospital.userName}
                        </span>
                      </div>
                      <div className="col-3 pt-2">
                        <p className="text-end">{index + 1}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}

      
    </>
  );
}
