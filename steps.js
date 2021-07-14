const steps = n => {
  for (let row = 0; row < n; row++) {
    let eachStep = '';

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        eachStep += '#';
      } else {
        eachStep += ' ';
      }
    }
    console.log(eachStep)
  }
};

steps(4);