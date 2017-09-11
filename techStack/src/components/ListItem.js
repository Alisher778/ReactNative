import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends React.Component {
	
	render() {
		
		const { id, title } = this.props.item;
		
		return (
			<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
				<View>
					<Text style={styles.flatList}>
						{title}
					</Text>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	flatList: {
		padding: 10,
		alignItems: 'center',
		borderColor: '#ddd',
		borderWidth: 0.5,
		justifyContent: 'space-between',
		fontSize: 20
	}
};

export default connect(null, actions)(ListItem);
