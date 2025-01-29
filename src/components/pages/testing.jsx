import { useState } from "react"

const Testing = () => {
    const [section, setSection] = useState({
        page1: false,
        page2: false,
    })
    return (
        <div>

            <button onClick={() => { setSection({ page2: false, page1: !section.page1 }) }} >
                page 1

            </button>
            <button onClick={() => { setSection({ page1: false, page2: !section.page2 }) }} >page2</button>
            {section.page1 && <div>
                page1
            </div>}
            {section.page2 && <div>
                page2
            </div>}

        </div>
    )
}

export default Testing

