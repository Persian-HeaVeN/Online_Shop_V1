
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logoImg from "../assets/logo.png"
import { useContext } from 'react';
import {ShopContext} from "../contexts/shopContext"
import { useDispatch } from 'react-redux';
import { toggleCart } from '../reducers/SliceReducers';

export function Nav() {

    const dispatch = useDispatch();
    const currentLocation = useLocation();
    let navigateTo = useNavigate();

    function cartToggleHandler() {
        if ( Number(window.innerWidth) <= 1200 || currentLocation.pathname.search("shop") === -1 ) {
            dispatch(toggleCart());
        }
    }

    function searchSubmitHandler(e) {
        e.preventDefault();
        if (document.querySelector("#search-input").value.length > 0 ) {
            navigateTo(`/search/${document.querySelector("#search-input").value}`);
        }
    }

    const {getTotalItems} = useContext(ShopContext);

    return (
        <nav class="navbar navbar-expand-md bg-white fixed-top border-bottom py-2 py-md-3 px-3">
            <div class="order-0 nav-left-side">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <Link onClick={cartToggleHandler} className="nav-link rounded-2" style={{backgroundColor:"#7CFC00"}}>
                            <FontAwesomeIcon style={{color:"white", fontSize:"1.25rem", width:"2rem", padding:"0.2rem 0rem 0.2rem 0.2rem", display:"inline"}} icon={faShoppingCart} />
                            <p className="me-2 me-md-0" style={{display:"inline", marginLeft:"0.5rem", fontSize:"1.3rem", color:"white"}}>{getTotalItems() === 0 ? "" : getTotalItems()}</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div class="mx-auto order-0">
                <a class="navbar-brand mx-auto hover-pointer" onClick={()=>{navigateTo("/Online_Shop_V1")}}>
                    Shapaz
                    <img src={logoImg} style={{width:"2rem", marginRight:"0.5rem", marginLeft:"0.5rem"}} />
                    Food
                </a>
            </div>
            <div class="navbar-collapse collapse w-100 order-1 nav-collapse">
                <ul class="navbar-nav ms-auto pt-3 pb-1 py-md-0 px-5 px-md-0">
                    <form onSubmit={searchSubmitHandler}>
                        <input style={{borderColor:"#7CFC00", display:"inline"}} id="search-input" className="form-control w-75 mt-1" type="search" placeholder="Search" aria-label="Search"/>
                        <button style={{borderColor:"#7CFC00", width:"100%"}} className="btn btn-outline-success px-1 w-25 mb-1" type="submit">Search</button>
                    </form>
                </ul>
            </div>
            <button style={{color:"#7CFC00"}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".nav-collapse">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>)
}
