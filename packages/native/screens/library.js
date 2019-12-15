import React from 'react';
import styled, { css } from 'styled-components/native';

import SafeAreaView from 'react-native-safe-area-view';
import { IconButton } from 'react-native-paper';

import Item from './../components/item';

const Wrapper = styled(SafeAreaView)`
	flex: 1;
	align-items: stretch;
	background-color: #202124;
`;

const Items = styled.FlatList.attrs(() => ({
	contentContainerStyle: css`
		padding: 0;
		margin: 0;
	`,
}))`
	flex: 1;
`;

const TitleView = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px 20px 10px 20px;
`;

const Title = styled.Text`
	font-family: 'roboto-mono-regular';
	color: white;
	font-size: 50;
	align-self: flex-start;
`;

const items = [
	{ artist: 'kummer', title: 'kiox' },
	{ artist: 'kummer', title: 'kiox' },
	{ artist: 'kummer', title: 'kiox' },
	{ artist: 'kummer', title: 'kiox' },
	{ artist: 'kummer', title: 'kiox' },
	{ artist: 'kummer', title: 'kiox' },
	{ artist: 'kummer', title: 'kiox' },
	{ artist: 'kummer', title: 'kiox' },
	{ artist: 'kummer', title: 'kiox' },
	{ artist: 'kummer', title: 'kiox' },
	{ artist: 'kummer', title: 'kiox' },
	{ artist: 'kummer', title: 'kiox' },
	{ artist: 'kummer', title: 'kiox' },
];

function Libary() {
	return (
		<>
			<Wrapper forceInset={{ top: 'always' }}>
				<TitleView>
					<Title>Library</Title>
					<IconButton
						icon="plus"
						size={40}
						color="white"
						onPress={() => console.log('Pressed')}
					/>
				</TitleView>
				<Items
					data={items}
					renderItem={({ item }) => <Item {...item} />}
					keyExtractor={item => items.indexOf(item) + '-' + item.title}
				/>
			</Wrapper>
		</>
	);
}

export default Libary;
