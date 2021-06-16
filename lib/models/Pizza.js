import pool from '../utils/pool';

export default class Pizza {
  id;
  name;
  topping;
  style;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.topping = row.topping;
    this.style = row.style;
  }

  static async insert({ name, topping, style }) {
    const { rows } = await pool.query(
      `INSERT INTO pizza (name, topping, style)
     VALUES ($1, $2, $3)
     RETURNING *`,
      [name, topping, style]
    );

    return new Pizza(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query(`
      SELECT * 
      FROM pizza
    `);
         
    return rows.map(row => new Pizza(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM pizza WHERE id = $1',
      [id]
    );
    return new Pizza(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(`
    DELETE FROM pizza
    WHERE       id = $1
    RETURNING   *
    `, [id]);

    return new Pizza(rows[0]);
  }

}
