import Button from "./Button";

const ButtonList = () => {

const btnList = ["Music","News","Tariq jamil","Javascript","Dawah","Spice","T-Series","Josh talk","Kapil Sharma","Mixes","Kitchen"];
    
    return (
        <div className="flex font-bold mt-4">

        {
            btnList.map((btn, index) => (
                <Button key={index} button={btn}/>
            ))
        }    
            
        </div>
    )
} 
export default ButtonList;