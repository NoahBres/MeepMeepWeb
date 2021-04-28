const tw = (str: TemplateStringsArray) => str[0];

export function isNumber(text: string) {
  return !isNaN(parseInt(text));
}

export function toRadians(deg: number) {
  return deg * (Math.PI / 180);
}

export { tw };
