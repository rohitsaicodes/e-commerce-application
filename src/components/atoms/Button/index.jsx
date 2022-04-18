import * as React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = (props) => {
    return (
        <MuiButton variant={props.variant} onClick={props.onClick}>
            {props.name}
        </MuiButton>
    );
};

export default Button;
