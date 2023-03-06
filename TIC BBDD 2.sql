-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-03-2023 a las 10:09:26
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tic`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencia`
--

CREATE TABLE `incidencia` (
  `codInci` int(6) NOT NULL,
  `codUsuInc` int(4) NOT NULL,
  `fecha` date NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `aula` varchar(20) NOT NULL,
  `grupo` varchar(20) NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `feedback` varchar(1000) NOT NULL,
  `estado` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `incidencia`
--

INSERT INTO `incidencia` (`codInci`, `codUsuInc`, `fecha`, `tipo`, `aula`, `grupo`, `descripcion`, `feedback`, `estado`) VALUES
(1, 3, '2023-02-28', 'Hardware', 'B3', 'DAW', 'Hay varios cables que no funcionan', '', 'Creada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `codUsu` int(4) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  `departamento` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`codUsu`, `nombre`, `apellidos`, `email`, `password`, `departamento`) VALUES
(1, 'Manuel', 'Ceballos', 'manuel.ceballos@educamadrid.es', 'pass', 'Informática'),
(2, 'Maria Teresa', 'Alhama', 'maite.alhama@educamadrid.es', 'pass', 'Informática'),
(3, 'Raul', 'Blazquez', 'raul.blazquezrubio@educamadrid.es', 'raul', 'Informática'),
(4, 'Adelaida', 'Gonzalez', 'adelaida@educamadrid.es', 'adelaida', 'Inglés'),
(5, 'Belen', 'Cao', 'belencao@educamadrid.es', 'belen', 'ACE'),
(6, 'Maribel', 'Lopez', 'maribellopez@educamadrid.es', 'maribel', 'Informática'),
(7, 'Alejandro', 'Barba', 'alejandrobarba@educamadrid.es', 'alex', 'Actividades Físicas y Deportiv'),
(8, 'Purificación', 'Muñoz', 'purificacionmuñoz@educamadrid.es', 'puri', 'FOL');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `incidencia`
--
ALTER TABLE `incidencia`
  ADD PRIMARY KEY (`codInci`),
  ADD KEY `fk_codUsu` (`codUsuInc`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`codUsu`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `incidencia`
--
ALTER TABLE `incidencia`
  MODIFY `codInci` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `codUsu` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `incidencia`
--
ALTER TABLE `incidencia`
  ADD CONSTRAINT `fk_codUsu` FOREIGN KEY (`codUsuInc`) REFERENCES `usuario` (`codUsu`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
