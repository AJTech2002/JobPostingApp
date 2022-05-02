import React from 'react';

export default function Logo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: 35, height: 35, backgroundImage: 'url(/logo.png)', backgroundSize: 'contain', marginRight: 10, marginLeft: 20 }}></div>
            <h2 style={{ fontSize: 20 }}>JobChallengr</h2>
        </div>
    );
}