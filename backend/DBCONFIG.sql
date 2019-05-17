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
  `atl_nascimento`  VARCHAR(30),
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
        ('Salto de 3 metros','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Terrestre');

INSERT INTO Atleta(atl_mod, atl_nome, atl_pais, atl_nascimento, atl_estado, atl_cidade)
  VALUES(1,'Neto da Silva','Brazil','20/06/1989','São Paulo', 'Franca')