import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
//import { withRouter, Link } from "react-router-dom";

export const MenuItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Meus Estudos" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Produtos" />
    </ListItem>
  </div>
);

