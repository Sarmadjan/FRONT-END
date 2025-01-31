import { useState } from "react";

const ResponsePopup = () => {
    const [show, setShow] = useState(false);

    const handleSendResponse = () => {
        setShow(true);
        setTimeout(() => setShow(false), 3000); // Auto-close after 3 seconds
    };

    return (
        <div className="container mt-5">
            <button className="btn btn-primary" onClick={handleSendResponse}>
                Send Response
            </button>

            {show && (
                <div
                    className="modal d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Response Sent</h5>
                                <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>Your response has been sent successfully!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResponsePopup;