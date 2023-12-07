'use client';

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import React from 'react';

import { ADDRESS_GOOGLE_MAPS_COORDINATES } from '@/constants/constants';

const AppGoogleMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  if (!isLoaded) return <div>loading...</div>;
  return (
    <GoogleMap
      zoom={14}
      center={ADDRESS_GOOGLE_MAPS_COORDINATES}
      mapContainerStyle={{ width: '50vw', height: '50vh' }}
    >
      <Marker position={ADDRESS_GOOGLE_MAPS_COORDINATES} />
    </GoogleMap>
  );
};

export default AppGoogleMap;
