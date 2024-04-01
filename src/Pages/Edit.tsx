
import React, { useState, useEffect } from "react";
import Layout from "../Layout/EditLayout";
import { useLocation } from 'react-router-dom';




const Edit = (props:any) => {
  
    let { state } = useLocation();
   


  return (
    <Layout>
        <div id="editcontainer">
            
                <h1>Task Name</h1>
                <div id="task">
                    <input type="text" value={state.taskcontent} />

                </div>
                <button id="delete">Delete</button>
                <button id="save">Save</button>
            
            </div>
       
    </Layout>
  );
};
export default Edit;
