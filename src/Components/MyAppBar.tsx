import { AppBar, Toolbar } from "@material-ui/core";

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>Login Form Test Page</Toolbar>;
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}