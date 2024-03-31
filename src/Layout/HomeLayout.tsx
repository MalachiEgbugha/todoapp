import Navbar from '../Component/Navbar';
import Banner from '../Component/Banner';
import './Layout.css';

import React from 'react';
type Props = {
    children: React.ReactNode;
}


const Layouttwo: React.FC<Props> = ({children}) => 
{

return(
    <div className="contain">
        <Navbar />
        <Banner/>
        <main>
           {children}
        </main>
        
      
       
       
   
    </div>

)
}
export default Layouttwo;
