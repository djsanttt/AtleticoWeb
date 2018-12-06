CREATE DATABASE IF NOT EXISTS TorneoNacional2019;

USE TorneoNacional2019;

CREATE TABLE IF NOT EXISTS equipo (
	id INT(2) NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(50) NOT NULL UNIQUE,
	puntos INT(1) NOT NULL DEFAULT '0',
	partidosJugados INT(1) NOT NULL DEFAULT '0',
	partidosGanados INT(1) NOT NULL DEFAULT '0',
	partidosEmpatados INT(1) NOT NULL DEFAULT '0',
	partidosPerdidos INT(1) NOT NULL DEFAULT '0',
	golesAFavor INT(2) NOT NULL DEFAULT '0',
	golesEnContra INT(2) NOT NULL DEFAULT '0',
	diferenciaGoles INT(2) NOT NULL DEFAULT '0',
	grupo INT(1) NOT NULL,
	posicion INT(1) NULL,
	cantAmarillas INT(2) NOT NULL DEFAULT '0',
	cantRojas INT(2) NOT NULL DEFAULT '0',
	PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS goleadores (
	id INT(3) NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(60) NOT NULL,
	apellido VARCHAR(60) NOT NULL,
	numero INT(2) NOT NULL,
	goles INT(2) NOT NULL,
	id_equipo INt(2) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (id_equipo) REFERENCES equipo(id));

CREATE TABLE IF NOT EXISTS juega (
	id_partido INT(2) NOT NULL AUTO_INCREMENT,
	id_equipoUno INT(2) NOT NULL,
	id_equipoDos INT(2) NOT NULL,
	golesLocal INT(2) NULL DEFAULT '-1',
	golesVisitante INT(2) NULL DEFAULT '-1',
	penalesLocal INT(2) NULL DEFAULT '-1',
	penalesVisitante INT(2) NULL DEFAULT '-1',
	id_grupo INT(1) NULL,
	instancia VARCHAR(3) NULL,
	PRIMARY KEY (id_partido),
	FOREIGN KEY (id_equipoUno) REFERENCES equipo(id),
	FOREIGN KEY (id_equipoDos) REFERENCES equipo(id));