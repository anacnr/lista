-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22/07/2024 às 02:50
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

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
  `senha_hash` varchar(255) DEFAULT NULL,
  `id_prod` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `comprador`
--

INSERT INTO `comprador` (`nome`, `cpf`, `email`, `moradia`, `telefone`, `senha`, `id`, `senha_hash`, `id_prod`) VALUES
('ertinho', '22000000000', 'erto@email.com', 'Rua 1 avenida', '11100000000', '90g&!151', 1, '$2y$10$sKVHHNLHozrH2cfww9Pb.OtsUwnCE44H9I3C7ejzps4YQH0Cvzxw6', 1),
('Carla', '20000000000000', 'user4@email.com', 'Rua agua', '(00) 9000-1', 'cliente12345', 2, '$2y$10$Si7VqML7/aFT5.s768Q6eubEdFe/NBl.5CWWipGvP2rj.8Wrv85Ma', 4);

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
  `quantidade` varchar(50) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produto`
--

INSERT INTO `produto` (`id`, `nome`, `codigo`, `peso`, `valor`, `marca`, `quantidade`, `imagem`, `setor`, `id_cliente`, `id_supermercado`, `id_setor`) VALUES
(1, 'Detergente', 'código1', '500', '5,80', 'teste1', '120000', 'produtos/661444420dd1b.jpg', 'frutas', 1, 0, 2),
(4, 'Laranja', 'Código3', '500', '6,60', 'Teste3', '90000', 'produtos/663c000fe1980.jpg', 'frutas', 2, 0, 3);

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
(1, 'variados'),
(2, 'Limpeza'),
(3, 'Hortifruti'),
(4, 'Laticinio'),
(6, 'Bebida');

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
  `id` int(11) NOT NULL,
  `empresa` varchar(100) NOT NULL,
  `responsavel` varchar(100) NOT NULL,
  `cnpj` char(18) NOT NULL,
  `localizacao` varchar(255) NOT NULL,
  `telfixo` varchar(14) DEFAULT NULL,
  `celular` varchar(14) DEFAULT NULL,
  `email` varchar(90) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `imagem` varchar(60) DEFAULT NULL,
  `senha_hash` varchar(255) DEFAULT NULL,
  `cadastro_data` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `vendedor`
--

INSERT INTO `vendedor` (`id`, `empresa`, `responsavel`, `cnpj`, `localizacao`, `telfixo`, `celular`, `email`, `senha`, `imagem`, `senha_hash`, `cadastro_data`) VALUES
(14, '', 'Zero', '1100000000000', 'Rua 1 Avenida', '0000000000', '10000000000', 'userteste20@email.com', 'abc12345', 'enviadas/65f1eaf5c0c10.jpg', '$2y$10$x1WA2go9nrudOyMxdiyZUeC42EqFyuFTa5SiakHdbCPB5U27VEWEC', '0000-00-00'),
(15, '', 'Dedeu', '090000000000000000', 'rua 1 avenida', '1200000000', '12000000000', 'user6@email.com', 'superm12345', 'enviadas/663d619aedfee.png', '$2y$10$SRHGj3tgLRvqBbmUqCOV.OXS/K5/AUoHnNmGD6TzRmjQicklEMaSS', '0000-00-00');

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_prod_setor` (`id_setor`),
  ADD KEY `fk_cliente_prod` (`id_cliente`);

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
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comprador`
--
ALTER TABLE `comprador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `setor`
--
ALTER TABLE `setor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `suporte`
--
ALTER TABLE `suporte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `vendedor`
--
ALTER TABLE `vendedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `fk_cliente_prod` FOREIGN KEY (`id_cliente`) REFERENCES `comprador` (`id`),
  ADD CONSTRAINT `fk_prod_setor` FOREIGN KEY (`id_setor`) REFERENCES `setor` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
