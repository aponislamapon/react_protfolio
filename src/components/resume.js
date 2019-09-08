import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://i.ibb.co/pzx8HHr/AL-AMIN-111.jpg"
                alt="avatar"
                className="avatar-img-resume"
                />
            </div>

            <h3 style={{paddingTop: '2em'}}>Apon Islam AL-AMIN</h3>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hi! I am Apon Islam AL-AMIN, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2018. I enjoy creating beautifully designed, intuitive and development functional websites.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>41/16/A, Hazi Afsar Uddin Lane, Zigatola</p>
            <h5>Phone</h5>
            <p>(+880) 01754-165-534</p>
            <h5>Email</h5>
            <p>aponislamapon@gmail.com</p>
            <p>aponislamalamin@gmail.com</p>
            <h5>Web</h5>
            <p>alamin.infantinventory.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2012}
              endYear={2016}
              schoolName="Mirpur University College"
              schoolDescription="Major In Finance."
               />

               <Education
                 startYear={2010}
                 endYear={2011}
                 schoolName="Mirpur Bangla College"
                 schoolDescription="Business Study"
                  />

      {/* 
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                /> 
        */} 
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML/CSS"
                progress={90}
                />
                <Skills
                  skill="Magento"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                  <Skills
                    skill="React"
                      progress={50}
                      />
                  <Skills
                    skill="PHP"
                    progress={80}
                  />
                  <Skills
                    skill="Laravel"
                    progress={75}
                  />
                  <Skills
                    skill="Wordpress"
                    progress={85}
                  />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
