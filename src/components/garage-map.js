import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

// Declare component as function component due to better support from react-google-maps library
function GarageMap({ mapClasses, zoom, showLink }) {
  const location = { lat: 43.39694868089392, lng: -3.8364687827239283 }; // Garage localization

  //TODO: https://cloud.google.com/blog/products/maps-platform/google-maps-platform-best-practices-restricting-api-keys

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(() => location, []);

  return (
    <div>
      {!isLoaded ? (
        <></>
      ) : (
        <div>
          <GoogleMap
            mapContainerClassName={mapClasses}
            center={center}
            zoom={parseInt(zoom)}
          >
            <MarkerF
              position={location}
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/gXAcyAu2TTy6PK4Z9",
                  "_blank"
                )
              }
            />
          </GoogleMap>
          {showLink && (
            <span className="text-xs">
              Abrir en{" "}
              <a
                className="text-link-color"
                href="https://maps.app.goo.gl/gXAcyAu2TTy6PK4Z9"
                target="_blank"
              >
                google maps
              </a>
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default GarageMap;
