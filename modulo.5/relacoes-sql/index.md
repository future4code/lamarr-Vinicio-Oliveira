### EXERCÍCIO 1
a)  Uma chave estrangeira (Foreign Key) é utilizada para relacionar/referenciar uma tabela com outra

b)  INSERT INTO Rating (id, comment, rate, movie_id) 
    VALUES (
	    "001",
        "Muito bom!",
        7,
	    "002"
    );

    INSERT INTO Rating (id, comment, rate, movie_id) 
    VALUES (
	    "002",
        "Excelente!",
        10,
	    "004"
    );

    INSERT INTO Rating (id, comment, rate, movie_id) 
    VALUES (
	    "003",
        "Muito bom!",
        9,
	    "001"
    );

    INSERT INTO Rating (id, comment, rate, movie_id) 
    VALUES (
	    "004",
        "O melhor filme do ano!",
        10,
	    "003"
    );


c)  Ocorreu o erro 1452, se eu entendi bem não podemos adicionar porque como estamos passando um id inválido a chave estrangeira não reconheçe e gera essa falha

d)  ALTER TABLE Movies DROP COLUMN Avaliação;

e)  Não é possível alterar ou apagar um itém que recebeu uma restrição de uma chave estrangeira


### EXERCÍCIO 2
a)  Essa é uma tabela que vai receber o id do ator e do filme que ele participa

b)  INSERT INTO MovieCast 
    VALUES (DEFAULT, 002, "001"),
    (DEFAULT, 003, "001"),
    (DEFAULT, 003, "002"),
    (DEFAULT, 001, "002"),
    (DEFAULT, 002, "004"),
    (DEFAULT, 001, "002");

c)  Error Code: 1452

d)  Tentei apagar o ator de id 002 e funcionou corretamente. Criei 6 relações na tabela e agora está com 5



### EXERCÍCIO 3
a)  O operador ON quer dizer onde. Onde buscar a a informação que desejamos

b)  SELECT m.id as movies_id, r.rate as rating FROM Movies m 
    INNER JOIN Rating r ON m.id = r.movie_id;