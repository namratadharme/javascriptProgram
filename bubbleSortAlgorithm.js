const arr = [2, 4, 5, 1, 21, 13, 16, 12, 13, 9];

function bubble_sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    n = arr.length - 1 - i;
    //console.log(n)
    for (var j = 0; j <= n; j++) {
      if (arr[j] < arr[j + 1]) {
        let tempVar = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempVar;
      }
    }
  }
  return arr;
}

console.log(bubble_sort(arr));
