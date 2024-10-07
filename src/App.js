import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Offline } from "react-detect-offline";
import { connectWithSocketServer } from "./realtimeCommunication/socketConnection.js";
import Dashboard from "./Dashboard/Dashboard.js";

import Home from "./Components/Home.jsx";
import Login from "./Components/LoginAndSiginup/Login";
import Register from "./Components/LoginAndSiginup/Signup";
import Article from "./Components/Articles/Articles";
import Doctors from "./Components/Doctors/Doctors";
import Celendar1 from "./Components/celendar/Celendar.jsx";
import AboutUs from "./Components/AboutUs.jsx";

import DetailsDoctors from "./Components/Doctors/DetailsDoctor";
import ArticleDetails from "./Components/Articles/ArticleDetails";
import ContactUs from "./Components/ContactUs";
import ChatBot from "./Components/chatbot/ChatBot.jsx";
import ProductDesply from "./Components/product/ProductDesply";
import MainLayout from "./Components/Layouts/MainLayout.jsx";
import AuthLayout from "./Components/Layouts/AuthLayout.jsx";

import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes.jsx";
import Notfound from "./Components/Notfound.jsx";
import UpdateProfile from "./Components/UpdateProfile.jsx";
import ProductPage from "./Components/product/ProductPage.jsx";
import Profile from "./Components/profile/Profile.jsx";
import ProfileDetail from "./Components/profile/DetailProfile.jsx";
import Cart from "./Components/Cart.jsx";

import Payment from "./Components/Payment.jsx";
import Favourite from "./Components/Favourite.jsx";
import Questions from "./Components/Questions/Questions.jsx";
import Videos from "./Components/Videos.jsx";
import QuestionDet from "./Components/Questions/QuestionDetails.jsx";
import ForgetNewPassward from "./Components/Forgetpassword/ForgetNewPassword.jsx";
import ForgetPassward from "./Components/Forgetpassword/ForgetPassword.jsx";
import ForgetPasswardOtp from "./Components/Forgetpassword/ForgetPasswordOtp.jsx";
import Book from "./Components/Book/Book.jsx";
import BookDet from "./Components/Book/BookDetail.jsx";
import PaymentProduct from "./Components/product/paymentProduct.jsx";
import Hospitals from "./Components/Hospitals/Hospitals.jsx";
import Incubations from "./Components/Hospitals/Incubations.jsx";
import BookingIncubation from "./Components/Hospitals/BookingIncubation.jsx";
import { jwtDecode } from "jwt-decode";
import AllBookings from "./Components/Hospitals/AllBookings.jsx";

function App() {
  const [role, setRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = jwtDecode(token);
    setRole(user);
    if (token) {
      connectWithSocketServer(token);
    }
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "aboutus", element: <AboutUs /> },
        { path: "productpage", element: <ProductPage /> },
        { path: "contactus", element: <ContactUs /> },
        
        {
          path: "profile",
          element: (
            <ProtectedRoutes>
              <UpdateProfile />
            </ProtectedRoutes>
          ),
        },
        {
          path: "detailsdoctors/:id",
          element: (
            <ProtectedRoutes>
              <DetailsDoctors />
            </ProtectedRoutes>
          ),
        },
        {
          path: "doctors",
          element: (
            <ProtectedRoutes>
              <Doctors />
            </ProtectedRoutes>
          ),
        },
        {
          path: "doctor/:id",
          element: (
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          ),
        },
        {
          path: "articles",
          element: (
            <ProtectedRoutes>
              <Article />
            </ProtectedRoutes>
          ),
        },
        {
          path: "articleDetails/:id",
          element: (
            <ProtectedRoutes>
              <ArticleDetails />
            </ProtectedRoutes>
          ),
        },
        {
          path: "mainprofile",
          element: (
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          ),
        },
        {
          path: "profiledet",
          element: (
            <ProtectedRoutes>
              <ProfileDetail />
            </ProtectedRoutes>
          ),
        },
        {
          path: "chatbot",
          element: (
            <ProtectedRoutes>
              <ChatBot />
            </ProtectedRoutes>
          ),
        },
        {
          path: "productDesply/:productID",
          element: (
            <ProtectedRoutes>
              <ProductDesply />
            </ProtectedRoutes>
          ),
        },
        {
          path: "Cart",
          element: (
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          ),
        },
        { path: "payment", element: <Payment /> },
        { path: "videos/:id?", element: <Videos /> },
        {
          path: "favourite",
          element: (
            <ProtectedRoutes>
              <Favourite />
            </ProtectedRoutes>
          ),
        },
        {
          path: "Questions",
          element: (
            <ProtectedRoutes>
              <Questions />
            </ProtectedRoutes>
          ),
        },
        { path: "QuestionDet", element: <QuestionDet /> },
        { path: "ForgetNewPassword", element: <ForgetNewPassward /> },
        { path: "ForgetPassword", element: <ForgetPassward /> },
        { path: "ForgetPasswardOtp", element: <ForgetPasswardOtp /> },
        {
          path: "PayProduct",
          element: (
            <ProtectedRoutes>
              <PaymentProduct />
            </ProtectedRoutes>
          ),
        },
        {
          path: "Book",
          element: (
            <ProtectedRoutes>
              <Hospitals />
            </ProtectedRoutes>
          ),
        },
        {
          path: "incubations/:id",
          element: (
            <ProtectedRoutes>
              <Incubations />
            </ProtectedRoutes>
          ),
        },
        {
          path: "Bookdetail/:id",
          element: (
            <ProtectedRoutes>
              <BookingIncubation />
            </ProtectedRoutes>
          ),
        },
        {
          path: "myReservations",
          element: (
            <ProtectedRoutes>
              <AllBookings />
            </ProtectedRoutes>
          ),
        },
        { path: "*", element: <Notfound /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "signup", element: <Register /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
      <Offline>
        <div className="offline">You are Offline Now!</div>
      </Offline>
      <ToastContainer theme="colored" autoClose={3000} />
    </div>
  );
}

export default App;
