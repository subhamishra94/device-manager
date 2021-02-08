//flow

import React from 'react';
import Device from '../../components/Device';
import './styles.css'

const deviceList = [
    {
        id: 1,
        device: "Moto G",
        os: "Android",
        manufacturer: "Moto",
        lastCheckedOutDate: "1234",
        lastCheckedOutBy: "Mishra",
        isCheckedOut: false
    },
    {
        id: 2,
        device: "One Plus",
        os: "Android",
        manufacturer: "Moto",
        lastCheckedOutDate: "1234",
        lastCheckedOutBy: "Mishra",
        isCheckedOut: true
    },
    {
        id: 3,
        device: "Samsumg",
        os: "Android",
        manufacturer: "Moto",
        lastCheckedOutDate: "1234",
        lastCheckedOutBy: "Mishra",
        isCheckedOut: false
    }
]

const DeviceList = () => {
    const handleAddDevice = () => {

    }

    return (
        <div className='mainContainer'>
            <div className="headerContainer">
                <div className="titleContainer">Device List</div>
                <div className="titleContainer">
                    <button className="buttonStyle" onClick={handleAddDevice}>Add Device</button>
                </div>
            </div>
            {deviceList.map((device) =>
                <Device key={device.id} item={device} />)}
        </div>
    )
}
export default DeviceList;