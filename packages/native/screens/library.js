import React from 'react';
import styled, { css } from 'styled-components/native';

import SafeAreaView from 'react-native-safe-area-view';

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

const Title = styled.Text`
	font-family: 'roboto-mono-regular';
	color: white;
	font-size: 50;
	align-self: flex-start;
	padding: 20px 0 10px 20px;
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
				<Title>Library</Title>
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
