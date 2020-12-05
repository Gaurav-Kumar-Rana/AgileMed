import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DatePicker from "react-datepicker";
import Moment from "react-moment";
import "react-datepicker/dist/react-datepicker.css";

export default function BookAppointmentForm(props) {
  const { openStatus, closeHandler, selectedDate } = props;
  const [open, setOpen] = React.useState(openStatus);
  const [saveSucess, setSaveSucess] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date(selectedDate));

  const handleClose = () => {
    setOpen(false);
    closeHandler(false);
  };

  const handleSave = () => {
    setSaveSucess(true);
  };

  const timeCalander = (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      inline
      calendarClassName="time-picker"
    />
  );

  return (
    <Dialog
      open={open}
      keepMounted
      fullScreen
      onClose={handleClose}
      classes={{
        root: "modal-conatiner show-nav-dialog-overlay  blur",
        scrollPaper: "modal-scrollPaper",
        paper: "modal-paper",
      }}
    >
      <DialogTitle className="modal-title">
        {"Select Time Slot To Book Appointment"}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          className="close-btn"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className="modal-content">
        {!saveSucess && (
          <Grid container spacing={2} className="appointment-conatiner">
            <Grid item xs={12} md={2} className="time-calander">
              {timeCalander}
            </Grid>
            <Grid item xs={12} md={10} className="appointment-details">
              <Grid item xs={12} className="appointment-datetime-panel">
                <span>
                  <Moment format="MMMM YYYY">{startDate}</Moment>{" "}
                  <Moment format="HH:mm A">{startDate}</Moment>
                </span>
              </Grid>
              <Grid
                item
                xs={12}
                className="appointment-patient-form form-section"
              >
                <TextField
                  label="Patient Name"
                  variant="outlined"
                  className="form-elem"
                />
                <TextField
                  label="Address"
                  variant="outlined"
                  className="form-elem"
                />
                <TextField
                  label="Problem"
                  variant="outlined"
                  className="form-elem"
                />
                <TextField
                  label="Photo copy of Prescription if any"
                  variant="outlined"
                  className="form-elem"
                />
                <TextField
                  label="Time"
                  variant="outlined"
                  className="form-elem"
                />
                <div className="action-btns">
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button className="active" onClick={handleSave}>
                    Book Appointment
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        )}
        {saveSucess && (
          <Grid container spacing={2} className="appointment-sucess-conatiner">
            Done
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  );
}
