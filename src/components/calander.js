import React from "react";
import moment from "moment";
import Moment from "react-moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IconButton from "@material-ui/core/IconButton";

import AppIcon from "./appIcons";
import { appointmentBookedList } from "../store/siteData";

export default function Calander(props) {
  const dayRef = React.useRef();
  const { startDate, actionMethod } = props;
  const {
    setDateHandler,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onClickHandler,
  } = actionMethod;

  const getBookingList = (date) => {
    let dt = moment(date).format("DD-MM-YYYY");

    let tempList = appointmentBookedList[dt];
    let bookingList = [];
    if (tempList) {
      tempList.map((list, index) => {
        bookingList.push(
          <li key={index}>
            <span>{list.time}</span>
            <span>Booked</span>
          </li>
        );
      });
    }
    return bookingList;
  };

  const renderDayContents = (day, date) => {
    return (
      <div
        ref={dayRef}
        className={"day-box"}
        onMouseEnter={(dayRef) => {
          onMouseEnterHandler(dayRef);
        }}
        onMouseLeave={(dayRef) => {
          onMouseLeaveHandler(dayRef);
        }}
        onClick={(dayRef) => {
          onClickHandler(dayRef, date);
        }}
      >
        <span>{date.getDate()}</span>
        <IconButton
          className="day-add-icon"
          onClick={(dayRef) => {
            onClickHandler(dayRef, date);
          }}
        >
          <AppIcon iconName="AddRoundedIcon" />
        </IconButton>
        <div className="booked-list">
          <ul>{getBookingList(date)}</ul>
        </div>
      </div>
    );
  };

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <div className="date-picker-header">
      <IconButton onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        <AppIcon iconName="ArrowBackIosRoundedIcon" />
      </IconButton>
      <h4>
        <Moment format="MMMM YYYY">{date}</Moment>
      </h4>
      <IconButton onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        <AppIcon iconName="ArrowForwardIosRoundedIcon" />
      </IconButton>
    </div>
  );

  return (
    <DatePicker
      renderCustomHeader={renderCustomHeader}
      renderDayContents={renderDayContents}
      selected={startDate}
      onChange={(date) => setDateHandler(date)}
      inline
      calendarClassName="date-picker"
    />
  );
}
