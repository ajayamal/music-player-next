export const convertSecToMin = (time: number) => {
  const minutes = Math.floor(time / 60);
  const remainingSec = time - minutes * 60;
  return `${minutes}.${Number(remainingSec).toFixed(0)}`;
};
