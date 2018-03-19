//Import libraries for making a component
import React from 'react';
import { 
  StyleSheet,
  Text,
  View
}from 'react-native'

//Make a component
const Header = (props) => {
	return (
		<View style={styles.viewStyle}>
		<Text style={styles.textStyle}> {props.headerText} </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	textStyle:{
		fontSize: 20,
		textAlign:'center'
	},
	viewStyle:{
		backgroundColor: '#E8E8E8',
		alignContent: 'center',
		justifyContent: 'center',
		height: 60,
		elevation: 2
	}
});

//Make de component available to other parts of the app 
export default Header; 