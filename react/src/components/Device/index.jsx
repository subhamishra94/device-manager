//flow

import React from 'react'
import './styles.css';

type Props = {
    item: Object
};

const Device = (props: Props) => {
    const { device, os, manufacturer, lastCheckedOutBy, lastCheckedOutDate, isCheckedOut } = props.item;

    const handleOnClick = () => {

    }

    const handleRemoveDevice = () => {

    }

    return (
        <div className="deviceContainer">
            <div className="dataContainer">
                <div className='rowContainer'>
                    <div className="itemContainer">
                        <div className="textContainer">Device Name: </div><div className="textContainer">{device}</div>
                    </div>
                    <div className="itemContainer">
                        <div className="textContainer">Last checked Out By: </div><div className="textContainer">{lastCheckedOutBy}</div>
                    </div>
                </div>
                <div className="rowContainer">
                    <div className="itemContainer">
                        <div className="textContainer">OS:</div><div className="textContainer">{os}</div>
                    </div>
                    <div className="itemContainer">
                        <div className="textContainer">Last Checkedout Date: </div><div className="textContainer">{lastCheckedOutDate}</div>
                    </div>
                </div>
                <div className="rowContainer">
                    <div className="itemContainer">
                        <div className="textContainer">Manufacturer:</div><div className="textContainer">{manufacturer}</div>
                    </div>
            </div>
            </div>
            <div className="buttonsContainer">
                <button onClick={handleRemoveDevice}>Delete</button>
                <button onClick={handleOnClick}>{isCheckedOut ? "Check In" : "Check Out"}</button>
            </div>
        </div>
    )
}
export default Device;