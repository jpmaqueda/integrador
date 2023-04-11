-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-04-2023 a las 01:14:17
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebaproyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(5) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'hogar', NULL, NULL),
(2, 'exterior', NULL, NULL),
(3, 'cocina', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materials`
--

CREATE TABLE `materials` (
  `id` int(5) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materials`
--

INSERT INTO `materials` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'pino', NULL, NULL),
(2, 'Haya', NULL, NULL),
(3, 'Nogal', NULL, NULL),
(4, 'Roble', NULL, NULL),
(5, 'Caoba', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders_products`
--

CREATE TABLE `orders_products` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `descripcion` varchar(120) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `ancho` float DEFAULT NULL,
  `largo` float DEFAULT NULL,
  `alto` float DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `daleteAt` timestamp NULL DEFAULT NULL,
  `categoryId` int(11) NOT NULL,
  `materialId` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `nombre`, `precio`, `descripcion`, `imagen`, `color`, `stock`, `ancho`, `largo`, `alto`, `updatedAt`, `createdAt`, `daleteAt`, `categoryId`, `materialId`) VALUES
(1, 'mesa', '1000.00', 'muy buena mesa', 'img-1675645477458-270342202.jpg', 'azul', 0, 15, 15, 15, '2023-04-02 00:19:06', NULL, NULL, 2, 3),
(2, 'silla', '2000.00', 'Una silla con forma de cama ', 'img-1675645477458-270342202.jpg', 'verde', 1, 20, 20, 20, '2023-04-02 00:30:53', NULL, NULL, 2, 2),
(10, 'mesa 2', '1.00', NULL, 'imagen-1680391844786-252261846.jpg', 'VERDE', 1, 30, 20, 10, '2023-04-01 23:30:44', '2023-04-01 23:30:44', NULL, 3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `contrasena` varchar(200) DEFAULT NULL,
  `rol` int(1) DEFAULT NULL,
  `numero` int(2) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `email`, `contrasena`, `rol`, `numero`, `direccion`, `updatedAt`, `createdAt`) VALUES
(1, 'Gianfranco Sacchi', 'gianfrancosacchi@hotmail.com.ar', '$2a$10$.e5xgKxevXijQiDLbWkxseJzwl96rfdD6fA/OLBUesNcrAlDGAa1S', NULL, 0, '', '2023-04-10 15:30:19', '2023-04-07 13:26:08'),
(6, 'pepe', 'pepe@gmail.com', '$2a$10$niAgthX8BVuDDyzWDcs45egpvSUPMyna5HJOXoDwX5KjPXqQlZIo2', NULL, NULL, NULL, '2023-04-06 00:25:19', '2023-04-06 00:25:19'),
(14, 'Anabella', 'anabella.mendoza@gmail.com', '$2a$10$Wb1mUEwizKq2r481rmm1KOlQuhzHzlsInDTVi.0d5O3XMfKjvg/8u', NULL, NULL, 'calle false 123', '2023-04-10 15:58:55', '2023-04-10 15:00:49');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indices de la tabla `orders_products`
--
ALTER TABLE `orders_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `productId` (`productId`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_ibfk_1` (`categoryId`),
  ADD KEY `products_ibfk_2` (`materialId`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `materials`
--
ALTER TABLE `materials`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orders_products`
--
ALTER TABLE `orders_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `orders_products`
--
ALTER TABLE `orders_products`
  ADD CONSTRAINT `orders_products_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `orders_products_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`materialId`) REFERENCES `materials` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
