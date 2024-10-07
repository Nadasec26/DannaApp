import React, { useEffect, useState } from "react";
import logoLoading from "../../images/wBg-loader.gif";
import { getAllBookings } from "../../api.js";
import Avatar from "../../shared/components/Avatar.js";

export default function AllBookings() {
  const [bookingsLoading, setBookingsLoading] = useState(true);
  const [userBookings, setUserBookings] = useState([]);

  console.log(userBookings);
  useEffect(() => {
    (async () => {
      const data = await getAllBookings();
      setUserBookings(data);
      setBookingsLoading(false);
    })();
  }, []);

  return (
    <>
      {bookingsLoading ? (
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
        <div className="container-fluid my-5 px-5 ">
          {userBookings.length ? (
            userBookings.map((order, index) => {
              return (
                <div className="mb-4 pb-4 order row" key={order._id}>
                  <div className="col-md-6">
                    <h5>Order no. : {index + 1}</h5>
                  </div>
                  <div className="col-md-6 mb-3">
                    <h5>
                      Created At : {new Date(order.createdAt).toLocaleString()}
                    </h5>
                  </div>
                  <div className="col-md-6">
                    <div className="row align-items-center">
                      <div className="col-5 mb-3">
                        <Avatar
                          username={order.incubation.hospital.userName}
                          proImage={order.incubation.hospital.profileImage?.url}
                          large={true}
                        />
                      </div>
                      <div className="col-7 px-3">
                        <h6>{order.incubation.hospital.userName}</h6>
                        <p>Incubation code : {order.incubation.name}</p>
                        <p>Price : {order.incubation.price} .EGP</p>
                        <p>reason : {order.reasonForReservation}</p>
                        <p>Phone no. : {order.phoneNumber}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 me-2">Child :</h6>
                      <p className="m-0 me-2">{order.child.childName} </p>
                    </div>
                    <p className="my-3">gender : {order.child.gender}</p>
                    <p className="my-3">
                      birth weight : {order.child.birthDetails.birthWeight} kg
                    </p>
                    <p className="my-3">
                      pregnancy Period :{" "}
                      {order.child.birthDetails.pregnancyPeriodPerWeek} weeks
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className="d-flex align-items-center">
                      <h6 className="m-0 me-2">Mother :</h6>
                      <p className="m-0">{order.child.parentNames.motherName}</p>
                    </div>
                    <p className="my-3">
                      complicated Birth :{" "}
                      {order.child.birthDetails.complicatedNaturalBirth
                        ? "Yes"
                        : "No"}
                    </p>
                    <p className="my-3 text-main">
                      mother Infection :{" "}
                      {order.child.birthDetails.motherInfectionDuringPregnancy
                        ? "Yes"
                        : "No"}
                    </p>
                  </div>
                  <hr></hr>
                </div>
              );
            })
          ) : (
            <h2 className="text-center my-5 text-main">No Bookings to show</h2>
          )}
        </div>
      )}
    </>
  );
}
