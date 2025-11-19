
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.021 35.596 44 30.134 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
    </svg>
);

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically handle authentication
        console.log('Logging in with:', { email, password });
        navigate('/home');
    };

    const handleGoogleLogin = () => {
        // Here you would initiate Google OAuth flow
        console.log('Redirecting to Google login...');
        navigate('/auth/google/callback');
    };

    return (
        <div 
            className="flex items-center justify-center min-h-screen px-4 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')" }}
        >
            <div className="w-full max-w-md p-8 space-y-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl">
                <div className="text-center">
                    <h1 className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 drop-shadow-sm pb-2">
                        RevieU
                    </h1>
                    <p className="mt-2 text-gray-600">Please sign in to your account.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 sr-only">Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 text-gray-900 bg-gray-50 border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors"
                            placeholder="Email address"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700 sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 text-gray-900 bg-gray-50 border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors"
                            placeholder="Password"
                        />
                    </div>
                    
                    <div className="text-right">
                        <Link to="/forgot-password" className="text-sm font-medium text-red-600 hover:text-red-500">
                            Forgot password?
                        </Link>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out transform hover:-translate-y-0.5"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-center space-x-4">
                    <div className="h-px bg-gray-300 flex-1"></div>
                    <span className="text-sm text-gray-500">Or continue with</span>
                    <div className="h-px bg-gray-300 flex-1"></div>
                </div>

                <div>
                     <button
                        onClick={handleGoogleLogin}
                        type="button"
                        className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out transform hover:-translate-y-0.5"
                    >
                        <GoogleIcon />
                        Sign in with Google
                    </button>
                </div>

                <div className="text-sm text-center">
                    <span className="text-gray-600">Don't have an account? </span>
                    <Link to="/register" className="font-medium text-red-600 hover:text-red-500">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
