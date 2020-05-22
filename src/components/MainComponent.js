import React, { Component } from 'react';
import SearchBar from './SearchBarComponent.js'
import { PlaylistComponent as Playlist } from './PlaylistComponent'
import { SampleComponent as Sample } from './SampleComponent'
import VideoContainer from '../Containers/VideoContainer'
import VideoControls from '../Containers/VideoControlsContainer'
import SongListComponent from './SongListComponent'


class MainContainer extends Component { 
    state = { 
        allSongs: []
    }

    render() {
        return (
            <h1>Main Container</h1>
            //SearchBar Component
            //Playlist Component
            //SampleComponent
            //VideoComponent
            //Video Controls
            //Song List
            
        )
    }

}

export default MainContainer;