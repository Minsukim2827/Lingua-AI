import { ProtectedRoute } from '@/components/ProtectedRoute';
import React from 'react';

const MyTranslationsPage: React.FC = () => {
    return (
        <ProtectedRoute>
        <div>
            <h1>My Translations</h1>
            <p>Welcome to the My Translations page!</p>
        </div>
        </ProtectedRoute>
    );
};

export default MyTranslationsPage;