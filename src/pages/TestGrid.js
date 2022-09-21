import { Typography, Grid, Button } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'


const TestGrid = () => {
    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={6} md={2} >Hi</Grid>
            <Grid item xs={6} md={2} >Hello</Grid>
            <Grid item xs={6} md={2} >James</Grid>
            <Grid item xs={6} md={2} >Thomas</Grid>
            <Grid item xs={6} md={2} >Isaiah</Grid>
            <Grid item xs={6} md={2} >Joshua</Grid>

        </Grid>

        <Typography>I'm the Test Grid</Typography>
        <Button component={Link} to="/search" variant="outlined">Search</Button>
        </>

    )
}



export default TestGrid