import Navbar from '../Component/Navbar1';
import Banner from '../Component/Banner';
import './Layout.css';

import React from 'react';
type Props = {
    children: React.ReactNode;
}


const Layout: React.FC<Props> = ({children}) => 
{

return(
    <div className="contain">
        <Navbar />
        <main>
           {children}
        </main>
        
      
       
       
   
    </div>

)
}
export default Layout;
