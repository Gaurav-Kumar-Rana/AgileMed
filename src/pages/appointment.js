import React from "react";
import Grid from "@material-ui/core/Grid";
import ServicePanel from "../components/servicePanel";
import AppointmentCalander from "../components/appointmentCalander";

export default function Appointment() {
  return (
    <Grid container className="service-page">
      <h2>Book Appointment</h2>
      <ServicePanel />
      <AppointmentCalander />
      {/*<AppointmentList /> */}
    </Grid>
  );
}
