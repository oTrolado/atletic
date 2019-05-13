CREATE SCHEMA IF NOT EXISTS `dados191n` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `dados191n` ;

CREATE  TABLE IF NOT EXISTS `dados191n`.`Modalidade` (
  `mod_codigo` INT PRIMARY KEY AUTO_INCREMENT,
  `mod_nome` VARCHAR(30) NOT NULL,
  `mod_descricao` VARCHAR(200) NULL,
  `mod_categoria` VARCHAR(30) NOT NULL);
  
CREATE  TABLE IF NOT EXISTS `dados191n`.`Atleta` (
  `atl_codigo` INT PRIMARY KEY AUTO_INCREMENT,
  `atl_mod` INT NOT NULL,
  `atl_nome` VARCHAR(30) NOT NULL,
  `atl_pais` VARCHAR(30) NOT NULL,
  `atl_nascimento`  VARCHAR(30) NOT NULL,
  `atl_estado` VARCHAR(30) NOT NULL,
  `atl_cidade` VARCHAR(30) NOT NULL,
  CONSTRAINT fk_atl
  FOREIGN KEY (`atl_mod` )
    REFERENCES `dados191n`.`Modalidade` (`mod_codigo` ));

