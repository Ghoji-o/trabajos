CREATE TABLE `alumnos` (
   `id` INT NOT NULL,
   `nombre` VARCHAR(30) NOT NULL,
   `apellido` VARCHAR(30) NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `paisId` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `paises` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `alumnos` ADD CONSTRAINT `FK_c0f002db-fa8c-4ce3-a611-7df366c053c2` FOREIGN KEY (`paisId`) REFERENCES `paises`(`id`)  ;
