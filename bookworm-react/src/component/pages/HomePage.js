import React, { Component } from 'react';
import GridLayout from '../grid/GridLayout';
import {Grid, Image} from 'semantic-ui-react';
const appStyle = {
  width: '100%',
  marginTop: '60px'
}
const imgStyle= {
  maxHeight: '738px',
  width: '100%'
}
class HomePage extends Component {
  
  render() {
    return (
      <div className="App" style={appStyle}>
      
      <Grid stackable>
          <Grid.Row columns={1}>
            <Grid.Column>
              <img style={imgStyle} src='http://p286ly2wa.bkt.clouddn.com/o_1c66vmn8u1aepmo1gar1plhhr9i.jpg?imageslim'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <GridLayout />
        <GridLayout />
        <GridLayout />
      </div>
    );
  }
}

export default HomePage;
