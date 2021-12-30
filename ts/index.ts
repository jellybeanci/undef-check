export function undefCheck(value: any, message = "Error message not specified."): void {
  if (value === void 0 || value === null) throw Error(message);
}