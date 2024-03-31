
import React, { useState, useEffect } from "react";
import Layout from "../Layout/HomeLayout";
import Todoitems from "../Component/Todoitems";


const Users = () => {

 let items = ["Traning at the Gym", "Play Paddle with friends","Burger BBQ with family"];
  return (
    <Layout>
        <div id="maincontainer">
      <div className="main__container">
        {
            items.map((u:any) =>(
                <Todoitems trainingdata={u} />

            )) 
                

            
        }
       
      </div>
    
      <div id="add">
      <span className="addicon">+</span>
      </div>
      </div>
    </Layout>
  );
};
export default Users;
