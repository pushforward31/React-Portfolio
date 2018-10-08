import React from 'react';
import { Link } from 'react-router-dom';
import PlayerTwo from '../videoTwo/videoTwo';
const aboutMe = () => (
  


<div className = "contain">
	<section className = "container1" > 
  <div className ="name">
  <span className = "name1"> Welcome to my Page. Check out my Story </span>
  </div>
	
	</section>
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

     <section>
    
  <div className = "container2">

<div className = "name2">
    <h3><b>My Time at Waffle House</b></h3>
   <p className = "name3"> Managed over employees 80 staff members and 3 store managers.</p><br/>
   <p className = "name3">Won multiple awards including "Best Operational Efficiency", "Team Player Award", "Highest Customer Rentention Awards" and more.</p><br/>
   <p className = "name3"> Mentored hourly staff members and store managers to be promoted to store managers and distrct managers respectively.</p>
   </div>
  
  
  </div>
  
  </section>
  <section>

  <div className = "container3">
  <div className = "name2">
  <h3><b>My Time at Georgia Tech</b></h3>
  <p className = "name3"> Attended the Javascript Web Development Bootcamp and completed the program with an "A" average</p>
  <p className = "name3"> Achieved 2 awards for "Application with best use of Technology" and the "Top 5 most creative TA award"</p>
   <p className = "name3"> Achieved multiple Dean's list awards (3.0 gpa/semester).</p><br/>
   <p className = "name3">Multiple awards for track and field including Team Captain, (ACC)Conference champion and MVP, NCAA All-American, Olympic Trial Finalist</p><br/>
   <p className = "name3"> Attended the Javascript Web Development Bootcamp and completed the program with an "A" average</p>
   </div>
  
  </div>

  

     </section>

     <section> 
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

     </section>
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