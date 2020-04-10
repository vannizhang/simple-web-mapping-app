import * as React from 'react';

import { loadModules, loadCss } from 'esri-loader';
import IMapView from 'esri/views/MapView';
import IWebMap from "esri/WebMap";

interface Props {
    webmapId: string;
};

const MapView:React.FC<Props> = ({
    webmapId
})=>{

    const mapDivRef = React.useRef<HTMLDivElement>();

    const initMapView = async()=>{
        
        type Modules = [typeof IMapView, typeof IWebMap];

        try {
            const [ 
                MapView, 
                WebMap 
            ] = await (loadModules([
                'esri/views/MapView',
                'esri/WebMap',
            ]) as Promise<Modules>);

            const view = new MapView({
                container: mapDivRef.current,
                map: new WebMap({
                    portalItem: {
                        id: webmapId
                    }  
                }),
            });

        } catch(err){   
            console.error(err);
        }
    };

    React.useEffect(()=>{
        loadCss();
        initMapView();
    }, []);

    return (
        <>
            <div 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                ref={mapDivRef}
            ></div>
        </>
    );
};

export default MapView;