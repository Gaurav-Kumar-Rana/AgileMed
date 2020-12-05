import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppIcon from "./appIcons";

import { doctorData } from "../store/siteData";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function DoctorCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} className="doctor-card">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className="doctor-avtar">
            <img src={doctorData[0].profilepic} />
          </Avatar>
        }
        action={
          <div className="action-items">
            <IconButton>
              <AppIcon iconName="WhatsAppIcon" />
            </IconButton>
            <ul>
              <li>
                <IconButton>
                  <AppIcon iconName="AccessTimeIcon" />
                  Available Days
                </IconButton>
                <span>{doctorData[0].avalability.day.toString()}</span>
              </li>
              <li>
                <IconButton>
                  <AppIcon iconName="AccessTimeIcon" />
                  Times
                </IconButton>
                <span>{doctorData[0].avalability.time.toString()}</span>
              </li>
            </ul>
          </div>
        }
        title={<div className="title">{doctorData[0].name}</div>}
        subheader={<div className="subheader">{doctorData[0].specilist}</div>}
        className="doctor-content"
      />
      <CardActions disableSpacing className="doctor-card-cardaction">
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
