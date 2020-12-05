import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";

import { navigationData } from "../store/siteData";
import AppIcon from "./appIcons";
import MyProfile from "./myProfile";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function NavigationBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [activeMenu, setActiveMenu] = React.useState("Home");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    if (event.currentTarget.dataset.name === "Profile") {
      setAnchorEl(event.currentTarget);
    }
    setActiveMenu(event.currentTarget.dataset.name);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const getMenuElem = (menuData) => {
    const { isNavigationmenu, manuname, menuicon, menulink } = menuData;
    return isNavigationmenu ? (
      <Link to={menulink} className={"menu-link"}>
        {menuicon && <AppIcon iconName={menuicon} />}
        {manuname && <span>{manuname}</span>}
      </Link>
    ) : (
      <React.Fragment>
        {menuicon && <AppIcon iconName={menuicon} />}
        {manuname && (manuname !== "Profile" || isMobileMenuOpen) && (
          <span>{manuname}</span>
        )}
      </React.Fragment>
    );
  };

  const getMenu = (menuData, otherProps, isMobileView = false) => {
    return isMobileView ? (
      <MenuItem data-name={menuData.manuname} {...otherProps}>
        {getMenuElem(menuData)}
      </MenuItem>
    ) : (
      <IconButton
        {...otherProps}
        data-name={menuData.manuname}
        disableFocusRipple={true}
        disableRipple={true}
      >
        {getMenuElem(menuData)}
      </IconButton>
    );
  };

  const getMenuClasName = (menuItem) => {
    let tempClasName = "";
    if (activeMenu === menuItem.manuname && menuItem.manuname !== "Profile") {
      tempClasName = "active";
    } else if (menuItem.manuname === "Profile") {
      tempClasName = "my-profile";
    }
    return tempClasName;
  };

  const getMenuList = (isMobileView) => {
    let tempMenuList = [];
    let tempObj = {};
    navigationData.map((menuItem, index) => {
      tempObj = {
        key: index,
        onClick: handleProfileMenuOpen,
        className: getMenuClasName(menuItem),
      };
      tempMenuList.push(getMenu(menuItem, tempObj, isMobileView));
      return null;
    });
    return tempMenuList;
  };

  const mobileMenuId = "menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={"mobile-menu"}
    >
      {getMenuList(true)}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={"nav-bar"}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <AppIcon iconName={"MenuIcon"} />
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>{getMenuList()}</div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <AppIcon iconName={"MoreIcon"} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <MyProfile
        anchorEl={anchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    </div>
  );
}
