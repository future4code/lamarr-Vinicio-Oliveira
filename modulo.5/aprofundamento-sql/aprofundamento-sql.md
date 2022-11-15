### EXERCÍCIO 1
a)  DROP COLUMN junto com o comando ALTER TABLE serve para deletar determinada coluna de uma tabela.

b)  ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
    - O CHANGE é utilizado para renomear uma coluna e alterar suas definições, como o tipo de dados de uma coluna

c)  ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
    - Neste caso o CHANGE é utilizado, somente, para mudar a definição da tipo de dado que essa coluna vai receber, pois o nome da coluna é repetido e assim vai continuar o mesmo, mas o tipo foi alterado para receber uma sting de até 255 caracteres

d)  ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
    - Alterando a coluna gender para receber strings de até 100 caracteres



### EXERCÍCIO 2
a)  UPDATE Actor SET nome = "Cláudia Raia", birth_date = "1980-09-30" WHERE id = "003";
    - Mudando o nome para Cláudia Raia e data de aniversário para 30/09/1980

b)  UPDATE Actor SET nome = "JULIANA PAES" WHERE nome = "Juliana Paes";
    UPDATE Actor SET nome = "Juliana Paes" WHERE nome = "JULIANA PAES";

c)  UPDATE Actor SET nome = "Cléo Pires", salary = 425000, birth_date = "1982-10-02", gender = "female" WHERE id = 005;

d)  - Após realizar o teste, vi que não da erro, porém, não muda nada na tabela



### EXERCÍCIO 3
a)  DELETE FROM Actor WHERE nome = "Fernanda Montenegro";

b)  DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;



### EXERCÍCIO 4
a)  SELECT MAX(salary) FROM Actor;

b)  SELECT MIN(salary) FROM Actor WHERE gender = "female";

c)  SELECT COUNT(id) FROM Actor WHERE gender = "female";

d)  SELECT SUM(salary) FROM Actor;


### EXERCÍCIO 5
a)  Ele retorna quantos tem de cada, nesse exercício estamos falando de gênero masculino e feminino, mas em uma outra tabela, pode ser qualquer outra coisa.

b)  SELECT id, nome FROM Actor ORDER BY nome DESC;

c)  SELECT * FROM Actor WHERE gender = "female" ORDER BY salary;

d)  SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;



### EXERCÍCIO 6
a)  ALTER TABLE Movies ADD playing_limit_date DATE;

b)  ALTER TABLE Movies CHANGE Avaliação Avaliação FLOAT;

c)  UPDATE Movies SET playing_limit_date = "2020-12-31" WHERE id = "001";

d)  DELETE FROM Movies WHERE id = "001";




