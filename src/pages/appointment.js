import React from "react";
import ServicePanel from "../components/servicePanel";
import AppointmentCalander from "../components/appointmentCalander";

export default function Appointment() {
  return (
    <div className="service-page">
      <h2>Book Appointment</h2>
      {/* <ServicePanel /> */}
      <AppointmentCalander />
      {/*<AppointmentList /> */}
    </div>
  );
}
