function logB(callback) {
  setTimeout(function () {
    console.log('B');
    callback();
  }, 2000);
};

function logABC(gussel) {
  console.log(gussel);
  logB(function () {
    console.log('C');
  });
}

logABC('A');
