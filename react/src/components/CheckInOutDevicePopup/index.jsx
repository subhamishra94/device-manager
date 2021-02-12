// @flow

import React, { useState, useEffect } from "react";
import { type DeviceType, checkInOrOutDevice } from "../../apiServices";
import PopupModal from "../PopupModal";

type Props = {
  open: boolean,
  onSaveSuccess: () => mixed,
  onClose: () => mixed,
  deviceData: DeviceType,
};

const CheckInOrOutDevicePopup = ({
  open,
  deviceData,
  onClose,
  onSaveSuccess,
}: Props) => {
  const [checkoutUser, setCheckoutUser] = useState("");
  const [rating, setRating] = useState(0);
  const { id, isCheckedOut } = deviceData;

  useEffect(() => {
    setCheckoutUser("");
    setRating(0);
  }, [open]);

  const handleOnSave = () => {
    // if (isCheckedOut) {
    //   checkInOrOutDevice(id, checkoutUser, () => {
    //     onSaveSuccess();
    //     onClose();
    //   });
    // } else {
    //   checkInOrOutDevice(id, checkoutUser, () => {
    //     onSaveSuccess();
    //     onClose();
    //   });
    // }
    checkInOrOutDevice(
      { id, checkoutUser: isCheckedOut ? null : checkoutUser, rating },
      () => {
        onSaveSuccess();
        onClose();
      }
    );
  };

  const handleOnChange = (e) => {
    if (isCheckedOut) {
      if (e.target.value <= 5 && e.target.value > 0) {
        setRating(e.target.value);
      }
    } else {
      setCheckoutUser(e.target.value);
    }
  };

  return (
    <PopupModal
      title="Checkout Device"
      open={open}
      onClose={onClose}
      onSave={handleOnSave}
    >
      <div className="add-modal-content">
        <label>
          {isCheckedOut ? "Rate the device out of 5 : " : "User Name : "}
        </label>
        <input
          type={isCheckedOut ? "number" : "text"}
          className="text-input"
          value={isCheckedOut ? rating : checkoutUser}
          onChange={handleOnChange}
        />
      </div>
    </PopupModal>
  );
};

export default CheckInOrOutDevicePopup;
