/* eslint-disable react/prop-types */


const Charges = () => {
  return (
    <div>

      <div className="col-md-12 d-flex  py-5 align-items-center justify-content-center border border-start-0 border-end-0">
        <div className=" ps-md-2  col-md-2 position-relative  ">
          <p
            style={{ top: "45px" }}
            className=" position-absolute text-white pe-5 "
          >
            $
          </p>{" "}
          <p
            style={{ fontSize: "50px", color: "orange", marginLeft: "10px" }}
          >
            49
          </p>
        </div>

        <div className="col-md-4 fs-4 px-2 ">
          <p>Increasing and customized design solution</p>
        </div>

        <div className="col-md-4">
          <p style={{ color: "rgba(255, 255, 255, .4)" }}>
            Increasing and customized design solution Increasing and
            customized design solution
          </p>
        </div>
        <div className="col-md-2">
          <div
            style={{
              margin: "0 auto",
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              backgroundColor: "orange",
            }}
          >
            <i>
              <svg
                style={{ marginLeft: '11px', marginTop: '9px', width: "18px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </i>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Charges;
