DROP TABLE IF EXISTS dogs, pizza;

CREATE TABLE dogs (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    weight TEXT
);

-- does creating the table help pass test for .post for pizza model?

CREATE TABLE pizza (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    topping TEXT,
    style TEXT
);