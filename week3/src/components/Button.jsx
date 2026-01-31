import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Button({ onClick, children }) {
  const { theme } = useContext(ThemeContext);

  const styles = {
    background: theme === "light" ? "#000" : "#fff",
    color: theme === "light" ? "#fff" : "#000",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
  };

  return <button onClick={onClick} style={styles}>{children}</button>;
}
