import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IconButton from "@material-ui/core/IconButton";

import AppIcon from "./appIcons";
import { months } from "../store/siteData";

export default function Calander(props) {
  const dayRef = React.useRef();
  const { startDate, actionMethod } = props;
  const {
    setDateHandler,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onClickHandler,
  } = actionMethod;

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
        {months[date.getMonth()]} {date.getFullYear()}
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
