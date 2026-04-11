import React from 'react'
import { useSetRecoilState } from 'recoil'
import { userAtom } from '../recoil/atom/UserAtom';

function Logout() {
    const setUser = useSetRecoilState(userAtom);

    const handleLogout = () => {
        // Simulate a logout action by clearing the user state
        setUser(null);
    };
  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
