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
			<View style={{ flex: 1 }}>
				<FlatList
				  data={this.props.library}
				  renderItem={({ item }) => <ListItem item={item} />}
				  keyExtractor={(item) => item.id}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
  return { library: state.libraries };
};

 
export default connect(mapStateToProps)(LibraryList);
