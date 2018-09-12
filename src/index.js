/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  var arr = [0];
  preferences = arr.concat(preferences);

  var i;
  for (i = 1; i<= preferences.length; i++){
    var firstSpichonee = preferences[i];
    var secondSpichonee = preferences[firstSpichonee];
    var thirdSpichonee = preferences[secondSpichonee];
  }
  if ((thirdSpichonee == i) && (preferences[firstSpichonee] != firstSpichonee
                            && preferences[secondSpichonee] != secondSpichonee
                            && preferences[thirdSpichonee] != thirdSpichonee)){
    count++;
  }
  return count/3;
}
