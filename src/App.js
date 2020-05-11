import React, {useState} from 'react';
import {ReactComponent as BellIcon} from './icons/bell.svg';
import {ReactComponent as MessageIcon} from './icons/messenger.svg';
import {ReactComponent as CaretIcon} from './icons/caret.svg';
import {ReactComponent as PlusIcon} from './icons/plus.svg';
import {ReactComponent as CogIcon} from './icons/cog.svg';
import {ReactComponent as ChevronIcon} from './icons/chevron.svg';
import {ReactComponent as ArrowIcon} from './icons/arrow.svg';
import {ReactComponent as BoltIcon} from './icons/bolt.svg';

function App() {
  return (
    <Navbar>
      <NavItems icon={<PlusIcon />} />
      <NavItems icon={<MessageIcon />}/>
      <NavItems icon={<BellIcon />}/>

      <NavItems icon={<CaretIcon />}>

        {/* Dropdown goes here */}
        <p>Hello World</p>
      </NavItems>
    </Navbar>
  );
}

function Navbar(props){
  return (
      <nav className="navbar">
        <ul className="navbar-nav">{ props.children } </ul>
      </nav>
  );
}

function NavItems(props) {
  
  const [open, setOpen] = useState(false);

  return(
    <li className="nav-item">
      {/* eslint-disable-next-line */}
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export default App;
