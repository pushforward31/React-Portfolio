import React from 'react';
import { Link } from 'react-router-dom';
// import PlayerTwo from '../videoTwo/videoTwo';
const aboutMe = () => (
  


<div className = "contain">
	{/* <section className = "container1" > 
  <div className ="name">
  <span className = "name1"> Welcome to my Page. Check out my Story </span>
  </div>
	
	</section> */}
  <div className = "pic"> 
  </div>


	<section className= "skills">
	<div className = "row">
	<div className = "col-md-4">
   <h4> Soft Skills</h4>
   <ul>
   <li>Proven Leadership ability</li>
   <li>Work well with a team </li>
   <li>Proficient in implementing newly learned skills </li>
   </ul>
  </div>

  <div className ="col-md-4">
  <h4>Hard Skills </h4>
  <ul>
  <li> Built functional applications with Javascript/Jquery deploying them through Github and Heroku </li>
  <li> Configured servers and intergrated databases with Express and Node </li>
  <li>Experience with modern frontend frameworks of React/Angular6</li>
  </ul>
             </div>
             <div className = "col-md-4">
<h4> Advantages</h4>
   <ul>
   <li>Train programmers to understand the Javascript language </li>
   <li>Years of managerial experience over multiple store operations</li>
   <li>Gained a mature determination to work until the job is done </li>
   <li> Consistent track record of success in achieving company and personal targets </li>
   </ul>

             </div>
             </div>
     </section>

     {/* <section> */}
<div className = "row">
<div className = "col-md-4">
    
  <div className = "container2">

<div className = "name2">
    <h3><b>My Time at Waffle House</b></h3>
   <p className = "name3"> Managed over 80 staff members and 3 store managers.</p><br/>
   <p className = "name3">Developed controlled procedures that managed operational costs  </p><br/>
   <p className = "name3">Won multiple awards including "Best Operational Efficiency", "Team Player Award", "Highest Customer Rentention Awards" and more.</p><br/>
   <p className = "name3"> Mentored hourly staff members and store managers to be promoted to store managers and distrct managers respectively.</p>
   </div>
  
  
  </div>
  </div>
  
  {/* </section>
  <section> */}
<div className = "col-md-4">
  <div className = "container3">
  <div className = "name2">
  <span>
  <h3><b>My Time at Georgia Tech</b></h3>
   <p className = "name3"> Achieved multiple Dean's list awards (3.0 gpa/semester).</p><br/>
   <p className = "name3"> Attended the Javascript Web Development Bootcamp and completed the program with an "A" average</p><br/>
   <p className = "name3"> Contributed over 1200 hours of full immersion in understanding best programming techniques and principles </p><br/>
   <p className = "name3">Multiple awards for track and field including Team Captain, (ACC)Conference champion and MVP, NCAA All-American, Olympic Trial Finalist</p>
   </span>
   </div>
  
  </div>
  </div>

<div className = "col-md-4">
    
    <div className = "container4">
  
  <div className = "name2">
      <h3><b>Here at TrilogyEd</b></h3>
     <p className = "name3"> Troubleshoot and debug code to make sure functionailty is achieved </p><br/>
     <p className = "name3">Guide student programmers to help their learning experience  </p><br/>
     <p className = "name3">Write code and code-based activities for students to get hands-in practice with real-world problem solving </p><br/>
     <p className = "name3"> Restructure existing content into modular hourly standalone lessons </p><br/>
     <p className = "name3"> Create visual diagrams and annotations to break down abstract technical concepts</p>
     </div>
    </div>
    </div>
</div>
  

     {/* </section> */}

     {/* <section> 
     <div className = "row">
	<div className = "col-md-4">
	<img className = "backPics" src = "images/backgroundgt.jpeg"/>

	</div>
	<div className = "col-md-4">
	<img className = "backPics" src = "images/backgroundtrack.jpg"/>
	</div>
	<div className = "col-md-4">
	<img className = "backPics" src = "images/backgroundTrilogy.jpg"/>
	</div>
	</div>

     </section> */}
    <div className = "contact">
      <h2 className="contact">CONTACT</h2>
            <p className="contact"><i>Drop me a message</i></p>
            <div className="contact">
                <div className="contact2">
                    <i className="fa fa-map-marker"></i> Georgia, US
                    <br/>
                    <i className="fa fa-envelope"> </i> Email: EdwardJJthe2@gmail.com
                    <br/>
                    <i className="fa fa-phone"></i> Phone: Will release after received email
                    <br/>
                </div>
            </div>
            </div>
             
  </div>
);

export default aboutMe;