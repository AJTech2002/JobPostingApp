import React, { Component } from 'react';
import Logo from '../branding/Logo';
import PrimaryButton from './PrimaryButton';

export default function Header(props) {
    return (
        <div id="LandingPageHeader" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: "#FDEDEF" }}>
            <Logo />
            <div id="LandingPageOptions" style={{ display: 'flex', flexDirection: 'row', marginRight: 30, alignItems: 'center' }}>
                <h3>Find a Job</h3>
                <h3>Post a Job</h3>
                <h3 style={{ marginRight: '20px' }}>Companies</h3>
                <PrimaryButton text="Login/Register"></PrimaryButton>
            </div>
        </div>
    );
}