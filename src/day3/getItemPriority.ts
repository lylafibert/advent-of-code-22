export const getItemPriority = (item: string): number => {
  const isItemUpperCase = item === item.toUpperCase();
  const subtract = isItemUpperCase ? 38 : 96;
  return item.charCodeAt(0) - subtract;
};
