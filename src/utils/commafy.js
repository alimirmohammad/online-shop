export const commafy = (num) => {
  let str = num.toString();
  if (str.length >= 4) {
    str = str.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  return str;
};
