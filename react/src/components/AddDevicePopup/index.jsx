// @flow

import React, { useEffect, useState } from "react";
import { createDevice } from "../../apiServices";
import PopupModal from "../PopupModal";
import "./styles.css";

type Props = {
  open: boolean,
  onSaveSuccess: () => mixed,
  onClose: () => mixed,
};

const AddDevicePopup = ({ open, onSaveSuccess, onClose }: Props) => {
  const [deviceName, setDeviceName] = useState<string>("");
  const [os, setOS] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");

  useEffect(() => {
    setDeviceName("");
    setOS("");
    setManufacturer("");
  }, [open]);

  const handleOnSave = () => {
    createDevice({ deviceName, os, manufacturer }, () => {
      onSaveSuccess();
      onClose();
    });
  };

  return (
    <PopupModal
      open={open}
      onClose={onClose}
      onSave={handleOnSave}
      title="Add Device"
    >
      <div className="add-modal-content">
        <div>
          <label>Device Name : </label>
          <input
            className="text-input"
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
          />
        </div>
        <div>
          <label>OS : </label>
          <input
            className="text-input"
            type="text"
            value={os}
            onChange={(e) => setOS(e.target.value)}
          />
        </div>
        <div>
          <label>Manufacturer : </label>
          <input
            className="text-input"
            type="text"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </div>
      </div>
    </PopupModal>
  );
};

export default AddDevicePopup;
