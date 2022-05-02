import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import "./JobPosting.css";
import JobTag from './JobTag';

export default function JobPosting(props) {

    return (
        <Link to="/view/testJobPost" style={{ textDecoration: 'none' }}>
            <div className="JobPosting" style={{ backgroundColor: 'white', width: 350, height: 280, marginTop: 30, borderRadius: 15, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', padding: 20 }}>
                    <div style={{ backgroundImage: 'url(/logo.png)', height: 40, width: 40, backgroundSize: 'contain' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: 60, marginLeft: 15 }}>
                        <div style={{ minHeight: 0, flex: 1, textAlign: 'left' }}>
                            <h4 style={{ margin: 0, color: '#07256C', fontSize: '17px' }}>JobChallengr</h4>
                        </div>
                        <div style={{ minHeight: 0, flex: 1, textAlign: 'left', lineHeight: 0.5 }}>
                            <h5 style={{ margin: 0, color: '#07256C', fontWeight: 'normal' }}>Google</h5>
                        </div>
                    </div>

                </div>
                <div style={{ width: '80%', marginLeft: 20 }}>
                    <h3 style={{ textAlign: 'left', fontWeight: '600', fontSize: 17, color: "#07256C" }}>A flutter role to develop a social media application</h3>
                </div>
                <div style={{ display: 'flex', marginLeft: 10, }}>
                    <JobTag text="JavaScript"></JobTag>
                    <JobTag text="Flutter"></JobTag>
                </div>
                <div style={{ borderTopColor: 'rgba(7, 37, 108, 0.1)', borderTopStyle: 'solid', borderTopWidth: 1, width: '85%', marginLeft: '7.5%', marginTop: 20 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'start', color: "#07256C" }}>
                        <h3>Submissions: 18</h3>
                    </div>
                </div>
            </div>
        </Link>
    )

}