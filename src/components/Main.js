import React from 'react';
import { ReactComponent as PlayIcon } from '../svgs/playbutton.svg'

const Main = () => {
    return (
        <div className="main">
            <div className="upperNav">dummy text</div>
            <div className="mainContent">                
                <div className="cardsWrap">
                <h2>Samplify Standards</h2>
                    <div className="card">
                    <div className="cardImage">
                        <img src='https://upload.wikimedia.org/wikipedia/en/a/a7/Bootsyfirst.jpg' alt="bootsy"/>
                    </div>
                    <div className="cardContent">
                        <h3>Liked Songs</h3>
                    </div>
                    <span className="playIcon">
                        <PlayIcon />
                        </span>
                    </div>
                </div> 

                <div className="cardsWrap">
                    <h2>Your Library</h2>
                    <span className="seeAll">See All</span>
                    <p className="subText">There's some text here!</p>
                        <div className="cardsWrapInner">
                            <div className="card">
                                <div className="cardImage">
                                    <img/>
                                </div>
                                <div className="cardContent">
                                <h3>Today's Classics</h3>
                                <span>The classics of today...</span>
                                </div>
                            <span className="playIcon">
                                <PlayIcon />
                            </span>
                            </div>
                            <div className="card">
                                <div className="cardImage">
                                    <img/>
                                </div>
                                <div className="cardContent">
                                    <h3>Today's Classics</h3>
                                    <span>The classics of today...</span>
                                </div>
                            <span className="playIcon">
                                <PlayIcon />
                            </span>
                            </div>
                            <div className="card">
                                <div className="cardImage">
                                    <img/>
                                </div>
                                <div className="cardContent">
                                    <h3>Today's Classics</h3>
                                    <span>The classics of today...</span>
                                </div>
                            <span className="playIcon">
                                <PlayIcon />
                            </span>
                            </div>
                            <div className="card">
                                <div className="cardImage">
                                    <img/>
                                </div>
                                <div className="cardContent">
                                    <h3>Today's Classics</h3>
                                    <span>The classics of today...</span>
                                </div>
                            <span className="playIcon">
                                <PlayIcon />
                            </span>
                            </div>
                        </div>
                </div> 
            </div>
        </div>        
    );
}

export default Main;
