export function nonDivisibleSubset(k: number, s: number[]): number {
  for (let i = s.length; i > 0; i--) {
    const firstSubRange = checkSubRanges(s, i, k);
    if (firstSubRange.length > 0) {
      return firstSubRange.length;
    }
  }
  return 0;
}

function checkSubRanges(s: number[], length: number, k: number): Array<number> {
  const subArray = s.slice(0, length);

  if (check(s, k, subArray)) {
    return subArray;
  }

  let outerPointer = length - 1;

  while (outerPointer > 0 && s.length - subArray.length > 0) {
    for (let i = 1; i <= s.length - subArray.length; i++) {
      subArray[outerPointer] = s[outerPointer + i];
      if (check(s, k, subArray)) {
        return subArray;
      }
    }
    outerPointer--;
  }
  return [];
}

function check(s: Array<number>, k: number, subArray: Array<number>): boolean {
  let sum = 0;
  console.log('Sum: ');
  for (let j = 0; j < subArray.length; j++) {
    console.log('Item ' + subArray[j]);
    sum += subArray[j];
  }
  if (sum % k == 0) {
    return true;
  }

  return false;
}
