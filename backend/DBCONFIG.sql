CREATE SCHEMA IF NOT EXISTS `dados191n` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `dados191n` ;

CREATE  TABLE IF NOT EXISTS `dados191n`.`Modalidade` (
  `mod_codigo` INT PRIMARY KEY AUTO_INCREMENT,
  `mod_nome` VARCHAR(30) NOT NULL,
  `mod_descricao` VARCHAR(500) NULL,
  `mod_categoria` VARCHAR(30) NOT NULL);
  
CREATE  TABLE IF NOT EXISTS `dados191n`.`Atleta` (
  `atl_codigo` INT PRIMARY KEY AUTO_INCREMENT,
  `atl_mod` INT NOT NULL,
  `atl_nome` VARCHAR(30) NOT NULL,
  `atl_pais` VARCHAR(30) NOT NULL,
  `atl_nascimento` DATE,
  `atl_estado` VARCHAR(30) NOT NULL,
  `atl_cidade` VARCHAR(30) NOT NULL,
  CONSTRAINT fk_atl
  FOREIGN KEY (`atl_mod` )
    REFERENCES `dados191n`.`Modalidade` (`mod_codigo` ));

INSERT INTO Modalidade(mod_nome, mod_descricao, mod_categoria)
  VALUES('Arremeço de dardos','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Terrestre'),
        ('Cem Metros Rasos','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Aquática'),
        ('Salto com vara','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Terrestre'),
        ('Corrida de obstáculos','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Terrestre'),
        ('Salto de 3 metros','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Terrestre'),
        ('Corrida Parada','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Terrestre'),
        ('Passar de semestre','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Mística');

INSERT INTO Atleta(atl_mod, atl_nome, atl_pais, atl_nascimento, atl_estado, atl_cidade)
  VALUES(1,'Neto da Silva','Brazil','1989-06-20','São Paulo', 'Franca'),
        (4,'Neto Junqueira','Roma','1989-06-20','Belém do para', 'Atenas'),
        (3,'Neto Dos Santos','Kretch','1989-06-20','Acre', 'Pequin'),
        (2,'Neto Almeida','Slovackia','1989-06-20','Jothum', 'Heilm');