import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Button from "./Button";

export default function Card() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    border: "1px solid",
    borderColor: theme === "light" ? "#ccc" : "#444",
    padding: 20,
    marginTop: 20,
  };

  return (
    <div style={styles}>
      <h3>Card Component</h3>
    </div>
  );
}
