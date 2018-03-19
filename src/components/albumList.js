/*
Trae la información de la API y la renderiza por medio de un componente
llamado AlbumDetail
*/
import React, {Component} from 'react';
import { 
  Text,
  View
}from 'react-native'
import axios from 'axios';
import AlbumDetail from './albumDetail';


//Make a component
class AlbumList extends Component {
	//Se declara el estado con un array vacio llamado albums
	state = {albums: []};
	/*Cuando inicia la aplicación se hace la petición al servidor y se llena
	el arreglo albums con la información recibida*/
	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({albums: response.data}));
	}
	//Función para renderizar la información que llegó al arreglo albums
	renderAlbums(){
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album}/>
		);
	}
	render() {
		console.log(this.state);
		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

//Make de component available to other parts of the app 
export default AlbumList; 