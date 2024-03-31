

import React from "react";


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
                <button>Edit</button>

            </div>

        </div>

   
  );
};
export default Todoitems;


