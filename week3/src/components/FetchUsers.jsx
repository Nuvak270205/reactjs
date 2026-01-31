import { useReducer } from "react";

const initialState = {
  status: "idle", 
  users: [],
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        status: "loading",
        error: null,
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        status: "success",
        users: action.payload,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        status: "error",
        error: action.payload,
      };

    default:
      return state;
  }
}

export default function FetchUsers() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!res.ok) throw new Error("Fetch failed");

      const data = await res.json();

      dispatch({
        type: "FETCH_SUCCESS",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.message,
      });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Fetch Users State Machine</h2>

      {state.status === "idle" && (
        <button onClick={fetchUsers}>Fetch Users</button>
      )}

      {state.status === "loading" && <p>Loading...</p>}

      {state.status === "error" && (
        <>
          <p style={{ color: "red" }}>
            Error: {state.error}
          </p>
          <button onClick={fetchUsers}>Retry</button>
        </>
      )}

      {state.status === "success" && (
        <ul>
          {state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
