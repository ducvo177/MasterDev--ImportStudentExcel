drop database if exists db;

create database if not exists db;

use db;
	
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  
  `school` varchar(45) DEFAULT NULL,
  `district` varchar(45) DEFAULT NULL,
  `studentid` varchar(45) DEFAULT NULL,
  `class` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `day` varchar(45) DEFAULT NULL,
  `month` varchar(45) DEFAULT NULL,
    `year` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `birthplace` varchar(45) DEFAULT NULL,
  `ethnicity` varchar(45) DEFAULT NULL,
  `live` varchar(45) DEFAULT NULL,
  `tel` varchar(45) DEFAULT NULL,
  `grade1` int,
    `grade2` int,
      `grade3` int,
        `grade4` int,
	`grade5` int,
	`sum5` int,
     `priority`int,
     `sumall` int,
     `note` varchar(45) DEFAULT NULL,
     
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `studentid_UNIQUE` (`studentid`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;