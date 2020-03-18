-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2020 at 11:06 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mcash`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `acc_id` int(11) NOT NULL,
  `acc_fname` varchar(100) NOT NULL,
  `acc_lname` varchar(100) NOT NULL,
  `acc_username` varchar(100) NOT NULL,
  `acc_password` varchar(100) NOT NULL,
  `acc_email` varchar(100) NOT NULL,
  `acc_balance` double NOT NULL,
  `acc_type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`acc_id`, `acc_fname`, `acc_lname`, `acc_username`, `acc_password`, `acc_email`, `acc_balance`, `acc_type_id`) VALUES
(30, 'user', '1', 'user1', '789789', 'user1@outlook.com', 20000, 1),
(31, 'user', '2', 'user2', '789789', 'user2@outlook.com', 5000, 2);

-- --------------------------------------------------------

--
-- Table structure for table `account_type`
--

CREATE TABLE `account_type` (
  `acc_type_id` int(11) NOT NULL,
  `acc_type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account_type`
--

INSERT INTO `account_type` (`acc_type_id`, `acc_type_name`) VALUES
(1, 'ธรรมดา'),
(2, 'พรีเมียม');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cate_id` int(11) NOT NULL,
  `cate_name` varchar(255) NOT NULL,
  `cate_acc_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cate_id`, `cate_name`, `cate_acc_id`) VALUES
(36, 'เงินเดือน1', 30),
(37, 'ค่าใช้จ่าย1', 30),
(38, 'เงินเดือน2', 31),
(39, 'ค่าใช้จ่าย2', 31),
(40, 'ค่าน้ำ2', 31),
(42, 'ค่านำ้', 1),
(43, 'ค่าไฟ', 1);

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `tst_id` int(30) NOT NULL,
  `tst_balance` double NOT NULL,
  `tst_type` varchar(10) NOT NULL,
  `tst_cate_id` int(10) NOT NULL,
  `tst_amount` double NOT NULL,
  `tst_date` date NOT NULL,
  `tst_note` varchar(255) NOT NULL,
  `tst_acc_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`tst_id`, `tst_balance`, `tst_type`, `tst_cate_id`, `tst_amount`, `tst_date`, `tst_note`, `tst_acc_id`) VALUES
(108, 15000, 'รายรับ', 38, 15000, '2020-03-15', '', 31),
(109, 10000, 'รายจ่าย', 39, 5000, '2020-03-15', '', 31),
(110, 5000, 'รายจ่าย', 40, 5000, '2020-03-15', '', 31),
(114, 24000, 'รายรับ', 36, 25000, '2020-03-15', '', 30),
(115, 29000, 'รายจ่าย', 37, 1000, '2020-03-15', '', 30),
(116, 20000, 'รายจ่าย', 37, 4000, '2020-03-15', '', 30);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`acc_id`);

--
-- Indexes for table `account_type`
--
ALTER TABLE `account_type`
  ADD PRIMARY KEY (`acc_type_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cate_id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`tst_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `acc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `account_type`
--
ALTER TABLE `account_type`
  MODIFY `acc_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `tst_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
