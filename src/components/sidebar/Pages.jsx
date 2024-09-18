import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Pages = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold">Pages</h3>
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="User Profile" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Campaigns" />
        </ListItem>
      </List>
    </div>
  );
};

export default Pages;