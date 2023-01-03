import { createContext, ReactNode, useContext } from "react";

export type Media = {
  name: string;
  artist: string;
  duration: number;
  fileName: string;
  imgUrl?: string | undefined;
};

export type MediaContextType = {} & Media;

const MediaContext: any = createContext<MediaContextType>(
  {} as MediaContextType
);

type MediaProviderProps = {
  children: ReactNode;
} & MediaContextType;

export const useMediaContext = () => {
  return useContext<MediaContextType>(MediaContext);
};

export const MediaProvider = (props: MediaProviderProps) => {
  const { artist, children, duration, fileName, name, imgUrl } = props;
  const defaultProps = {
    artist,
    duration,
    fileName,
    name,
    imgUrl,
  };
  return (
    <MediaContext.Provider value={defaultProps}>
      {children}
    </MediaContext.Provider>
  );
};
