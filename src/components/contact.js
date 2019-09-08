import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Apon Islam AL-AMIN</h2>
            <img
              src="https://i.ibb.co/pzx8HHr/AL-AMIN-111.jpg"
              alt="avatar"
              className="avatar-img-resume"
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hi! I am Apon Islam AL-AMIN, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2018. I enjoy creating beautifully designed, intuitive and development functional websites.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+880) 01754-165-534
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (+880) 01923-507-021
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    aponislamapon@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
