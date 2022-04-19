import * as React from "react";
import { makeStyles, styled } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
    Button,
    Box,
    CardActionArea,
    CardActions,
    Rating,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const useStyles = makeStyles({
    cardActions: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
    },
});

const ItemCard = () => {
    const classes = useStyles();

    return (
        <Box sx={{ paddingTop: "250px", paddingLeft: "700px" }}>
            <Card sx={{ maxWidth: 345 }}>
                <Box sx={{ cursor: "pointer" }}>
                    <CardMedia
                        component="img"
                        image="https://res.cloudinary.com/sharath-media-library/image/upload/v1647522801/nothing-store-project/sony-xm4_b534or.png"
                        alt="green iguana"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div">
                            iPhone 13 Pro Max
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Apple
                        </Typography>
                        <Rating
                            sx={{ margin: "4px 0px 0px -4px" }}
                            value={4.7}
                            readOnly
                        />
                    </CardContent>
                </Box>
                <CardActions className={classes.cardActions}>
                    <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{ color: "red" }} />}
                    />
                    <Button variant="outlined">Add to Cart</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default ItemCard;
