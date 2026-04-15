function doubleSort(arr) {
  let res = [];

  // Dedup using includes()
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }

  // Sorting (same as before)
  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res.length; j++) {
      if (res[i] > res[j]) {
        let t = res[i];
        res[i] = res[j];
        res[j] = t;
      }
    }
  }

  return res;
}


console.log(doubleSort([12,2,36,56,,45,4,5,6,6,4,8,7,,9]))