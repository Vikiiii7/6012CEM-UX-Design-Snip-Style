import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStartedScreen from './GetStartedScreen';
import DashboardScreen from './DashboardScreen';
import BookingScreen from './BookingScreen';
import BookingSummary from './BookingSummary'; 
import SuccessBooking from './SuccessBooking';
import MyBookingScreen from './MyBookingScreen';
import ViewMyAppointment from './ViewMyAppointment';
import SuccessCancel from './SuccessCancel';
import UpdatedBookingScreen from './UpdatedBookingScreen';
import ReviewScreen from './ReviewScreen';
import AddReview from './AddReview';
import SuccessAddReview from './SuccessAddReview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStartedScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/booking/:serviceId" element={<BookingScreen />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
        <Route path="/success-booking" element={<SuccessBooking />} />
        <Route path="/my-bookings" element={<MyBookingScreen />} />
        <Route path="/view-appointment/:id" element={<ViewMyAppointment />} />
        <Route path="/success-cancel" element={<SuccessCancel />} />
        <Route path="/updated-booking" element={<UpdatedBookingScreen />} />
        <Route path="/review-screen" element={<ReviewScreen />} />
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/success-review" element={<SuccessAddReview />} />
      </Routes>
    </Router>
  );
}

export default App;