CREATE DATABASE dev;
-- DROP DATABASE dev;
-- DROP DATABASE dev WITH (FORCE);

CREATE TABLE EMP(
    emp_id INTEGER,
    emp_name varchar(50),
    emp_addres TEXT
);
-- DROP TABLE EMP;

INSERT INTO EMP(emp_id, emp_name, emp_addres) VALUES
    (1, 'Dima', 'Jedlikova 5');
INSERT INTO EMP(emp_id, emp_name, emp_addres) VALUES
    (2, 'Artem', 'Jedlikova 13');
INSERT INTO EMP(emp_id, emp_name, emp_addres) VALUES
    (3, 'Sasha', 'Jedlikova 7');

SELECT * FROM EMP;


CREATE TABLE publisher(
    publisher_id integer PRIMARY KEY,
    org_name varchar(128) NOT NULL,
    address text NOT NULL
);

CREATE TABLE book(
    book_id integer PRIMARY KEY,
    title text NOT NULL,
    isbn varchar(32) NOT NULL,
    fk_publisher_id integer REFERENCES publisher(publisher_id) NOT NULL
);

INSERT INTO book VALUES
    (1, 'The Diary of a Young Girl', '012457329404', 1),
    (2, 'Pride and Prejudice', '97346092345', 1),
    (3, 'To Kill a Mockingbird', '012498710445', 2),
    (4, 'The Book of Gutsy Women', '190947356022', 2),
    (5, 'War and Peace', '1973094767234', 2);

INSERT INTO publisher VALUES
    (1, 'Everyman''s Libary', 'NY'),
    (2, 'Oxford University Press', 'NY'),
    (3, 'Grand Central Publishing', 'Washington'),
    (4, 'Simon & Schuster', 'Chicago');

SELECT * FROM book;
SELECT * FROM publisher;

-- ALTER TABLE book
--     ADD COLUMN fk_publisher_id integer;
-- ALERT TABLE book
--     ADD CONSTRAINT fk_book_publisher
--     FOREIGN KEY(fk_publisher_id)
--     REFERENCES publisher(publisher_id)