class RNG {
  constructor (...args) {
    
  }
  
  percent (...args) {
    let arr = [];
    let n = this.rng(0, 99);
    for (let i = 0; i < args.length; i++) {
      let current = args[0][i];
      for (let j = 0; j < current[1]; j++) {
        arr.push('' + current[0]);
      }
    }
    return arr[n];
  }
  
  rng (min, max) {
    return Math.floor((Math.random() * max) + min);
  }
}
