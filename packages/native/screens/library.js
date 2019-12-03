import React from 'react';
import { Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

function Home() {
	return (
		<>
			<SafeAreaView
				forceInset={{ top: 'always' }}
				style={{
					background: 'transparent',
					flex: 1,
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Text>This is top text.</Text>
				<Text>This is bottom text.</Text>
			</SafeAreaView>
		</>
	);
}

export default Home;
