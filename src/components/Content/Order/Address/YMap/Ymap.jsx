import React from "react";
import {useState} from "react";
import {GeolocationControl, Map, Placemark, SearchControl, YMaps, ZoomControl} from "react-yandex-maps";
import {useDispatch, useSelector} from "react-redux";
import {setAddress} from "../../../../../redux/actions/address";

const Ymap = () => {

    const [addressCoord, setAddressCoord] = useState(false);

    const dispatch = useDispatch();
    const address = useSelector(state => state.address);

    const setAddressName = (e) => {
        const separatedAddress = e.split(', ');
        dispatch(setAddress(
            {
                country: separatedAddress[0],
                city: separatedAddress[1],
                street: separatedAddress[2],
                building: separatedAddress[3]
            }));
    }

    const getCoords = e => {
        window.ymaps.geocode(e.get('coords')).then(res => {
            let firstGeoObject = res.geoObjects.get(0);
            setAddressName(firstGeoObject.getAddressLine())
            setAddressCoord(firstGeoObject.geometry._coordinates);
        })
    };

    return (
        <YMaps query={{
            apikey: 'fafd7df2-e39f-4d35-b41a-4db9834ffca0',
            ns: "ymaps",
        }}>
            <Map
                width={400}
                height={400}
                defaultState={{center: [53.18, 50.12], zoom: 9}}
                modules={["geolocation", "geocode"]}
                onClick={e => getCoords(e)}
            >
                <GeolocationControl options={{
                    float: 'left'
                }}/>
                <SearchControl options={{
                    float: 'right'
                }}/>
                <ZoomControl options={{
                    float: 'left'
                }}/>
                <Placemark
                    geometry={{
                        type: 'Point',
                        coordinates: addressCoord,
                    }}
                    properties={{
                        iconContent: `${address.country}, ${address.city}, ${address.street}, ${address.building}`
                    }}
                    options={{
                        preset: 'islands#blackStretchyIcon',
                    }}
                />
            </Map>
        </YMaps>
    );
};

export default Ymap;