import { useEffect } from "react";
import { MediaProvider } from "../contexts/media.context";
import { Albums } from "../public/album/albums";
import { ArtistCard } from "./ArtistCard";

export const ArtistList = () => {
  return (
    <div className="w-full z-30 max-w-xs border border-gray-500">
      {Albums.map((album, idx) => {
        return (
          <MediaProvider
            key={`${album.fileName}-${idx}`}
            artist={album.artist}
            name={album.name}
            duration={album.duration}
            fileName={album.fileName}
            imgUrl={album.imgUrl}
          >
            <ArtistCard />
          </MediaProvider>
        );
      })}
    </div>
  );
};
