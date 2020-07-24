import React, { useState } from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Udyogulu</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Sub Sections</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Business
                </DropdownItem>

                <DropdownItem>
                  General
                </DropdownItem>
                
                <DropdownItem>
                  Corona Virus
                </DropdownItem>

                <DropdownItem>
                 Entertainment
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(35,28,223,1)" iconSize="5" roundness="50%" url="#" size="25" />
          &nbsp;
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="50%" url="#" size="25" />
          &nbsp;
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="googleplus" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(223,42,28,1)" iconSize="5" roundness="50%" url="#" size="25" />
          &nbsp;
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(236,43,43,1)" iconSize="5" roundness="50%" url="#" size="25" />

          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;