// FollowUs.js
import React from "react";
import "./FollowUs.css";

function FollowUs() {
  return (
    <div className="social-callout">
      <div className="social-callout__title">
        <span>Join our</span>
        <strong>Sports community</strong>
      </div>
      <div className="social-callout__socials">
        <ul className="socials">
          <li>
            <a
              href="https://www.facebook.com/oddspediaglobal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Facebook Icon"
                width="40"
                height="40"
                src="https://cdn.oddspedia.com/images/static/icons/facebook-alt.svg"
                className="lazyLoad isLoaded"
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/oddspedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Twitter Icon"
                width="40"
                height="40"
                src="https://cdn.oddspedia.com/images/static/icons/twitter-alt.svg"
                className="lazyLoad isLoaded"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/oddspediaglobal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Instagram Icon"
                src="https://cdn.oddspedia.com/images/static/icons/instagram.svg"
                className="lazyLoad isLoaded"
              />
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/playlist/1LADgIbriy2Nwl2kR5ojyb?si=k8PEACu2RCiHZTo4O1eLyg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Spotify Icon"
                width="40"
                height="40"
                src="https://cdn.oddspedia.com/images/static/icons/spotify.svg"
                className="lazyLoad isLoaded"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/oddspedia/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Youtube Icon"
                width="40"
                height="40"
                src="https://cdn.oddspedia.com/images/static/icons/youtube-alt.svg"
                className="lazyLoad isLoaded"
              />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/oddspedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Telegram Icon"
                width="40"
                height="40"
                src="https://cdn.oddspedia.com/images/static/icons/telegram.svg"
                className="lazyLoad isLoaded"
              />
            </a>
          </li>
          <li>
            <a
              href="https://anchor.fm/oddspedia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Anchor.fm Icon"
                width="40"
                height="40"
                src="https://cdn.oddspedia.com/images/static/icons/anchor-fm.svg"
                className="lazyLoad isLoaded"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="social-callout__label">
        Follow us
        <span>@scorekub</span>
      </div>
      <img
        width="320"
        height="197"
        className="social-callout__bg lazyLoad isLoaded"
        src="https://cdn.oddspedia.com/images/static/background/social-callout-dark@2x.jpg"
        alt="Social callout background"
      />
    </div>
  );
}

export default FollowUs;
