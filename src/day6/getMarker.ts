export const getMarker = (
  buffer: string,
  uniqueCharactersNeeded: number
): number => {
  let postMarkerIndex;

  for (
    let i = uniqueCharactersNeeded;
    !postMarkerIndex && i < buffer.length;
    i++
  ) {
    const previousFourCharacters = buffer.slice(i - uniqueCharactersNeeded, i);
    if (new Set(previousFourCharacters).size === uniqueCharactersNeeded)
      postMarkerIndex = i;
  }
  return postMarkerIndex;
};
