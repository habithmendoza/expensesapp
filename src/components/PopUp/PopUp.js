import React from 'react';
import '../PopUp/PopUp.css';

const PopUp = (props) => {
    const info = props.infoPopUp.info;

    return (
        <div className='popUp'>
            <h4>{info}</h4>
        </div>
    )
}
export default PopUp;