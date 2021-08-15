-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: study
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accessories`
--

DROP TABLE IF EXISTS `accessories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accessories` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `accessory_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `import_price` double NOT NULL,
  `quantity` bigint DEFAULT NULL,
  `retail_price` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accessories`
--

LOCK TABLES `accessories` WRITE;
/*!40000 ALTER TABLE `accessories` DISABLE KEYS */;
INSERT INTO `accessories` VALUES (1,'Panel 43 inch',25000,3,30000),(2,'Panel 49 inch',32000,9,38000);
/*!40000 ALTER TABLE `accessories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `accessories_bills`
--

DROP TABLE IF EXISTS `accessories_bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accessories_bills` (
  `accessory_id` bigint NOT NULL,
  `bills_id` bigint NOT NULL,
  PRIMARY KEY (`accessory_id`,`bills_id`),
  UNIQUE KEY `UK_nfnr2w3v9kfbq19j6rrbjcjij` (`bills_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accessories_bills`
--

LOCK TABLES `accessories_bills` WRITE;
/*!40000 ALTER TABLE `accessories_bills` DISABLE KEYS */;
/*!40000 ALTER TABLE `accessories_bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bills`
--

DROP TABLE IF EXISTS `bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bills` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `end_date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `first_status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `kilometer` double DEFAULT NULL,
  `repair_operation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total` double DEFAULT NULL,
  `accessory_id` bigint DEFAULT NULL,
  `customer_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  `current_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKiw5uls2tsngxcjdxkun1cvka9` (`accessory_id`),
  KEY `FKoy9sc2dmxj2qwjeiiilf3yuxp` (`customer_id`),
  KEY `FKja2jdwvsth2hkvlk8k334i822` (`product_id`),
  KEY `FKk8vs7ac9xknv5xp18pdiehpp1` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
INSERT INTO `bills` VALUES (28,'2021-08-11','đốm màn hình',12,'Thay Panel','10-08-2021',NULL,384000,1,3,20,35,'28 nguyễn tri phương','0123689'),(29,'2021-08-11','đốm màn hình',12,'Thay Panel','10-08-2021',NULL,384000,1,3,20,35,'28 nguyễn tri phương','0123689');
/*!40000 ALTER TABLE `bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `customer_address` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_full_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_phone` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_delete` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Enim molestiae rerum','Uriah Guerrero','+1 (306) 691-3512',1),(3,'Quảng Bình','Nguyễn Công Huy','123123',0),(4,'Phan Đăng Lưu','Trần Quang Tín','0931925215',0),(5,'Ea ratione quibusdam','Griffin Bender','+1 (868) 388-6317',0),(6,'Qui dolore velit con','Roanna Kane','+1 (775) 977-8828',0),(7,'Maxime maiores labor','Lillith Sampson','+1 (593) 469-2787',0),(9,'Ut eiusmod aut accus','Colette Richardson','+1 (553) 271-5444',0),(8,'Lorem ea modi dolori','Gray Griffin','+1 (962) 333-2564',1),(10,'Dưỡng Mong','Lại Phước Khánh','023156645',0),(11,'Kim Long','Bình Hụ','0931929542',0),(12,'Quảng Bình','Anh Nam','023112658',0);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers_products`
--

DROP TABLE IF EXISTS `customers_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers_products` (
  `customer_id` bigint NOT NULL,
  `products_id` bigint NOT NULL,
  PRIMARY KEY (`customer_id`,`products_id`),
  UNIQUE KEY `UK_4fkeiwvskid8xbm9yg5mefb79` (`products_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers_products`
--

LOCK TABLES `customers_products` WRITE;
/*!40000 ALTER TABLE `customers_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `customers_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `product_description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `purchase_day` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `serial_number` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `service_tag` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_id` bigint DEFAULT NULL,
  `finish_date` datetime DEFAULT NULL,
  `start_dated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `serial_number_UNIQUE` (`serial_number`),
  KEY `FK29w1glmsx19fyn0ts34ak8pc5` (`customer_id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (31,'trắng đen','Điều hoà Daikin 1120','10-08-2021','D12A1120','D12A',11,'2022-08-10 11:21:06','2021-08-10 11:21:06'),(32,'trắng đen','Máy Giặt Panasonic','10-08-2021','P242C102','P242C',12,'2022-08-10 14:42:42','2021-08-10 14:42:42'),(33,'trắng đen','Tivi LG43 inch','10-08-2021','43L100','43L',9,'2021-09-10 14:48:07','2021-08-10 14:48:07'),(34,'đen','Tivi Asanzo 49 inch','10-08-2021','A4921122','A4921',12,'2022-08-10 15:08:41','2021-08-10 15:08:41'),(35,'trắng đen','Laptop Dell','10-08-2021','D21100','D21',3,'2022-02-10 15:13:53','2021-08-10 15:13:53');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN','Quản Lý'),(2,'USER','Bán Hàng'),(3,'KT','Kỹ Thuật'),(4,'CSKH','Chăm Sóc Khách Hàng');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_users`
--

DROP TABLE IF EXISTS `roles_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles_users` (
  `role_id` bigint NOT NULL,
  `users_id` bigint NOT NULL,
  UNIQUE KEY `UK_snx09g5kxfrdi207cl1jhjmev` (`users_id`),
  KEY `FKsmos02hm32191ogexm2ljik9x` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_users`
--

LOCK TABLES `roles_users` WRITE;
/*!40000 ALTER TABLE `roles_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tokens` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `deleted` tinyint(1) DEFAULT '0',
  `token` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `token_exp_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `deleted` tinyint(1) DEFAULT '0',
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` bigint DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKp56c1712k691lhsyewcssf40f` (`role_id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,0,'Nguyễn Tâm Thiện','$2a$10$sI1Vb0q9yxD.HPwPYS8TIertDQX07cc4UcaScBxDPRcDH3IsYqvh2','admin',1,'Lê Đình Chinh','0931935255'),(14,0,'Bree George','$2a$10$5bd5Jq.qtZ83C.wAyt7kWeX1WZajEJdPC380.1NmGT5KY8s7o/n4W','wuforyv',4,'Sunt laborum Amet ','+1 (314) 117-1407'),(15,0,'Galvin Dyer','$2a$10$wwQhSdsSRX40qTgAHdgD5uGeTqFYvVyxdDJhjbkVqAZxpo/ltgUEa','nacazitu',4,'Vel sunt velit omn','+1 (926) 969-3307'),(16,0,'Jenna Ingram','$2a$10$03s28idIZqkS.oaqJpmQu.t.5PyddhkSnKLy2bvYPJNFFCneXseFK','tintran',2,'Nemo consectetur ei','+1 (703) 344-2791'),(17,0,'Chăm Sóc 1','$2a$10$Uvx6OFS1xDYVW80fnwOrcuQxNANNMXl4o5PBiCH4WBVNz//9LcZ9.','cskh1',4,'Minima suscipit dist','+1 (225) 944-6251'),(18,0,'Kỹ Thuật 1','$2a$10$/L0WY.RyrcXvhI6NtJrNIuDu3ziHVhwgWDMSxWtZLEbE8L0iYRjnK','kythuat1',3,'Hic architecto numqu','+1 (356) 889-2754'),(19,0,'Venus Pollard','$2a$10$DWxmuMs2cv6N4PVU.Q4pW.vJmlu2e4BhhVibv3XihfCPPQH66MWRG','banhang1',2,'Non voluptates minus','+1 (757) 231-3536'),(20,0,'Kỹ Thuât 2','$2a$10$XEEmMPzzIa1J6tg7XHE.uuo37GggIzlfRTRM69isXzOb/vtr4nO7i','kythuat2',3,'Accusantium consequa','+1 (764) 655-1605'),(21,0,'Kỹ Thuật 3','$2a$10$YVvWLfGaBt4u9VpTRwK3JeGP3gKLI06enibL2Be8S0R.pMyw5OtPy','kythuat3',3,'Irure eaque facilis ','+1 (195) 111-5442'),(22,0,'Erich Sharpe','$2a$10$KxJpqHDrqMkKWKLE4M22ZuIua2RVr5cU1IMWNPR9TJsbAPRW6CBg2','bulys',2,'Aute asperiores omni','+1 (471) 649-7098'),(23,0,'Kỹ Thuật 4','$2a$10$b.P7W0.McRdET0ZQvNAQ/.n7BHf//8N6Kn9.nKvKbNdN5QSWUDqZC','kythuat4',3,'Aute asperiores omni','+1 (471) 649-7098'),(24,0,'Imani Lara','$2a$10$9hmrdaQ.FMLHIC.uWTueiuv0g31UukJJZvE1HZkFvpaYlIEKOkoNy','banhang5',3,'Quisquam omnis tempo','+1 (585) 844-4473'),(25,0,'Pandora Mendez','$2a$10$gfR3NMIXAd3Q9ABaAhyzdOeUwU3JVAqE6.rhOJeDViv9T.cNZMG1y','banhang2',2,'Asperiores dolorem c','+1 (347) 564-5588');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `v_list_products`
--

DROP TABLE IF EXISTS `v_list_products`;
/*!50001 DROP VIEW IF EXISTS `v_list_products`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `v_list_products` AS SELECT 
 1 AS `id`,
 1 AS `product_description`,
 1 AS `product_name`,
 1 AS `purchase_day`,
 1 AS `serial_number`,
 1 AS `service_tag`,
 1 AS `customer_id`,
 1 AS `finish_date`,
 1 AS `start_dated`,
 1 AS `remainingDay`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `v_statistical_techinicians`
--

DROP TABLE IF EXISTS `v_statistical_techinicians`;
/*!50001 DROP VIEW IF EXISTS `v_statistical_techinicians`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `v_statistical_techinicians` AS SELECT 
 1 AS `id`,
 1 AS `end_date`,
 1 AS `first_status`,
 1 AS `kilometer`,
 1 AS `repair_operation`,
 1 AS `start_date`,
 1 AS `status`,
 1 AS `total`,
 1 AS `accessory_id`,
 1 AS `customer_id`,
 1 AS `user_id`,
 1 AS `product_id`,
 1 AS `current_address`,
 1 AS `current_phone`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `v_list_products`
--

/*!50001 DROP VIEW IF EXISTS `v_list_products`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_list_products` AS select `products`.`id` AS `id`,`products`.`product_description` AS `product_description`,`products`.`product_name` AS `product_name`,`products`.`purchase_day` AS `purchase_day`,`products`.`serial_number` AS `serial_number`,`products`.`service_tag` AS `service_tag`,`products`.`customer_id` AS `customer_id`,`products`.`finish_date` AS `finish_date`,`products`.`start_dated` AS `start_dated`,(select timestampdiff(DAY,now(),`products`.`finish_date`)) AS `remainingDay` from `products` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `v_statistical_techinicians`
--

/*!50001 DROP VIEW IF EXISTS `v_statistical_techinicians`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `v_statistical_techinicians` AS select `b`.`id` AS `id`,`b`.`end_date` AS `end_date`,`b`.`first_status` AS `first_status`,`b`.`kilometer` AS `kilometer`,`b`.`repair_operation` AS `repair_operation`,`b`.`start_date` AS `start_date`,`b`.`status` AS `status`,`b`.`total` AS `total`,`b`.`accessory_id` AS `accessory_id`,`b`.`customer_id` AS `customer_id`,`b`.`user_id` AS `user_id`,`b`.`product_id` AS `product_id`,`b`.`current_address` AS `current_address`,`b`.`current_phone` AS `current_phone` from `bills` `b` group by `b`.`user_id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-10 16:02:37
