-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 02, 2015 at 01:08 AM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `asheng`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE IF NOT EXISTS `attendance` (
  `email` varchar(60) NOT NULL,
  `fn` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL DEFAULT 'NA',
  `occupation` varchar(70) NOT NULL,
  `workplace` varchar(60) NOT NULL,
  `nationality` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`email`, `fn`, `phone`, `occupation`, `workplace`, `nationality`) VALUES
('cloworkonline@gmail.com', 'salifu mutaru', '0543344100', 'student', 'Ashesi', 'Ghanaian'),
('sal@gmail.com', 'salifu', '0543344100', 'selling', 'ashesi', 'ghanaian'),
('salifumutaru@gmail.com', 'salifu', '0543344100', 'selling', 'ashesi', 'ghanaian');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE IF NOT EXISTS `feedback` (
  `email` varchar(60) NOT NULL,
  `well` varchar(500) DEFAULT NULL,
  `notwell` varchar(500) DEFAULT NULL,
  `better` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`email`, `well`, `notwell`, `better`) VALUES
('bwejrjq@gmail.com', 'Great food', 'No nice ladies', 'Cook more food'),
('sal@gmail.com', '', '', ''),
('salifumutaru@gmail.com', 'cool', 'bad', 'do');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
