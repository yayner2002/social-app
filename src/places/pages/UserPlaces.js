import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const UserPlaces = () => {
  const userID = useParams().userID;

  const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in the world!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 9.01182878058,
        lng: 38.7470179958,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "XYZ State Building",
      description: "One of the most famous sky scrapers in the world!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 9.01182878058,
        lng: 38.7470179958,
      },
      creator: "u2",
    },
  ];

  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userID);
  return <PlaceList items={loadedPlaces}/>;
};

export default UserPlaces;
