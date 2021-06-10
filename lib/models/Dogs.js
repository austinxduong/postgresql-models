import pool from '../utils/pool';

export default class Dog {
    id;
    name;
    age;
    weight;

    constructor(row) {
      this.id = row.id;
      this.name = row.names;
      this.age = row.age;
      this.weight = row.weight;
    }
}
