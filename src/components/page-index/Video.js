import React, { Component } from "react"

const Video = () => {
  return (
    <div className="video-background">
      <iframe
        className="video hero-video"
        src="https://www.youtube.com/embed/pUvuHNG2vWE"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        controls={0}
      />
    </div>
  )
}

export default Video
