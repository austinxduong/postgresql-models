// import burger from '../controllers/burger';
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

    static async findById(id) {
      const { rows } = await pool.query(
        `SELECT * 
        FROM burger
        WHERE id = $1`, 
        [id]
      );

      return new Burger(rows[0]);
    }

    static async update(burger, id) {
      const { rows } = await pool.query(
        `UPDATE burger
        SET name = $1,
            meat = $2,
            origin = $3
        WHERE id = $4
        RETURNING *`,
        [burger.name, burger.meat, burger.origin, id]
      );

      return new Burger(rows[0]);
    }

    static async delete(id) {
      const { rows } = await pool.query(`
        DELETE FROM burger
        WHERE id = $1
        RETURNING *
        `, [id]);

      return new Burger(rows[0]);
    }
}
