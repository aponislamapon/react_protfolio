import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/b6kYprw/4d0-6f5-636-330-1-original.jpg) center / cover'}} >Php Project #1</CardTitle>
            <CardText>
              Online Library Management System using PHP, Bootstrap, MySQL
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored><a href="http://alamin.infantinventory.com/php/">Live Demo</a> </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/WBBPyFc/Laraval.png) center / cover'}} >Laravel Project #2</CardTitle>
            <CardText>
              Ecommerce project using Laravel Framework, bootstrap, with admin panel.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored><a href="http://alamin.infantinventory.com/laravel/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/F8Gj1VK/bootstrap-4-tutorial.jpg) center / cover'}} >Bootstrap Project #3</CardTitle>
            <CardText>
              A sample project of IDB-BISEW IT scholarship project using bootstrap
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored><a href="http://alamin.wdpfbd.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #4</CardTitle>
            <CardText>
              My protfolio using react library. My all information here.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored><a href="http://alamin.infantinventory.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>

          {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/b6kYprw/4d0-6f5-636-330-1-original.jpg) center / cover'}} >Php Project #1</CardTitle>
              <CardText>
               Online Library Management System using PHP, Bootstrap, MySQL
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored><a href="http://alamin.infantinventory.com/php/">Live Demo</a> </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            
        </div>
      )
    }else if(this.state.activeTab === 2) {
      return (
        <div>

          {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/F8Gj1VK/bootstrap-4-tutorial.jpg) center / cover'}} >Bootstrap Project #3</CardTitle>
              <CardText>
                 A sample project of IDB-BISEW IT scholarship project using bootstrap
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored><a href="http://alamin.wdpfbd.com/">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div>\

          {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/WBBPyFc/Laraval.png) center / cover'}} >Laravel Project #2</CardTitle>
              <CardText>
                Ecommerce project using Laravel Framework, bootstrap, with admin panel.
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored><a href="http://alamin.infantinventory.com/laravel/">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

        </div>
      )
    } else if(this.state.activeTab === 4) {
      return (
        <div>

         {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #4</CardTitle>
            <CardText>
              My protfolio using react library. My all information here.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored><a href="http://alamin.infantinventory.com/">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>All Project</Tab>
          <Tab>PHP</Tab>
          <Tab>Bootstrap</Tab>
          <Tab>Laravel</Tab>          
          <Tab>React</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
