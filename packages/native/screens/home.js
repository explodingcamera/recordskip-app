import React, { useState, useCallback, useRef } from 'react';
import { View, Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';

import SafeAreaView from 'react-native-safe-area-view';
import * as Permissions from 'expo-permissions';

import { IconButton } from 'react-native-paper';
import { Camera as ExpoCamera } from 'expo-camera';
import { useFocusEffect, useIsFocused } from '@react-navigation/core';

const CameraWrapper = styled.View`
	z-index: -1;
	position: absolute;
	top: 0;
	bottom: 0;
	background-color: black;
`;
const Wrapper = styled(SafeAreaView)`
	flex: 1;
	justify-content: space-between;
	align-items: center;
`;

const ErrorWrapper = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	justify-content: center;
	alignitems: center;
`;

const ErrorMessage = styled.Text`
	color: white;
	fontsize: 20;
`;

const Camera = styled(ExpoCamera)`
	flex: 1;
	justify-content: space-between;
`;

const CameraButton = styled(Image)`
	width: 100;
	height: 100;
	margin-bottom: 20;
`;

const IconWrapper = styled.View`
	padding: 5px;
	align-self: flex-end;
`;
const Icon = styled(IconButton)`
	padding: 5px;
`;

function Home() {
	const [hasCameraPermission, setCameraPermissions] = useState(null);
	const [flashEnabled, setFlashEnabled] = useState(false);
	const [type] = useState(Camera.Constants.Type.back);
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
			<CameraWrapper
				// eslint-disable-next-line react/forbid-component-props
				style={{
					left: widthOffset,
					right: widthOffset,
				}}
			>
				{hasCameraPermission && focused && (
					<Camera
						onMountError={e => console.error(e)}
						ref={camera}
						type={type}
						ratio="4:3"
						flashMode={flashEnabled ? 'torch' : 'off'}
					/>
				)}
			</CameraWrapper>
			<Wrapper forceInset={{ top: 'always' }}>
				{hasCameraPermission === false && (
					<ErrorWrapper onPress={checkPermissions}>
						<ErrorMessage>No access to camera</ErrorMessage>
					</ErrorWrapper>
				)}

				<IconWrapper>
					<Icon icon="settings" size={26} color="white" />
					<Icon
						icon={flashEnabled ? 'zap-off' : 'zap'}
						onPress={() => setFlashEnabled(e => !e)}
						size={26}
						color="white"
					/>
				</IconWrapper>
				<View>
					<CameraButton
						source={require('../assets/images/logo-white.png')}
						fadeDuration={0}
					/>
				</View>
			</Wrapper>
		</>
	);
}

export default Home;
