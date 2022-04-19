import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";
import { Box, InputBase, Paper } from "@mui/material";

const useStyles = makeStyles({
    root: {
        border: "1px solid black",
        borderRadius: "4px",
        backgroundColor: "white",
        width: "25%",
    },
    inputBase: {
        width: "100%",
        padding: "4px",
    },
});

const InputBar = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <InputBase
                id="input-with-icon-adornment"
                placeholder="Search for products, brands and more"
                className={classes.inputBase}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
            />
        </Box>
    );
};

export default InputBar;
