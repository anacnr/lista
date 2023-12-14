-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14/12/2023 às 15:23
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `supermercado`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `comprador`
--

CREATE TABLE `comprador` (
  `nome` varchar(100) NOT NULL,
  `cpf` char(14) NOT NULL,
  `gmail` varchar(100) DEFAULT NULL,
  `moradia` varchar(60) DEFAULT NULL,
  `telefone` varchar(14) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `texto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `comprador`
--

INSERT INTO `comprador` (`nome`, `cpf`, `gmail`, `moradia`, `telefone`, `senha`, `id`, `texto`) VALUES
('Catarina', '11111111111', 'aateste@gmail.com', 'Rua 1 aven', '1234567890', 'as12', 1, NULL),
('Nick', '1000000001', 'nickteste@gmail.com', 'Avenida da', '1234567891', '123', 2, NULL),
('kou', '11', 'x@gmail.com', 'Rua Ji', '11', '$2y$10$nRTrp17l7kLbbiFPptehTOJ/pqEz806w.CXckvNTcbualr6HKQtem', 15, NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `comprador`
--
ALTER TABLE `comprador`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comprador`
--
ALTER TABLE `comprador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
