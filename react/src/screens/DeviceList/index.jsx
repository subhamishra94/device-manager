//@flow

import React, { useEffect, useState } from "react";

import Device from "../../components/Device";
import AddDevicePopup from "../../components/AddDevicePopup";
import { getDeviceList, type DeviceType } from "../../apiServices";

import "./styles.css";

const DeviceList = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deviceList, setDeviceList] = useState<Array<DeviceType>>(null);

  useEffect(async () => {
    onDeviceChange();
  }, []);

  const onDeviceChange = () => {
    getDeviceList(setDeviceList);
  }

  const handleAddDeviceOpenClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <div className="titleContainer">Device List</div>
        <div className="titleContainer">
          <button className="buttonStyle" onClick={handleAddDeviceOpenClose}>
            Add Device
          </button>
        </div>
      </div>
      {deviceList
        ? deviceList.map((device) => (
            <Device key={device.id} deviceData={device} onDeviceChange={onDeviceChange} />
          ))
        : "No Device Present"}
      <AddDevicePopup
        open={isModalOpen}
        onClose={handleAddDeviceOpenClose}
        onSaveSuccess={onDeviceChange}
      />
    </div>
  );
};
export default DeviceList;
