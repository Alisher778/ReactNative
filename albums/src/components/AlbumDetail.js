import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image } = album;
	return (
		<Card>
			<CardSection>
				<View>
					<Image source={{ uri: thumbnail_image }} style={styles.thumbnailStyle} />
				</View>
				<View style={styles.headerInfo}>
					<Text>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image source={{ uri: image }} style={{width: null, height: 300, flex: 1}} />
			</CardSection>
		</Card>
	);
};

const styles = {
	headerInfo: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle: {
		width: 50,
		height: 50,
		borderRadius: 3,
		marginRight: 10
	},
	imgContainer: {
		display: 'flex',
		alignItems: 'center',

	}	
};


export default AlbumDetail;
