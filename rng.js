class RNG {
  constructor (...args) {
    
  }
  
  percent (...args) {
    let arr = [];
    let n = this.rng(0, 99);
    for (let i = 0; i < args.length; i++) {
      let current = args[i];
      for (let j = 0; j < current[1]) {
        arr.push('' + current[0]);
      }
    }
    retrun arr[n];
  }
  
  rng (min, max) {
    return Math.floor((Math.random() * max) + min);
  }
}
