import React from 'react'
import { useSetRecoilState } from 'recoil'
import { userAtom } from '../recoil/atom/UserAtom';

function Login() {
    const setUser = useSetRecoilState(userAtom);

    const handleLogin = () => {
        // Simulate a login action
        const userData = {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        };
        setUser(userData);
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
