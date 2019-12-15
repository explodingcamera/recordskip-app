/* eslint unicorn/filename-case: 0 */

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import {
	configureFonts,
	DefaultTheme,
	Provider as PaperProvider,
} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

import { RSProvider, useRS } from './context';
import AppNavigator from './navigation/app-navigator';

const Background = styled.View`
	flex: 1;
	background-color: #202124;
`;

const fontConfig = {
	default: {
		regular: {
			fontFamily: 'roboto-mono-regular',
			fontWeight: 'normal',
		},
		medium: {
			fontFamily: 'roboto-mono-medium',
			fontWeight: 'normal',
		},
		light: {
			fontFamily: 'roboto-mono-light',
			fontWeight: 'normal',
		},
		thin: {
			fontFamily: 'roboto-mono-thin',
			fontWeight: 'normal',
		},
		bold: {
			fontFamily: 'roboto-mono-bold',
			fontWeight: 'normal',
		},
	},
};

const theme = {
	...DefaultTheme,
	fonts: configureFonts(fontConfig),
};

function App(props) {
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
			<Background>
				<StatusBar barStyle="default" />
				<AppNavigator />
			</Background>
		);
	}
}

export default function Root(props) {
	return (
		<RSProvider>
			<PaperProvider
				theme={theme}
				settings={{
					icon: p => <FeatherIcon {...p} />,
				}}
			>
				<App {...props} />
			</PaperProvider>
		</RSProvider>
	);
}

async function loadResourcesAsync() {
	await Promise.all([
		Asset.loadAsync([require('./assets/images/logo-white.png')]),
		Font.loadAsync({
			'roboto-mono-bold': require('./assets/fonts/RobotoMono-Bold.ttf'),
			'roboto-mono-light': require('./assets/fonts/RobotoMono-Light.ttf'),
			'roboto-mono-medium': require('./assets/fonts/RobotoMono-Medium.ttf'),
			'roboto-mono-regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
			'roboto-mono-thin': require('./assets/fonts/RobotoMono-Thin.ttf'),
		}),
	]);
}

function handleLoadingError(error) {
	console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
	setLoadingComplete(true);
}
