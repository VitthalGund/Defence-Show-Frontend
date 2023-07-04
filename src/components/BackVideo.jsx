import video from "../source/VID/jetBackSmallest.webm";
import "../css/video.css";

export default function BackVideo() {
  return (
    <div>
      <video id="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}