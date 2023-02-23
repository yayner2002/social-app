import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import PlaceList from "../components/PlaceList";

const UserPlaces = () => {
  const { error, isLoading, sendRequest, clearError } = useHttpClient();
  const [loadedPlaces, setLoadedPlaces] = useState();
  const uid = useParams().uid;

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/places/user/${uid}`
        );
        setLoadedPlaces(responseData.places);
      } catch (err) {}
    };

    fetchPlaces();
  }, [sendRequest, uid]);

  const placeDeleteHundler = (deletedPlaceId) => {
    setLoadedPlaces((previousPlaces) => {
      return previousPlaces.filter((place) => place.id !== deletedPlaceId)
    })
  }
  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay />
        </div>
      )}
      {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} onDeletePlace= {placeDeleteHundler} />}
    </>
  );
};

export default UserPlaces;
