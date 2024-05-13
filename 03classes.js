class Person {
  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  greet = () => {
    console.log(`Hello ${this.first} ${this.last}`);
  };
}

const steve = new Person("Steve", "Jobs", 56);
steve.greet();

const funcWithCallback = (callback) => {
  callback();
};

funcWithCallback(steve.greet);
