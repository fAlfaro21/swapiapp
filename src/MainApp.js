import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import SwapiApp from './SwapiApp';

export const MainApp = () => {
    return (
        <Provider store={ store }>
            <SwapiApp />
        </Provider>
    )
}
