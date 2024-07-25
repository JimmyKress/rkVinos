-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ng_bebidas_db
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `bebidas`
--

DROP TABLE IF EXISTS `bebidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bebidas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(180) DEFAULT NULL,
  `clase` varchar(180) DEFAULT NULL,
  `cepa` varchar(255) DEFAULT NULL,
  `bodega` varchar(255) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `maridaje` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bebidas`
--

LOCK TABLES `bebidas` WRITE;
/*!40000 ALTER TABLE `bebidas` DISABLE KEYS */;
INSERT INTO `bebidas` VALUES (1,'Famiglia Bianchi','Tinto','RED BLEND','BIANCHI','http://localhost:3000/img/20220728_154217.jpg','2024-06-13 04:55:49','El Famiglia Bianchi se complementa perfectamente con cortes de carne como el bife de chorizo, el ojo de bife, y el asado. La riqueza y la estructura del vino equilibran la intensidad de las carnes rojas.'),(2,'Cameleon','Tinto','Malbec','DOMAINE BOUSQUET','http://localhost:3000/img/20220728_155711.jpg','2024-06-13 05:00:40','Carnes rojas (asado, bife de lomo), aves de corral (pollo asado, pato), quesos semicurados (gouda, emmental), y platos con setas (risotto de hongos, champiñones a la parrilla).'),(3,'Otro Loco Más','Tinto','Malbec','La Celia','http://localhost:3000/img/20220728_161203.jpg','2024-06-13 05:05:48','Para maridar con \"Otro Loco Más\", recomendamos acompañarlo con carnes rojas asadas, quesos maduros y pastas con salsas robustas.'),(4,'DADA','Blanco','Malbec','Finca Las Moras','http://localhost:3000/img/dada.jpg','2024-06-13 05:11:04','El vino Dada de Finca Las Moras es un Malbec. Se recomienda maridarlo con carnes rojas, pastas con salsas intensas, quesos fuertes y platos a base de cordero.'),(5,'Champán Blanc','Champán ','Chardonnay','DOÑA PAULA','http://localhost:3000/img/doñaPaula.jpg','2024-06-13 05:27:13','El vino Dada de Finca Las Moras es un Malbec. Se recomienda maridarlo con carnes rojas, pastas con salsas intensas, quesos fuertes y platos a base de cordero.'),(6,'María Codorníu Brut Nature','Espumante ','Macabeo','Codorníu','http://localhost:3000/img/maria.jpg','2024-06-13 05:27:40','El \"María Codorníu Gran Reserva Brut Nature\" combina bien con mariscos frescos, pescados blancos, tapas y ensaladas. Su perfil seco y fresco también lo hace ideal para acompañar quesos suaves y curados.'),(7,'Santa Julia Reserva','Tinto','Malbec','Escala Humana Wines','http://localhost:3000/img/20220728_163053.jpg','2024-06-13 05:32:50','Carnes a la parrilla (asado, chorizo), parrilladas mixtas, pollo al horno, quesos semicurados (gouda, edam), pastas con salsa de tomate, y empanadas de carne.'),(8,'Doña Paula Estate','Tinto','Malbec','Doña Paula','http://localhost:3000/img/1718075276134.jpg','2024-06-13 05:41:02','Carnes rojas a la parrilla (bife de chorizo, ojo de bife), cordero asado, platos de caza (como jabalí o ciervo), quesos semicurados (gouda, emmental), pasta con salsa bolognesa, y risotto de hongos.'),(9,'Alta Vista Brut Nature','Espumante','BRUT NATURE','Alta Vista','http://localhost:3000/img/Alta Vista.jpg','2024-06-13 05:48:58','Carnes a la parrilla (bife de chorizo, ojo de bife), cordero asado, estofados de carne, quesos semicurados (gouda, emmental), platos con setas (risotto de hongos), pasta con salsas ricas (boloñesa), y platos de caza (venado, jabalí).'),(10,'Finca Gabriel','Tinto','CABERNET SAUVIGNON','JORGE RUBIO','http://localhost:3000/img/fincaGabrielReservaChardinay.jpg','2024-06-13 05:54:54','Carnes rojas a la parrilla (bife de chorizo, ojo de bife), cordero asado, platos de caza (como venado o jabalí), quesos curados (parmesano, pecorino), pasta con salsas de tomate y chocolate oscuro para un maridaje de postre.'),(11,'PUTRUELE','Tinto','CABERNET SAUVIGNON','PUTRUELE','http://localhost:3000/img/Putruele.jpg','2024-06-13 05:59:08','Carnes rojas a la parrilla (como bife de chorizo, ojo de bife), pollo asado, empanadas de carne, quesos semicurados (como gouda, edam), pastas con salsa de tomate, y platos con hierbas aromáticas como albahaca o romero.'),(12,'Domaine Bousquet Black Rock','Tinto','Malbec ','DOMAINE BOUSQUET','http://localhost:3000/img/black.jpg','2024-06-13 06:04:41','El \"Black Rock\" marida excelentemente con carnes a la parrilla, como un buen asado o steak. También acompaña bien platos de pasta con salsas ricas, quesos curados y platos a base de cordero. Su estructura y notas intensas complementan muy bien estos alimentos, realzando sus sabores y creando un equilibrio armonioso.'),(13,'Las Perdices','Blanco','Torrontés','Viña las Perdices,','http://localhost:3000/img/perdices.jpg','2024-07-23 20:46:34','El vino blanco \"Las Perdices\" se marida perfectamente con mariscos, pescados blancos, y ensaladas frescas. Su acidez y frescura también lo hacen ideal para acompañar platos de cocina asiática, como sushi y ceviche, así como quesos frescos y suaves. Este vino complementa los sabores ligeros y delicados de estos alimentos, realzando su frescura y elegancia.'),(14,'Las Perdices Reserva','Tinto','Malbec ','Viña las Perdices,','http://localhost:3000/img/Reserva.jpg','2024-07-23 21:17:53','El \"Las Perdices Reserva\" se marida excelentemente con pescados grasos como el salmón, mariscos cocidos como langosta y camarones, y aves de corral como pollo y pavo. También complementa bien platos con salsas cremosas, pastas alfredo y quesos suaves y cremosos. Su complejidad y estructura permiten que realce los sabores ricos y sustanciosos de estos alimentos.'),(15,'Saint Felicien Sauvignon Blanc','Blanco','Sauvignon Blanc ','Catena Zapata','http://localhost:3000/img/saint.jpg','2024-07-23 21:28:12','El \"Saint Felicien Sauvignon Blanc\" se marida perfectamente con mariscos frescos, pescados blancos, ensaladas verdes y quesos de cabra, realzando los sabores frescos y ligeros de estos platos con su acidez vibrante y notas cítricas.'),(16,'Finca Gabriel Brut Nature','Espumante','Chardonnay','Finca Gabriel','http://localhost:3000/img/gabriel.jpg','2024-07-23 21:32:37','El \"Finca Gabriel Brut Nature\" se marida excelentemente con mariscos frescos, pescados blancos, sushi, ensaladas ligeras y quesos suaves. Su frescura y acidez complementan bien estos platos, ofreciendo un equilibrio armonioso y refrescante.');
/*!40000 ALTER TABLE `bebidas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-24  0:18:55
