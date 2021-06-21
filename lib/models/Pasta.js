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
    // console.log('rows', rows[0]);
    return new Pasta(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query(`
      SELECT * 
      FROM pasta
    `);
         
    return rows.map(row => new Pasta(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM pasta WHERE id = $1',
      [id]
    );
    return new Pasta(rows[0]);
  }

  static async update(pasta, id) {
    // console.log(id);
    const { rows } = await pool.query(
      `UPDATE pasta
    SET name = $1,
        topping = $2,
        style = $3
    WHERE id = $4
    RETURNING *`,
      [pasta.name, pasta.topping, pasta.style, id]

   
    );
    return new Pasta(rows[0]);
  }


  static async delete(id) {
    const { rows } = await pool.query(`
    DELETE FROM pasta
    WHERE       id = $1
    RETURNING   *
    `, [id]);

    return new Pasta(rows[0]);
  }
}



