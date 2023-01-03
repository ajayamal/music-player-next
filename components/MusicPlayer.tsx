import { useEffect, useMemo, useRef, useState } from "react";
import { useSelectedMediaContext } from "../contexts/selectedMedia.context";
import { Albums } from "../public/album/albums";
import { ButtonSize } from "../utils/types";
import { IconButton } from "./IconButton";
import { MediaProgress } from "./MediaProgress";
import {
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

export const MusicPlayer = () => {
  const { selectedMedia, setSelectedMedia } = useSelectedMediaContext();
  const audioRef = useRef<any>(null);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMeta = (meta: any) => {
    if (!audioRef.current) return;
    console.log(audioRef.current.duration, "Duration");
    setDuration(audioRef?.current?.duration || 0);
  };

  const updateTrackTime = () => {
    if (!audioRef.current) return;
    console.log(audioRef.current.paused);
    setCurrentTime(audioRef.current.currentTime);
  };

  const playAndPauseAudio = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
      return;
    }
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const previousSong = () => {
    if (!setSelectedMedia) return;
    const currentAlbumIndex = Albums.findIndex(
      (album) => album.fileName == selectedMedia?.fileName
    );
    if (currentAlbumIndex < 0) return;
    console.log(currentAlbumIndex, Albums.length - 1);
    const newIndex =
      currentAlbumIndex <= 0 ? Albums.length - 1 : currentAlbumIndex - 1;
    const updatedMedia = Albums[newIndex];
    console.log(updatedMedia, "updatedMedia");
    setSelectedMedia({ ...updatedMedia });
  };

  const nextSong = () => {
    if (!setSelectedMedia) return;
    const currentAlbumIndex = Albums.findIndex(
      (album) => album.fileName == selectedMedia?.fileName
    );
    if (currentAlbumIndex < 0) return;
    console.log(currentAlbumIndex, Albums.length - 1);
    const newIndex =
      currentAlbumIndex >= Albums.length - 1 ? 0 : currentAlbumIndex + 1;
    const updatedMedia = Albums[newIndex];
    console.log(updatedMedia, "updatedMedia");
    setSelectedMedia({ ...updatedMedia });
  };

  useEffect(() => {
    setIsPlaying(false);
    setDuration(0);
    setCurrentTime(0);
  }, [selectedMedia]);
  return (
    <>
      {selectedMedia && (
        <div className="w-full z-30 flex flex-col justify-center items-center p-6">
          <audio
            ref={audioRef}
            // controls
            src={`./songs/${selectedMedia?.fileName}`}
            onLoadedMetadata={handleMeta}
            onTimeUpdate={updateTrackTime}
          ></audio>
          <div className="max-w-full flex justify-center py-4 z-10">
            <div className="max-w-[200px]">
              <img
                className={"rounded-md"}
                src={
                  selectedMedia.imgUrl
                    ? selectedMedia.imgUrl
                    : "https://cdn.pixabay.com/audio/2022/04/04/10-16-10-488_200x200.jpg"
                }
              />
            </div>
          </div>
          <div className="flex flex-col py-2 justify-center items-center">
            <div className={`text-base font-bold text-gray-100`}>
              {selectedMedia.name}
            </div>
            <div className={`text-sm font-normal text-gray-100`}>
              {selectedMedia.artist}
            </div>
          </div>
          <MediaProgress duration={duration} currentTime={currentTime} />
          <div className="flex flex-row justify-center items-center py-4">
            <div className="px-4">
              <IconButton
                onClick={() => {
                  previousSong();
                }}
                size={ButtonSize.SM}
                content={"Prev"}
              >
                <BackwardIcon />
              </IconButton>
            </div>
            <div className="px-4">
              <IconButton
                onClick={() => {
                  playAndPauseAudio();
                }}
                size={ButtonSize.LG}
                content={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </IconButton>
            </div>
            <div className="px-4">
              <IconButton
                onClick={() => {
                  nextSong();
                }}
                size={ButtonSize.SM}
                content={"Next"}
              >
                <ForwardIcon />
              </IconButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
