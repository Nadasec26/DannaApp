import React, { useEffect, useState } from "react";
import Map from "./Map.jsx";
import { getNearHospitals } from "../../api.js";
import "./Hospitals.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getHospital } from "../../store/actions/hospitalActions.js";

export default function Hospitals() {
  const [hospitals, setHospitals] = useState([]);
  const [center, setCenter] = useState({});
  let [distance, setDistance] = useState(10000);

  const dispatch = useDispatch();

  const sendLocationToBackend = async (latitude, longitude, distance) => {
    const body = {
      long: longitude,
      lat: latitude,
    };
    if (distance) {
      body.distance = distance;
    }

    return await getNearHospitals(body);
  };

  const fetchLocationFromGeolocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ lat: latitude, lng: longitude });
        },
        (error) => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    });
  };

  const handleGetLocation = async (d) => {
    try {
      const location = await fetchLocationFromGeolocation();
      const lat = parseFloat(location.lat.toFixed(7));
      const lng = parseFloat(location.lng.toFixed(7));

      setCenter({ lat, lng });
      const data = await sendLocationToBackend(lat, lng, d);
      setHospitals(data);
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance.toFixed(2);
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const handleInputChange = (event) => {
    setDistance(event.target.value);
    if (event.target.value == "" || event.target.value == 0) setDistance(10000);
  };

  const changeDistance = () => {
    handleGetLocation(distance);
  };

  useEffect(() => {
    (() => handleGetLocation())();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <button
          onClick={() => changeDistance()}
          className="btn btn-success col-md-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          Get Near Incubations
        </button>
        <div className="col-md-6">
          <input
            className="form-control"
            type="number"
            placeholder={distance}
            value={distance}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <p className="pt-2 m-0 text-bg-secondary h-100 w-100 text-center amaranth-bold-italic text-white ">
            Meter for distance
          </p>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            The Search Distance is{" "}
            {distance > 1000 ? distance / 1000 : distance}{" "}
            {distance > 1000 ? "km" : "m"}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="">
            {hospitals && hospitals.length
              ? hospitals.map((hospital) => (
                  <div key={hospital._id} className="card my-3">
                    <img
                      src={hospital.hospital.profileImage?.url}
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="pt-sans-bold">
                        {hospital.hospital.userName}
                      </h4>
                      <p className="px-2">
                        <i className="fa-solid fa-location-dot me-1"></i>{" "}
                        {hospital.address}
                      </p>
                      <h5 className="amaranth-bold text-success">
                        Available Incubations: {hospital.availableIncubations}
                      </h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <Link
                          to={"/incubations/" + hospital.hospital._id}
                          className="btn btn-primary"
                          onClick={() => getHospital(dispatch, hospital)}
                        >
                          View Incubations
                        </Link>
                        <h6 className="amaranth-bold">
                          Distance:{" "}
                          {calculateDistance(
                            center.lat,
                            center.lng,
                            hospital.location.coordinates[1],
                            hospital.location.coordinates[0]
                          ) > 1
                            ? calculateDistance(
                                center.lat,
                                center.lng,
                                hospital.location.coordinates[1],
                                hospital.location.coordinates[0]
                              ) + " km"
                            : calculateDistance(
                                center.lat,
                                center.lng,
                                hospital.location.coordinates[1],
                                hospital.location.coordinates[0]
                              ) *
                                1000 +
                              " m"}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Map hospitals={hospitals} center={center} />
        </div>
      </div>
    </div>

    // <div>
    //   <div className="position-relative">
    //     <Map hospitals={hospitals} center={center} />
    //     <div className="container">
    //       <div
    //         className="row "
    //         style={{
    //           position: "absolute",
    //           top: "0",
    //           left: "0px",
    //           width: "100%",
    //         }}
    //       >
    //         <div
    //           className="col col-sm-12 bg-white"
    //           style={{ width: "35%", height: "100vh", overflow: "hidden" }}
    //         >
    //           <div className="row border-bottom p-1">
    //             <div className="col fw-bold">Hoods</div>
    //             <div className="col" style={{ color: "rgba(0, 0, 0, 0.33)" }}>
    //               Places
    //             </div>
    //             <div className="col" style={{ color: "rgba(0, 0, 0, 0.33)" }}>
    //               Interaries
    //             </div>
    //             <div className="col" style={{ color: "rgba(0, 0, 0, 0.33)" }}>
    //               Gudies
    //             </div>
    //             <div className="col" style={{ color: "rgba(0, 0, 0, 0.33)" }}>
    //               <i className="bi bi-x-circle-fill"></i>
    //             </div>
    //           </div>
    //           <div className="card overflow-auto" style={{ height: "100vh" }}>
    //             <div className="card mt-2">
    //               <img src={""} className="card-img-top" alt="..." />
    //               <div className="card-body">
    //                 <h5 className="card-title">Serenity Wellness clinic</h5>
    //                 <p className="card-text d-flex gap-2">
    //                   <h6 style={{ color: "rgba(0, 0, 0, 0.33)" }}>
    //                     Dental,baby
    //                   </h6>
    //                   <div>
    //                     <i
    //                       className="bi bi-star-fill"
    //                       style={{ color: "rgba(255, 199, 0, 1)" }}
    //                     ></i>
    //                     <small className="fw-bold">6.4</small>
    //                   </div>
    //                 </p>
    //                 <p className="card-text">
    //                   <div className="row">
    //                     <div className="col">
    //                       <div className="d-flex gap-2">
    //                         <i className="bi bi-geo-alt-fill text-primary"></i>
    //                         <p>Medimentor can helo </p>
    //                       </div>
    //                     </div>
    //                     <div className="col">
    //                       <div className="d-flex gap-2">
    //                         <i className="bi bi-clock-fill text-primary"></i>
    //                         <p>Dental,baby </p>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
