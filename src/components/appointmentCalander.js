import React from "react";
import Calander from "./calander";
import BookAppointmentForm from "./bookAppointmentForm";

export default function AppointmentCalander() {
  const [showBookAppointmentForm, setBookAppointmentForm] = React.useState(
    false
  );
  const [startDate, setStartDate] = React.useState(new Date());

  const onMouseEnterHandler = (clanderRef) => {
    clanderRef.currentTarget.childNodes[1].style.display = "block";
  };
  const onMouseLeaveHandler = (clanderRef) => {
    clanderRef.currentTarget.childNodes[1].style.display = "none";
  };

  const onClickHandler = (clanderRef, date) => {
    setBookAppointmentForm(true);
    setStartDate(new Date(date));
  };

  const handleCloseBtnClick = (status) => {
    setBookAppointmentForm(status);
  };
  const setDateHandler = (date) => {
    setStartDate(date);
  };

  const actionMethod = {
    setDateHandler: setDateHandler,
    onMouseEnterHandler: onMouseEnterHandler,
    onMouseLeaveHandler: onMouseLeaveHandler,
    onClickHandler: onClickHandler,
  };

  return (
    <div className="service-calander">
      <div>Choose date to get appointment</div>
      <Calander actionMethod={actionMethod} startDate={startDate} />
      {showBookAppointmentForm && (
        <BookAppointmentForm
          openStatus={showBookAppointmentForm}
          closeHandler={handleCloseBtnClick}
          selectedDate={startDate}
        />
      )}
    </div>
  );
}
