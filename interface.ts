interface Average {
  average(a: number, b: number): void;
}

class AAA implements Average {
  public average (a: number, b: number) {
    return a + b;
  }
}

const aaa = new AAA();
console.log(aaa.average(0, 50))
