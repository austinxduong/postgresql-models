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
}
