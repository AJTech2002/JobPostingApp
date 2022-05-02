import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/common/Header';

export default function ViewJobPosting(props) {

    const params = useParams();

    return (
        <div>
            <div style={{ height: 200, width: '100vw', backgroundColor: '#FDEDEF' }} >
                <Header />
            </div>
        </div>
    );

}