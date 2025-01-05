const genRandom = (len = 8, radix = 16) => {
  return Math.random()
    .toString(radix)
    .substring(2, 2 + len);
};

export const genUUid = (len = 8) => {
  return genRandom(len, 32);
};

export const genHexColor = () => {
  return "#" + genRandom(6, 16);
};
