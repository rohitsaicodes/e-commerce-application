import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, InputBase, Paper, Typography } from "@mui/material";
import InputBar from "../../molecules/InputBar";
import Button from "../../atoms/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    rightNavContainer: {
        display: "inline-flex",
        float: "right",
        alignItems: "center",
    },
});

const NavBar = (props) => {
    const classes = useStyles();

    return (
        <Paper style={{ flexGrow: 1, backgroundColor: "" }}>
            <Grid container spacing={2}>
                <Grid item xs={3} className={classes.root}>
                    <Typography>Nothing Ui</Typography>
                </Grid>
                <Grid item xs={4} className={classes.root}>
                    <InputBar />
                </Grid>
                <Grid item xs={5} display="flex">
                    <Box className={classes.rightNavContainer}>
                        <div>
                            <IconButton size="large" color="inherit">
                                <Badge badgeContent={4} color="success">
                                    <FavoriteIcon />
                                </Badge>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton size="large" color="inherit">
                                <Badge badgeContent={4} color="success">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </div>
                        <div>
                            <Button name="Login" />
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default NavBar;
