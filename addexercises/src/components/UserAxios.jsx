import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';

const UserItem = React.memo(function UserItem({ user, onToggle, onDelete, active }) {
  return (
    <div className="todo-item">
      <div>
        <label
        className={
            user.id === active ? "completed" : ""
        }>{user.name}</label>
      </div>

      <div>
        <button onClick={() => onDelete(user.id)}>
            delete
        </button>
        <button onClick={() => onToggle(user.id)}>
            toggle
        </button>
      </div>
    </div>
  );
});

function UserAxios() {
    const [users, setUsers] = React.useState([]);
    const [name, setName] = useState('');
    const [activeUserId, setActiveUserId] = useState(null);

    const handleFetch =  () => {
        axios.get('https://698535a86964f10bf2529a6b.mockapi.io/users')
        .then(response => setUsers(response.data))
        .catch(error => console.error('Error fetching users:', error));
    };


    const toggleUser = useCallback((id) => {
        setActiveUserId(prevId => (prevId === id ? null : id));
    }, [users]);

    const updateUser = (id) => {
        axios.put(`https://698535a86964f10bf2529a6b.mockapi.io/users/${id}`, {
            id: id,
            name: name,
        })
        .then(response => {
            const updatedUser = response.data;
            setUsers(users.map(user => 
                user.id === id ? updatedUser : user
            ));
            setName('');
            setActiveUserId(null);
        })
        .catch(error => console.error('Error updating user:', error));
    };

    const deleteUser = useCallback((id) => {
        axios.delete(`https://698535a86964f10bf2529a6b.mockapi.io/users/${id}`)
        .then(() => {
            handleFetch();
        })
        .catch(error => console.error('Error deleting user:', error));
    }, [users]);

    const addUser = () => {
        axios.post('https://698535a86964f10bf2529a6b.mockapi.io/users', {
            name: name,
        })
        .then(response => { 
            const newUser = response.data;
            setUsers([...users, newUser]);
            setName('');
        })
        .catch(error => console.error('Error adding user:', error));
    };


    useEffect(() => {
        handleFetch();

    }, []);

    useEffect(() => {
        if (activeUserId) {
            const user = users.find(u => u.id === activeUserId);
            setName(user?.name || '');
        } else {
            setName('');
        }
    }, [activeUserId, users]);

  return (
    <div>
      <h1>Users</h1>

      <div>
        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <button disabled={!name.trim() || (activeUserId !== null)} onClick={addUser}>Add User</button>
        <button disabled={!name.trim() || (activeUserId === null)} onClick={() => updateUser(activeUserId)}>Update</button>
      </div>

      <div className="todolist">
        {users.map(user => (
          <UserItem
            key={user.id}
            user={user}
            onToggle={toggleUser}
            onDelete={deleteUser}
            active={activeUserId}
          />
        ))}
      </div>
    </div>
  );
}

export default UserAxios
