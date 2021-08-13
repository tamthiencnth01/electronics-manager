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
INSERT INTO `accessories` VALUES (1,'Panel 43 inch',25000,10,30000),(2,'Panel 49 inch',32000,11,38000);
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
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
INSERT INTO `bills` VALUES (6,'1','1',2,'1','1','1',314000,NULL,1,20,5,'phan dang luu','0931952'),(5,'1','1',8,'1','1','1',356000,NULL,1,20,5,'sds','sds'),(4,'2021-08-07','1',1,'Thay Panel','1','1',1,2,1,18,5,'sds','sdsd'),(7,'2021-08-07','Optio voluptas elig',7,'Thay Panel','05-08-2021',NULL,349000,1,3,21,14,'Ex cupiditate ea ad ','+1 (868) 977-7998'),(8,'2021-08-07','Optio voluptas elig',14,'Thay Bo Formatter','05-08-2021',NULL,398000,1,3,23,14,'Ex cupiditate ea ad ','+1 (868) 977-7998'),(9,'2021-08-06','Omnis tempore labor',15,'Thay Bo Nguồn','05-08-2021',NULL,405000,2,7,18,10,'Nesciunt quo est do','+1 (947) 249-3228'),(10,NULL,'Est explicabo Et r',0,NULL,'05-08-2021',NULL,0,NULL,7,20,10,'Laborum alias neque ','+1 (759) 501-8908'),(11,'2021-08-07','Quas aute voluptatem',13,'Thay Panel','05-08-2021',NULL,391000,1,9,18,15,'Hic tempor et ration','+1 (755) 931-1526'),(12,'2021-08-07','Quidem irure ex simi',15,'Thay Bo Formatter','05-08-2021',NULL,405000,1,1,18,5,'Ut aut aut quis enim','+1 (804) 317-9055'),(13,NULL,'Tempore quasi eum p',0,NULL,'05-08-2021',NULL,0,NULL,8,20,8,'Blanditiis veniam q','+1 (772) 735-3301'),(14,'2021-08-05','Đốm Màn Hình',16,'Thay Bo Nguồn','05-08-2021',NULL,412000,1,7,18,10,'28 Nguyễn Tri Phương','0234652215'),(15,NULL,'đốm màn hình',0,NULL,'06-08-2021',NULL,0,NULL,8,20,7,'28 nguyễn tri phương','+1 (721) 257-2584'),(16,'2021-08-07','Không lên nguồn',5,'Thay Panel','06-08-2021',NULL,335000,1,4,20,12,'28 nguyễn tri phương','0123689'),(17,'2021-08-07','đốm màn hình',15,'Thay Panel','06-08-2021',NULL,405000,2,10,20,16,'28 nguyễn tri phương','0123689'),(18,'2021-08-07','Không lên nguồn',0,'Thay Bo Nguồn','06-08-2021',NULL,0,2,11,20,17,'28 nguyễn tri phương','0123689');
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
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Enim molestiae rerum','Uriah Guerrero','+1 (306) 691-3512',1),(3,'Quảng Bình','Nguyễn Công Huy','123123',0),(4,'Phan Đăng Lưu','Trần Quang Tín','0931925215',0),(5,'Ea ratione quibusdam','Griffin Bender','+1 (868) 388-6317',0),(6,'Qui dolore velit con','Roanna Kane','+1 (775) 977-8828',0),(7,'Maxime maiores labor','Lillith Sampson','+1 (593) 469-2787',0),(9,'Ut eiusmod aut accus','Colette Richardson','+1 (553) 271-5444',0),(8,'Lorem ea modi dolori','Gray Griffin','+1 (962) 333-2564',1),(10,'Dưỡng Mong','Lại Phước Khánh','023156645',0),(11,'Kim Long','Bình Hụ','0931929542',0);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
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
  `serial_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `service_tag` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK29w1glmsx19fyn0ts34ak8pc5` (`customer_id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (5,'Quis officia adipisi','Aubrey Gomez','2017-10-28','667','Ut ut et labore quis',1),(6,'Qui est quis dolor s','George Ferrell','2016-04-12','457','Aut in quidem magna ',8),(7,'Amet aperiam reicie','Lois Gonzales','03-08-2021','566','Aut hic est quos qu',8),(8,'Alias earum quaerat ','Emerald Roman','03-08-2021','283','Est provident cupi',8),(9,'Voluptatibus eligend','Judah Glover','03-08-2021','254','Libero vel placeat ',8),(10,'Excepteur et volupta','Valentine Campbell','03-08-2021','377','Beatae enim id et de',7),(11,'Suscipit mollit fugi','Tamara Garrett','03-08-2021','627','Ea esse exercitation',3),(12,'Provident hic et at','Nyssa Adams','03-08-2021','101','Rerum nobis omnis no',4),(13,'Beatae adipisci face','Eric Malone','04-08-2021','358','Molestias consequatu',3),(14,'Ex in esse quis aut ','Chase Wolf','04-08-2021','778','Non mollit in impedi',3),(15,'Laboriosam qui temp','Graham Gilmore','05-08-2021','767','Repellendus Officii',9),(16,'Màu Đen','Tivi LG 49 inch','06-08-2021','123456789','SmartTV LG',10),(17,'Màu Đen','Tivi LG 53 Inch','06-08-2021','1122334455','Smart Tv',11);
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-06 14:27:46
