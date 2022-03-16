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
  
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export default function App() {
  return (
    <div style={{backgroundColor:"#0265E7"}}>
    <Grid container spacing={3} sx={{padding:"100px"}} >

    <Grid item xs={12 } md={4}>
    <Card sx={{ minWidth: 255,borderRadius:"20px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 ,fontWeight:"bold" ,textAlign:"center"}} color="text.secondary" gutterBottom>
         FREE
        </Typography>
    <Typography sx={{  display:"flex",alignItems:"end",justifyContent:"center", color:"black" }} >
        <Typography variant="h3"  sx={{ mb: 1.5,display:"flex"}} >
        $0 
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }} >
        /month
        </Typography>

        </Typography>
        <Typography sx={{ borderTop:"1px solid grey",mt:"3",color:"black",lineHeight:"40px",padding:"20px"}}  >
        <CheckIcon />Single User

          <br />
          <CheckIcon/> 5GB Storage
          <br />
          <CheckIcon/>Unlimited Public Projects
          <br />
          <CheckIcon/>Community Access
          <br />
          <CloseIcon style={{color:"#999FA5"}}/> <span style={{color:"#999FA5"}}>Unlimited Private Projects</span>
          <br />
          <CloseIcon style={{color:"#999FA5"}}/><span style={{color:"#999FA5"}}>Dedicated Phone Support</span>
          <br />
          <CloseIcon style={{color:"#999FA5"}}/><span style={{color:"#999FA5"}}>Free Subdomain
          </span><br />
          <CloseIcon style={{color:"#999FA5"}}/> <span style={{color:"#999FA5"}}>Monthly Status Reports</span>
        </Typography>

      </CardContent>
      <CardActions  sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Button variant="contained" sx={{minWidth:305,height:"60px" ,borderRadius:40,backgroundColor:"#569AFE",marginBottom:"10px"}}>BUTTON</Button>
      </CardActions>
    </Card>
     <br/>
</Grid>

<Grid item xs={12} md={4}> 
<Card sx={{ minWidth: 255,borderRadius:"20px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14,textAlign:"center",fontWeight:"bold" }} color="text.secondary" gutterBottom>
         PLUS
        </Typography>
    <Typography sx={{  display:"flex",alignItems:"end",color:"black",justifyContent:"center" }} >
        <Typography variant="h3"  sx={{ mb: 1.5,display:"flex" }} >
        $9
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }} >
        /month
        </Typography>

        </Typography>
        <Typography sx={{ borderTop:"1px solid grey",mt:"3",color:"black",lineHeight:"40px",padding:"20px"}}  >
        <CheckIcon/><span style={{fontWeight:"bold"}}> 5 Users</span>
          <br />
          <CheckIcon/>  50GB Storage
          <br />
          <CheckIcon/>  Unlimited Public Projects
          <br />
          <CheckIcon/>  Community Access
          <br />
          <CheckIcon/>  Unlimited Private Projects
          <br />
          <CheckIcon/>  Dedicated Phone Support
          <br />
          <CheckIcon/>  Free Subdomain
          <br />
          <CloseIcon style={{color:"#999FA5"}}/>  <span style={{color:"#999FA5"}}>Monthly Status Reports</span>
        </Typography>

      </CardContent>
      <CardActions  sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Button variant="contained" sx={{minWidth:305,height:"60px",borderRadius:40,backgroundColor:"#569AFE",marginBottom:"10px"}}>BUTTON</Button>
      </CardActions>
    </Card>
     <br/>
</Grid>
<Grid item xs={12} md={4}>
<Card sx={{ minWidth: 255,borderRadius:"20px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 ,textAlign:"center",fontWeight:"bold"}} color="text.secondary" gutterBottom>
         PRO
        </Typography>
    <Typography sx={{  display:"flex",alignItems:"end",color:"black",justifyContent:"center" }} >
        <Typography variant="h3"  sx={{ mb: 1.5,display:"flex" }} >
        $49
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }} >
        /month
        </Typography>

        </Typography>
        <Typography sx={{ borderTop:"1px solid grey",mt:"3",color:"black",lineHeight:"40px",padding:"20px"}}  >
        <CheckIcon/> <span style={{fontWeight:"bold"}}>Unlimited </span>Users
          <br />
          <CheckIcon/>  150GB Storage
          <br />
          <CheckIcon/>  Unlimited Public Projects
          <br />
          <CheckIcon/> Community Access
          <br />
          <CheckIcon/>  Unlimited Private Projects
          <br />
          <CheckIcon/>  Dedicated Phone Support
          <br />
          <CheckIcon/> <span style={{fontWeight:"bold"}}>Unlimited</span> Free Subdomain
          <br />
          <CheckIcon/>  Monthly Status Reports
        </Typography>

      </CardContent>
      <CardActions sx={{display:"flex",justifyContent:"center",alignItems:"center",}}>
      <Button variant="contained" sx={{minWidth:305,height:"60px",borderRadius:40,backgroundColor:"#569AFE",marginBottom:"10px"}}>BUTTON</Button>
      </CardActions>
    </Card>
     <br/>
</Grid>
  

        </Grid>
    


    
    </div>
  );
}
