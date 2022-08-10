--* Создание и удаление базы данных
CREATE DATABASE dev;
-- DROP DATABASE dev;
-- DROP DATABASE dev WITH (FORCE);

--* Создание и удаление таблиц в базе данных
CREATE TABLE EMP(
    emp_id INTEGER,
    emp_name varchar(50),
    emp_addres TEXT
);
-- DROP TABLE EMP;

--* Добавление данных в таблицу
INSERT INTO EMP(emp_id, emp_name, emp_addres) VALUES
    (1, 'Dima', 'Jedlikova 5');
INSERT INTO EMP(emp_id, emp_name, emp_addres) VALUES
    (2, 'Artem', 'Jedlikova 13'),
    (3, 'Sasha', 'Jedlikova 7');

--* Выборка всех данных из таблицы
SELECT * FROM EMP;


--* Один ко многим
--* У одного издательства может быть несколько изданных книг
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

--* Если после создания таблицы её нужно изменить
-- ALTER TABLE book
--     ADD COLUMN fk_publisher_id integer;
-- ALERT TABLE book
--     ADD CONSTRAINT fk_book_publisher
--     FOREIGN KEY(fk_publisher_id)
--     REFERENCES publisher(publisher_id)


