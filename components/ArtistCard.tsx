import { Media, useMediaContext } from "../contexts/media.context";
import { useSelectedMediaContext } from "../contexts/selectedMedia.context";

export const ArtistCard = () => {
  const { artist, duration, fileName, name, imgUrl } = useMediaContext();
  const { setSelectedMedia } = useSelectedMediaContext();
  return (
    <div
      className="flex flex-col hover:bg-slate-500 cursor-pointer transition-all duration-100 ease-in hover:scale-105 p-4 w-full"
      onClick={() => {
        if (!setSelectedMedia) return;
        setSelectedMedia({
          artist,
          duration,
          fileName,
          name,
          imgUrl,
        } as Media);
      }}
    >
      <div className="text-gray-200 font-bold text-lg">{name}</div>
      <div className="text-gray-200 font-normal text-sm">{artist}</div>
      <div className="text-gray-200 font-normal text-xs">
        Duration: <span>{duration}</span>
      </div>
    </div>
  );
};
