import * as React from "react";
import { makeStyles, styled } from "@mui/styles";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import InputBar from "../../molecules/InputBar";
import Button from "../../atoms/Button";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";

const useStyles = makeStyles({
    toolBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& .css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
            color: "white",
        },
    },
    button: {
        color: "white",
    },
});

const Icons = styled(Box)(() => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
}));

const NavBar = (props) => {
    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar className={classes.toolBar}>
                <Typography
                    variant="h5"
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    STORE
                </Typography>
                <StoreMallDirectoryIcon
                    sx={{ display: { xs: "block", sm: "none" } }}
                />
                <InputBar />
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <FavoriteIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                    <Button name="Login" />
                </Icons>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
