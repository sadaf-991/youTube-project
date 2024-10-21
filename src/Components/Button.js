import React from "react";

const Button = ({button}) => {

    return (
        <div>
          <button className="ml-4 bg-gray-200 px-3 py-[7px] rounded-lg">
             {button}</button>
        </div>
    )
}
export default Button;