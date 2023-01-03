import { useEffect } from "react";
import { ArtistList } from "../components/ArtistList";
import { BackgroundWallBlur } from "../components/BackgroundWallBlur";
import { MusicPlayer } from "../components/MusicPlayer";
import { SelectedMediaProvider } from "../contexts/selectedMedia.context";
import { Albums } from "../public/album/albums";

const Artists = () => {
  return (
    <div className="flex flex-row items-center">
      <SelectedMediaProvider selectedMedia={Albums[0] ?? null}>
        <BackgroundWallBlur />
        <ArtistList />
        <MusicPlayer />
      </SelectedMediaProvider>
    </div>
  );
};

export default Artists;
