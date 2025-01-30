import { useState } from "react"
import "./Job Form.css"

function JobApplicationForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        experience: "",
        cssLevel: "",
        javascriptLevel: "",
        cv: null,
    })

    const skillLevels = [
        { value: "1", label: "I do not have experience with this (1)" },
        { value: "2", label: "I know basic concepts only (2)" },
        { value: "3", label: "I have good knowledge to get the job done (3)" },
        { value: "4", label: "I have solid experience (4)" },
        { value: "5", label: "I can do anything anyone asks! (5)" },
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleFileChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            cv: e.target.files[0],
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">

                    <div className="card-body p-4 p-md-5">

                        <p className="text-muted fs-2 text-center fw-semibold mb-4">Thank you for your interest in WOLTRIO</p>
                        <p className="small text-center text-muted mb-4">
                            Below are a few questions about yourself and your professional experience. Please answer them carefully.
                        </p>

                        <form className="border border-2 p-5 rounded-3" onSubmit={handleSubmit}>
                            <div className="row mb-4">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <label htmlFor="firstName" className="form-label">
                                        First Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label">
                                        Last Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="form-label">
                                    Email <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="experience" className="form-label">
                                    Relevant Experience to Job Opening <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="experience"
                                    name="experience"
                                    placeholder="Ex: 2 years, 3 months"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3">Self Assessment</h5>
                                <p className="text-muted small">
                                    Please rate yourself on a scale of 1 to 5 in the skills/tools below:
                                </p>

                                <div className="mb-4">
                                    <label className="form-label">
                                        CSS <span className="text-danger">*</span>
                                    </label>
                                    {skillLevels.map((level) => (
                                        <div className="form-check" key={`css-${level.value}`}>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="cssLevel"
                                                id={`css-${level.value}`}
                                                value={level.value}
                                                checked={formData.cssLevel === level.value}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor={`css-${level.value}`}>
                                                {level.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">
                                        JavaScript <span className="text-danger">*</span>
                                    </label>
                                    {skillLevels.map((level) => (
                                        <div className="form-check" key={`js-${level.value}`}>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="javascriptLevel"
                                                id={`js-${level.value}`}
                                                value={level.value}
                                                checked={formData.javascriptLevel === level.value}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor={`js-${level.value}`}>
                                                {level.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">
                                        NODE  <span className="text-danger">*</span>
                                    </label>
                                    {skillLevels.map((level) => (
                                        <div className="form-check" key={`node-${level.value}`}>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="nodeLevel"
                                                id={`node-${level.value}`}
                                                value={level.value}
                                                checked={formData.nodeLevel === level.value}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor={`node-${level.value}`}>
                                                {level.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">
                                        REACT <span className="text-danger">*</span>
                                    </label>
                                    {skillLevels.map((level) => (
                                        <div className="form-check" key={`react-${level.value}`}>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="reactLevel"
                                                id={`react-${level.value}`}
                                                value={level.value}
                                                checked={formData.reactLevel === level.value}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-check-label" htmlFor={`react-${level.value}`}>
                                                {level.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="cv" className="form-label">
                                        Upload CV <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="cv"
                                        name="cv"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        required
                                    />
                                    <div className="form-text">Accepted formats: PDF, DOC, DOCX</div>
                                </div>
                            </div>

                            <button type="submit" className="btn fw-semibold btn-warning">
                                Submit Application
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default JobApplicationForm

