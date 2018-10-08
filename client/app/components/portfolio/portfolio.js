import React from 'react';

const portfolio = () => (

<div className=" w3-padding-32" style={{margin:'0 -16px'}}>
                  <div id="myCarousel" className="carousel slide" data-ride="carousel" >
                        
                        <ol className="carousel-indicators" style={{top: '0px'}}>
                            <li data-target="#myCarousel" data-slide-to="0" className="active">
                                
                            </li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                            <li data-target="#myCarousel" data-slide-to="4"></li>
                            <li data-target="#myCarousel" data-slide-to="5"></li>
                            <li data-target="#myCarousel" data-slide-to="6"></li>
                            <li data-target="#myCarousel" data-slide-to="7"></li>
                         
                        </ol>
                       
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <a href="https://weblinaut.github.io/CabbageHead/">
                                    <img src="images/picture9.png" alt="Trivia" style={{width:'100%'}} className="w3-hover-opacity"/>
                                
                             <div className="w3-container">   
                            
                                <h3><b>Flaming Cabbage</b></h3>
                                <p style={{font-size: '20px'}}>A travel application that shows nearby restaurants with “good” reviews. It also shows the weather forecast for the next 5 days.</p>
                            </div>
                             </a>
                            </div>
                            <div className="carousel-item">
                                <a href="https://pushforward-hero.herokuapp.com/">
                        <img src="images/picture12.png" alt="HeroGame" style={{width:'100%'}} className="w3-hover-opacity"/>
                        
                            <div className="w3-container">
                                <h3><b>Hero Fan</b></h3>
                                <p style={{font-size: '20px'}}>An application that opens up into a game. I was sole developer for this application</p>
                            </div>
                            </a>
                            </div>
                            <div className="carousel-item">
<a href="https://pushforward31-news.herokuapp.com/">
                        <img src="images/picture11.png" alt="News-app" style={{width:'100%'}} className="w3-hover-opacity"/>
                       
                            <div className="w3-container">
                                <h3><b>Get the News</b></h3>
                                <p style={{font-size: '20px'}}>An application that pulls news feeds from a particular website. I was sole developer for this application.</p>
                            </div>   
                             </a>                        
                             </div>
                            <div className="carousel-item">
<a href="https://college-bound.herokuapp.com/">
                        <img src="images/picture8.png" alt="Train-Schedule" style={{width:'100%'}} className="w3-hover-opacity"/>
                        
                            <div className="w3-container">
                                <h3><b>College Bound</b></h3>
                                <p style={{font-size: '20px'}}>An education app that helps individuals decide what college or university they should attend. Finds schools by state, SAT and ACT scores. </p>
                            </div>   
                            </a>                         
                        </div>
                            <div className="carousel-item">
<a href="https://pushforward31.herokuapp.com/">
                        <img src="images/picture7.png" alt="crystal game" style={{width:'100%'}} className="w3-hover-opacity"/>
                        
                            <div className="w3-container">
                                <h3><b>Taste a Burger</b></h3>
                                <p style={{font-size: '20px'}}>This is a game app that lets users input the names of burgers they'd like to eat. </p>
                            </div> 
                            </a>                           
                        </div>
                        <div className="carousel-item">
                                <a href="https://pushforward31.github.io/Salesforce-mapProject/">
                        <img src="images/picture13.png" alt="Giftastic" style={{width:'100%'}} className="w3-hover-opacity"/>
                        
                            <div className="w3-container">
                                <h3><b>Map Marker</b></h3>
                                <p style={{font-size: '20px'}}>An application that allows markers to placed on a map at specific coordinates. Purpose is help clients keep an account of business opportunities in any location. </p>
                            </div>
                            </a>
                            </div>
                            <div className="carousel-item">
<a href="https://pushforward31.github.io/Giftastic/">
                        <img src="images/picture3.png" alt="Giftastic" style={{width:'100%'}} className="w3-hover-opacity"/>
                        
                            <div className="w3-container">
                                <h3><b>Giftastic</b></h3>
                                <p style={{font-size: '20px'}}>This application is designed to generate short video clips of buttons tabbed. Use the search box to create new topic buttons.</p>
                            </div>  
                            </a>                          
                        </div>
                            <div className="carousel-item">
<a href="https://pushforward31.github.io/TriviaGame/">
                        <img src="images/picture4.png" alt="Trivia" style={{width:'100%'}} className="w3-hover-opacity"/>
                        
                            <div className="w3-container">
                                <h3><b>Trivia Game</b></h3>
                                <p style={{font-size: '20px'}}>A game that gives you true and false options. Can't take to long on a question because time will run out.</p>
                            </div>
                            </a>
                            </div>
                            <div className="carousel-item">
<a href="https://pushforward31.github.io/Train-Schedule/">
                        <img src="images/picture5.png" alt="Train-Schedule" style={{width:'100%'}} className="w3-hover-opacity"/>
                        
                            <div className="w3-container">
                                <h3><b>Train Schedule</b></h3>
                                <p style={{font-size: '20px'}}>An appplication that gives real time schedules for when to expect a train to arrive. </p>
                            </div>
                            </a>
                            </div>

                            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
                        <a className="carousel-control-next" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
                    </div>
                    </div>
                    </div>
	);

export default portfolio;