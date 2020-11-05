import React from "react";
import { Card, Button } from "react-bootstrap";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const Panel = ({pic}) => {
  return (
    <Card style={{ width: "135vh",position:"relative"}}>
    
   
    
   <FormControlLabel
     control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
     
   />
  

      <Card.Img variant="top" src={pic} />
     
    </Card>
  );
};

export default Panel;
