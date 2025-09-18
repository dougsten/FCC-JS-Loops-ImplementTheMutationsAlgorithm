function mutation(arr1, arr2) {
  const str1 = arr1[0].toLowerCase();
  const str2 = arr1[1].toLowerCase();
  console.log(str2);
  let track = [];
  let i;
  for (i = 0; i < str2.length; i++) {
    track.push(str2[i]);
    console.log(track);
    if (!str1.includes(str2[i])) {
      return false;
    }
  }
  return true;
};

console.log(mutation(["hello", "Hey"]));