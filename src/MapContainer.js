import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import styled from 'styled-components';

const Map = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 0, lng: 0 }}>
      <Marker position={{ lat: 0, lng: 0 }} />
    </GoogleMap>
  ))
);

const MapContainer = () => {
  return (
    <Map
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<MapContainerStyle />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

const MapContainerStyle = styled.div`
  height: 400px;
  width: 80%;
  margin: 0 auto;
`;

export default MapContainer;
