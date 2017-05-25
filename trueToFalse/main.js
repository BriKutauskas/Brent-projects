var data = [
['banana', true, 'zebra', 3],
[true, 'hippo', 4, 'cranberries'],
['poptarts', 'bunnies', true, 9, 9],
[true, 7, 'icecream', 8, true, 'panda'],
['applepie', true, 10, 'trex'],
[true, 3],
['steak', true, true, 'crow'],
[true, 'horse', 6, 'poboy', true]
];
var data2 = [
 ['banana', true, 'zebra'],
 [true, 'hippo', 'cranberries'],
 ['poptarts', 'bunnies', true],
 [true, 'icecream', true, 'panda'],
 ['applepie', true, 'trex'],
 [true],
 ['steak', true, true, 'crow'],
 [true, 'horse', 'poboy', true]
];
function trueToFalse()
{
  for(var i=0; i<data.length; i++)
  {
    var subarray = data[i];
    for(var j=0; j<subarray.length; j++)
    {
      if(subarray[j] === true)
      {
        subarray[j] = false;
      }
      else if(typeof subarray[j] === 'string')
      {
          subarray[j] = "Gussel";
      }
    console.log(subarray[j]);
    }
  }
}
trueToFalse();
function Gussel()
{
  for(var i=0; i<data.length; i++)
  {
    var subarray = data[i];
    for(var j=0; j<subarray.length; j++)
    {
      if(subarray[j] === true)
      {
        subarray[j] = false;
      }
      else
      {
          subarray[j] = "Gussel";
      }
    console.log(subarray[j]);
    }
  }
}
