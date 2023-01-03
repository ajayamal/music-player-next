import { convertSecToMin } from "../utils/common";

export type MediaProgressProps = {
  duration: number;
  currentTime: number;
};

export const MediaProgress = ({
  duration,
  currentTime,
}: MediaProgressProps) => {
  const progress = ((currentTime || 0) / duration) * 100;
  return (
    <div className="w-full max-w-xs h-1 rounded-md bg-gray-600 relative">
      <div
        className={`absolute h-1 bg-yellow-100 rounded-md`}
        style={{ width: `${progress}%` }}
      ></div>
      <div className="flex justify-between py-2">
        <div className="text-sm font-medium text-gray-100">
          {convertSecToMin(currentTime)}
        </div>
        <div className="text-sm font-medium text-gray-100">
          {convertSecToMin(duration)}
        </div>
      </div>
    </div>
  );
};
