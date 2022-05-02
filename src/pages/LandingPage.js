import React, { Component } from 'react';
import Logo from '../components/branding/Logo';
import Header from '../components/common/Header';
import PrimaryButton from '../components/common/PrimaryButton';
import BrowsePage from './BrowsePage';
import './LandingPage.css';

function LandingPage() {
    return (
        <div>
            <div id="LandingPage" style={{}}>
                <Header />
                <div style={{ display: 'flex', flexDirection: 'row', flex: 2, alignItems: 'center' }}>
                    <div id="LandingPageMain" style={{ flex: 1 }}>
                        <h1>The right people for your team</h1>
                        <p>Use real-world challenges to hire developers who can help your team</p>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ width: 150, marginLeft: '20%' }}>
                                <PrimaryButton text="Find Work" color="#FF405C"></PrimaryButton>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 1 }}></div>
                </div>
            </div>
            <BrowsePage></BrowsePage>
        </div>
    );
}

export default LandingPage;