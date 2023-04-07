import ReactPlayer from 'react-player';

const ReactPlayerComponent = ({ width, height, className }) => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=l9fdeRmsnMA"
      className={className}
      width={width}
      height={height}
      controls={true}
    />
  );
};

export default ReactPlayerComponent;
