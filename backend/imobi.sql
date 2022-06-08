-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 08-Jun-2022 às 06:17
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `imobi`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `imoveis`
--

CREATE TABLE `imoveis` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descricao` varchar(450) COLLATE utf8mb4_unicode_ci NOT NULL,
  `preco` int(11) NOT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `imoveis`
--

INSERT INTO `imoveis` (`id`, `titulo`, `descricao`, `preco`, `data`) VALUES
(38, 'Apartamento', '1 quartos, 1 banheiro, sala, cozinha.', 51000, '2022-06-10'),
(45, 'Apartamento', '3 quartos, 1 banheiro, sala e cozinha', 280000, '2022-06-20'),
(46, 'Apartamento', '2 quartos, 1 banheiro, sala e cozinha', 188000, '2022-06-30'),
(49, 'Casa', '4 quartos, 2 banheiro, sala, cozinha.', 350000, '2022-03-09'),
(55, 'Casa', '4 quartos, 2 banheiro, sala, cozinha.', 550000, '2022-06-16'),
(62, 'Casa Rosa', '2 quartos, 1 banheiro, sala e cozinha', 140000, '2022-06-30');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `imoveis`
--
ALTER TABLE `imoveis`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `imoveis`
--
ALTER TABLE `imoveis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
