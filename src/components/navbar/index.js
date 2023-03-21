import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ElevationScroll from "./ElevationScroll";
import { Container } from "@mui/material";
import styles from "./styles.ts";

const navItems = [
  {
  name:"Home",
  link:"/"
  },
  {
    name:"Events",
    link:"/events",
  },
  {
    name:"About Us",
    link:"/aboutus",
  },
  {
    name:"Office Bearers",
    link:"/office"
  },
  {
    name:"Contact Us",
    link:"/contact"
  }
]

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton href={item.link} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box position={"static"} sx={styles.navbarMain}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={styles.appbar} component="nav">
          <Toolbar>
            <Box
              component="img"
              color="#7837E3"
              aria-label="icon"
              edge="start"
              alt="Logo"
              src="/favicon.ico"
              sx={styles.logo}
            />
            <Box component={"div"} sx={styles.logoTextContainer}>
              <Typography sx={styles.logoText1}>National Service Scheme</Typography>
              <Typography sx={styles.logoText2}>BITS Pilani, Hyderabad Campus</Typography>
            </Box>
            <Typography sx={{ flexGrow: 1 }}/>
            <Box
              sx={styles.navItems}
            >
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  sx={styles.navItem}
                  href={item.link}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={styles.menuIcon}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={styles.mobileDrawer}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
