import React from 'react';
import MyAppBar from './MyAppBar';

interface HeaderProps {
  }

const MyHeader: React.FC<HeaderProps> = () => {
    return(
        <div className="MyHeader"><MyAppBar /></div>
    )
        
        };

export default MyHeader;