import React from "react";

const VideoPlayer = () => {
  return (
    <video className="rounded-xl" loop autoPlay muted controls>
      <source
        src="https://res.cloudinary.com/communichat/video/upload/v1680703492/WhatsApp_Video_2023-04-05_at_7.16.43_PM_qjupxl.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default VideoPlayer;
