import React from "react";
import UpdateIcon from "@material-ui/icons/Update";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

export default function AppIcon(props) {
  const { iconName } = props;
  switch (iconName) {
    case "UpdateIcon":
      return <UpdateIcon />;
    case "AccountCircle":
      return <AccountCircle />;
    case "MoreIcon":
      return <MoreIcon />;
    case "MenuIcon":
      return <MenuIcon />;
    case "ArrowBackIosRoundedIcon":
      return <ArrowBackIosRoundedIcon />;
    case "ArrowForwardIosRoundedIcon":
      return <ArrowForwardIosRoundedIcon />;
    case "AddRoundedIcon":
      return <AddRoundedIcon />;
    case "AccessTimeIcon":
      return <AccessTimeIcon />;
    case "WhatsAppIcon":
      return <WhatsAppIcon />;
    default:
      return null;
  }
}
