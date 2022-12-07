import React, { useState } from "react";

import Button from "../../shared/components/FormElements/Button";

import Card from "../../shared/components/UIElements/Card";
import Map from "../../shared/components/UIElements/Map";
import Modal from "../../shared/components/UIElements/Modal";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showModalWarning, setShowModalWarning] = useState(false);
  return (
    <>
      <Modal
        show={showMap}
        onCancel={() => setShowMap(false)}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={() => setShowMap(false)}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showModalWarning}
        onCancel={() => showModalWarning(false)}
        header="Are you sure ?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button
              inverse
              onClick={() => {
                console.log("Deleting...");
                setShowModalWarning(false);
              }}
            >
              Delete
            </Button>
            <Button danger onClick={() => setShowModalWarning(false)}>
              CLOSE
            </Button>
          </>
        }
      >
        <p>
          Are you sure i wanted to delete this item? Please note that this can't
          be undone thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={() => setShowMap(true)}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger onClick={() => setShowModalWarning(true)}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
