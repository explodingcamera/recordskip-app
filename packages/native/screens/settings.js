import React from 'react';
import styled from 'styled-components/native';

import { Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const Wrapper = styled(SafeAreaView)`
	flex: 1;
	justify-content: space-between;
	align-items: center;
`;

function Settings() {
	return (
		<>
			<Wrapper forceInset={{ top: 'always' }}>
				<Text>This is top text.</Text>
				<Text>This is bottom text.</Text>
			</Wrapper>
		</>
	);
}

export default Settings;
