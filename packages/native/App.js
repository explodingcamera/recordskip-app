/* eslint unicorn/filename-case: 0 */

import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RSProvider, useRS } from './context';

import AppNavigator from './navigation/app-navigator';

export default function App(props) {
	const [isLoadingComplete, setLoadingComplete] = useState(false);
	const ctx = useRS();

	useEffect(() => SplashScreen.preventAutoHide());
	useEffect(() => {
		if ((isLoadingComplete && !ctx.error) || props.skipLoadingScreen) {
			SplashScreen.hide();
		}
	}, [ctx.error, isLoadingComplete, props.skipLoadingScreen]);

	if (!isLoadingComplete && !props.skipLoadingScreen && ctx.error) {
		return (
			<AppLoading
				startAsync={loadResourcesAsync}
				onError={handleLoadingError}
				onFinish={() => handleFinishLoading(setLoadingComplete)}
			/>
		);
	} else {
		return (
			<RSProvider>
				<StatusBar barStyle="default" />
				<AppNavigator />
			</RSProvider>
		);
	}
}

async function loadResourcesAsync() {
	await Promise.all([
		Asset.loadAsync([require('./assets/images/logo-white.png')]),
	]);
}

function handleLoadingError(error) {
	console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
	setLoadingComplete(true);
}
