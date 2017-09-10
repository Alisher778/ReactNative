import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
	state = { data: this.props.library }

	renderList() {
		return this.props.library.map((item) => { 
			return item;
		});
	}


	render() {
		return(
			<View style={styles.viewStyle}>
				<FlatList
				  data={this.props.library}
				  renderItem={({ item }) => <Text key={item.id} style={styles.flatList}>{item.title}</Text>}
				  keyExtractor={(item) => item.id}
				/>
				
			</View>
		);
	}
}

const mapStateToProps = state => {
  return { library: state.libraries };
};

const styles = {
	flatList: {
		padding: 10,
		alignItems: 'center',
		borderColor: '#ddd',
		borderWidth: 0.5,
		justifyContent: 'space-between'
	},
	viewStyle: { }
};
 
export default connect(mapStateToProps)(LibraryList);
