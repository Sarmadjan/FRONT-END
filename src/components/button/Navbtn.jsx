import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbtn = () => {
  return (
    <>
      <i
        type="button"
        className=""
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        style={{ color: "red" }}
      >
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{height:'40px'}}><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
      </i>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content" style={{ backgroundColor: "black" }}>
            <div className="modal-header" style={{ border: "none" }}>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="text-white navbtn-li">
              <ul style={{ color: "white",listStyle:'none' }}>
              <li>
                  <NavLink className={ 'navlinkk'}  to="/"  onClick={{}}>
                    Homepage
                  </NavLink>
                </li>
                <li>
                  <NavLink className={ 'navlinkk'} to="/portfolio" onClick={{}}>
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink className={ 'navlinkk'}  to="/services" onClick={{}}> 
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink className={ 'navlinkk'}  to="/contact" onClick={{}}>
                    Contact
                  </NavLink>
                </li>
              </ul>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbtn;
