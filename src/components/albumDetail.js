/*
Recupera la información del compoente AlbumList por medio de un prop
llmado album, y hace uso de los componentes:
Card y CardSection para mostrar la información recuperada  
*/
import React, {Component} from 'react';
import { 
  Text,
  View
}from 'react-native'
import Card from './card'
import CardSection from './cardSection'


const AlbumDetail = (props) =>{
	return (
		<Card>
			<CardSection> 
				<Text>{props.album.title}</Text>
			</CardSection>
		</Card>
	);
};


//Make de component available to other parts of the app 
export default AlbumDetail; 