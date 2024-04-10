-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 11/04/2024 às 00:03
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
  `email` varchar(100) DEFAULT NULL,
  `moradia` varchar(60) DEFAULT NULL,
  `telefone` varchar(14) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `senha_hash` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `comprador`
--

INSERT INTO `comprador` (`nome`, `cpf`, `email`, `moradia`, `telefone`, `senha`, `id`, `senha_hash`) VALUES
('ertinho', '22000000000', 'erto@email.com', 'Rua 1 avenida', '11100000000', '90g&!151', 21, '$2y$10$sKVHHNLHozrH2cfww9Pb.OtsUwnCE44H9I3C7ejzps4YQH0Cvzxw6');

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
  `marca` varchar(255) DEFAULT NULL,
  `quantidade` int(10) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produto`
--

INSERT INTO `produto` (`id`, `nome`, `codigo`, `peso`, `valor`, `marca`, `quantidade`, `imagem`) VALUES
(1, 'teste', 'teste', 'teste', 'teste', 'teste', 11, 'produtos/661444420dd1b.jpg'),
(2, 'teste', 'teste', 'teste', 'teste', 'teste', 11, 'produtos/661444e901cab.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `setor`
--

CREATE TABLE `setor` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `setor`
--

INSERT INTO `setor` (`id`, `nome`) VALUES
(1, 'limpeza');

-- --------------------------------------------------------

--
-- Estrutura para tabela `suporte`
--

CREATE TABLE `suporte` (
  `id` int(11) NOT NULL,
  `email` varchar(90) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `senha_hash` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `suporte`
--

INSERT INTO `suporte` (`id`, `email`, `senha`, `senha_hash`) VALUES
(5, 'suporte@email.com', 'vvb%$011', '$2y$10$rNGAavnHSYajQE0p.PMcoutqJJM2lJ7QkV4y86W2/teHKz6Xf2.8S');

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
  `email` varchar(90) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `imagem` varchar(60) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `senha_hash` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `vendedor`
--

INSERT INTO `vendedor` (`empresa`, `responsavel`, `cnpj`, `localizacao`, `telfixo`, `celular`, `email`, `senha`, `imagem`, `id`, `senha_hash`) VALUES
('Empresa1', 'Zero', '1100000000000', 'Rua 1 Avenida', '0000000000', '10000000000', 'userteste20@email.com', 'abc12345', 'enviadas/65f1eaf5c0c10.jpg', 14, '$2y$10$x1WA2go9nrudOyMxdiyZUeC42EqFyuFTa5SiakHdbCPB5U27VEWEC');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `comprador`
--
ALTER TABLE `comprador`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gmail` (`email`);

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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gmail` (`email`);

--
-- Índices de tabela `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gmail` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comprador`
--
ALTER TABLE `comprador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `setor`
--
ALTER TABLE `setor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `suporte`
--
ALTER TABLE `suporte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `vendedor`
--
ALTER TABLE `vendedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
