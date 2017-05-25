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
function onlyDups (toysArray)
{
  var obj = {};
  var dups = [];
  for(var i=0; i<toysArray.length; i++)
  {
    if(obj[toysArray[i]] === true)
      {
        dups.push(toysArray[i]);
      }
    else
      {
        obj[toysArray[i]] = true;
      }
  }
  console.log(dups);
}
onlyDups(toysArray);
