/* eslint-disable react/prop-types */
import VideoItem from "./VideoItem";
import style from "./VideoList.module.css";
const VideoList = ({ title, playList }) => {
  return (
    <div className={style.container}>
      <h1>{title}</h1>
      {playList.map((item, i) => (
        <VideoItem key={i} {...item} />
      ))}
    </div>
  );
};

export default VideoList;
