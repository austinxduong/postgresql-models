DROP TABLE IF EXISTS dogs, pizza, pasta, burger;

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

CREATE TABLE pasta (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    sauce TEXT,
    noodle TEXT
);

CREATE TABLE burger (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    meat TEXT,
    origin TEXT
);