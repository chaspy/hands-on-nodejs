class Foo {
  #privateField = 1;
  publicField = 2;
  static #staticPrivateField = 3;
  static staticPublicField = 4;

  constructor(parameter) {
    this.filedInitializedInConstructor = parameter;
    console.log("Foo constructor");
  }
}
