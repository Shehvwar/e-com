import React from 'react'
import {Card, CardContent, CardActions, IconButton, CardMedia, Typography} from "@material-ui/core";
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './Styles';
const Product = ({Product}) => {
    const classes  = useStyles();
    return (
        // <div>
        //     {/* <h1>Layout for all products</h1> */}

        // </div>
        <Card className = {classes.root}>
            <CardMedia className = {classes.media} image = ""  title= {Product.name}/>
            <CardContent> 
                <div className = {classes.cardContent}>
                    <Typography variant = 'h5' gutterBottom> 
                        {Product.name}
                    </Typography>
                    <Typography variant = 'h5'> 
                        {Product.price}
                    </Typography>
                </div>
                <Typography variant = 'h2' color = 'textSecondary'>{Product.description}</Typography>

            </CardContent>

            <CardActions disableSpacing className = {classes.cardActions}>
                <IconButton aria-label = 'Add to Cart'>
                        <AddShoppingCart />
                </IconButton>

            </CardActions>



        </Card>
    )
}

export default Product

