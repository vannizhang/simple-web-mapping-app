import './styles/index.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MapView from './components/MapView';

ReactDOM.render(
    <MapView 
        webmapId={'e691172598f04ea8881cd2a4adaa45ba'}
    />, 
    document.getElementById('root')
);