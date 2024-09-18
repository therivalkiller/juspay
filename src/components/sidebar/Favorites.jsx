import { List, ListItem, ListItemText } from '@mui/material';

const Favorites = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold">Favorites</h3>
      <List>
        <ListItem button>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Projects" />
        </ListItem>
      </List>
    </div>
  );
};

export default Favorites;