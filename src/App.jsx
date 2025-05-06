import React from 'react';
import RetroWindow from './RetroWindow';
import Icon from './Icon';
import './styles.css';

export default function App() {
  return (
    <div className="desktop">
      <RetroWindow title="Click on an icon to explore">
        <div className="welcome-text">
          <h1>Welcome to<br />the 1997 Stein<br />McGale CD-ROM</h1>
        </div>
        <div className="icon-grid">
          <Icon label="Read Me First" src="/icons/folder.png" />
          <Icon label="Dreams Contest" src="/icons/folder.png" />
          <Icon label="Welcome" src="/icons/face.png" />
          <Icon label="What's NeXT" src="/icons/folder.png" />
          <Icon label="Apple Products" src="/icons/folder.png" />
          <Icon label="Commercials" src="/icons/face.png" />
          <Icon label="Commercials" src="/icons/face.png" />
          <Icon label="Commercials" src="/icons/face.png" />
        
        </div>
      </RetroWindow>
    </div>
  );
}




