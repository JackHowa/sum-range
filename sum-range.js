function sumAll(arr) {
  var sumOutput = 0;
  if (arr[0] < arr[1]) {
    var currentNum = arr[0];
    while (currentNum <= arr[1]) {
      sumOutput += currentNum;
      currentNum++;
    }
    return sumOutput;
  }
  else {
    var currentNum = arr[1];
    while (currentNum >= arr[0]) {
      sumOutput += currentNum;
      currentNum--;
    }
    return sumOutput;
  }
}

sumAll([1, 4]);
