import React, { useState, useCallback, useRef } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { useFocusEffect, useIsFocused } from '@react-navigation/core';

import SafeAreaView from 'react-native-safe-area-view';

import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Feather } from '@expo/vector-icons';

function Home() {
	const [hasCameraPermission, setCameraPermissions] = useState(null);
	const [flashEnabled, setFlashEnabled] = useState(false);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const camera = useRef();
	const focused = useIsFocused();

	async function checkPermissions() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		setCameraPermissions(status === 'granted');
	}

	useFocusEffect(
		useCallback(() => {
			checkPermissions();
		}, []),
	);

	const { height, width } = Dimensions.get('window');
	const newWidth = height * (3 / 4);
	const widthOffset = -((newWidth - width) / 2);

	return (
		<>
			<View
				style={{
					zIndex: -1,
					...StyleSheet.absoluteFill,
					left: widthOffset,
					right: widthOffset,
					backgroundColor: 'black',
				}}
			>
				{hasCameraPermission && focused && (
					<Camera
						onMountError={e => console.error(e)}
						ref={camera}
						type={type}
						ratio="4:3"
						flashMode={flashEnabled ? 'torch' : 'off'}
						style={{
							flex: 1,
							justifyContent: 'space-between',
						}}
					/>
				)}
			</View>
			<SafeAreaView
				forceInset={{ top: 'always' }}
				style={{
					background: 'transparent',
					flex: 1,
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				{hasCameraPermission === false && (
					<View
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							justifyContent: 'center',
							alignItems: 'center',
						}}
						onClick={checkPermissions}
					>
						<Text
							style={{
								color: 'white',
								fontSize: 20,
							}}
						>
							No access to camera
						</Text>
					</View>
				)}

				<View style={{ padding: 5, alignSelf: 'flex-end' }}>
					<Feather
						name="settings"
						size={26}
						color="white"
						style={{ padding: 10 }}
					/>
					<Feather
						name={flashEnabled ? 'zap-off' : 'zap'}
						onPress={() => setFlashEnabled(e => !e)}
						size={26}
						color="white"
						style={{ padding: 10 }}
					/>
				</View>
				<View>
					<Image
						source={require('../assets/images/logo-white.png')}
						fadeDuration={0}
						style={{
							width: 100,
							height: 100,
							marginBottom: 20,
							shadowColor: '#000',
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.5,
							shadowRadius: 2,
						}}
					/>
				</View>
			</SafeAreaView>
		</>
	);
}

export default Home;
