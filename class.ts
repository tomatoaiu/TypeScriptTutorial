class Sum {
  constructor (private a: number, private b: number) {
    this.a = a;
    this.b = b;
  }
  public result () {
    return this.a + this.b;
  }
}

const sum = new Sum(1, 2);
console.log(sum.result())
