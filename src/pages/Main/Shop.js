import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot as locationIcon, faStar as starIcon} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


export function Shop(props) {

    let navigateTo = useNavigate();

    return (
        <div className="shop-item" onClick={()=>{navigateTo(`/shop/${props.data.Name}`);}}>
            <div className="card" style={{borderRadius:"1rem"}}>
                <div className="div-card-img-top" >
                    <img className="card-img-top" style={{borderTopLeftRadius:"1rem", borderTopRightRadius:"1rem"}} src={props.data.Images.Little} alt="shop image"/>
                    <div className="position-absolute bottom-0 start-0">
                        <img src={props.data.Images.Icon} alt="shop icon" style={{borderRadius:"1.5rem", width:"40%", padding:"0.1rem", backgroundColor:"white"}} />
                    </div>
                    <div className="bottom-right" style={{backgroundColor:"white", color:"black", borderRadius:"1rem", width:"4.5rem", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", height:"2rem"}}>
                        <p style={{marginTop:"-0.15rem", fontWeight:"bold"}}>{props.data.Time[0]} - {props.data.Time[1]}</p>
                        <p style={{fontSize:"0.8rem", marginTop:"-1.5rem"}}>Minute</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.data.Name}</h5>
                    <div className="card-text" style={{containerType:"inline-size"}}>
                        <FontAwesomeIcon style={{color:"#7CFC00", fontSize:"6cqw"}} icon={locationIcon} />
                        <p style={{display:"inline", marginLeft:"0.5rem", fontSize:"6cqw"}}>{props.data.Location}</p>
                        <div data-bs-toggle="tooltip" title="Tooltip on bottom" style={{position:"absolute", bottom:"0", right:"0"}}>
                            {props.data.Stars}
                            <FontAwesomeIcon style={{color:"7CFC00", marginLeft:"0.4rem"}} icon={starIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
