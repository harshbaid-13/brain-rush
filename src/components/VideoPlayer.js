import React from "react";

const VideoPlayer = () => {
  return (
    <video className="rounded-xl" loop autoPlay muted controls>
      <source
        src="https://res.cloudinary.com/communichat/video/upload/v1680631353/WhatsApp_Video_2023-04-04_at_11.31.17_PM_iyde8q.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default VideoPlayer;
