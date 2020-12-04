import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import { userData } from '../store/siteData';
import AppIcon from './appIcons';

export default function MyProfile(props) {
  const { anchorEl, isMenuOpen, handleMenuClose } = props;
  const menuId = 'primary-search-account-menu';
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={'my-profile-container blur'}
    >
      <MenuItem onClick={handleMenuClose}>
        <IconButton className={'profile-icon'}>
          <AppIcon iconName="AccountCircle" />
        </IconButton>
        <div className={'info-section'}>
          <img src={userData.profilepic} />
          <div className={'info-panel'}>
            <span>{userData.name}</span>
            <span>{userData.phoneno}</span>
          </div>
        </div>
        <div className={'info-action'}>
          <Button>Signout</Button>
        </div>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        Inbox
        <Badge badgeContent={'9+'} className={'badge red-bg'}></Badge>
      </MenuItem>
    </Menu>
  );
}
