import React from 'react';
import WebPage from './WebPage';
import Button from 'react-bootstrap/Button';
import { LogOut } from './LogIn'

const logOut = {
  header: "Log Out",
  subheader: "This will be a log out page",
  listHeaders: []
}

export default function Logn() {
  return (
    <div>
      <Button variant="secondary" onClick={LogOut}>
        Log Out
      </Button>
    </div>
    
  );
}

