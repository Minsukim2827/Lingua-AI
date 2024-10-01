import { ProtectedRoute } from '@/components/ProtectedRoute';
import React from 'react';
import { TranslationsPageComponent } from './_components/translations-page';

const TranslatePage: React.FC = () => {
    return (
        <ProtectedRoute>
        <div>

            <TranslationsPageComponent />
        </div>
        </ProtectedRoute>
    );
};

export default TranslatePage;