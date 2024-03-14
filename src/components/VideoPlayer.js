//videoplayer.js
import React from 'react';
import { Container } from 'react-bootstrap';

function VideoPlayer({ video }) {
  return (
    <Container className="mt-5">
      <iframe
        width="100%"
        height="500px"
        src={video.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="Video player"
      ></iframe>
    </Container>
  );
}

export default VideoPlayer;