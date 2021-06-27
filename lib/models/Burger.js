import burger from '../controllers/burger';
import pool from '../utils/pool';

export default class Burger {
    id;
    name;
    meat;
    origin;

    constructor(row) {
      this.id = row.id;
      this.name = row.name;
      this.meat = row.meat;
      this.origin = row.origin;
    }

    static async insert({ name, meat, origin }) {
      const { rows } = await pool.query(
        `INSERT INTO burger (name, meat, origin)
        VALUES ($1, $2, $3)
        RETURNING *`,
        [name, meat, origin]
      );

      return new Burger(rows[0]);
    }

    static async findAll() {
      const { rows } = await pool.query(
        `SELECT * 
        FROM burger
        `);

      return rows.map(row => new Burger(row));
      
    }
}
