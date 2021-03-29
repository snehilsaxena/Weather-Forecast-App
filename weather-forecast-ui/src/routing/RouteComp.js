import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import React from 'react';

const RouteComp = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="dashboard" element={<DashboardLayout />} />
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
};


export default RouteComp;
