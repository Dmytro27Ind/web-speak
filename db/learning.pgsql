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