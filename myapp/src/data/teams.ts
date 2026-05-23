import bayernLogo from '../assets/logos/Bayern.png';
import dortmundLogo from '../assets/logos/Dortmund.png';
import leverkusenLogo from '../assets/logos/Leverkusen.png';
import leipzigLogo from '../assets/logos/Leipzig.png';
import frankfurtLogo from '../assets/logos/Frankfurt.png';
import stuttgartLogo from '../assets/logos/Stuttgart.png';
import freiburgLogo from '../assets/logos/Freiburg.png';
import unionLogo from '../assets/logos/UnionBerlin.png';
import bremenLogo from '../assets/logos/Bremen.png';
import gladbachLogo from '../assets/logos/Gladbach.png';
import wolfsburgLogo from '../assets/logos/Wolfsburg.png';
import mainzLogo from '../assets/logos/Mainz.png';
import augsburgLogo from '../assets/logos/Augsberg.png';
import hoffenheimLogo from '../assets/logos/Hoffenheim.png';
import heidenheimLogo from '../assets/logos/Heidenheim.png';
import stpauliLogo from '../assets/logos/St.Pauli.png';
import hsvLogo from '../assets/logos/Hamburg.png';
import kolnLogo from '../assets/logos/Koln.png';

import neuerPhoto from '../assets/players/bayern/Neuer.png';
import kanePhoto from '../assets/players/bayern/Kane.png';
import ulreichPhoto from '../assets/players/bayern/Ulreich.png';
import urbigPhoto from '../assets/players/bayern/Urbig.png';
import klanacPhoto from '../assets/players/bayern/Klanac.png';
import upamecanoPhoto from '../assets/players/bayern/Upamecano.png';
import tahPhoto from '../assets/players/bayern/Tah.png';
import kimPhoto from '../assets/players/bayern/Kim.png';
import itoPhoto from '../assets/players/bayern/Ito.png';
import daviesPhoto from '../assets/players/bayern/Davies.png';
import stanisicPhoto from '../assets/players/bayern/Stanisic.png';
import laimerPhoto from '../assets/players/bayern/Laimer.png';
import pavlovicPhoto from '../assets/players/bayern/Pavlovic.png';
import kimmichPhoto from '../assets/players/bayern/Kimmich.png';
import daiberPhoto from '../assets/players/bayern/Daiber.png';
import bischofPhoto from '../assets/players/bayern/Bischof.png';
import goretzkaPhoto from '../assets/players/bayern/Goretzka.png';
import ndiayePhoto from '../assets/players/bayern/Ndiaye.png';
import musialaPhoto from '../assets/players/bayern/Musiala.png';
import karlPhoto from '../assets/players/bayern/Karl.png';
import guerreiroPhoto from '../assets/players/bayern/Guerreiro.png';
import diazPhoto from '../assets/players/bayern/Diaz.png';
import olisePhoto from '../assets/players/bayern/Olise.png';
import gnabryPhoto from '../assets/players/bayern/Gnabry.png';
import jacksonPhoto from '../assets/players/bayern/Jackson.png';

export type Position = 'GK' | 'DEF' | 'MID' | 'ATT';

export type Player = {
  id: string; // Changed from number to string
  name: string;
  position: Position;
  image?: string;
};

export type Team = {
  name: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  players: Player[];
};

export const teams: Team[] = [
  {
    name: 'Bayern Munich',
    logo: bayernLogo,

    primaryColor: '#dc052d',
    secondaryColor: '#ffffff',

    players: [
      { id: 'DFL-OBJ-000018', name: 'Jonas Urbig', position: 'GK', image: urbigPhoto },
      { id: 'DFL-OBJ-000001', name: 'Manuel Neuer', position: 'GK', image: neuerPhoto },
      { id: 'DFL-OBJ-000009', name: 'Sven Ulreich', position: 'GK', image: ulreichPhoto },
      { id: 'DFL-OBJ-000013', name: 'Leon Klanac', position: 'GK', image: klanacPhoto },

      { id: 'DFL-OBJ-000002', name: 'Dayot Upamecano', position: 'DEF', image: upamecanoPhoto },
      { id: 'DFL-OBJ-000006', name: 'Jonathan Tah', position: 'DEF', image: tahPhoto },
      { id: 'DFL-OBJ-000024', name: 'Kim Min-jae', position: 'DEF', image: kimPhoto },
      { id: 'DFL-OBJ-000008', name: 'Hiroki Ito', position: 'DEF', image: itoPhoto },
      { id: 'DFL-OBJ-000003', name: 'Alphonso Davies', position: 'DEF', image: daviesPhoto },
      { id: 'DFL-OBJ-000010', name: 'Josip Stanisic', position: 'DEF', image: stanisicPhoto },
      { id: 'DFL-OBJ-000011', name: 'Konrad Laimer', position: 'DEF', image: laimerPhoto },

      { id: 'DFL-OBJ-000012', name: 'Aleksandar Pavlovic', position: 'MID', image: pavlovicPhoto },
      { id: 'DFL-OBJ-000004', name: 'Joshua Kimmich', position: 'MID', image: kimmichPhoto },
      { id: 'DFL-OBJ-000014', name: 'David Santos Daiber', position: 'MID', image: daiberPhoto },
      { id: 'DFL-OBJ-000015', name: 'Tom Bischof', position: 'MID', image: bischofPhoto },
      { id: 'DFL-OBJ-000016', name: 'Leon Goretzka', position: 'MID', image: goretzkaPhoto },
      { id: 'DFL-OBJ-000017', name: 'Bara Sapoko Ndiaye', position: 'MID', image: ndiayePhoto },
      { id: 'DFL-OBJ-000005', name: 'Jamal Musiala', position: 'MID', image: musialaPhoto },
      { id: 'DFL-OBJ-000019', name: 'Lennart Karl', position: 'MID', image: karlPhoto },
      { id: 'DFL-OBJ-000020', name: 'Raphaël Guerreiro', position: 'MID', image: guerreiroPhoto },

      { id: 'DFL-OBJ-000021', name: 'Luis Díaz', position: 'ATT', image: diazPhoto },
      { id: 'DFL-OBJ-000022', name: 'Michael Olise', position: 'ATT', image: olisePhoto },
      { id: 'DFL-OBJ-000023', name: 'Serge Gnabry', position: 'ATT', image: gnabryPhoto },
      { id: 'DFL-OBJ-000007', name: 'Harry Kane', position: 'ATT', image: kanePhoto },
      { id: 'DFL-OBJ-000025', name: 'Nicolas Jackson', position: 'ATT', image: jacksonPhoto },
    ],
  },

  {
    name: 'Borussia Dortmund',
    logo: dortmundLogo,

    primaryColor: '#FDE100',
    secondaryColor: '#000000',

    players: [
      { id: 'DFL-OBJ-000026', name: 'Gregor Kobel', position: 'GK' },
      { id: 'DFL-OBJ-000027', name: 'Alexander Meyer', position: 'GK' },
      { id: 'DFL-OBJ-000028', name: 'Patrick Drewes', position: 'GK' },
      { id: 'DFL-OBJ-000029', name: 'Silas Ostrzinski', position: 'GK' },

      { id: 'DFL-OBJ-000030', name: 'Nico Schlotterbeck', position: 'DEF' },
      { id: 'DFL-OBJ-000031', name: 'Waldemar Anton', position: 'DEF' },
      { id: 'DFL-OBJ-000032', name: 'Ramy Bensebaini', position: 'DEF' },
      { id: 'DFL-OBJ-000033', name: 'Luca Reggiani', position: 'DEF' },
      { id: 'DFL-OBJ-000034', name: 'Emre Can', position: 'DEF' },
      { id: 'DFL-OBJ-000035', name: 'Niklas Süle', position: 'DEF' },
      { id: 'DFL-OBJ-000036', name: 'Filippo Mane', position: 'DEF' },
      { id: 'DFL-OBJ-000037', name: 'Daniel Svensson', position: 'DEF' },
      { id: 'DFL-OBJ-000038', name: 'Almugera Kabar', position: 'DEF' },
      { id: 'DFL-OBJ-000039', name: 'Julian Ryerson', position: 'DEF' },

      { id: 'DFL-OBJ-000040', name: 'Salih Özcan', position: 'MID' },
      { id: 'DFL-OBJ-000041', name: 'Felix Nmecha', position: 'MID' },
      { id: 'DFL-OBJ-000042', name: 'Jobe Bellingham', position: 'MID' },
      { id: 'DFL-OBJ-000043', name: 'Carney Chukwuemeka', position: 'MID' },
      { id: 'DFL-OBJ-000044', name: 'Marcel Sabitzer', position: 'MID' },
      { id: 'DFL-OBJ-000045', name: 'Yan Couto', position: 'MID' },
      { id: 'DFL-OBJ-000046', name: 'Julian Brandt', position: 'MID' },

      { id: 'DFL-OBJ-000047', name: 'Karim Adeyemi', position: 'ATT' },
      { id: 'DFL-OBJ-000048', name: 'Samuele Inácio', position: 'ATT' },
      { id: 'DFL-OBJ-000049', name: 'Serhou Guirassy', position: 'ATT' },
      { id: 'DFL-OBJ-000050', name: 'Maximilian Beier', position: 'ATT' },
      { id: 'DFL-OBJ-000051', name: 'Fábio Silva', position: 'ATT' },
    ],
  },

  {
    name: 'Bayer Leverkusen',
    logo: leverkusenLogo,

    primaryColor: '#E32221',
    secondaryColor: '#000000',

    players: [
      { id: 'DFL-OBJ-000052', name: 'Mark Flekken', position: 'GK' },
      { id: 'DFL-OBJ-000053', name: 'Jonas Omlin', position: 'GK' },
      { id: 'DFL-OBJ-000054', name: 'Janis Blaswich', position: 'GK' },
      { id: 'DFL-OBJ-000055', name: 'Niklas Lomb', position: 'GK' },

      { id: 'DFL-OBJ-000056', name: 'Jarell Quansah', position: 'DEF' },
      { id: 'DFL-OBJ-000057', name: 'Edmond Tapsoba', position: 'DEF' },
      { id: 'DFL-OBJ-000058', name: 'Loïc Badé', position: 'DEF' },
      { id: 'DFL-OBJ-000059', name: 'Axel Tape', position: 'DEF' },
      { id: 'DFL-OBJ-000060', name: 'Tim Oermann', position: 'DEF' },
      { id: 'DFL-OBJ-000061', name: 'Issa Traoré', position: 'DEF' },
      { id: 'DFL-OBJ-000062', name: 'Alejandro Grimaldo', position: 'DEF' },
      { id: 'DFL-OBJ-000063', name: 'Arthur', position: 'DEF' },
      { id: 'DFL-OBJ-000064', name: 'Lucas Vázquez', position: 'DEF' },

      { id: 'DFL-OBJ-000065', name: 'Equi Fernández', position: 'MID' },
      { id: 'DFL-OBJ-000066', name: 'Robert Andrich', position: 'MID' },
      { id: 'DFL-OBJ-000067', name: 'Exequiel Palacios', position: 'MID' },
      { id: 'DFL-OBJ-000068', name: 'Aleix García', position: 'MID' },
      { id: 'DFL-OBJ-000069', name: 'Ibrahim Maza', position: 'MID' },
      { id: 'DFL-OBJ-000070', name: 'Malik Tillman', position: 'MID' },
      { id: 'DFL-OBJ-000071', name: 'Jonas Hofmann', position: 'MID' },

      { id: 'DFL-OBJ-000072', name: 'Eliesse Ben Seghir', position: 'ATT' },
      { id: 'DFL-OBJ-000073', name: 'Martin Terrier', position: 'ATT' },
      { id: 'DFL-OBJ-000074', name: 'Ernest Poku', position: 'ATT' },
      { id: 'DFL-OBJ-000075', name: 'Nathan Tella', position: 'ATT' },
      { id: 'DFL-OBJ-000076', name: 'Montrell Culbreath', position: 'ATT' },
      { id: 'DFL-OBJ-000077', name: 'Christian Kofane', position: 'ATT' },
      { id: 'DFL-OBJ-000078', name: 'Patrik Schick', position: 'ATT' },
    ],
  },

  {
    name: 'RB Leipzig',
    logo: leipzigLogo,

    primaryColor: '#E32221',
    secondaryColor: '#FFFFFF',

    players: [
      { id: 'DFL-OBJ-000079', name: 'Peter Gulacsi', position: 'GK' },
      { id: 'DFL-OBJ-000080', name: 'Willi Orban', position: 'DEF' },
      { id: 'DFL-OBJ-000081', name: 'Lutsharel Geertruida', position: 'DEF' },
      { id: 'DFL-OBJ-000082', name: 'Xavi Simons', position: 'MID' },
      { id: 'DFL-OBJ-000083', name: 'Amadou Haidara', position: 'MID' },
      { id: 'DFL-OBJ-000084', name: 'Benjamin Sesko', position: 'ATT' },
      { id: 'DFL-OBJ-000085', name: 'Lois Openda', position: 'ATT' },
    ],
  },

  {
    name: 'Eintracht Frankfurt',
    logo: frankfurtLogo,

    primaryColor: '#E32221',
    secondaryColor: '#FFFFFF',

    players: [
      { id: 'DFL-OBJ-000086', name: 'Kauã Santos', position: 'GK' },
      { id: 'DFL-OBJ-000087', name: 'Michael Zetterer', position: 'GK' },
      { id: 'DFL-OBJ-000088', name: 'Jens Grahl', position: 'GK' },
      { id: 'DFL-OBJ-000089', name: 'Amil Siljevic', position: 'GK' },

      { id: 'DFL-OBJ-000090', name: 'Arthur Theate', position: 'DEF' },
      { id: 'DFL-OBJ-000091', name: 'Nnamdi Collins', position: 'DEF' },
      { id: 'DFL-OBJ-000092', name: 'Robin Koch', position: 'DEF' },
      { id: 'DFL-OBJ-000093', name: 'Aurèle Amenda', position: 'DEF' },
      { id: 'DFL-OBJ-000094', name: 'Nathaniel Brown', position: 'DEF' },
      { id: 'DFL-OBJ-000095', name: 'Keita Kosugi', position: 'DEF' },
      { id: 'DFL-OBJ-000096', name: 'Rasmus Kristensen', position: 'DEF' },
      { id: 'DFL-OBJ-000097', name: 'Elias Baum', position: 'DEF' },
      { id: 'DFL-OBJ-000098', name: 'Timothy Chandler', position: 'DEF' },

      { id: 'DFL-OBJ-000099', name: 'Ellyes Skhiri', position: 'MID' },
      { id: 'DFL-OBJ-000100', name: 'Hugo Larsson', position: 'MID' },
      { id: 'DFL-OBJ-000101', name: 'Oscar Højlund', position: 'MID' },
      { id: 'DFL-OBJ-000102', name: 'Mahmoud Dahoud', position: 'MID' },
      { id: 'DFL-OBJ-000103', name: 'Can Uzun', position: 'MID' },
      { id: 'DFL-OBJ-000104', name: 'Farès Chaïbi', position: 'MID' },
      { id: 'DFL-OBJ-000105', name: 'Love Arrhov', position: 'MID' },
      { id: 'DFL-OBJ-000106', name: 'Mario Götze', position: 'MID' },

      { id: 'DFL-OBJ-000107', name: 'Jean-Mattéo Bahoya', position: 'ATT' },
      { id: 'DFL-OBJ-000108', name: 'Ritsu Doan', position: 'ATT' },
      { id: 'DFL-OBJ-000109', name: 'Ansgar Knauff', position: 'ATT' },
      { id: 'DFL-OBJ-000110', name: 'Ayoub Amainiouni-Echghouyab', position: 'ATT' },
      { id: 'DFL-OBJ-000111', name: 'Jonathan Burkardt', position: 'ATT' },
      { id: 'DFL-OBJ-000112', name: 'Arnaud Kalimuendo', position: 'ATT' },
      { id: 'DFL-OBJ-000113', name: 'Younes Ebnoutalib', position: 'ATT' },
      { id: 'DFL-OBJ-000114', name: 'Michy Batshuayi', position: 'ATT' },
    ],
  },
  {
    name: 'SC Freiburg',
    logo: freiburgLogo,

    primaryColor: '#d50032',
    secondaryColor: '#ffffff',

    players: [
      { id: 'DFL-OBJ-000115', name: 'Noah Atubolu', position: 'GK' },
      { id: 'DFL-OBJ-000116', name: 'Florian Müller', position: 'GK' },
      { id: 'DFL-OBJ-000117', name: 'Jannik Huth', position: 'GK' },

      { id: 'DFL-OBJ-000118', name: 'Philipp Lienhart', position: 'DEF' },
      { id: 'DFL-OBJ-000119', name: 'Bruno Ogbus', position: 'DEF' },
      { id: 'DFL-OBJ-000120', name: 'Matthias Ginter', position: 'DEF' },
      { id: 'DFL-OBJ-000121', name: 'Max Rosenfelder', position: 'DEF' },
      { id: 'DFL-OBJ-000122', name: 'Anthony Jung', position: 'DEF' },
      { id: 'DFL-OBJ-000123', name: 'Jordy Makengo', position: 'DEF' },
      { id: 'DFL-OBJ-000124', name: 'Christian Günter', position: 'DEF' },
      { id: 'DFL-OBJ-000125', name: 'Philipp Treu', position: 'DEF' },
      { id: 'DFL-OBJ-000126', name: 'Lukas Kübler', position: 'DEF' },

      { id: 'DFL-OBJ-000127', name: 'Patrick Osterhage', position: 'MID' },
      { id: 'DFL-OBJ-000128', name: 'Nicolas Höfler', position: 'MID' },
      { id: 'DFL-OBJ-000129', name: 'Johan Manzambi', position: 'MID' },
      { id: 'DFL-OBJ-000130', name: 'Maximilian Eggestein', position: 'MID' },
      { id: 'DFL-OBJ-000131', name: 'Daniel-Kofi Kyereh', position: 'MID' },

      { id: 'DFL-OBJ-000132', name: 'Derry Scherhant', position: 'ATT' },
      { id: 'DFL-OBJ-000133', name: 'Vincenzo Grifo', position: 'ATT' },
      { id: 'DFL-OBJ-000134', name: 'Cyriac Iríe', position: 'ATT' },
      { id: 'DFL-OBJ-000135', name: 'Niklas Beste', position: 'ATT' },
      { id: 'DFL-OBJ-000136', name: 'Yuito Suzuki', position: 'ATT' },
      { id: 'DFL-OBJ-000137', name: 'Maximilian Philipp', position: 'ATT' },
      { id: 'DFL-OBJ-000138', name: 'Igor Matanovic', position: 'ATT' },
      { id: 'DFL-OBJ-000139', name: 'Lucas Höler', position: 'ATT' },
    ],
  },
  {
    name: 'Mainz 05',
    logo: mainzLogo,

    primaryColor: '#c8102e',
    secondaryColor: '#ffffff',

    players: [
      { id: 'DFL-OBJ-000140', name: 'Robin Zentner', position: 'GK' },
      { id: 'DFL-OBJ-000141', name: 'Lasse Riß', position: 'GK' },
      { id: 'DFL-OBJ-000142', name: 'Daniel Batz', position: 'GK' },

      { id: 'DFL-OBJ-000143', name: 'Kacper Potulski', position: 'DEF' },
      { id: 'DFL-OBJ-000144', name: 'Stefan Posch', position: 'DEF' },
      { id: 'DFL-OBJ-000145', name: 'Andreas Hanche-Olsen', position: 'DEF' },
      { id: 'DFL-OBJ-000146', name: 'Dominik Kohr', position: 'DEF' },
      { id: 'DFL-OBJ-000147', name: 'Danny da Costa', position: 'DEF' },
      { id: 'DFL-OBJ-000148', name: 'Maxim Leitsch', position: 'DEF' },
      { id: 'DFL-OBJ-000149', name: 'Stefan Bell', position: 'DEF' },
      { id: 'DFL-OBJ-000150', name: 'Maxim Dal', position: 'DEF' },
      { id: 'DFL-OBJ-000151', name: 'Philipp Mwene', position: 'DEF' },
      { id: 'DFL-OBJ-000152', name: 'Kasey Bos', position: 'DEF' },
      { id: 'DFL-OBJ-000153', name: 'Anthony Caci', position: 'DEF' },
      { id: 'DFL-OBJ-000154', name: 'Silvan Widmer', position: 'DEF' },

      { id: 'DFL-OBJ-000155', name: 'Kaishu Sano', position: 'MID' },
      { id: 'DFL-OBJ-000156', name: 'Lennard Maloney', position: 'MID' },
      { id: 'DFL-OBJ-000157', name: 'Sota Kawasaki', position: 'MID' },
      { id: 'DFL-OBJ-000158', name: 'Niklas Tauer', position: 'MID' },
      { id: 'DFL-OBJ-000159', name: 'Nadiem Amiri', position: 'MID' },
      { id: 'DFL-OBJ-000160', name: 'Daniel Gleiber', position: 'MID' },
      { id: 'DFL-OBJ-000161', name: 'Nikolas Veratschnig', position: 'MID' },
      { id: 'DFL-OBJ-000162', name: 'Paul Nebel', position: 'MID' },
      { id: 'DFL-OBJ-000163', name: 'Jae-sung Lee', position: 'MID' },

      { id: 'DFL-OBJ-000164', name: 'Sheraldo Becker', position: 'ATT' },
      { id: 'DFL-OBJ-000165', name: 'Silas', position: 'ATT' },
      { id: 'DFL-OBJ-000166', name: 'Armindo Sieb', position: 'ATT' },
      { id: 'DFL-OBJ-000167', name: 'Nelson Weiper', position: 'ATT' },
      { id: 'DFL-OBJ-000168', name: 'Benedict Hollerbach', position: 'ATT' },
      { id: 'DFL-OBJ-000169', name: 'William Bøving', position: 'ATT' },
      { id: 'DFL-OBJ-000170', name: 'Philipp Tietz', position: 'ATT' },
    ],
  },
  {
    name: 'RB Leipzig',
    logo: leipzigLogo,

    primaryColor: '#dd0130',
    secondaryColor: '#ffffff',

    players: [
      { id: 'DFL-OBJ-000171', name: 'Maarten Vandevoordt', position: 'GK' },
      { id: 'DFL-OBJ-000172', name: 'Péter Gulácsi', position: 'GK' },
      { id: 'DFL-OBJ-000173', name: 'Leopold Zingerle', position: 'GK' },

      { id: 'DFL-OBJ-000174', name: 'Castello Lukeba', position: 'DEF' },
      { id: 'DFL-OBJ-000175', name: 'El Chadaille Bitshiabu', position: 'DEF' },
      { id: 'DFL-OBJ-000176', name: 'Willi Orbán', position: 'DEF' },
      { id: 'DFL-OBJ-000177', name: 'Lukas Klostermann', position: 'DEF' },
      { id: 'DFL-OBJ-000178', name: 'David Raum', position: 'DEF' },
      { id: 'DFL-OBJ-000179', name: 'Max Finkgräfe', position: 'DEF' },
      { id: 'DFL-OBJ-000180', name: 'Ridle Baku', position: 'DEF' },
      { id: 'DFL-OBJ-000181', name: 'Benjamin Henrichs', position: 'DEF' },
      { id: 'DFL-OBJ-000182', name: 'Kosta Nedeljkovic', position: 'DEF' },

      { id: 'DFL-OBJ-000183', name: 'Nicolas Seiwald', position: 'MID' },
      { id: 'DFL-OBJ-000184', name: 'Benno Kaltfelter', position: 'MID' },
      { id: 'DFL-OBJ-000185', name: 'Assan Ouédraogo', position: 'MID' },
      { id: 'DFL-OBJ-000186', name: 'Ezechiel Banzuzi', position: 'MID' },
      { id: 'DFL-OBJ-000187', name: 'Xaver Schlager', position: 'MID' },
      { id: 'DFL-OBJ-000188', name: 'Christoph Baumgartner', position: 'MID' },
      { id: 'DFL-OBJ-000189', name: 'Brajan Gruda', position: 'MID' },
      { id: 'DFL-OBJ-000190', name: 'Andrija Maksimovic', position: 'MID' },
      { id: 'DFL-OBJ-000191', name: 'Viggo Gebel', position: 'MID' },

      { id: 'DFL-OBJ-000192', name: 'Van Diomande', position: 'ATT' },
      { id: 'DFL-OBJ-000193', name: 'Antonio Nusa', position: 'ATT' },
      { id: 'DFL-OBJ-000194', name: 'Suleman Sani', position: 'ATT' },
      { id: 'DFL-OBJ-000195', name: 'Tidiam Gomis', position: 'ATT' },
      { id: 'DFL-OBJ-000196', name: 'Ayodele Thomas', position: 'ATT' },
      { id: 'DFL-OBJ-000197', name: 'Johan Bakayoko', position: 'ATT' },
      { id: 'DFL-OBJ-000198', name: 'Rômulo', position: 'ATT' },
      { id: 'DFL-OBJ-000199', name: 'Conrad Harder', position: 'ATT' },
      { id: 'DFL-OBJ-000200', name: 'Samba Konaté', position: 'ATT' },
    ],
  },
  {
    name: 'Werder Bremen',
    logo: bremenLogo,

    primaryColor: '#008f39',
    secondaryColor: '#ffffff',

    players: [
      { id: 'DFL-OBJ-000201', name: 'Mio Backhaus', position: 'GK' },
      { id: 'DFL-OBJ-000202', name: 'Karl Hein', position: 'GK' },
      { id: 'DFL-OBJ-000203', name: 'Markus Kolke', position: 'GK' },
      { id: 'DFL-OBJ-000204', name: 'Stefan Smarkalev', position: 'GK' },

      { id: 'DFL-OBJ-000205', name: 'Karim Coulibaly', position: 'DEF' },
      { id: 'DFL-OBJ-000206', name: 'Marco Friedl', position: 'DEF' },
      { id: 'DFL-OBJ-000207', name: 'Amos Pieper', position: 'DEF' },
      { id: 'DFL-OBJ-000208', name: 'Niklas Stark', position: 'DEF' },
      { id: 'DFL-OBJ-000209', name: 'Maximilian Wöber', position: 'DEF' },
      { id: 'DFL-OBJ-000210', name: 'Julián Malatini', position: 'DEF' },
      { id: 'DFL-OBJ-000211', name: 'Mick Schmtegens', position: 'DEF' },
      { id: 'DFL-OBJ-000212', name: 'Felix Agu', position: 'DEF' },
      { id: 'DFL-OBJ-000213', name: 'Olivier Deman', position: 'DEF' },
      { id: 'DFL-OBJ-000214', name: 'Isaac Schmidt', position: 'DEF' },
      { id: 'DFL-OBJ-000215', name: 'Yukinari Sugawara', position: 'DEF' },
      { id: 'DFL-OBJ-000216', name: 'Mitchell Weiser', position: 'DEF' },

      { id: 'DFL-OBJ-000217', name: 'Senne Lynen', position: 'MID' },
      { id: 'DFL-OBJ-000218', name: 'Wesley Adeh', position: 'MID' },
      { id: 'DFL-OBJ-000219', name: 'Jens Stage', position: 'MID' },
      { id: 'DFL-OBJ-000220', name: 'Cameron Puertas', position: 'MID' },
      { id: 'DFL-OBJ-000221', name: 'Leonardo Bittencourt', position: 'MID' },
      { id: 'DFL-OBJ-000222', name: 'Romano Schmid', position: 'MID' },
      { id: 'DFL-OBJ-000223', name: 'Patrice Covic', position: 'MID' },

      { id: 'DFL-OBJ-000224', name: 'Samuel Mbangula', position: 'ATT' },
      { id: 'DFL-OBJ-000225', name: 'Marco Grüll', position: 'ATT' },
      { id: 'DFL-OBJ-000226', name: 'Justin Njinmah', position: 'ATT' },
      { id: 'DFL-OBJ-000227', name: 'Jovan Milosevic', position: 'ATT' },
      { id: 'DFL-OBJ-000228', name: 'Victor Boniface', position: 'ATT' },
      { id: 'DFL-OBJ-000229', name: 'Keke Topp', position: 'ATT' },
      { id: 'DFL-OBJ-000230', name: 'Salim Musah', position: 'ATT' },
    ],
  },
  {
    name: 'VfB Stuttgart',
    logo: stuttgartLogo,

    primaryColor: '#ffffff',
    secondaryColor: '#d50032',

    players: [
      { id: 'DFL-OBJ-000231', name: 'Alexander Nübel', position: 'GK' },
      { id: 'DFL-OBJ-000232', name: 'Florian Hellstern', position: 'GK' },
      { id: 'DFL-OBJ-000233', name: 'Fabian Bredlow', position: 'GK' },
      { id: 'DFL-OBJ-000234', name: 'Stefan Drljaca', position: 'GK' },

      { id: 'DFL-OBJ-000235', name: 'Finn Jeltsch', position: 'DEF' },
      { id: 'DFL-OBJ-000236', name: 'Ramon Hendriks', position: 'DEF' },
      { id: 'DFL-OBJ-000237', name: 'Jeff Chabot', position: 'DEF' },
      { id: 'DFL-OBJ-000238', name: 'Luca Jaquez', position: 'DEF' },
      { id: 'DFL-OBJ-000239', name: 'Ameen Al-Dakhil', position: 'DEF' },
      { id: 'DFL-OBJ-000240', name: 'Dan-Axel Zagadou', position: 'DEF' },
      { id: 'DFL-OBJ-000241', name: 'Maximilian Mittelstädt', position: 'DEF' },
      { id: 'DFL-OBJ-000242', name: 'Josh Vagnoman', position: 'DEF' },
      { id: 'DFL-OBJ-000243', name: 'Lorenz Assignon', position: 'DEF' },
      { id: 'DFL-OBJ-000244', name: 'Pascal Stenzel', position: 'DEF' },

      { id: 'DFL-OBJ-000245', name: 'Angelo Stiller', position: 'MID' },
      { id: 'DFL-OBJ-000246', name: 'Chema Andrés', position: 'MID' },
      { id: 'DFL-OBJ-000247', name: 'Atakan Karazor', position: 'MID' },
      { id: 'DFL-OBJ-000248', name: 'Mirza Catovic', position: 'MID' },
      { id: 'DFL-OBJ-000249', name: 'Nikolas Nartey', position: 'MID' },
      { id: 'DFL-OBJ-000250', name: 'Bilal El Khannouss', position: 'MID' },

      { id: 'DFL-OBJ-000251', name: 'Chris Führich', position: 'ATT' },
      { id: 'DFL-OBJ-000252', name: 'Justin Diehl', position: 'ATT' },
      { id: 'DFL-OBJ-000253', name: 'Jamie Leweling', position: 'ATT' },
      { id: 'DFL-OBJ-000254', name: 'Tiago Tomás', position: 'ATT' },
      { id: 'DFL-OBJ-000255', name: 'Badredine Bouanani', position: 'ATT' },
      { id: 'DFL-OBJ-000256', name: 'Lazar Jovanovic', position: 'ATT' },
      { id: 'DFL-OBJ-000257', name: 'Noah Darvich', position: 'ATT' },
      { id: 'DFL-OBJ-000258', name: 'Ermedin Demirovic', position: 'ATT' },
      { id: 'DFL-OBJ-000259', name: 'Deniz Undav', position: 'ATT' },
      { id: 'DFL-OBJ-000260', name: 'Jeremy Arévalo', position: 'ATT' },
    ],
  },
  {
    name: 'Borussia Mönchengladbach',
    logo: gladbachLogo,

    primaryColor: '#000000',
    secondaryColor: '#ffffff',

    players: [
      { id: 'DFL-OBJ-000261', name: 'Moritz Nicolas', position: 'GK' },
      { id: 'DFL-OBJ-000262', name: 'Tiago Pereira Cardoso', position: 'GK' },
      { id: 'DFL-OBJ-000263', name: 'Jan Olschowsky', position: 'GK' },
      { id: 'DFL-OBJ-000264', name: 'Tobias Sippel', position: 'GK' },

      { id: 'DFL-OBJ-000265', name: 'Nico Elvedi', position: 'DEF' },
      { id: 'DFL-OBJ-000266', name: 'Kevin Diks', position: 'DEF' },
      { id: 'DFL-OBJ-000267', name: 'Kota Takai', position: 'DEF' },
      { id: 'DFL-OBJ-000268', name: 'Fabio Chiarodia', position: 'DEF' },
      { id: 'DFL-OBJ-000269', name: 'Marvin Friedrich', position: 'DEF' },
      { id: 'DFL-OBJ-000270', name: 'Lukas Ullrich', position: 'DEF' },
      { id: 'DFL-OBJ-000271', name: 'Joe Scally', position: 'DEF' },

      { id: 'DFL-OBJ-000272', name: 'Yannick Engelhardt', position: 'MID' },
      { id: 'DFL-OBJ-000273', name: 'Philipp Sander', position: 'MID' },
      { id: 'DFL-OBJ-000274', name: 'Niklas Swider', position: 'MID' },
      { id: 'DFL-OBJ-000275', name: 'Rocco Reitz', position: 'MID' },
      { id: 'DFL-OBJ-000276', name: 'Jens Castrop', position: 'MID' },
      { id: 'DFL-OBJ-000277', name: 'Florian Neuhaus', position: 'MID' },
      { id: 'DFL-OBJ-000278', name: 'Wael Mohya', position: 'MID' },
      { id: 'DFL-OBJ-000279', name: 'Giovanni Reyna', position: 'MID' },
      { id: 'DFL-OBJ-000280', name: 'Kevin Stöger', position: 'MID' },

      { id: 'DFL-OBJ-000281', name: 'Robin Hack', position: 'ATT' },
      { id: 'DFL-OBJ-000282', name: 'Hugo Bolin', position: 'ATT' },
      { id: 'DFL-OBJ-000283', name: 'Franck Honorat', position: 'ATT' },
      { id: 'DFL-OBJ-000284', name: 'Nathan Ngoumou', position: 'ATT' },
      { id: 'DFL-OBJ-000285', name: 'Tim Kleindienst', position: 'ATT' },
      { id: 'DFL-OBJ-000286', name: 'Shuto Machino', position: 'ATT' },
      { id: 'DFL-OBJ-000287', name: 'Haris Tabakovic', position: 'ATT' },
      { id: 'DFL-OBJ-000288', name: 'Alejo Sarco', position: 'ATT' },
    ],
  },
  {
    name: 'Wolfsburg',
    logo: wolfsburgLogo,

    primaryColor: '#65b32e',
    secondaryColor: '#ffffff',

    players: [
      { id: 'DFL-OBJ-000289', name: 'Kamil Grabara', position: 'GK' },
      { id: 'DFL-OBJ-000290', name: 'Marius Müller', position: 'GK' },
      { id: 'DFL-OBJ-000291', name: 'Jakub Zielinski', position: 'GK' },
      { id: 'DFL-OBJ-000292', name: 'Pavao Pervan', position: 'GK' },

      { id: 'DFL-OBJ-000293', name: 'Konstantinos Koulierakis', position: 'DEF' },
      { id: 'DFL-OBJ-000294', name: 'Jaunel Belocian', position: 'DEF' },
      { id: 'DFL-OBJ-000295', name: 'Jonas Adjetey', position: 'DEF' },
      { id: 'DFL-OBJ-000296', name: 'Denis Vavro', position: 'DEF' },
      { id: 'DFL-OBJ-000297', name: 'Jens Seelt', position: 'DEF' },
      { id: 'DFL-OBJ-000298', name: 'Moritz Jenz', position: 'DEF' },
      { id: 'DFL-OBJ-000299', name: 'Cleyton', position: 'DEF' },
      { id: 'DFL-OBJ-000300', name: 'Joakim Mæhle', position: 'DEF' },
      { id: 'DFL-OBJ-000301', name: 'Aaron Zehnter', position: 'DEF' },
      { id: 'DFL-OBJ-000302', name: 'Rogério', position: 'DEF' },
      { id: 'DFL-OBJ-000303', name: 'Saël Kumbedi', position: 'DEF' },
      { id: 'DFL-OBJ-000304', name: 'Kilian Fischer', position: 'DEF' },
      { id: 'DFL-OBJ-000305', name: 'Jan Bürger', position: 'DEF' },

      { id: 'DFL-OBJ-000306', name: 'Vini Souza', position: 'MID' },
      { id: 'DFL-OBJ-000307', name: 'Mattias Svanberg', position: 'MID' },
      { id: 'DFL-OBJ-000308', name: 'Maximilian Arnold', position: 'MID' },
      { id: 'DFL-OBJ-000309', name: 'Pharell Hensel', position: 'MID' },
      { id: 'DFL-OBJ-000310', name: 'Yannick Gerhardt', position: 'MID' },
      { id: 'DFL-OBJ-000311', name: 'Kevin Paredes', position: 'MID' },
      { id: 'DFL-OBJ-000312', name: 'Lovro Majer', position: 'MID' },
      { id: 'DFL-OBJ-000313', name: 'Bence Dárdai', position: 'MID' },
      { id: 'DFL-OBJ-000314', name: 'Christian Eriksen', position: 'MID' },

      { id: 'DFL-OBJ-000315', name: 'Patrick Wimmer', position: 'ATT' },
      { id: 'DFL-OBJ-000316', name: 'Adam Daghim', position: 'ATT' },
      { id: 'DFL-OBJ-000317', name: 'Jesper Lindstrøm', position: 'ATT' },
      { id: 'DFL-OBJ-000318', name: 'Mohamed Amoura', position: 'ATT' },
      { id: 'DFL-OBJ-000319', name: 'Dzenan Pejcinovic', position: 'ATT' },
      { id: 'DFL-OBJ-000320', name: 'Kento Shiogai', position: 'ATT' },
      { id: 'DFL-OBJ-000321', name: 'Jonas Wind', position: 'ATT' },
    ],
  },
  {
    name: 'FC Augsburg',
    logo: augsburgLogo,

    primaryColor: '#ba0c2f',
    secondaryColor: '#ffffff',

    players: [
      { id: 'DFL-OBJ-000322', name: 'Finn Dahmen', position: 'GK' },
      { id: 'DFL-OBJ-000323', name: 'Nediljko Labrovic', position: 'GK' },
      { id: 'DFL-OBJ-000324', name: 'Daniel Klein', position: 'GK' },

      { id: 'DFL-OBJ-000325', name: 'Chrislain Matsima', position: 'DEF' },
      { id: 'DFL-OBJ-000326', name: 'Noahkai Banks', position: 'DEF' },
      { id: 'DFL-OBJ-000327', name: 'Keven Schlotterbeck', position: 'DEF' },
      { id: 'DFL-OBJ-000328', name: 'Cédric Zesiger', position: 'DEF' },
      { id: 'DFL-OBJ-000329', name: 'Arthur Chaves', position: 'DEF' },
      { id: 'DFL-OBJ-000330', name: 'Jeffrey Gouweleeuw', position: 'DEF' },
      { id: 'DFL-OBJ-000331', name: 'Felix Meiser', position: 'DEF' },
      { id: 'DFL-OBJ-000332', name: 'Dimitrios Giannoulis', position: 'DEF' },
      { id: 'DFL-OBJ-000333', name: 'Mads Pedersen', position: 'DEF' },
      { id: 'DFL-OBJ-000334', name: 'Oliver Sorg', position: 'DEF' },
      { id: 'DFL-OBJ-000335', name: 'Marius Wolf', position: 'DEF' },

      { id: 'DFL-OBJ-000336', name: 'Kristijan Jakic', position: 'MID' },
      { id: 'DFL-OBJ-000337', name: 'Robin Fellhauer', position: 'MID' },
      { id: 'DFL-OBJ-000338', name: 'Yannik Keitel', position: 'MID' },
      { id: 'DFL-OBJ-000339', name: 'Mahmut Kücüksahin', position: 'MID' },
      { id: 'DFL-OBJ-000340', name: 'Han-Noah Massengo', position: 'MID' },
      { id: 'DFL-OBJ-000341', name: 'Elvis Rexhbecaj', position: 'MID' },
      { id: 'DFL-OBJ-000342', name: 'Anton Kade', position: 'MID' },
      { id: 'DFL-OBJ-000343', name: 'Alexis Claude-Maurice', position: 'MID' },
      { id: 'DFL-OBJ-000344', name: 'Mert Kömür', position: 'MID' },
      { id: 'DFL-OBJ-000345', name: 'Fabian Rieder', position: 'MID' },

      { id: 'DFL-OBJ-000346', name: 'Ismaël Gharbi', position: 'ATT' },
      { id: 'DFL-OBJ-000347', name: 'Rodrigo Ribeiro', position: 'ATT' },
      { id: 'DFL-OBJ-000348', name: 'Uchenna Ogundu', position: 'ATT' },
      { id: 'DFL-OBJ-000349', name: 'Michael Gregoritsch', position: 'ATT' },
      { id: 'DFL-OBJ-000350', name: 'Thomas Kastanaras', position: 'ATT' },
    ],
  },
  {
    name: 'Union Berlin',
    logo: unionLogo,

    primaryColor: '#d0021b',
    secondaryColor: '#ffffff',

    players: [
      { id: 'DFL-OBJ-000351', name: 'Frederik Rønnow', position: 'GK' },
      { id: 'DFL-OBJ-000352', name: 'Matheo Raab', position: 'GK' },
      { id: 'DFL-OBJ-000353', name: 'Carl Klaus', position: 'GK' },

      { id: 'DFL-OBJ-000354', name: 'Leopold Querfeld', position: 'DEF' },
      { id: 'DFL-OBJ-000355', name: 'Danilho Doekhi', position: 'DEF' },
      { id: 'DFL-OBJ-000356', name: 'Diogo Leite', position: 'DEF' },
      { id: 'DFL-OBJ-000357', name: 'Stanley Nsoki', position: 'DEF' },
      { id: 'DFL-OBJ-000358', name: 'Tom Rothe', position: 'DEF' },
      { id: 'DFL-OBJ-000359', name: 'Derrick Köhn', position: 'DEF' },
      { id: 'DFL-OBJ-000360', name: 'Andrik Markgraf', position: 'DEF' },
      { id: 'DFL-OBJ-000361', name: 'Josip Juranovic', position: 'DEF' },
      { id: 'DFL-OBJ-000362', name: 'Christopher Trimmel', position: 'DEF' },

      { id: 'DFL-OBJ-000363', name: 'Aljoscha Kemlein', position: 'MID' },
      { id: 'DFL-OBJ-000364', name: 'Rani Khedira', position: 'MID' },
      { id: 'DFL-OBJ-000365', name: 'András Schäfer', position: 'MID' },
      { id: 'DFL-OBJ-000366', name: 'Janik Haberer', position: 'MID' },
      { id: 'DFL-OBJ-000367', name: 'Alex Král', position: 'MID' },
      { id: 'DFL-OBJ-000368', name: 'Robert Skov', position: 'MID' },
      { id: 'DFL-OBJ-000369', name: 'Woo-yeong Jeong', position: 'MID' },

      { id: 'DFL-OBJ-000370', name: 'Livan Burcu', position: 'ATT' },
      { id: 'DFL-OBJ-000371', name: 'David Preu', position: 'ATT' },
      { id: 'DFL-OBJ-000372', name: 'Ilyas Ansah', position: 'ATT' },
      { id: 'DFL-OBJ-000373', name: 'Andrej Ilic', position: 'ATT' },
      { id: 'DFL-OBJ-000374', name: 'Oliver Burke', position: 'ATT' },
      { id: 'DFL-OBJ-000375', name: 'Tim Skarke', position: 'ATT' },
      { id: 'DFL-OBJ-000376', name: 'Dmytro Bogdanov', position: 'ATT' },
    ],
  },
  {
    name: 'FC St. Pauli',
    logo: stpauliLogo,

    primaryColor: '#5a2a27',
    secondaryColor: '#ffffff',

    players: [
      { id: 'DFL-OBJ-000377', name: 'Nikola Vasilj', position: 'GK' },
      { id: 'DFL-OBJ-000378', name: 'Ben Voll', position: 'GK' },
      { id: 'DFL-OBJ-000379', name: 'Simon Spari', position: 'GK' },
      { id: 'DFL-OBJ-000380', name: 'Emil Gazdov', position: 'GK' },

      { id: 'DFL-OBJ-000381', name: 'Eric Smith', position: 'DEF' },
      { id: 'DFL-OBJ-000382', name: 'David Nemeth', position: 'DEF' },
      { id: 'DFL-OBJ-000383', name: 'Tomoya Ando', position: 'DEF' },
      { id: 'DFL-OBJ-000384', name: 'Hauke Wahl', position: 'DEF' },
      { id: 'DFL-OBJ-000385', name: 'Adam Dzwigala', position: 'DEF' },
      { id: 'DFL-OBJ-000386', name: 'Karol Mets', position: 'DEF' },
      { id: 'DFL-OBJ-000387', name: 'Jannik Robatsch', position: 'DEF' },
      { id: 'DFL-OBJ-000388', name: 'Louis Oppie', position: 'DEF' },
      { id: 'DFL-OBJ-000389', name: 'Lars Ritzka', position: 'DEF' },
      { id: 'DFL-OBJ-000390', name: 'Arkadiusz Pyrka', position: 'DEF' },
      { id: 'DFL-OBJ-000391', name: 'Manolis Saliakas', position: 'DEF' },
      { id: 'DFL-OBJ-000392', name: 'Fin Stevens', position: 'DEF' },

      { id: 'DFL-OBJ-000393', name: 'James Sands', position: 'MID' },
      { id: 'DFL-OBJ-000394', name: 'Marwin Schmitz', position: 'MID' },
      { id: 'DFL-OBJ-000395', name: 'Joel Chima Fujita', position: 'MID' },
      { id: 'DFL-OBJ-000396', name: 'Mathias Rasmussen', position: 'MID' },
      { id: 'DFL-OBJ-000397', name: 'Connor Metcalfe', position: 'MID' },
      { id: 'DFL-OBJ-000398', name: 'Jackson Irvine', position: 'MID' },
      { id: 'DFL-OBJ-000399', name: 'Nick Schmidt', position: 'MID' },
      { id: 'DFL-OBJ-000400', name: 'Daniel Sinani', position: 'MID' },

      { id: 'DFL-OBJ-000401', name: 'Mathias Pereira Lage', position: 'ATT' },
      { id: 'DFL-OBJ-000402', name: 'Andréas Hountondji', position: 'ATT' },
      { id: 'DFL-OBJ-000403', name: 'Martijn Kaars', position: 'ATT' },
      { id: 'DFL-OBJ-000404', name: 'Taichi Hara', position: 'ATT' },
      { id: 'DFL-OBJ-000405', name: 'Ricky-Jade Jones', position: 'ATT' },
      { id: 'DFL-OBJ-000406', name: 'Abdoulie Ceesay', position: 'ATT' },
    ],
  },
  {
    name: 'TSG Hoffenheim',
    logo: hoffenheimLogo,

    primaryColor: '#005aa9',
    secondaryColor: '#ffffff',

    players: [
      { id: 'DFL-OBJ-000407', name: 'Oliver Baumann', position: 'GK' },
      { id: 'DFL-OBJ-000408', name: 'Luca Philipp', position: 'GK' },
      { id: 'DFL-OBJ-000409', name: 'Lúkas Petersson', position: 'GK' },

      { id: 'DFL-OBJ-000410', name: 'Albian Hajdari', position: 'DEF' },
      { id: 'DFL-OBJ-000411', name: 'Robin Hranac', position: 'DEF' },
      { id: 'DFL-OBJ-000412', name: 'Ozan Kabak', position: 'DEF' },
      { id: 'DFL-OBJ-000413', name: 'Koki Machida', position: 'DEF' },
      { id: 'DFL-OBJ-000414', name: 'Kevin Akpoguma', position: 'DEF' },
      { id: 'DFL-OBJ-000415', name: 'Kleven Frees', position: 'DEF' },
      { id: 'DFL-OBJ-000416', name: 'Bernardo', position: 'DEF' },
      { id: 'DFL-OBJ-000417', name: 'Valentin Gendrey', position: 'DEF' },
      { id: 'DFL-OBJ-000418', name: 'Vladimír Coufal', position: 'DEF' },

      { id: 'DFL-OBJ-000419', name: 'Leon Abdullahu', position: 'MID' },
      { id: 'DFL-OBJ-000420', name: 'Wouter Burger', position: 'MID' },
      { id: 'DFL-OBJ-000421', name: 'Luis Engels', position: 'MID' },
      { id: 'DFL-OBJ-000422', name: 'Grischa Prömel', position: 'MID' },
      { id: 'DFL-OBJ-000423', name: 'Luka Duric', position: 'MID' },
      { id: 'DFL-OBJ-000424', name: 'Alexander Prass', position: 'MID' },
      { id: 'DFL-OBJ-000425', name: 'Muhammed Damar', position: 'MID' },
      { id: 'DFL-OBJ-000426', name: 'Andrej Kramaric', position: 'MID' },

      { id: 'DFL-OBJ-000427', name: 'Bazoumana Touré', position: 'ATT' },
      { id: 'DFL-OBJ-000428', name: 'Cole Campbell', position: 'ATT' },
      { id: 'DFL-OBJ-000429', name: 'Fisnik Asllani', position: 'ATT' },
      { id: 'DFL-OBJ-000430', name: 'Tim Lemperle', position: 'ATT' },
      { id: 'DFL-OBJ-000431', name: 'Adam Hlozek', position: 'ATT' },
      { id: 'DFL-OBJ-000432', name: 'Max Moerstedt', position: 'ATT' },
      { id: 'DFL-OBJ-000433', name: 'Yannick Eduardo', position: 'ATT' },
      { id: 'DFL-OBJ-000434', name: 'Deniz Zeitler', position: 'ATT' }
    ],
  },
{
    name: '1. FC Heidenheim',
    logo: heidenheimLogo,

    primaryColor: '#e2001a',
    secondaryColor: '#ffffff',

    players: [
      { id: 'DFL-OBJ-000435', name: 'Kevin Müller', position: 'GK' },
      { id: 'DFL-OBJ-000436', name: 'Vitus Eicher', position: 'GK' },
      { id: 'DFL-OBJ-000437', name: 'Paul Tschernuth', position: 'GK' },

      { id: 'DFL-OBJ-000438', name: 'Patrick Mainka', position: 'DEF' },
      { id: 'DFL-OBJ-000439', name: 'Tim Siersleben', position: 'DEF' },
      { id: 'DFL-OBJ-000440', name: 'Marnon Busch', position: 'DEF' },
      { id: 'DFL-OBJ-000441', name: 'Jonas Föhrenbach', position: 'DEF' },
      { id: 'DFL-OBJ-000442', name: 'Norman Theuerkauf', position: 'DEF' },
      { id: 'DFL-OBJ-000443', name: 'Seedy Jarju', position: 'DEF' },

      { id: 'DFL-OBJ-000444', name: 'Jan Schöppner', position: 'MID' },
      { id: 'DFL-OBJ-000445', name: 'Adrian Beck', position: 'MID' },
      { id: 'DFL-OBJ-000446', name: 'Luka Janeš', position: 'MID' },
      { id: 'DFL-OBJ-000447', name: 'Thomas Keller', position: 'MID' },
      { id: 'DFL-OBJ-000448', name: 'Julian Niehues', position: 'MID' },

      { id: 'DFL-OBJ-000449', name: 'Marvin Pieringer', position: 'ATT' },
      { id: 'DFL-OBJ-000450', name: 'Denis Thomalla', position: 'ATT' },
      { id: 'DFL-OBJ-000451', name: 'Stefan Schimmer', position: 'ATT' },
      { id: 'DFL-OBJ-000452', name: 'Mikkel Kaufmann', position: 'ATT' },
      { id: 'DFL-OBJ-000453', name: 'Mathias Honsak', position: 'ATT' },
      { id: 'DFL-OBJ-000454', name: 'Sirlord Conteh', position: 'ATT' },
      { id: 'DFL-OBJ-000455', name: 'Maximilian Breunig', position: 'ATT' },
    ],
  },
  {
    name: 'Hamburger SV',
    logo: hsvLogo,

    primaryColor: '#000000',
    secondaryColor: '#0055A4',

    players: [
      { id: 'DFL-OBJ-000456', name: 'Daniel Heuer Fernandes', position: 'GK' },
      { id: 'DFL-OBJ-000457', name: 'Tom Mickel', position: 'GK' },
      { id: 'DFL-OBJ-000458', name: 'Hannes Hermann', position: 'GK' },

      { id: 'DFL-OBJ-000459', name: 'Sebastian Schonlau', position: 'DEF' },
      { id: 'DFL-OBJ-000460', name: 'Guilherme Ramos', position: 'DEF' },
      { id: 'DFL-OBJ-000461', name: 'Dennis Hadzikadunic', position: 'DEF' },
      { id: 'DFL-OBJ-000462', name: 'Moritz Heyer', position: 'DEF' },
      { id: 'DFL-OBJ-000463', name: 'Miro Muheim', position: 'DEF' },
      { id: 'DFL-OBJ-000464', name: 'Noah Katterbach', position: 'DEF' },
      { id: 'DFL-OBJ-000465', name: 'Nicolas Oliveira', position: 'DEF' },

      { id: 'DFL-OBJ-000466', name: 'Jonas Meffert', position: 'MID' },
      { id: 'DFL-OBJ-000467', name: 'Ludovit Reis', position: 'MID' },
      { id: 'DFL-OBJ-000468', name: 'Immanuel Pherai', position: 'MID' },
      { id: 'DFL-OBJ-000469', name: 'Anssi Suhonen', position: 'MID' },
      { id: 'DFL-OBJ-000470', name: 'Łukasz Poręba', position: 'MID' },
      { id: 'DFL-OBJ-000471', name: 'Levin Öztunali', position: 'MID' },

      { id: 'DFL-OBJ-000472', name: 'Robert Glatzel', position: 'ATT' },
      { id: 'DFL-OBJ-000473', name: 'Ransford-Yeboah Königsdörffer', position: 'ATT' },
      { id: 'DFL-OBJ-000474', name: 'Jean-Luc Dompé', position: 'ATT' },
      { id: 'DFL-OBJ-000475', name: 'Bakery Jatta', position: 'ATT' },
      { id: 'DFL-OBJ-000476', name: 'Fabio Baldé', position: 'ATT' },
      { id: 'DFL-OBJ-000477', name: 'Omar Megeed', position: 'ATT' },
    ],
  },
  {
    name: '1. FC Köln',
    logo: kolnLogo,

    primaryColor: '#ed1c24',
    secondaryColor: '#ffffff',

    players: [
      { id: 'DFL-OBJ-000478', name: 'Marvin Schwäbe', position: 'GK' },
      { id: 'DFL-OBJ-000479', name: 'Philipp Pentke', position: 'GK' },
      { id: 'DFL-OBJ-000480', name: 'Matthias Köbbing', position: 'GK' },

      { id: 'DFL-OBJ-000481', name: 'Timo Hübers', position: 'DEF' },
      { id: 'DFL-OBJ-000482', name: 'Luca Kilian', position: 'DEF' },
      { id: 'DFL-OBJ-000483', name: 'Dominique Heintz', position: 'DEF' },
      { id: 'DFL-OBJ-000484', name: 'Leart Pacarada', position: 'DEF' },
      { id: 'DFL-OBJ-000485', name: 'Rasmus Carstensen', position: 'DEF' },
      { id: 'DFL-OBJ-000486', name: 'Julian Pauli', position: 'DEF' },
      { id: 'DFL-OBJ-000487', name: 'Elias Bakatukanda', position: 'DEF' },

      { id: 'DFL-OBJ-000488', name: 'Eric Martel', position: 'MID' },
      { id: 'DFL-OBJ-000489', name: 'Dejan Ljubicic', position: 'MID' },
      { id: 'DFL-OBJ-000490', name: 'Denis Huseinbasic', position: 'MID' },
      { id: 'DFL-OBJ-000491', name: 'Florian Kainz', position: 'MID' },
      { id: 'DFL-OBJ-000492', name: 'Linton Maina', position: 'MID' },
      { id: 'DFL-OBJ-000493', name: 'Jacob Christensen', position: 'MID' },
      { id: 'DFL-OBJ-000494', name: 'Mathias Olesen', position: 'MID' },

      { id: 'DFL-OBJ-000495', name: 'Mark Uth', position: 'ATT' },
      { id: 'DFL-OBJ-000496', name: 'Sargis Adamyan', position: 'ATT' },
      { id: 'DFL-OBJ-000497', name: 'Steffen Tigges', position: 'ATT' },
      { id: 'DFL-OBJ-000498', name: 'Damion Downs', position: 'ATT' },
      { id: 'DFL-OBJ-000499', name: 'Florian Dietz', position: 'ATT' },
      { id: 'DFL-OBJ-000500', name: 'Jan Thielmann', position: 'ATT' },
      { id: 'DFL-OBJ-000501', name: 'Jaka Cuber Potocnik', position: 'ATT' },
    ],
  }
];