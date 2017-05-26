var data = [
 [1,2,3],
 [4,3,7],
 [4],
 [3,9,6],
 [2,6,4,5],
 [4,5],
 [0,3,2],
 [8],
 [7,7],
];
function finalTotal()
{
  var total = 0;
  for( var i=0; i<data.length; i++)
    {
      var firstArray = data[i];
      var lastElement = (firstArray.length) - 1;
      var lastValue =firstArray[lastElement];
      if(lastValue == 2)
      {
      total = total/2;
      }
      else
      {
        total = lastValue + total;
      }
    }
  return total;
}
finalTotal();
console.log(finalTotal());
