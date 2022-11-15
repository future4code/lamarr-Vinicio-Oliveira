### EXERCÍCIO 1
a)  VARCHAR recebe string com determinada quantidade de caracteres
    DATE representa data no formato ano-mes-dia
    NULL ou NOT NULL indica se a coluna pode ou não ser nula

b)  SHOW DATABASES; Mostra nossa base de dados e information-schema
    SHOW TABLES; mostra as tabelas que foram criadas neste schema
    DESCRIBE Actor; Esse comando mostra campo, tipo, se é null ou não, tipo da chave, se é default ou não e um campo "extra"


### EXERCÍCIO 2
a)  INSERT INTO Actor (id, nome, salary, birth_date, gender)
    VALUES("002", "Glória Pires", 1200.000, "1963-08-23", "female");

b)  INSERT INTO Actor (id, nome, salary, birth_date, gender)
    VALUES("002", "Fatima Bernardes", 2400.000, "1973-08-25", "female");
    
    - Código do erro 1062 entrada duplicada '002' para chave primária

c)  INSERT INTO Actor (id, nome, salary)
    VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
);
    - Código do erro: 1136 A quantidade de colunas não corresponde a quantidade de valores inseridos

d)  INSERT INTO Actor (id, salary, birth_date, gender)
    VALUES(
    "004",
    400000,
    "1949-04-18", 
    "male"
);
    - Código do erro: 1364 campo nome não tem um valor padrão

e)  INSERT INTO Actor (id, nome, salary, birth_date, gender)
    VALUES(
    "005", 
    "Juliana Paes",
    719333.33,
    1979-03-26, 
    "female"
);
    - Código do erro: 1292 Valor incorreto de DATE para a coluna birth_date. Correto seria como string e foi passado em number

f)  INSERT INTO Actor (id, nome, salary, birth_date, gender)
    VALUES("004", "Antônio Fagundes", 400000, "1949-04-18", "male");

    INSERT INTO Actor (id, nome, salary, birth_date, gender)
    VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");


### EXERCÍCIO 3
a)  SELECT id, name from Actor WHERE gender = "male" 
    - Retornando todas as informações das atrizes

b)  SELECT salary from Actor WHERE nome = "Tony Ramos";
    - Retornando salário de Tony Ramos

c)  SELECT * from Actor WHERE gender = "invalid";
    - Todos os campos da tabela apareceram com resultado NULL

d)  SELECT id, nome, salary from Actor WHERE salary < 500000;

e)  SELECT id, nome from Actor WHERE id = "002"
    - Não gerou erro nenhum, imprimiu o id 002 e o nome Glória Pires


### EXERCÍCIO 4
a)  SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
    - Utilizamos o LIKE para comparar as strings, utilizamos o OR (ou) para comparar entre uma string "ou" outra e utilizamos o AND (e) para comparar entre o
nome "e" o salário.

b)  SELECT * FROM Actor WHERE nome NOT LIKE "A%"  AND salary > 350000;

c)  SELECT * FROM Actor WHERE nome LIKE "%G%" OR nome LIKE "%g%";

d)  SELECT * FROM Actor WHERE (nome LIKE "%g%" OR nome LIKE "%G%" OR nome LIKE "%a%" OR nome LIKE "%A%") AND salary BETWEEN 350000 AND 900000;


### EXERCÍCIO 5

a)
    CREATE TABLE Filmes (
        id INT PRIMARY KEY, 
        Título VARCHAR (255) NOT NULL, 
        Sinopse TEXT NOT NULL,
        Data_de_lançamento DATE NOT NULL, 
        Avaliação INT NOT NULL 
    );

b)
    INSERT INTO Filmes (id, Título, Sinopse, Data_de_lançamento, Avaliação)
    VALUES(001, "Se Eu Fosse Você", "Cláudio e Helena são casados 
    há muitos anos e enfrentam a rotina do casamento. Um dia eles são 
    atingidos por um fenômeno inexplicável e trocam de corpos", 
    "2006-01-06", 7);

c)
    INSERT INTO Filmes (id, Título, Sinopse, Data_de_lançamento, Avaliação)
    VALUES(002, "Doce De Mão", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
    A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, 
    anuncia que vai se casar e não poderá mais morar com ela", 
    "2012-12-27", 10);

d)
    INSERT INTO Filmes (id, Título, Sinopse, Data_de_lançamento, Avaliação)
    VALUES(003, "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
    que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", 
    "2017-11-02", 10);

e)
    INSERT INTO Filmes (id, Título, Sinopse, Data_de_lançamento, Avaliação)
    VALUES(004, "Tropa De Elite", "Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), 
    que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam 
    policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão 
    em que atuam.", 
    "2007-10-12", 10);



### EXERCíCIo 6

a)  SELECT id, Título, Avaliação from Filmes WHERE id = 001;

b)  SELECT Título from Filmes WHERE Título = "Tropa De Elite";

c) SELECT id, Título, Sinopse from Filmes WHERE Avaliação > 7;


### EXERCíCIo 7

a)  SELECT * FROM Filmes WHERE Título LIKE "%vida%";
    - Nenhum título com a palavra vida

b)  SELECT * FROM Filmes WHERE Título LIKE "%vida%" OR Sinopse LIKE "%vida%";
    - a palavra vida foi encontrada na sinopse do filme Doce de Mãe

c)  SELECT * FROM Filmes WHERE Data_de_lançamento < "2022-11-09";

d)  SELECT * FROM Filmes WHERE Data_de_lançamento < "2020-05-04" AND (Título LIKE "%De%" OR Sinopse LIKE "%BOPE%") AND Avaliação > 7;


