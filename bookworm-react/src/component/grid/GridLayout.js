import React, { Component } from 'react'
import {Grid, Image, Card, Icon} from 'semantic-ui-react';
class GridLayout extends Component {
  render() {
    return (
        <Grid stackable style={{marginTop:'50px',marginBottom:'50px'}}>
          <Grid.Row columns={4}>
            <Grid.Column textAlign='center'>
                <Card style={{display:'inline-block'}}>
                    <Image src='http://p286ly2wa.bkt.clouddn.com/o_1c3lcf3ak1j7111gm107urhb1od98.jpg?imageslim' />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column textAlign='center'>
                <Card style={{display:'inline-block'}}>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column textAlign='center'>
                <Card style={{display:'inline-block'}}>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                    </Card.Content>
                </Card>
            </Grid.Column>
            
            <Grid.Column textAlign='center'>
                <Card style={{display:'inline-block'}}>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        22 Friends
                    </a>
                    </Card.Content>
                </Card>
            </Grid.Column>
          </Grid.Row>
          </Grid>
    )
  }
}
export default GridLayout;