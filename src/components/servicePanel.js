import React from "react";
import DoctorCard from "./doctorCard";
import Grid from "@material-ui/core/Grid";

export default function ServicePanel() {
  return (
    <Grid item xs={12} className="service-panel">
      <DoctorCard />
    </Grid>
  );
}
