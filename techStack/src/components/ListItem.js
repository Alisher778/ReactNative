import React from 'react';
import { Text } from 'redux';

const ListItem = ({ item }) => {
		return (
			<Text>{item.title}</Text>
		);
};

export default ListItem;
