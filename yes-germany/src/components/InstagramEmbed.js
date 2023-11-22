import React from 'react';
import Iframe from 'react-iframe'; // Import this line if you're using react-iframe

const InstagramEmbed = () => {
  return (
    <div>
      {/* Replace the src attribute with your Instagram embed code */}
      {/* Make sure to replace 'data-instgrm-version' with 'data-instgrm-version="13"' if you have the latest version */}
      {/* If you're using react-iframe, use the 'url' prop instead of 'src' */}
      <Iframe
        width="100%"
        height="500px"
        src="https://www.instagram.com/p/EXAMPLE_EMBED_CODE/"
        frameborder="0"
        allowfullscreen
      />
    </div>
  );
};

export default InstagramEmbed;
