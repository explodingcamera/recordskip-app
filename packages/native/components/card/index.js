import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import styled from 'styled-components/native';

const CardWrapper = styled.View``;
const Title = styled.Text``;

const Card = ({ title, onPress }) => {
	return (
		<TouchableRipple onPress={onPress}>
			<CardWrapper>
				<Title>{title}</Title>
			</CardWrapper>
		</TouchableRipple>
	);
};

export default Card;
