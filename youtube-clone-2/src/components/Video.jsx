// import React from "react"
// import { Link } from "react-router-dom"

// function Video( video) {
//     console.log(video);
   

//     return ( 
//     <div className="">
//         <Link to={`/video/${video?.videoId}`}>
//         <div>
//             <div>
                
//                 <img src={video?.thumbnails[0]?.url} alt="" />
//             </div>
//         </div>
//         </Link>
//     </div>
//     );
// }

// export default Video;









//////////ch////




///////////////ch//////////////

import React from "react";
import { Link } from "react-router-dom";
import Time from '../loader/Time';
import PropTypes from 'prop-types';

function Video({ video }) { 
  console.log("Video prop:", video);

  if (!video) {
    return <div>Error: Video data is missing.</div>;
  }

  const { videoId, thumbnails, lengthSeconds } = video;


  if (!videoId) {
    return <div>Error: Missing video ID.</div>;
  }

  const thumbnailUrl = thumbnails?.[0]?.url || "https://via.placeholder.com/150";

  return (
    <div className="video-item">
      <Link to={`/video/${videoId}`}>
        <div className="flex flex-col">
          <div className="relative h-48 md:h-56 rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img className="h-full w-full" src={thumbnailUrl} alt="Video Thumbnail" />
            
       
            {lengthSeconds && <Time time={lengthSeconds} />}
          </div>
          <div className="flex mt-3  space-x-2  ">
          <div className=" flex items-start ">
            <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img className="h-full w-full rounded-full overflow-hidden " src={video?.author?.avatar[0].url} alt="" />
            </div>
          </div>
          <div>
            <span className="text-sm font-bold line-clamp-2 ">{video?.title}</span>
          </div>
          </div>
        </div>
      </Link>
    </div>
  );
}


Video.propTypes = {
  video: PropTypes.shape({
    videoId: PropTypes.string.isRequired,
    thumbnails: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string
      })
    ),
    lengthSeconds: PropTypes.number
  })
};

export default Video;
