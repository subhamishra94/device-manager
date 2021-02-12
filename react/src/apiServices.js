// @flow
import axios from "axios";

const BASE_URL = "http://localhost:8080";

export type DeviceType = {
  avgRating: number,
  device: string,
  id: number,
  isCheckedOut: boolean,
  lastCheckedOutDate: string,
  lastCheckedoutBy: string,
  manufacturer: string,
  os: string,
  error: string,
};

export const getDeviceList = async (
  onSuccess: (deviceList: Array<DeviceType>) => mixed,
  onError: (deviceList: Array<DeviceType>) => mixed
) => {
  const resp = await axios.get(`${BASE_URL}/device`);
  const deviceList: DeviceType = resp.data;
  if (onError && resp.error) {
    onError(deviceList);
  } else {
    onSuccess(deviceList);
  }
};

export const createDevice = async (
  deviceInfo: DeviceType,
  onSuccess: (deviceList: Array<DeviceType>) => mixed,
  onError: (deviceList: Array<DeviceType>) => mixed
) => {
  const { deviceName, os, manufacturer } = deviceInfo;
  const resp = await axios.post(`${BASE_URL}/device`, {
    device: deviceName,
    os,
    manufacturer,
  });
  const { data }: DeviceType = resp;
  if (onError && resp.error) {
    onError(data);
  } else {
    onSuccess(data);
  }
};

export const deleteDevice = async (
  deviceId: number,
  onSuccess: () => mixed,
  onError: () => mixed
) => {
  const resp = await axios.delete(`${BASE_URL}/device/${deviceId}`);
  const { data }: DeviceType = resp;
  if (onError && resp.error) {
    onError(data);
  } else {
    onSuccess(data);
  }
};

export const checkInOrOutDevice = async (
  params: Object,
  onSuccess: (deviceList: Array<DeviceType>) => mixed,
  onError: (deviceList: Array<DeviceType>) => mixed
) => {
  const { id, checkoutUser, rating } = params
  const resp = await axios.post(`${BASE_URL}/device/check-in-out`, {deviceId: id, checkoutBy: checkoutUser, rating});
  const { data }: DeviceType = resp;
  if (onError && resp.error) {
    onError(data);
  } else {
    onSuccess(data);
  }
};
