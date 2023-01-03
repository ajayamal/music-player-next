import { useSelectedMediaContext } from "../contexts/selectedMedia.context";

export const BackgroundWallBlur = () => {
  const { selectedMedia } = useSelectedMediaContext();
  return (
    <div className="absolute w-full z-0">
      <img
        className={"rounded-md w-full blur-3xl bg-cover"}
        src={
          selectedMedia?.imgUrl
            ? selectedMedia.imgUrl
            : "https://cdn.pixabay.com/audio/2022/04/04/10-16-10-488_200x200.jpg"
        }
      />
    </div>
  );
};
