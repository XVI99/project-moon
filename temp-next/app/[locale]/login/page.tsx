import { Suspense } from 'react';
import LoginForm from './LoginForm';

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="container mx-auto px-6 py-20 text-center">
                <p className="text-pm-gray-light">Loading...</p>
            </div>
        }>
            <LoginForm />
        </Suspense>
    );
}
