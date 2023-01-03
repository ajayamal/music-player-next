import { createContext, ReactNode, useContext, useState } from "react";
import { Albums } from "../public/album/albums";
import { Media } from "./media.context";

export type SelectedMedia = {
  setSelectedMedia?: (media: Media | undefined) => void;
  selectedMedia?: Media;
};

export type SelectedMediaContextType = {} & SelectedMedia;

const SelectedMediaContext: any = createContext<SelectedMediaContextType>(
  {} as SelectedMediaContextType
);

type SelectedMediaProviderProps = {
  children: ReactNode;
} & SelectedMediaContextType;

export const useSelectedMediaContext = () => {
  return useContext<SelectedMediaContextType>(SelectedMediaContext);
};

export const SelectedMediaProvider = (props: SelectedMediaProviderProps) => {
  const { children } = props;
  const [selectedMedia, setSelectedMedia] = useState<any>(Albums[0]);
  const defaultProps = {
    setSelectedMedia,
    selectedMedia,
  };
  return (
    <SelectedMediaContext.Provider value={defaultProps}>
      {children}
    </SelectedMediaContext.Provider>
  );
};
