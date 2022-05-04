import React from 'react';

export default function PrimaryButton(props) {

    return (
        <div>
            <h3 style={{ color: 'white', backgroundColor: (props.color === undefined) ? '#07256C' : props.color, paddingRight: (props.paddingHorizontal === undefined) ? '10px' : props.paddingHorizontal, paddingLeft: (props.paddingHorizontal === undefined) ? '10px' : props.paddingHorizontal, paddingTop: '10px', paddingBottom: '10px', borderRadius: 20, fontWeight: 'normal' }}>
                {props.text}
            </h3>
        </div>
    );

}