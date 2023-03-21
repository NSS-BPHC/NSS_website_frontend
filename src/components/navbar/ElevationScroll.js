import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useScrollTrigger } from "@mui/material";
import colors from "../../utils/colors";

export default function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      sx: trigger ? {backdropFilter:"blur(10px)",backgroundColor:colors.grayDark} : {background:"none"},
    });
}
