var dogAttributes = ['name', 'age', 'mood', 'toys', 'favoritePlaces'];

var littleGuys = [
 ['Gussel', 5, 'spunky', ['spikey ball', 'kong', 'elephant'], ['beach', 'mountains']],
 ['Cosby', 4, 'mellow', ['ball', 'rope'], ['front yard', 'park']],
 ['Coda', 6, 'crazy', ['frisbee', 'water bottle'], ['park', 'hiking']],
 ['Marley', 7, 'sleepy', ['bone', 'squeeker'], ['bedroom', 'park']]
];

function cuteGuys (dogAttributes, littleGuys)
{
  var newArray = [];
  for(var i=0; i<littleGuys.length; i++)
    {
      var allGuys = {};
      for(var j=0; j<dogAttributes.length; j++)
        {
          allGuys[dogAttributes[j]] = littleGuys[i][j];
        }
      newArray.push(allGuys);
      console.log(allGuys);
      return(allGuys);
    }
  return(allGuys);
}
cuteGuys(dogAttributes, littleGuys);
