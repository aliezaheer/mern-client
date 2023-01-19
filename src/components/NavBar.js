import { AppBar, Toolbar, styled } from "@mui/material";

import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
  position: static;
`;

const Tabs = styled(NavLink)`
  font-size: 1.2rem;
  margin-right: 1.3em;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <div>
      <Header>
        <Toolbar>
          <Tabs to="/">User Details</Tabs>
          <Tabs to="users-list">All Users</Tabs>
          <Tabs to="add">Add User</Tabs>
        </Toolbar>
      </Header>
    </div>
  );
};

export default NavBar;
