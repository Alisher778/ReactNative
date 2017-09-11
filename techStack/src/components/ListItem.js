import React from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends React.Component {
	
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { id, description } = this.props.item;

		if (id === this.props.selectedLibrary) {
			return (
				<Text style={styles.descriptionStyle}>{description}</Text>
			);
		}
	}


	render() {
		const { id, title } = this.props.item;
		return (
			<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
				<View>
					<Text style={styles.flatList}>
						{title}
					</Text>
					
					{this.renderDescription()}
					
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
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333'
	},
	descriptionStyle: {
		padding: 10,
		fontSize: 18
	}
};

const mapStateToProps = (state) => {
	return { selectedLibrary: state.selectedLibrary };
};

export default connect(mapStateToProps, actions)(ListItem);
