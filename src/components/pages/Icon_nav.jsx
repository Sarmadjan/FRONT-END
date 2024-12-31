import Navbtn from "../button/Navbtn";
const Icon_nav = () => {
  return (
    <div>
      <div className="container-fluid position-fixed">
        <div className="row nv-btn  pt-5 d-flex justify-content-between">
          <div className="col-2 logo-A ">
            <span>A.</span>
          </div>
          <div className="col-2 d-flex justify-content-end me-5">
            <div className="me-2"> <Navbtn /></div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icon_nav;
