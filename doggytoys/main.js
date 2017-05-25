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
  for(i=0; i<data.length; i++)
  {
    var dogToys = data[i].toys;
    justToys = justToys.concat(dogToys);
  }
  console.log(justToys);
  return justToys;
}
toyArray();
