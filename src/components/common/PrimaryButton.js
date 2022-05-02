import React from 'react';

export default function PrimaryButton(props) {

    return (
        <div>
            <h3 style={{ color: 'white', backgroundColor: (props.color === undefined) ? '#07256C' : props.color, paddingRight: '10px', paddingLeft: '10px', paddingTop: '10px', paddingBottom: '10px', borderRadius: 20, fontWeight: 'normal' }}>
                {props.text}
            </h3>
        </div>
    );

}