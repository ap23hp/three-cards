import React from "react";
import "./style.css";

import {Box,Card,CardActions,
  CardContent,
  Button,
  Typography ,
Grid,
IconButton,
SvgIcon
}
from '@mui/material';
  
import { mdiCheckBold } from '@mdi/js';


export default function App() {
  return (
    <div>
    <Grid container spacing={3}>

    <Grid item xs={4} md={4}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Free
        </Typography>
    <Typography sx={{  display:"flex",alignItems:"end",color:"black" }} >
        <Typography variant="h2"  sx={{ mb: 1.5,display:"flex" }} >
        $0 
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }} >
        /month
        </Typography>

        </Typography>
        <Typography sx={{ borderTop:"1px solid grey",mt:"3",color:"black"}}  >
       

      Single User

          <br />
          5GB Storage
          <br />
          Unlimited Public Projects
          <br />
          Community Access
          <br />
          Unlimited Private Projects
          <br />
          Dedicated Phone Support
          <br />
          Free Subdomain
          <br />
          Monthly Status Reports
        </Typography>

      </CardContent>
      <CardActions>
      <Button variant="contained">Contained</Button>
      </CardActions>
    </Card>
     <br/>
</Grid>

<Grid item xs={4} md={4}> 
<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Free
        </Typography>
    <Typography sx={{  display:"flex",alignItems:"end",color:"black" }} >
        <Typography variant="h2"  sx={{ mb: 1.5,display:"flex" }} >
        $0 
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }} >
        /month
        </Typography>

        </Typography>
        <Typography sx={{ borderTop:"1px solid grey",mt:"3",color:"black"}}  >
        Single User
          <br />
          5GB Storage
          <br />
          Unlimited Public Projects
          <br />
          Community Access
          <br />
          Unlimited Private Projects
          <br />
          Dedicated Phone Support
          <br />
          Free Subdomain
          <br />
          Monthly Status Reports
        </Typography>

      </CardContent>
      <CardActions>
      <Button variant="contained">Contained</Button>
      </CardActions>
    </Card>
     <br/>
</Grid>
<Grid item xs={4} md={4}>
<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Free
        </Typography>
    <Typography sx={{  display:"flex",alignItems:"end",color:"black" }} >
        <Typography variant="h2"  sx={{ mb: 1.5,display:"flex" }} >
        $0 
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }} >
        /month
        </Typography>

        </Typography>
        <Typography variant="body2"sx={{ borderTop:"1px solid grey",mt:"3"}}  >
        Single User
          <br />
          5GB Storage
          <br />
          Unlimited Public Projects
          <br />
          Community Access
          <br />
          Unlimited Private Projects
          <br />
          Dedicated Phone Support
          <br />
          Free Subdomain
          <br />
          Monthly Status Reports
        </Typography>

      </CardContent>
      <CardActions>
      <Button variant="contained">Contained</Button>
      </CardActions>
    </Card>
     <br/>
</Grid>
  

        </Grid>
    


    
    </div>
  );
}
