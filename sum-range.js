function sumAll(arr) {
  var sumOutput = 0;
  var currentNum = 0;
  console.log(currentNum);
  while (currentNum < arr[1]) {
    currentNum++;
    console.log(currentNum);
    sumOutput += currentNum;
    console.log(sumOutput);
  }
  return sumOutput;
}

sumAll([1, 4]);
