import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import { Email } from '@mui/icons-material';
import '../styles/Home.css';
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Thao</h2>
        <div className='prompt'>
            <p>A software developer with a passion for learning and creating.</p>
            <LinkedInIcon/>
            <MailIcon/>
            <GitHubIcon/>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
            <li className='item'>
                <h2>Front-End</h2>
                <span>ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, StyledComponents</span>
            </li>
            <li className='item'>
                <h2>Back-End</h2>
                <span>.NET, NodeJS, ExpressJS, Python Django, GraphQL, ApolloServer, MySQL, MongoDB, MS SQL</span>
            </li>
            <li className='item'>
                <h2>Languages</h2>
                <span>C#, Javascript, Python, Typescript</span>
            </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
