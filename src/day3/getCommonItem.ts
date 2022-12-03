export const getCommonItem = ({
  firstCompartment,
  secondCompartment,
}: {
  firstCompartment: string;
  secondCompartment: string;
}): string => {
  return firstCompartment
    .split("")
    .find((item) => secondCompartment.includes(item));
};
