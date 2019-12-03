import React, { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

/// default context values
const defaultCTX = {
	update: () => {},
	error: 'not initialized',
};

const RSContext = React.createContext(defaultCTX);

const RSProvider = ({ children, ...rest }) => {
	const [data, setData] = useState({ ...defaultCTX });

	useEffect(() => {
		AsyncStorage.getItem('recordskip-data')
			.then(obj => setData(obj))
			.catch(error => setData({ error }));
	});

	const update = (key, value) => {
		setData(d => ({ ...d, [key]: value }));
		return AsyncStorage.setItem('canx-player-settings', {
			...data,
			...update,
		}).catch(error => console.error(error));
	};

	const contextValue = { ...data, update };

	return (
		<RSContext.Provider value={contextValue}>{children}</RSContext.Provider>
	);
};

RSProvider.propTypes = {};

RSProvider.defaultProps = {};

function useRS() {
	const player = useRS(RSContext);

	return player;
}

export { RSContext, RSProvider, useRS };
