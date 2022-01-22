export const isPhone = (value: any) =>
  /^([(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i.test(value);
