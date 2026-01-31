import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Card from "./Card";
import Button from "./Button";

export default function Layout() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    background: theme === "light" ? "#f5f5f5" : "#121212",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: 20,
  };

  return (
    <div style={styles}>
      <h1>{theme.toUpperCase()} THEME</h1>
      <Button onClick={toggleTheme}>
        Switch Theme
      </Button>

      <Card />
    </div>
  );
}
