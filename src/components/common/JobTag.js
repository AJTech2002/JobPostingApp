import React, { Component } from 'react';

export default function JobTag(props) {
    return (
        <div style={{ height: 20, width: 'fit-content', backgroundColor: "#E7EAF1", paddingLeft: 10, paddingRight: 10, paddingTop: 3, paddingBottom: 3, borderRadius: 10, fontSize: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 5, marginRight: 5, color: '#07256C' }}>
            {props.text}
        </div>
    )
}