
import {RES_URL} from "../utils/constans"

const RestorentContainer =(props)=>{
    console.log(props)
    const {resName, cuisine ,rating} = props.resData;
    return (
        <div className="res-card">
            <img src={RES_URL}/>
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{rating} stars</h4>
        </div>
    )
}

export default RestorentContainer;