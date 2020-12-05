import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SignInContainer(props) {
  const { openStatus, closeHandler } = props;
  const [open, setOpen] = React.useState(openStatus);

  const handleClose = () => {
    setOpen(false);
    closeHandler(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      fullScreen
      onClose={handleClose}
      classes={{
        root: "sigin-conatiner show-nav-dialog-overlay  blur",
        scrollPaper: "dialog-scrollPaper",
        paper: "dialog-paper",
      }}
    >
      <DialogContent className="banner-section">
        <div className="form-section">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="close-btn"
          >
            <CloseIcon />
          </IconButton>
          <h3>SIGN IN</h3>
          <TextField label="eMail" variant="outlined" className="form-elem" />
          <TextField
            label="Password"
            variant="outlined"
            className="form-elem"
          />
          <Button onClick={handleClose}>Login</Button>
          <div className={"link"}>Create An Account</div>
          <div className={"link"}>Forgot Password?</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
