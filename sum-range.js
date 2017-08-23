function sumAll(arr) {
  var sumOutput = 0;
  var currentNum = arr[0];
  while (currentNum <= arr[1]) {
    sumOutput += currentNum;
    currentNum++;
  }
  return sumOutput;
}

sumAll([1, 4]);
