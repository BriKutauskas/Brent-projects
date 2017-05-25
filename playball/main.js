var data = [
 {name: 'gussel', toys: ['ball', 'elephant', 'bone']},
 {name: 'cosby', toys: ['rope', 'ball', 'kong']},
 {name: 'sherles', toys: ['bone', 'ball', 'giraffe']},
 {name: 'coda', toys: ['squeeker', 'pool', 'ball']},
 {name: 'marley', toys: ['bone', 'kong', 'pig']}
];
function playBall()
{
  var balls = 0;
  for(var i=0; i<data.length; i++)
  {
    var toys2 = data[i].toys;
    for(var j=0; j<toys2.length; j++)
      {
        if (toys2[j] === 'ball')
        {
          balls ++;
        }
      }
  }
  return balls;
}
playBall();
console.log(playBall());
