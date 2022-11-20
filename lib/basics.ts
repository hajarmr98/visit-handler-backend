const isNumber = (num: number) => (num || num === 0) && typeof num === "number";

const isStringNotEmpty = (str: string) =>
  str && typeof str === "string" && str.length > 0;

const isArrayNotEmpty = (arr: any[]) => arr && Array.isArray(arr) && arr.length > 0;

const isObjectNotEmpty = (obj: any) =>
  obj &&
  Object.getPrototypeOf(obj) === Object.prototype &&
  Object.keys(obj).length > 0;

export {
    isNumber,
    isStringNotEmpty,
    isArrayNotEmpty,
    isObjectNotEmpty
}