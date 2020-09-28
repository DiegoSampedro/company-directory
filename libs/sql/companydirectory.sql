-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.6-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for companydirectory
CREATE DATABASE IF NOT EXISTS `companydirectory` /*!40100 DEFAULT CHARACTER SET utf8 */; USE `companydirectory`;

-- Dumping structure for table companydirectory.department
CREATE TABLE IF NOT EXISTS `department` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(50) DEFAULT NULL,
 `locationID` INT(11) DEFAULT NULL, PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Dumping data for table companydirectory.department: ~12 rows (approximately)
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` (`id`, `name`, `locationID`) VALUES
	(1, 'Human Resources', 1),
	(2, 'Sales', 2),
	(3, 'Marketing', 2),
	(4, 'Legal', 1),
	(5, 'Services', 1),
	(6, 'Research and Development', 3),
	(7, 'Product Management', 3),
	(8, 'Training', 4),
	(9, 'Support', 4),
	(10, 'Engineering', 5),
	(11, 'Accounting', 5),
	(12, 'Business Development', 3);
/*!40000 ALTER TABLE `department` ENABLE KEYS */;

-- Dumping structure for table companydirectory.location
CREATE TABLE IF NOT EXISTS `location` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(50) DEFAULT NULL, PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table companydirectory.location: ~4 rows (approximately)
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` (`id`, `name`) VALUES
	(1, 'London'),
	(2, 'New York'),
	(3, 'Paris'),
	(4, 'Munich'),
	(5, 'Rome');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;

-- Dumping structure for table companydirectory.personnel
CREATE TABLE IF NOT EXISTS `personnel` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `firstName` VARCHAR(50) DEFAULT NULL,
 `lastName` VARCHAR(50) DEFAULT NULL,
 `jobTitle` VARCHAR(50) DEFAULT NULL,
 `email` VARCHAR(50) DEFAULT NULL,
 `photo` VARCHAR(50) DEFAULT './images/profiles/0.png',
 `departmentID` INT(11) DEFAULT NULL, PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

-- Dumping data for table companydirectory.personnel: ~100 rows (approximately)
/*!40000 ALTER TABLE `personnel` DISABLE KEYS */;
INSERT INTO `personnel` (`id`, `firstName`, `lastName`, `jobTitle`, `email`, `departmentID`) VALUES
	(1, 'Rosana', 'Heffron', 'Head of HR', 'rheffron0@ibm.com', 1),
	(2, 'Kris', 'Kovnot', 'Head of Sales', 'kkovnot1@google.nl', 2),
	(3, 'Vera', 'Kisbee', 'Sales Director', 'vkisbee2@nih.gov', 2),
	(4, 'Aveline', 'Edgson', 'Head of Marketing', 'aedgson3@wikispaces.com', 3),
	(5, 'Bertie', 'Wittke', 'Head of Legal', 'bwittke4@yahoo.com', 4),
	(6, 'Demetre', 'Cossam', 'Head of Account Services', 'dcossam5@washington.edu', 5),
	(7, 'Annabela', 'McGavigan', 'Legal Director', 'amcgavigan6@wp.com', 4),
	(8, 'Crichton', 'McAndrew', 'HR Representative', 'cmcandrew7@zdnet.com', 1),
	(9, 'Cordula', 'Plain', 'Account Director', 'cplain8@google.ca', 5),
	(10, 'Glen', 'McDougle', 'Head of R&D', 'gmcdougle9@meetup.com', 6),
	(11, 'Theo', 'Audas', 'Product Manager', 'taudasa@newsvine.com', 7),
	(12, 'Spense', 'Jolliss', 'Head of Training', 'sjollissb@wufoo.com', 8),
	(13, 'Leopold', 'Carl', 'Head of Support', 'lcarlc@paginegialle.it', 9),
	(14, 'Barr', 'MacAllan', 'Account Director', 'bmacalland@github.com', 5),
	(15, 'Suzie', 'Cromer', 'HR Manager', 'scromere@imageshack.us', 1),
	(16, 'Tracee', 'Gisbourn', 'Head of Engineering', 'tgisbournf@bloglines.com', 10),
	(17, 'Taylor', 'St. Quintin', 'Development Director', 'tstquinting@chronoengine.com', 10),
	(18, 'Lin', 'Klassmann', 'Development Manager', 'lklassmannh@indiatimes.com', 10),
	(19, 'Lay', 'Fintoph', 'Head of Accounting', 'lfintophi@goo.gl', 11),
	(20, 'Moishe', 'Flinn', 'Head of Business Development', 'mflinnj@list-manage.com', 12),
	(21, 'Gay', 'Bickford', 'Research Director', 'gbickfordk@scientificamerican.com', 6),
	(22, 'Erik', 'Lindback', 'Online Training Manager', 'elindbackl@virginia.edu', 8),
	(23, 'Tamarra', 'Ace', 'Support Executive', 'tacem@vinaora.com', 9),
	(24, 'Barbara-anne', 'Rooksby', 'Business Development Executive', 'brooksbyn@issuu.com', 12),
	(25, 'Lucien', 'Allsup', 'Support Executive', 'lallsupo@goo.ne.jp', 9),
	(26, 'Jackelyn', 'Imlach', 'Accountant', 'jimlachp@google.it', 11),
	(27, 'Virge', 'Bootes', 'Sales Executive', 'vbootesq@oracle.com', 2),
	(28, 'Rafferty', 'Matasov', 'Lawyer', 'rmatasovr@4shared.com', 4),
	(29, 'Vanya', 'Goulder', 'Support Team Leader', 'vgoulders@phoca.cz', 9),
	(30, 'Bonita', 'McGonagle', 'HR Executive', 'bmcgonaglet@microsoft.com', 1),
	(31, 'Allx', 'Whaley', 'HR Executive', 'awhaleyu@bbb.org', 1),
	(32, 'Mavis', 'Lernihan', 'Account Manager', 'mlernihanv@netscape.com', 5),
	(33, 'Vern', 'Durling', 'HR Manager', 'vdurlingw@goo.gl', 1),
	(34, 'Myles', 'Minchi', 'Product Executive', 'mminchix@smugmug.com', 7),
	(35, 'Anitra', 'Coleridge', 'Software Developer', 'acoleridgey@nbcnews.com', 6),
	(36, 'Ailis', 'Brewster', 'Product Manager', 'abrewsterz@businesswire.com', 7),
	(37, 'Rahal', 'Tute', 'Software Developer', 'rtute10@pinterest.com', 6),
	(38, 'Warner', 'Blonden', 'Business Development Manager', 'wblonden11@spiegel.de', 12),
	(39, 'Melvyn', 'Canner', 'Lawyer', 'mcanner12@eepurl.com', 4),
	(40, 'Ryann', 'Giampietro', 'Lawyer', 'rgiampietro13@theguardian.com', 4),
	(41, 'Harwell', 'Jefferys', 'Development Assistant', 'hjefferys14@jimdo.com', 10),
	(42, 'Lanette', 'Buss', 'Legal Director', 'lbuss15@51.la', 4),
	(43, 'Lissie', 'Reddington', 'Support Executive', 'lreddington16@w3.org', 9),
	(44, 'Dore', 'Braidford', 'Accountant', 'dbraidford17@google.com.br', 11),
	(45, 'Lizabeth', 'Di Franceshci', 'Trainer', 'ldifranceshci18@mediafire.com', 8),
	(46, 'Felic', 'Sharland', 'Business Development Executive', 'fsharland19@myspace.com', 12),
	(47, 'Duff', 'Quail', 'Support Executive', 'dquail1a@vimeo.com', 9),
	(48, 'Brendis', 'Shivell', 'HR Executive', 'bshivell1b@un.org', 1),
	(49, 'Nevile', 'Schimaschke', 'Team Leader', 'nschimaschke1c@hexun.com', 10),
	(50, 'Jon', 'Calbaithe', 'Legal Director', 'jcalbaithe1d@netvibes.com', 4),
	(51, 'Emmery', 'Darben', 'Project Manager', 'edarben1e@mapquest.com', 10),
	(52, 'Staford', 'Whitesel', 'Project Manager', 'swhitesel1f@nasa.gov', 6),
	(53, 'Benjamin', 'Hawkslee', 'Project Manager', 'bhawkslee1g@hubpages.com', 7),
	(54, 'Myrle', 'Speer', 'Digital Marketing Manager', 'mspeer1h@tripod.com', 3),
	(55, 'Matthus', 'Banfield', 'Digital Marketing Executive', 'mbanfield1i@angelfire.com', 3),
	(56, 'Annadiana', 'Drance', 'Marketing Executive', 'adrance1j@omniture.com', 3),
	(57, 'Rinaldo', 'Fandrey', 'Sales Manager', 'rfandrey1k@bbc.co.uk', 2),
	(58, 'Roanna', 'Standering', 'Head of Demand Generation', 'rstandering1l@cocolog-nifty.com', 3),
	(59, 'Lorrie', 'Fattorini', 'Support Executive', 'lfattorini1m@geocities.jp', 9),
	(60, 'Talbot', 'Andrassy', 'Project Manager', 'tandrassy1n@bigcartel.com', 4),
	(61, 'Cindi', 'O\'Mannion', 'Accountant Team Lead', 'comannion1o@ameblo.jp', 11),
	(62, 'Pancho', 'Mullineux', 'HR Executive', 'pmullineux1p@webmd.com', 1),
	(63, 'Cynthy', 'Peyntue', 'Project Manager', 'cpeyntue1q@amazon.co.jp', 6),
	(64, 'Kristine', 'Christal', 'Trainer', 'kchristal1r@behance.net', 8),
	(65, 'Dniren', 'Reboulet', 'Project Manager', 'dreboulet1s@360.cn', 7),
	(66, 'Aggy', 'Napier', 'Brand Director', 'anapier1t@sciencedirect.com', 3),
	(67, 'Gayleen', 'Hessay', 'Legal Manager', 'ghessay1u@exblog.jp', 4),
	(68, 'Cull', 'Snoden', 'HR Manager', 'csnoden1v@so-net.ne.jp', 1),
	(69, 'Vlad', 'Crocombe', 'Product Executive', 'vcrocombe1w@mtv.com', 7),
	(70, 'Georgeanna', 'Joisce', 'Junior Software Developer', 'gjoisce1x@google.com.au', 6),
	(71, 'Ursola', 'Berthomieu', 'Legal Assistant', 'uberthomieu1y@un.org', 4),
	(72, 'Mair', 'McKirdy', 'HR Consultant', 'mmckirdy1z@ovh.net', 1),
	(73, 'Erma', 'Runnalls', 'Training Consultant', 'erunnalls20@spiegel.de', 8),
	(74, 'Heida', 'Gallone', 'Project Director', 'hgallone21@hostgator.com', 10),
	(75, 'Christina', 'Denge', 'Business Development Manager', 'cdenge22@canalblog.com', 12),
	(76, 'Wilone', 'Fredi', 'Product Manager', 'wfredi23@gizmodo.com', 7),
	(77, 'Stormie', 'Bolderstone', 'Accountant', 'sbolderstone24@globo.com', 11),
	(78, 'Darryl', 'Pool', 'Credit Controller', 'dpool25@vistaprint.com', 11),
	(79, 'Nikolas', 'Mager', 'Account Executive', 'nmager26@nifty.com', 5),
	(80, 'Brittney', 'Gaskal', 'Project Manager', 'bgaskal27@weather.com', 10),
	(81, ' FIELD', 'Gresty', 'Legal Consultant', 'fgresty28@networkadvertising.org', 4),
	(82, 'Martina', 'Tremoulet', 'Marketing Executive', 'mtremoulet29@sciencedaily.com', 3),
	(83, 'Robena', 'Ivanyutin', 'Sales Representative', 'rivanyutin2a@mozilla.org', 2),
	(84, 'Reagen', 'Corner', 'Accountant', 'rcorner2b@qq.com', 11),
	(85, 'Eveleen', 'Sulter', 'Junior Software Developer', 'esulter2c@nature.com', 6),
	(86, 'Christy', 'Dunbobbin', 'Trainer', 'cdunbobbin2d@feedburner.com', 8),
	(87, 'Winthrop', 'Lansley', 'Trainer', 'wlansley2e@alibaba.com', 8),
	(88, 'Lissa', 'Insley', 'Junior Marketing Executive', 'linsley2f@friendfeed.com', 3),
	(89, 'Shell', 'Risebarer', 'Project Manager', 'srisebarer2g@patch.com', 10),
	(90, 'Cherianne', 'Liddyard', 'Sales Manager', 'cliddyard2h@com.com', 2),
	(91, 'Brendan', 'Fooks', 'Sales Executive', 'bfooks2i@utexas.edu', 2),
	(92, 'Edmund', 'Tace', 'Support Assistant', 'etace2j@hatena.ne.jp', 9),
	(93, 'Ki', 'Tomasini', 'Project Manager', 'ktomasini2k@cnbc.com', 10),
	(94, 'Chadd', 'McGettrick', 'Project Manager', 'cmcgettrick2l@simplemachines.org', 10),
	(95, 'Dulcie', 'Baudi', 'Marketing Exeutive', 'dbaudi2m@last.fm', 3),
	(96, 'Barnebas', 'Mowbray', 'HR Executive', 'bmowbray2n@cbslocal.com', 1),
	(97, 'Stefanie', 'Anker', 'Account Manager', 'sanker2o@hud.gov', 5),
	(98, 'Cherye', 'de Cullip', 'Project Manager', 'cdecullip2p@loc.gov', 10),
	(99, 'Sinclare', 'Deverall', 'Senior Software Developer', 'sdeverall2q@ow.ly', 6),
	(100, 'Shae', 'Johncey', 'Project Manager', 'sjohncey2r@bluehost.com', 10);