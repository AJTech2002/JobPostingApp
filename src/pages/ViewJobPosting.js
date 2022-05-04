import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/common/Header';
import JobTag from '../components/common/JobTag';
import PrimaryButton from '../components/common/PrimaryButton';

export default function ViewJobPosting(props) {

    const params = useParams();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
            <div style={{}}>
                <Header />
            </div>
            <div style={{ width: '80%', marginLeft: '10%', marginTop: 20, display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
                <h2 style={{ fontSize: 20 }}>Submit Challenge</h2>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start', backgroundColor: 'white', padding: 20, borderRadius: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <h4 style={{ color: "#07256C", fontWeight: 600 }}>Challenge Details</h4>
                        <PrimaryButton text="Submit" color="#FF405C" paddingHorizontal={30}></PrimaryButton>
                    </div>
                    <div style={{ height: 2, backgroundColor: "#07256C", opacity: 0.1, width: '100%' }} />
                    <div style={{ height: 200, display: 'flex' }}>
                        <div style={{}}>
                            <div style={{ height: 80, width: 80, margin: 20, backgroundColor: "#F0F0F0", borderRadius: 15 }}></div>
                        </div>
                        <div style={{ flex: 8, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start' }}>
                            <h4 style={{ marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 20, fontWeight: 400 }}>3D Software Engineer</h4>
                            <h2 style={{ margin: 0, marginTop: 10, fontWeight: 600 }}>Create Cube in Three.JS</h2>
                            <h3 style={{ marginLeft: 0, textAlign: 'left', fontSize: 13, color: "#07256C" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>
                            <div style={{ display: 'flex' }}>
                                <JobTag text="JavaScript"></JobTag>
                                <JobTag text="React"></JobTag>
                                <JobTag text="3D"></JobTag>
                            </div>
                        </div>

                    </div>
                    <div style={{ height: 2, backgroundColor: "#07256C", opacity: 0.1, width: '100%' }} />
                </div>
            </div>
        </div>
    );

}