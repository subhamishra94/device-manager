//flow

import React, { useState } from "react";

import { type DeviceType, deleteDevice } from "../../apiServices";
import CheckInOutDevicePopup from "../CheckInOutDevicePopup";

import "./styles.css";

type Props = {
  deviceData: DeviceType,
  onDeviceChange: () => mixed,
};

const Device = ({ deviceData, onDeviceChange }: Props) => {
  const {
    avgRating,
    device,
    os,
    manufacturer,
    lastCheckedoutBy,
    lastCheckedOutDate,
    isCheckedOut,
    id,
  } = deviceData;
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);
  const lastCheckedOutDateObj = new Date(lastCheckedOutDate);

  const handleOnCheckInOrOut = () => {
    setShowCheckoutPopup(!showCheckoutPopup);
  };

  const handleRemoveDevice = () => {
    deleteDevice(id, onDeviceChange);
  };

  return (
    <div className="deviceContainer">
      <div className="dataContainer">
        <div className="rowContainer">
          <div className="itemContainer">
            <div className="textContainer bold">Device Name: </div>
            <div className="textContainer">{device}</div>
          </div>
          <div className="itemContainer">
            <div className="textContainer bold">Last checked Out By: </div>
            <div className="textContainer">{lastCheckedoutBy}</div>
          </div>
        </div>
        <div className="rowContainer">
          <div className="itemContainer">
            <div className="textContainer bold">OS:</div>
            <div className="textContainer">{os}</div>
          </div>
          <div className="itemContainer">
            <div className="textContainer bold">Last Checkedout Date: </div>
            <div className="textContainer">
              {`${lastCheckedOutDateObj.toDateString()} ${lastCheckedOutDateObj.toLocaleTimeString()}`}
            </div>
          </div>
        </div>
        <div className="rowContainer">
          <div className="itemContainer">
            <div className="textContainer bold">Manufacturer:</div>
            <div className="textContainer">{manufacturer}</div>
          </div>
          <div className="itemContainer">
            <div className="textContainer bold">Average Rating: </div>
            <div className="textContainer">{avgRating}</div>
          </div>
        </div>
      </div>
      <div className="buttonsContainer">
        <button onClick={handleRemoveDevice}>Delete</button>
        <button onClick={handleOnCheckInOrOut}>
          {isCheckedOut ? "Check In" : "Check Out"}
        </button>
      </div>
      <CheckInOutDevicePopup
        deviceData={deviceData}
        open={showCheckoutPopup}
        onClose={() => setShowCheckoutPopup(false)}
        onSaveSuccess={onDeviceChange}
      />
    </div>
  );
};
export default Device;
