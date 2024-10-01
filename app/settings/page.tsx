import { ProtectedRoute } from '@/components/ProtectedRoute';
import React from 'react';

const SettingsPage: React.FC = () => {
    return (
        <ProtectedRoute>
        <div>
            <h1>Settings Page</h1>
            <p>Welcome to the settings page.</p>
        </div>
        </ProtectedRoute>
    );
};

export default SettingsPage;