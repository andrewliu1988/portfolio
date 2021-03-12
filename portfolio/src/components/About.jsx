import React, {useState} from 'react'

const About = () => {
  return (
    <div> 
      <h1> About</h1>
      <h2>Skills</h2>
      <section className="skills">
        <h3 className="skill-icon" ><i  class="devicon-html5-plain-wordmark colored"></i></h3>
        <h3 className="skill-icon"><i  class="devicon-css3-plain-wordmark colored"></i></h3>
        <h3 className="skill-icon" ><i class="devicon-react-original-wordmark colored"></i></h3>
        <h3 className="skill-icon"><i  class="devicon-javascript-plain colored"></i></h3>
        <h3 className="skill-icon"><i  class="devicon-mongodb-plain-wordmark colored"></i></h3>
        <h3 className="skill-icon"><i  class="devicon-postgresql-plain-wordmark colored"></i></h3>
        <h3 className="skill-icon"><i  class="devicon-nodejs-plain colored"></i></h3>
        <h3 className="skill-icon"><i class="devicon-express-original colored"></i></h3>
      </section>
    </div>
  )
}

export default About