/*
 * @Date: 2022-09-22 11:47:08
 * @LastEditors: shawn
 * @LastEditTime: 2022-09-22 11:48:03
 */
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
