/* eslint-disable react/prop-types */
import ReactPlayer from 'react-player';
import "../components/pages/Editing.css"

const Video = (props) => {
    return (
        <div className='divstyle rounded-3' >
            <ReactPlayer

                url={props.src}
                controls
                width="100%"
                height="100%"

            />
        </div>
    );
};

export default Video;