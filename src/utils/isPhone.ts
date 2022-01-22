export const isPhone = (value: any) =>
  /^(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i.test(value);
