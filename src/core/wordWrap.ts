export const wordWrapCalculator = (stringValue: string, columnWide: number): string => {
  if (stringValue === '') return '';
  if (stringValue.length <= columnWide) return stringValue;
  return [stringValue.slice(0, columnWide), stringValue.slice(columnWide)].join('\n');
}