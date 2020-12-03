import React from 'react';
import UpdateIcon from '@material-ui/icons/Update';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';

export default function AppIcon(props) {
  const { iconName } = props;
  switch (iconName) {
    case 'UpdateIcon':
      return <UpdateIcon />;
    case 'AccountCircle':
      return <AccountCircle />;
    case 'MoreIcon':
      return <MoreIcon />;
    case 'MenuIcon':
      return <MenuIcon />;
    default:
      return null;
  }
}
