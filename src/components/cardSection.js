/*
Este componente es una tarjeta visual que se ubicará dentro del componente 
Card, proporciona un marco para mostrar información dentro de el. 
*/
import React, {Component} from 'react';
import { 
  View
}from 'react-native'


const CardSection = (props) =>{
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1, 
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row', 
		borderColor: '#ddd',
		position: 'relative'
	}
};

export default CardSection; 