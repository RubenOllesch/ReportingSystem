import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * The function waits till the chayns api is successfully loaded and
 * every additional functionality of it is ready to go,
 * renders the App component
 * @return {Promise.<void>}
 */
async function init() {
    try {
        await chayns.ready;
    } catch (err) {
            console.warn('no chayns environment found:\n', err);
    }
    /**
     * Render the Component App inside the tappElement
     */
    const tappElement = document.querySelector('.tapp');
    ReactDOM.render(<App />, tappElement);
    chayns.showFloatingButton({
        icon: 'fas fa-plus',
        color: '#4c993d'
    }, () => {
        chayns.selectTapp({
            showName: 'CreateView'
        });
    });
}

init();
