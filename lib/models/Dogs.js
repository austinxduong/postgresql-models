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


    static async insert({ name, age, weight }) {
      const { rows } = await pool.query(
        'INSERT INTO dogs (name, age, weight) VALUES ($1, $2, $3)', [name, age, weight]
      );
      return new Dog(rows[0]);
    }
}