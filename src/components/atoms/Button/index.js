import * as React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = (props) => {
    return <MuiButton variant={props.variant}>{props.name}</MuiButton>;
};

export default Button;
