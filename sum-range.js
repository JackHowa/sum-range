function sumAll(arr) {
  var sumOutput = 0;
  var currentNum = Math.min(arr[0],arr[1]);
  while (currentNum <= Math.max(arr[0],arr[1])) {
    sumOutput += currentNum;
    currentNum++;
  }
  return sumOutput;
}

sumAll([1, 4]);
