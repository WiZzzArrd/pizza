export const calcTotalPrice = (items) => {
  return items.reduce((acc, item) => {
    return (acc += item.price * item.count);
  }, 0);
};
