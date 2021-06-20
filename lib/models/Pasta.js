import pool from '../utils/pool';

export default class Pasta {
  id;
  name;
  sauce;
  noodle;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.sauce = row.sauce;
    this.noodle = row.noodle;
  }

  static async insert({ name, sauce, noodle }) {
    const { rows } = await pool.query(
      `INSERT INTO pasta (name, sauce, noodle)
     VALUES ($1, $2, $3)
     RETURNING *`,
      [name, sauce, noodle]
    );

    return new Pasta(rows[0]);
  }
}