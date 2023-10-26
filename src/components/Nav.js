
import {Link, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export function Nav() {

    let navigateTo = useNavigate();

    function searchSubmitHandler(e) {
        e.preventDefault();
        if (document.querySelector("#search-input").value.length > 0 ) {
            navigateTo(`/search/${document.querySelector("#search-input").value}`);
        }
    }

    return (
        <nav className="navbar navbar-expand-md bg-white fixed-top border-bottom py-2 py-md-3">

            <div className="container-fluid d-flex justify-content-between">

                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link to="/cart" className="nav-link rounded-2" style={{backgroundColor:"#7CFC00"}}>
                            <FontAwesomeIcon style={{color:"white", fontSize:"1.25rem", width:"2rem", padding:"0.2rem 1rem 0.2rem 0.2rem"}} icon={faShoppingCart} />
                        </Link>
                    </li>

                </ul>

                <a href='/' className="navbar-brand h1 mb-0 mx-auto">Shapaz Food</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

            </div>

            <div className="collapse navbar-collapse mx-5 mx-md-0 me-md-1 mt-3 mt-md-0" id="navbarSupportedContent">
                <form onSubmit={searchSubmitHandler}>
                <input style={{borderColor:"#7CFC00", display:"inline"}} id="search-input" className="form-control w-75 mt-1" type="search" placeholder="Search" aria-label="Search"/>
                <button style={{borderColor:"#7CFC00", width:"100%"}} className="btn btn-outline-success px-1 w-25 mb-1" type="submit">Search</button>
                </form>
            </div>

        </nav>
    )
}
