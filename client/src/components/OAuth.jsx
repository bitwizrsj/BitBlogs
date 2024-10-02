import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function OAuth() {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleGoogleClick = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider);
            const res = await fetch('http://localhost:3008/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                }),
            });
            const data = await res.json();
            if (res.ok) {
                dispatch(signInSuccess(data));
                navigate('/');
            } else {
                setErrorMessage(data.message || 'Failed to sign in.');
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('Failed to sign in. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            <Button
                type='button'
                gradientDuoTone='pinkToOrange'
                outline
                onClick={handleGoogleClick}
                disabled={loading}
            >
                {loading ? 'Loading...' : (
                    <>
                        <AiFillGoogleCircle className='w-6 h-6 mr-2' />
                        Continue with Google
                    </>
                )}
            </Button>
        </div>
    );
}
