import React, { Component } from 'react';
import JobPosting from '../components/common/JobPosting';

export default function BrowsePage(prop) {

    return (
        <div style={{ marginTop: 50, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h2 style={{ width: '50%', fontSize: 35, fontWeight: 700 }}>Browse these exciting  challenges and apply now</h2>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: 20 }}>
                    <JobPosting></JobPosting>
                    <JobPosting></JobPosting>
                    <JobPosting></JobPosting>
                    <JobPosting></JobPosting>
                </div>
                <div style={{ marginLeft: 20 }}>
                    <JobPosting></JobPosting>
                </div>
            </div>
        </div>
    );

}