-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 08/12/2023 às 15:26
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
  `senha` varchar(12) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `texto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `comprador`
--

INSERT INTO `comprador` (`nome`, `cpf`, `gmail`, `moradia`, `telefone`, `senha`, `id`, `texto`) VALUES
('Catarina', '11111111111', 'aateste@gmail.com', 'Rua 1 aven', '1234567890', 'as12', 1, NULL),
('Nick', '1000000001', 'nickteste@gmail.com', 'Avenida da', '1234567891', '123', 2, NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `produto`
--

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `peso` varchar(10) DEFAULT NULL,
  `valor` varchar(10) DEFAULT NULL,
  `quantidade` int(10) DEFAULT NULL,
  `marca` varchar(255) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `setor`
--

CREATE TABLE `setor` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `suporte`
--

CREATE TABLE `suporte` (
  `id` int(11) NOT NULL,
  `gmail` varchar(90) DEFAULT NULL,
  `senha` varchar(10) DEFAULT NULL,
  `resposta` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `vendedor`
--

CREATE TABLE `vendedor` (
  `empresa` varchar(100) DEFAULT NULL,
  `responsavel` varchar(100) NOT NULL,
  `cnpj` char(18) NOT NULL,
  `localizacao` varchar(60) DEFAULT NULL,
  `telfixo` varchar(14) DEFAULT NULL,
  `celular` varchar(14) DEFAULT NULL,
  `gmail` varchar(90) DEFAULT NULL,
  `senha` varchar(12) DEFAULT NULL,
  `imagem` varchar(60) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `vendedor`
--

INSERT INTO `vendedor` (`empresa`, `responsavel`, `cnpj`, `localizacao`, `telfixo`, `celular`, `gmail`, `senha`, `imagem`, `id`) VALUES
('Departamento', 'Amadeu', '11', 'Rua  2 Avenida', '11', '11', 'testeuser5@gmail.com', 'xxz2', '', 2),
('Agua', 'Milena', '11', 'Rua 3 avenida', '11', '11', 'testeuser10@gmail.com', 'ddd4', 'enviadas/655905dfa8af3.jpg', 6),
('Agua', 'Pedro', '09', 'Rua  2 Avenida', '09', '10', 'testeuser17@gmail.com', 'as12', 'enviadas/6565097689782.jpg', 10);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `comprador`
--
ALTER TABLE `comprador`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `setor`
--
ALTER TABLE `setor`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `suporte`
--
ALTER TABLE `suporte`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comprador`
--
ALTER TABLE `comprador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `setor`
--
ALTER TABLE `setor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `suporte`
--
ALTER TABLE `suporte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `vendedor`
--
ALTER TABLE `vendedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
