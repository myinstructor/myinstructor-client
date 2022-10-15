import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import NotFoundPage from "./pages/404Page/NotFoundPage";
import AddToCart from "./pages/AddToCart/AddToCart";
import BookingPage from "./pages/BookingPage/BookingPage";
import Homepage from "./pages/Homepage/Homepage";
import InstructorList from "./pages/InstructorList/InstructorList";
import InstructorProfile from "./pages/InstructorProfile/InstructorProfile";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/instructors-list/:postCode/:transmission/:suburb"
          element={<InstructorList />}
        />
        <Route path="/instructor-profile/:id" element={<InstructorProfile />} />
        <Route path="/add-cart" element={<AddToCart />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
