import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { CameraAltOutlined, VideocamOutlined } from "@material-ui/icons";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "transparent",
  },
  tabPanel: {
    backgroundColor: "transparent",
    color: "#111827",
  },
  mediaContainer: {
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  mediaItem: {
    width: 100,
    height: 100,
    paddingTop: 10,
  },
}));

export const MediaNavigationTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabPanel}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab
            icon={<CameraAltOutlined />}
            aria-label="phone"
            {...a11yProps(0)}
          />
          <Tab
            icon={<VideocamOutlined />}
            aria-label="favorite"
            {...a11yProps(1)}
          />
          <Tab icon={<PersonPinIcon />} aria-label="person" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="flex flex-wrap mx-1 sm:mx-8">
          <figure>
            <img
              className="w-24 h-24 m-1 sm:w-52 sm:h-52 lg:w-72"
              src="https://picsum.photos/200/200"
              alt="profile-photo"
            />
          </figure>
          <figure>
            <img
              className="w-24 h-24 m-1 sm:w-52 sm:h-52 lg:w-72"
              src="https://picsum.photos/200/200"
              alt="profile-photo"
            />
          </figure>
          <figure>
            <img
              className="w-24 h-24 m-1 sm:w-52 sm:h-52 lg:w-72"
              src="https://picsum.photos/200/200"
              alt="profile-photo"
            />
          </figure>
          <figure>
            <img
              className="w-24 h-24 m-1 sm:w-52 sm:h-52 lg:w-72"
              src="https://picsum.photos/200/200"
              alt="profile-photo"
            />
          </figure>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};
