import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import StarIcon from "@material-ui/icons/Star";
import { withRouter, Link } from "react-router-dom";

const MailFolderListItems = props => (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Meus Estudos" />
      </ListItem>
    </Link>
    <Link to="products">
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Produtos" />
      </ListItem>
    </Link>
  </div>
);
export default MailFolderListItems

