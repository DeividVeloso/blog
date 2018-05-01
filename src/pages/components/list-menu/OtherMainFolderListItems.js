import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import ReportIcon from "@material-ui/icons/Report";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeTheme } from "store/actions/theme";
import { createMuiTheme } from "material-ui/styles";

const OtherMailFolderListItems = props => {
  const handleChangeTheme = () => {
    console.log('swipe', props.theme.swipe)
    const payload = {
      swipe: !props.theme.swipe
    }
    props.changeTheme(payload);
  };
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="All mail" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Trash" />
      </ListItem>
      <ListItem button onClick={() => handleChangeTheme()}>
        <ListItemIcon>
          <ReportIcon />
        </ListItemIcon>
        <ListItemText primary="Spam" />
      </ListItem>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    theme: state.theme
  }
}
export default connect(mapStateToProps, { changeTheme })(OtherMailFolderListItems);
