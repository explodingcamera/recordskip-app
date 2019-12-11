import React from 'react';
import styled from 'styled-components/native';

const ItemWrapper = styled.View`
	flex-direction: row;
	justify-content: center;
	padding: 10px;
	background-color: black;
`;

const ItemImage = styled.Image`
	width: 100;
	height: 100;
`;
const ItemMain = styled.View`
	align-self: stretch;
	width: 200;
	padding: 0 10px;
	flex-direction: column;
`;
const ItemTable = styled.View``;

const ItemTableRowWrapper = styled.View`
	flex: 1;
	align-self: stretch;
	flex-direction: row;
`;

const ItemTableText = styled.Text`
	flex: 1;
	align-self: stretch;
`;
const ItemTableText2 = styled(ItemTableText)``;

const ItemTitle = styled.Text``;

const ItemTitleText = styled.Text``;
const ItemTitleText2 = styled(ItemTitleText)``;

const ItemIconRow = styled.View`
	flex: 1;
`;

const ItemIconRowSpacer = styled.View`
	flex: 1;
`;

const ItemTableRow = ({ value }) => (
	<ItemTableRowWrapper>
		<ItemTableText>{value[0]}</ItemTableText>
		<ItemTableText2>{value[1]}</ItemTableText2>
	</ItemTableRowWrapper>
);

const Item = ({ title, artist }) => {
	return (
		<ItemWrapper>
			<ItemImage
				source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
			/>
			<ItemMain>
				<ItemTitle>
					<ItemTitleText>{artist}</ItemTitleText>
					<ItemTitleText2> - {title}</ItemTitleText2>
				</ItemTitle>
				<ItemTable>
					<ItemTableRow value={['1', '2']} />
				</ItemTable>
				<ItemIconRow>
					<ItemIconRowSpacer />
				</ItemIconRow>
			</ItemMain>
		</ItemWrapper>
	);
};

export default Item;
