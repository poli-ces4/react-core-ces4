/* eslint-disable react/prop-types */
import style from "./VideoItem.module.css";
const VideoItem = ({ title, date, description }) => {
  return (
    <div className={style.container}>
      <h2>{title}</h2>
      <span>{date}</span>
      <p>{description}</p>
    </div>
  );
};

export default VideoItem;
