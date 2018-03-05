class RNG {
  constructor (...args) {
    
  }
  
  percent (arr) {
    let opts = [];
    let n = this.rng(0, 99);
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      for (let j = 0; j < current[1]; j++) {
        opts.push('' + current[0]);
      }
    }
    return opts[n];
  }
  
  rng (min, max) {
    return Math.floor((Math.random() * max) + min);
  }
}
