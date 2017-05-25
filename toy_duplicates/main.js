var data = [
 {name: 'gussel', toys: ['ball', 'elephant', 'bone']},
 {name: 'cosby', toys: ['rope', 'ball', 'kong']},
 {name: 'sherles', toys: ['bone', 'ball', 'giraffe']},
 {name: 'coda', toys: ['squeeker', 'pool', 'ball']},
 {name: 'marley', toys: ['bone', 'kong', 'pig']}
];
function toyArray()
{
  var justToys =[];
  for(var i=0; i<data.length; i++)
  {
    var dogToys = data[i].toys;
    justToys = justToys.concat(dogToys);
  }
  return justToys;
}
toyArray();
var toysArray = toyArray();
function dupDelete (toysArray)
{
  var noDups = [];
  for(var i=0; i<toysArray.length; i++)
  {
    var current = toysArray[i];
    var truth = false;
    for(var j=0; j<noDups.length; j++)
    {
      var dupe = noDups[j];
      if(current === dupe)
      {
        truth = true;
      }
        }
    if (!truth)
      {
        noDups.push(current);
      }
  }
  console.log(noDups);
}
dupDelete(toysArray);
