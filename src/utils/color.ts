export const hexToRgb = (input): string | null => {
  input = input + '';
  input = input.replace('#', '');
  const hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error('input is not a valid hex color.');
  }
  if (input.length === 3) {
    const firstCode = input[0];
    const secondCode = input[1];
    const lastCode = input[2];
    input =
      firstCode + firstCode + secondCode + secondCode + lastCode + lastCode;
  }
  input = input.toUpperCase(input);
  const first = input[0] + input[1];
  const second = input[2] + input[3];
  const last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ', ' +
    parseInt(second, 16) +
    ', ' +
    parseInt(last, 16)
  );
};

export const hexToRgbA = (hex, alpha: string): string | null =>
  `rgba(${hexToRgb(hex)},${alpha})`;

export const rgbWithAlpha = (rgb, alpha: string): string | null =>
  `rgba(${rgb},${alpha})`;
