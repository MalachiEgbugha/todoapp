

import React from "react";
import { Link } from "react-router-dom";


type Props = {
    trainingdata: string;
}
const Todoitems = ({trainingdata}:Props) => {
 
 
  return (
    <div className="todoitems">
            <div >
                <input type="checkbox" className="checkbox"/>

            </div>
            <div className="training">
                <span>{trainingdata}</span>

            </div>
            <div className="edit">
                <button><Link to={{pathname: '/edit'}}  state={{taskcontent:trainingdata}} >Edit</Link></button>

            </div>

        </div>

   
  );
};
export default Todoitems;


