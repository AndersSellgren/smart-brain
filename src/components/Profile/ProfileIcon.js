import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ProfileIcon = ({ onRouteChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  
  const ViewProfile = () => onRouteChange('ViewProfile')
  const signOut = () => onRouteChange('signout')

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Options
        </DropdownToggle>
      <DropdownMenu right={true}>
        {/* <DropdownItem header>Header</DropdownItem> */}
        <DropdownItem onClick={ViewProfile}> View Profile </DropdownItem>
        <DropdownItem onClick={signOut}> Sign Out </DropdownItem>
        {/* <DropdownItem disabled>Action (disabled)</DropdownItem> */}
        {/* <DropdownItem divider /> */}
        {/* <DropdownItem>Foo Action</DropdownItem> */}
        {/* <DropdownItem>Bar Action</DropdownItem> */}
        {/* <DropdownItem>Quo Action</DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
}

export default ProfileIcon;