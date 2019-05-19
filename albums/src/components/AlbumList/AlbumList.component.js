import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

import AlbumDetail from '../AlbumDetail/AlbumDetail.component';

class AlbumList extends Component {

    /*
     * Use either this or the constructor when initializing states
        state = {
            albums: []
        };
    */
    constructor() {
        super();
        this.state = {
            albums: []
        };
    }

    componentDidMount = () => {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    };

    renderAlbums() {
        return this.state.albums.map((album, index) =>
          <AlbumDetail key={index} 
            album={album}/>
        );
    }

    render() {
        return (
            <View>
                { this.renderAlbums() }
            </View>
        );
    }
}

export default AlbumList;
