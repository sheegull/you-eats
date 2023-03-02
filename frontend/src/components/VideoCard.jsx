import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "../shared/VideoLength";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            src={video?.thumbnails[0]?.url}
            alt="thumbnails"
            className="h-full w-full object-cover"
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                src={video?.author?.avatar[0]?.url}
                alt="avatar-icon"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex">
            <span className="text-sm text-white">{video?.title}</span>
            <span className="text-[12px]">{video?.author?.title}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
