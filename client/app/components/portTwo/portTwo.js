// import React from 'react';
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';



class portTwo extends Component {
  constructor(props) {
    super(props);
}

render() {
	return (
	<Carousel>
                 <div>   
                	<h4><b>Movie Finder Challenge</b></h4>
                    <h5 className = "description">This application uses Omdb to search movies and tv series in bulk. Finds up to 10 results for any name entered into the search box.</h5>
                    <img className = "portPics" src="images/picture14.png" onClick= "https://pushforward31.github.io/avoxi-challenge/" />
                    <a href="https://pushforward31.github.io/avoxi-challenge/">
                    <p className="legend">Website </p>
                    </a>
                </div>
                <div>   
                	<h4><b>Flaming Cabbage</b></h4>
                    <h5 className = "description">A travel application that shows nearby restaurants with “good” reviews. It also shows the weather forecast for the next 5 days.</h5>
                    <img className = "portPics" src="images/picture9.png" onClick= "https://weblinaut.github.io/CabbageHead/" />
                    <a href="https://weblinaut.github.io/CabbageHead/">
                    <p className="legend">Website </p>
                    </a>
                </div>
                <div>  
                	<h4><b>Hero Fan</b></h4>   
                	<h5 className = "description" > An application that opens up into a game. I was sole developer for this application</h5>	
                    <img className = "portPics" src="images/picture12.png" onClick= "https://pushforward-hero.herokuapp.com/" />
                    <a href="https://pushforward-hero.herokuapp.com/">
                    <p className="legend">Website </p>
                    </a>
                </div>
                 <div>   
                 <h4><b>Get the News</b></h4>  	
                 <h5 className = "description" >An application that pulls news feeds from a particular website. I was sole developer for this application. </h5>
                    <img className = "portPics" src="images/picture11.png" onClick= "https://pushforward31-news.herokuapp.com/" />
                    <a href="https://pushforward31-news.herokuapp.com/">
                    <p className="legend">Website </p>
                    </a>
                </div>
                 <div>   
                 <h4><b>College Bound</b></h4> 
                 <h5 className = "description" > An education app that helps individuals decide what college or university they should attend. Finds schools by state, SAT and ACT scores.</h5> 	
                    <img className = "portPics" src="images/picture8.png" onClick= "https://college-bound.herokuapp.com/" />
                    <a href="https://college-bound.herokuapp.com/">
                    <p className="legend">Website </p>
                    </a>
                </div>
                 <div> 
                 <h4><b>Taste a Burger</b></h4>    
                 <h5 className = "description" > This is a game app that lets users input the names of burgers they'd like to eat.</h5>	
                    <img className = "portPics" src="images/picture7.png" onClick= "https://pushforward31.herokuapp.com/" />
                    <a href="https://pushforward31.herokuapp.com/">
                    <p className="legend">Website </p>
                    </a>
                </div>
                 <div> 
                 <h4><b>Map Marker</b></h4>  
                 <h5 className = "description" > An application that allows markers to placed on a map at specific coordinates. Purpose is help clients keep an account of business opportunities in any location.</h5>  	
                    <img className = "portPics" src="images/picture13.png" onClick= "https://pushforward31.github.io/Salesforce-mapProject/" />
                    <a href="https://pushforward31.github.io/Salesforce-mapProject/">
                    <p className="legend">Website </p>
                    </a>
                </div>
                 <div>     	
                 <h4><b>Giftastic</b></h4>
                 <h5 className = "description" >This application is designed to generate short video clips of buttons tabbed. Use the search box to create new topic buttons. </h5>
                    <img className = "portPics" src="images/picture3.png" onClick= "https://pushforward31.github.io/Giftastic/" />
                    <a href="https://pushforward31.github.io/Giftastic/">
                    <p className="legend">Website </p>
                    </a>
                </div>
                <div>     	
                 <h4><b>Trivia Game</b></h4>
                 <h5 className = "description" >A game that gives you true and false options. Can't take to long on a question because time will run out. </h5>
                    <img className = "portPics" src="images/picture4.png" onClick= "https://pushforward31.github.io/TriviaGame/" />
                    <a href="https://pushforward31.github.io/TriviaGame/">
                    <p className="legend">Website </p>
                    </a>
                </div>
                <div>     	
                 <h4><b>Train Schedule</b></h4>
                 <h5 className = "description" >An appplication that gives real time schedules for when to expect a train to arrive. </h5>
                    <img className = "portPics" src="images/picture5.png" onClick= "https://pushforward31.github.io/Train-Schedule/" />
                    <a href="https://pushforward31.github.io/Train-Schedule/">
                    <p className="legend">Website </p>
                    </a>
                </div>
    </Carousel>
    );
}
 

	}

	export default portTwo;

