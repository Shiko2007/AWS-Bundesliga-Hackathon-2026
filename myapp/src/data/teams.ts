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
  id: number;
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
      { id: 1, name: 'Jonas Urbig', position: 'GK', image: urbigPhoto },
      { id: 2, name: 'Manuel Neuer', position: 'GK', image: neuerPhoto },
      { id: 3, name: 'Sven Ulreich', position: 'GK', image: ulreichPhoto },
      { id: 4, name: 'Leon Klanac', position: 'GK', image: klanacPhoto },

      { id: 5, name: 'Dayot Upamecano', position: 'DEF', image: upamecanoPhoto },
      { id: 6, name: 'Jonathan Tah', position: 'DEF', image: tahPhoto },
      { id: 7, name: 'Kim Min-jae', position: 'DEF', image: kimPhoto },
      { id: 8, name: 'Hiroki Ito', position: 'DEF', image: itoPhoto },
      { id: 9, name: 'Alphonso Davies', position: 'DEF', image: daviesPhoto },
      { id: 10, name: 'Josip Stanisic', position: 'DEF', image: stanisicPhoto },
      { id: 11, name: 'Konrad Laimer', position: 'DEF', image: laimerPhoto },

      { id: 12, name: 'Aleksandar Pavlovic', position: 'MID', image: pavlovicPhoto },
      { id: 13, name: 'Joshua Kimmich', position: 'MID', image: kimmichPhoto },
      { id: 14, name: 'David Santos Daiber', position: 'MID', image: daiberPhoto },
      { id: 15, name: 'Tom Bischof', position: 'MID', image: bischofPhoto },
      { id: 16, name: 'Leon Goretzka', position: 'MID', image: goretzkaPhoto },
      { id: 17, name: 'Bara Sapoko Ndiaye', position: 'MID', image: ndiayePhoto },
      { id: 18, name: 'Jamal Musiala', position: 'MID', image: musialaPhoto },
      { id: 19, name: 'Lennart Karl', position: 'MID', image: karlPhoto },
      { id: 20, name: 'Raphaël Guerreiro', position: 'MID', image: guerreiroPhoto },

      { id: 21, name: 'Luis Díaz', position: 'ATT', image: diazPhoto },
      { id: 22, name: 'Michael Olise', position: 'ATT', image: olisePhoto },
      { id: 23, name: 'Serge Gnabry', position: 'ATT', image: gnabryPhoto },
      { id: 24, name: 'Harry Kane', position: 'ATT', image: kanePhoto },
      { id: 25, name: 'Nicolas Jackson', position: 'ATT', image: jacksonPhoto },
    ],
  },

  {
    name: 'Borussia Dortmund',
    logo: dortmundLogo,

    primaryColor: '#FDE100',
    secondaryColor: '#000000',

    players: [
    { id: 1, name: 'Gregor Kobel', position: 'GK' },
    { id: 2, name: 'Alexander Meyer', position: 'GK' },
    { id: 3, name: 'Patrick Drewes', position: 'GK' },
    { id: 4, name: 'Silas Ostrzinski', position: 'GK' },

    { id: 5, name: 'Nico Schlotterbeck', position: 'DEF' },
    { id: 6, name: 'Waldemar Anton', position: 'DEF' },
    { id: 7, name: 'Ramy Bensebaini', position: 'DEF' },
    { id: 8, name: 'Luca Reggiani', position: 'DEF' },
    { id: 9, name: 'Emre Can', position: 'DEF' },
    { id: 10, name: 'Niklas Süle', position: 'DEF' },
    { id: 11, name: 'Filippo Mane', position: 'DEF' },
    { id: 12, name: 'Daniel Svensson', position: 'DEF' },
    { id: 13, name: 'Almugera Kabar', position: 'DEF' },
    { id: 14, name: 'Julian Ryerson', position: 'DEF' },

    { id: 15, name: 'Salih Özcan', position: 'MID' },
    { id: 16, name: 'Felix Nmecha', position: 'MID' },
    { id: 17, name: 'Jobe Bellingham', position: 'MID' },
    { id: 18, name: 'Carney Chukwuemeka', position: 'MID' },
    { id: 19, name: 'Marcel Sabitzer', position: 'MID' },
    { id: 20, name: 'Yan Couto', position: 'MID' },
    { id: 21, name: 'Julian Brandt', position: 'MID' },

    { id: 22, name: 'Karim Adeyemi', position: 'ATT' },
    { id: 23, name: 'Samuele Inácio', position: 'ATT' },
    { id: 24, name: 'Serhou Guirassy', position: 'ATT' },
    { id: 25, name: 'Maximilian Beier', position: 'ATT' },
    { id: 26, name: 'Fábio Silva', position: 'ATT' },
  ],
  },

  {
    name: 'Bayer Leverkusen',
    logo: leverkusenLogo,

    primaryColor: '#E32221',
    secondaryColor: '#000000',

    players: [
    { id: 1, name: 'Mark Flekken', position: 'GK' },
    { id: 2, name: 'Jonas Omlin', position: 'GK' },
    { id: 3, name: 'Janis Blaswich', position: 'GK' },
    { id: 4, name: 'Niklas Lomb', position: 'GK' },

    { id: 5, name: 'Jarell Quansah', position: 'DEF' },
    { id: 6, name: 'Edmond Tapsoba', position: 'DEF' },
    { id: 7, name: 'Loïc Badé', position: 'DEF' },
    { id: 8, name: 'Axel Tape', position: 'DEF' },
    { id: 9, name: 'Tim Oermann', position: 'DEF' },
    { id: 10, name: 'Issa Traoré', position: 'DEF' },
    { id: 11, name: 'Alejandro Grimaldo', position: 'DEF' },
    { id: 12, name: 'Arthur', position: 'DEF' },
    { id: 13, name: 'Lucas Vázquez', position: 'DEF' },

    { id: 14, name: 'Equi Fernández', position: 'MID' },
    { id: 15, name: 'Robert Andrich', position: 'MID' },
    { id: 16, name: 'Exequiel Palacios', position: 'MID' },
    { id: 17, name: 'Aleix García', position: 'MID' },
    { id: 18, name: 'Ibrahim Maza', position: 'MID' },
    { id: 19, name: 'Malik Tillman', position: 'MID' },
    { id: 20, name: 'Jonas Hofmann', position: 'MID' },

    { id: 21, name: 'Eliesse Ben Seghir', position: 'ATT' },
    { id: 22, name: 'Martin Terrier', position: 'ATT' },
    { id: 23, name: 'Ernest Poku', position: 'ATT' },
    { id: 24, name: 'Nathan Tella', position: 'ATT' },
    { id: 25, name: 'Montrell Culbreath', position: 'ATT' },
    { id: 26, name: 'Christian Kofane', position: 'ATT' },
    { id: 27, name: 'Patrik Schick', position: 'ATT' },
  ],
  },

  {
    name: 'RB Leipzig',
    logo: leipzigLogo,

    primaryColor: '#E32221',
    secondaryColor: '#FFFFFF',

    players: [
      { id: 1, name: 'Peter Gulacsi', position: 'GK' },
      { id: 2, name: 'Willi Orban', position: 'DEF' },
      { id: 3, name: 'Lutsharel Geertruida', position: 'DEF' },
      { id: 4, name: 'Xavi Simons', position: 'MID' },
      { id: 5, name: 'Amadou Haidara', position: 'MID' },
      { id: 6, name: 'Benjamin Sesko', position: 'ATT' },
      { id: 7, name: 'Lois Openda', position: 'ATT' },
    ],
  },

  {
    name: 'Eintracht Frankfurt',
    logo: frankfurtLogo,

    primaryColor: '#E32221',
    secondaryColor: '#FFFFFF',

     players: [
    { id: 1, name: 'Kauã Santos', position: 'GK' },
    { id: 2, name: 'Michael Zetterer', position: 'GK' },
    { id: 3, name: 'Jens Grahl', position: 'GK' },
    { id: 4, name: 'Amil Siljevic', position: 'GK' },

    { id: 5, name: 'Arthur Theate', position: 'DEF' },
    { id: 6, name: 'Nnamdi Collins', position: 'DEF' },
    { id: 7, name: 'Robin Koch', position: 'DEF' },
    { id: 8, name: 'Aurèle Amenda', position: 'DEF' },
    { id: 9, name: 'Nathaniel Brown', position: 'DEF' },
    { id: 10, name: 'Keita Kosugi', position: 'DEF' },
    { id: 11, name: 'Rasmus Kristensen', position: 'DEF' },
    { id: 12, name: 'Elias Baum', position: 'DEF' },
    { id: 13, name: 'Timothy Chandler', position: 'DEF' },

    { id: 14, name: 'Ellyes Skhiri', position: 'MID' },
    { id: 15, name: 'Hugo Larsson', position: 'MID' },
    { id: 16, name: 'Oscar Højlund', position: 'MID' },
    { id: 17, name: 'Mahmoud Dahoud', position: 'MID' },
    { id: 18, name: 'Can Uzun', position: 'MID' },
    { id: 19, name: 'Farès Chaïbi', position: 'MID' },
    { id: 20, name: 'Love Arrhov', position: 'MID' },
    { id: 21, name: 'Mario Götze', position: 'MID' },

    { id: 22, name: 'Jean-Mattéo Bahoya', position: 'ATT' },
    { id: 23, name: 'Ritsu Doan', position: 'ATT' },
    { id: 24, name: 'Ansgar Knauff', position: 'ATT' },
    { id: 25, name: 'Ayoub Amainiouni-Echghouyab', position: 'ATT' },
    { id: 26, name: 'Jonathan Burkardt', position: 'ATT' },
    { id: 27, name: 'Arnaud Kalimuendo', position: 'ATT' },
    { id: 28, name: 'Younes Ebnoutalib', position: 'ATT' },
    { id: 29, name: 'Michy Batshuayi', position: 'ATT' },
  ],
  },
  {
  name: 'SC Freiburg',
  logo: freiburgLogo,

  primaryColor: '#d50032',
  secondaryColor: '#ffffff',

  players: [
    { id: 1, name: 'Noah Atubolu', position: 'GK' },
    { id: 2, name: 'Florian Müller', position: 'GK' },
    { id: 3, name: 'Jannik Huth', position: 'GK' },

    { id: 4, name: 'Philipp Lienhart', position: 'DEF' },
    { id: 5, name: 'Bruno Ogbus', position: 'DEF' },
    { id: 6, name: 'Matthias Ginter', position: 'DEF' },
    { id: 7, name: 'Max Rosenfelder', position: 'DEF' },
    { id: 8, name: 'Anthony Jung', position: 'DEF' },
    { id: 9, name: 'Jordy Makengo', position: 'DEF' },
    { id: 10, name: 'Christian Günter', position: 'DEF' },
    { id: 11, name: 'Philipp Treu', position: 'DEF' },
    { id: 12, name: 'Lukas Kübler', position: 'DEF' },

    { id: 13, name: 'Patrick Osterhage', position: 'MID' },
    { id: 14, name: 'Nicolas Höfler', position: 'MID' },
    { id: 15, name: 'Johan Manzambi', position: 'MID' },
    { id: 16, name: 'Maximilian Eggestein', position: 'MID' },
    { id: 17, name: 'Daniel-Kofi Kyereh', position: 'MID' },

    { id: 18, name: 'Derry Scherhant', position: 'ATT' },
    { id: 19, name: 'Vincenzo Grifo', position: 'ATT' },
    { id: 20, name: 'Cyriac Iríe', position: 'ATT' },
    { id: 21, name: 'Niklas Beste', position: 'ATT' },
    { id: 22, name: 'Yuito Suzuki', position: 'ATT' },
    { id: 23, name: 'Maximilian Philipp', position: 'ATT' },
    { id: 24, name: 'Igor Matanovic', position: 'ATT' },
    { id: 25, name: 'Lucas Höler', position: 'ATT' },
  ],
},
{
  name: 'Mainz 05',
  logo: mainzLogo,

  primaryColor: '#c8102e',
  secondaryColor: '#ffffff',

  players: [
    { id: 1, name: 'Robin Zentner', position: 'GK' },
    { id: 2, name: 'Lasse Riß', position: 'GK' },
    { id: 3, name: 'Daniel Batz', position: 'GK' },

    { id: 4, name: 'Kacper Potulski', position: 'DEF' },
    { id: 5, name: 'Stefan Posch', position: 'DEF' },
    { id: 6, name: 'Andreas Hanche-Olsen', position: 'DEF' },
    { id: 7, name: 'Dominik Kohr', position: 'DEF' },
    { id: 8, name: 'Danny da Costa', position: 'DEF' },
    { id: 9, name: 'Maxim Leitsch', position: 'DEF' },
    { id: 10, name: 'Stefan Bell', position: 'DEF' },
    { id: 11, name: 'Maxim Dal', position: 'DEF' },
    { id: 12, name: 'Philipp Mwene', position: 'DEF' },
    { id: 13, name: 'Kasey Bos', position: 'DEF' },
    { id: 14, name: 'Anthony Caci', position: 'DEF' },
    { id: 15, name: 'Silvan Widmer', position: 'DEF' },

    { id: 16, name: 'Kaishu Sano', position: 'MID' },
    { id: 17, name: 'Lennard Maloney', position: 'MID' },
    { id: 18, name: 'Sota Kawasaki', position: 'MID' },
    { id: 19, name: 'Niklas Tauer', position: 'MID' },
    { id: 20, name: 'Nadiem Amiri', position: 'MID' },
    { id: 21, name: 'Daniel Gleiber', position: 'MID' },
    { id: 22, name: 'Nikolas Veratschnig', position: 'MID' },
    { id: 23, name: 'Paul Nebel', position: 'MID' },
    { id: 24, name: 'Jae-sung Lee', position: 'MID' },

    { id: 25, name: 'Sheraldo Becker', position: 'ATT' },
    { id: 26, name: 'Silas', position: 'ATT' },
    { id: 27, name: 'Armindo Sieb', position: 'ATT' },
    { id: 28, name: 'Nelson Weiper', position: 'ATT' },
    { id: 29, name: 'Benedict Hollerbach', position: 'ATT' },
    { id: 30, name: 'William Bøving', position: 'ATT' },
    { id: 31, name: 'Philipp Tietz', position: 'ATT' },
  ],
},
{
  name: 'RB Leipzig',
  logo: leipzigLogo,

  primaryColor: '#dd0130',
  secondaryColor: '#ffffff',

  players: [
    { id: 1, name: 'Maarten Vandevoordt', position: 'GK' },
    { id: 2, name: 'Péter Gulácsi', position: 'GK' },
    { id: 3, name: 'Leopold Zingerle', position: 'GK' },

    { id: 4, name: 'Castello Lukeba', position: 'DEF' },
    { id: 5, name: 'El Chadaille Bitshiabu', position: 'DEF' },
    { id: 6, name: 'Willi Orbán', position: 'DEF' },
    { id: 7, name: 'Lukas Klostermann', position: 'DEF' },
    { id: 8, name: 'David Raum', position: 'DEF' },
    { id: 9, name: 'Max Finkgräfe', position: 'DEF' },
    { id: 10, name: 'Ridle Baku', position: 'DEF' },
    { id: 11, name: 'Benjamin Henrichs', position: 'DEF' },
    { id: 12, name: 'Kosta Nedeljkovic', position: 'DEF' },

    { id: 13, name: 'Nicolas Seiwald', position: 'MID' },
    { id: 14, name: 'Benno Kaltfelter', position: 'MID' },
    { id: 15, name: 'Assan Ouédraogo', position: 'MID' },
    { id: 16, name: 'Ezechiel Banzuzi', position: 'MID' },
    { id: 17, name: 'Xaver Schlager', position: 'MID' },
    { id: 18, name: 'Christoph Baumgartner', position: 'MID' },
    { id: 19, name: 'Brajan Gruda', position: 'MID' },
    { id: 20, name: 'Andrija Maksimovic', position: 'MID' },
    { id: 21, name: 'Viggo Gebel', position: 'MID' },

    { id: 22, name: 'Van Diomande', position: 'ATT' },
    { id: 23, name: 'Antonio Nusa', position: 'ATT' },
    { id: 24, name: 'Suleman Sani', position: 'ATT' },
    { id: 25, name: 'Tidiam Gomis', position: 'ATT' },
    { id: 26, name: 'Ayodele Thomas', position: 'ATT' },
    { id: 27, name: 'Johan Bakayoko', position: 'ATT' },
    { id: 28, name: 'Rômulo', position: 'ATT' },
    { id: 29, name: 'Conrad Harder', position: 'ATT' },
    { id: 30, name: 'Samba Konaté', position: 'ATT' },
  ],
},
{
  name: 'Werder Bremen',
  logo: bremenLogo,

  primaryColor: '#008f39',
  secondaryColor: '#ffffff',

  players: [
    { id: 1, name: 'Mio Backhaus', position: 'GK' },
    { id: 2, name: 'Karl Hein', position: 'GK' },
    { id: 3, name: 'Markus Kolke', position: 'GK' },
    { id: 4, name: 'Stefan Smarkalev', position: 'GK' },

    { id: 5, name: 'Karim Coulibaly', position: 'DEF' },
    { id: 6, name: 'Marco Friedl', position: 'DEF' },
    { id: 7, name: 'Amos Pieper', position: 'DEF' },
    { id: 8, name: 'Niklas Stark', position: 'DEF' },
    { id: 9, name: 'Maximilian Wöber', position: 'DEF' },
    { id: 10, name: 'Julián Malatini', position: 'DEF' },
    { id: 11, name: 'Mick Schmtegens', position: 'DEF' },
    { id: 12, name: 'Felix Agu', position: 'DEF' },
    { id: 13, name: 'Olivier Deman', position: 'DEF' },
    { id: 14, name: 'Isaac Schmidt', position: 'DEF' },
    { id: 15, name: 'Yukinari Sugawara', position: 'DEF' },
    { id: 16, name: 'Mitchell Weiser', position: 'DEF' },

    { id: 17, name: 'Senne Lynen', position: 'MID' },
    { id: 18, name: 'Wesley Adeh', position: 'MID' },
    { id: 19, name: 'Jens Stage', position: 'MID' },
    { id: 20, name: 'Cameron Puertas', position: 'MID' },
    { id: 21, name: 'Leonardo Bittencourt', position: 'MID' },
    { id: 22, name: 'Romano Schmid', position: 'MID' },
    { id: 23, name: 'Patrice Covic', position: 'MID' },

    { id: 24, name: 'Samuel Mbangula', position: 'ATT' },
    { id: 25, name: 'Marco Grüll', position: 'ATT' },
    { id: 26, name: 'Justin Njinmah', position: 'ATT' },
    { id: 27, name: 'Jovan Milosevic', position: 'ATT' },
    { id: 28, name: 'Victor Boniface', position: 'ATT' },
    { id: 29, name: 'Keke Topp', position: 'ATT' },
    { id: 30, name: 'Salim Musah', position: 'ATT' },
  ],
},
{
  name: 'VfB Stuttgart',
  logo: stuttgartLogo,

  primaryColor: '#ffffff',
  secondaryColor: '#d50032',

  players: [
    { id: 1, name: 'Alexander Nübel', position: 'GK' },
    { id: 2, name: 'Florian Hellstern', position: 'GK' },
    { id: 3, name: 'Fabian Bredlow', position: 'GK' },
    { id: 4, name: 'Stefan Drljaca', position: 'GK' },

    { id: 5, name: 'Finn Jeltsch', position: 'DEF' },
    { id: 6, name: 'Ramon Hendriks', position: 'DEF' },
    { id: 7, name: 'Jeff Chabot', position: 'DEF' },
    { id: 8, name: 'Luca Jaquez', position: 'DEF' },
    { id: 9, name: 'Ameen Al-Dakhil', position: 'DEF' },
    { id: 10, name: 'Dan-Axel Zagadou', position: 'DEF' },
    { id: 11, name: 'Maximilian Mittelstädt', position: 'DEF' },
    { id: 12, name: 'Josh Vagnoman', position: 'DEF' },
    { id: 13, name: 'Lorenz Assignon', position: 'DEF' },
    { id: 14, name: 'Pascal Stenzel', position: 'DEF' },

    { id: 15, name: 'Angelo Stiller', position: 'MID' },
    { id: 16, name: 'Chema Andrés', position: 'MID' },
    { id: 17, name: 'Atakan Karazor', position: 'MID' },
    { id: 18, name: 'Mirza Catovic', position: 'MID' },
    { id: 19, name: 'Nikolas Nartey', position: 'MID' },
    { id: 20, name: 'Bilal El Khannouss', position: 'MID' },

    { id: 21, name: 'Chris Führich', position: 'ATT' },
    { id: 22, name: 'Justin Diehl', position: 'ATT' },
    { id: 23, name: 'Jamie Leweling', position: 'ATT' },
    { id: 24, name: 'Tiago Tomás', position: 'ATT' },
    { id: 25, name: 'Badredine Bouanani', position: 'ATT' },
    { id: 26, name: 'Lazar Jovanovic', position: 'ATT' },
    { id: 27, name: 'Noah Darvich', position: 'ATT' },
    { id: 28, name: 'Ermedin Demirovic', position: 'ATT' },
    { id: 29, name: 'Deniz Undav', position: 'ATT' },
    { id: 30, name: 'Jeremy Arévalo', position: 'ATT' },
  ],
},
{
  name: 'Borussia Mönchengladbach',
  logo: gladbachLogo,

  primaryColor: '#000000',
  secondaryColor: '#ffffff',

  players: [
    { id: 1, name: 'Moritz Nicolas', position: 'GK' },
    { id: 2, name: 'Tiago Pereira Cardoso', position: 'GK' },
    { id: 3, name: 'Jan Olschowsky', position: 'GK' },
    { id: 4, name: 'Tobias Sippel', position: 'GK' },

    { id: 5, name: 'Nico Elvedi', position: 'DEF' },
    { id: 6, name: 'Kevin Diks', position: 'DEF' },
    { id: 7, name: 'Kota Takai', position: 'DEF' },
    { id: 8, name: 'Fabio Chiarodia', position: 'DEF' },
    { id: 9, name: 'Marvin Friedrich', position: 'DEF' },
    { id: 10, name: 'Lukas Ullrich', position: 'DEF' },
    { id: 11, name: 'Joe Scally', position: 'DEF' },

    { id: 12, name: 'Yannick Engelhardt', position: 'MID' },
    { id: 13, name: 'Philipp Sander', position: 'MID' },
    { id: 14, name: 'Niklas Swider', position: 'MID' },
    { id: 15, name: 'Rocco Reitz', position: 'MID' },
    { id: 16, name: 'Jens Castrop', position: 'MID' },
    { id: 17, name: 'Florian Neuhaus', position: 'MID' },
    { id: 18, name: 'Wael Mohya', position: 'MID' },
    { id: 19, name: 'Giovanni Reyna', position: 'MID' },
    { id: 20, name: 'Kevin Stöger', position: 'MID' },

    { id: 21, name: 'Robin Hack', position: 'ATT' },
    { id: 22, name: 'Hugo Bolin', position: 'ATT' },
    { id: 23, name: 'Franck Honorat', position: 'ATT' },
    { id: 24, name: 'Nathan Ngoumou', position: 'ATT' },
    { id: 25, name: 'Tim Kleindienst', position: 'ATT' },
    { id: 26, name: 'Shuto Machino', position: 'ATT' },
    { id: 27, name: 'Haris Tabakovic', position: 'ATT' },
    { id: 28, name: 'Alejo Sarco', position: 'ATT' },
  ],
},
{
  name: 'Wolfsburg',
  logo: wolfsburgLogo,

  primaryColor: '#65b32e',
  secondaryColor: '#ffffff',

  players: [
    { id: 1, name: 'Kamil Grabara', position: 'GK' },
    { id: 2, name: 'Marius Müller', position: 'GK' },
    { id: 3, name: 'Jakub Zielinski', position: 'GK' },
    { id: 4, name: 'Pavao Pervan', position: 'GK' },

    { id: 5, name: 'Konstantinos Koulierakis', position: 'DEF' },
    { id: 6, name: 'Jaunel Belocian', position: 'DEF' },
    { id: 7, name: 'Jonas Adjetey', position: 'DEF' },
    { id: 8, name: 'Denis Vavro', position: 'DEF' },
    { id: 9, name: 'Jens Seelt', position: 'DEF' },
    { id: 10, name: 'Moritz Jenz', position: 'DEF' },
    { id: 11, name: 'Cleyton', position: 'DEF' },
    { id: 12, name: 'Joakim Mæhle', position: 'DEF' },
    { id: 13, name: 'Aaron Zehnter', position: 'DEF' },
    { id: 14, name: 'Rogério', position: 'DEF' },
    { id: 15, name: 'Saël Kumbedi', position: 'DEF' },
    { id: 16, name: 'Kilian Fischer', position: 'DEF' },
    { id: 17, name: 'Jan Bürger', position: 'DEF' },

    { id: 18, name: 'Vini Souza', position: 'MID' },
    { id: 19, name: 'Mattias Svanberg', position: 'MID' },
    { id: 20, name: 'Maximilian Arnold', position: 'MID' },
    { id: 21, name: 'Pharell Hensel', position: 'MID' },
    { id: 22, name: 'Yannick Gerhardt', position: 'MID' },
    { id: 23, name: 'Kevin Paredes', position: 'MID' },
    { id: 24, name: 'Lovro Majer', position: 'MID' },
    { id: 25, name: 'Bence Dárdai', position: 'MID' },
    { id: 26, name: 'Christian Eriksen', position: 'MID' },

    { id: 27, name: 'Patrick Wimmer', position: 'ATT' },
    { id: 28, name: 'Adam Daghim', position: 'ATT' },
    { id: 29, name: 'Jesper Lindstrøm', position: 'ATT' },
    { id: 30, name: 'Mohamed Amoura', position: 'ATT' },
    { id: 31, name: 'Dzenan Pejcinovic', position: 'ATT' },
    { id: 32, name: 'Kento Shiogai', position: 'ATT' },
    { id: 33, name: 'Jonas Wind', position: 'ATT' },
  ],
},
{
  name: 'FC Augsburg',
  logo: augsburgLogo,

  primaryColor: '#ba0c2f',
  secondaryColor: '#ffffff',

  players: [
    { id: 1, name: 'Finn Dahmen', position: 'GK' },
    { id: 2, name: 'Nediljko Labrovic', position: 'GK' },
    { id: 3, name: 'Daniel Klein', position: 'GK' },

    { id: 4, name: 'Chrislain Matsima', position: 'DEF' },
    { id: 5, name: 'Noahkai Banks', position: 'DEF' },
    { id: 6, name: 'Keven Schlotterbeck', position: 'DEF' },
    { id: 7, name: 'Cédric Zesiger', position: 'DEF' },
    { id: 8, name: 'Arthur Chaves', position: 'DEF' },
    { id: 9, name: 'Jeffrey Gouweleeuw', position: 'DEF' },
    { id: 10, name: 'Felix Meiser', position: 'DEF' },
    { id: 11, name: 'Dimitrios Giannoulis', position: 'DEF' },
    { id: 12, name: 'Mads Pedersen', position: 'DEF' },
    { id: 13, name: 'Oliver Sorg', position: 'DEF' },
    { id: 14, name: 'Marius Wolf', position: 'DEF' },

    { id: 15, name: 'Kristijan Jakic', position: 'MID' },
    { id: 16, name: 'Robin Fellhauer', position: 'MID' },
    { id: 17, name: 'Yannik Keitel', position: 'MID' },
    { id: 18, name: 'Mahmut Kücüksahin', position: 'MID' },
    { id: 19, name: 'Han-Noah Massengo', position: 'MID' },
    { id: 20, name: 'Elvis Rexhbecaj', position: 'MID' },
    { id: 21, name: 'Anton Kade', position: 'MID' },
    { id: 22, name: 'Alexis Claude-Maurice', position: 'MID' },
    { id: 23, name: 'Mert Kömür', position: 'MID' },
    { id: 24, name: 'Fabian Rieder', position: 'MID' },

    { id: 25, name: 'Ismaël Gharbi', position: 'ATT' },
    { id: 26, name: 'Rodrigo Ribeiro', position: 'ATT' },
    { id: 27, name: 'Uchenna Ogundu', position: 'ATT' },
    { id: 28, name: 'Michael Gregoritsch', position: 'ATT' },
    { id: 29, name: 'Thomas Kastanaras', position: 'ATT' },
  ],
},
{
  name: 'Union Berlin',
  logo: unionLogo,

  primaryColor: '#d0021b',
  secondaryColor: '#ffffff',

  players: [
    { id: 1, name: 'Frederik Rønnow', position: 'GK' },
    { id: 2, name: 'Matheo Raab', position: 'GK' },
    { id: 3, name: 'Carl Klaus', position: 'GK' },

    { id: 4, name: 'Leopold Querfeld', position: 'DEF' },
    { id: 5, name: 'Danilho Doekhi', position: 'DEF' },
    { id: 6, name: 'Diogo Leite', position: 'DEF' },
    { id: 7, name: 'Stanley Nsoki', position: 'DEF' },
    { id: 8, name: 'Tom Rothe', position: 'DEF' },
    { id: 9, name: 'Derrick Köhn', position: 'DEF' },
    { id: 10, name: 'Andrik Markgraf', position: 'DEF' },
    { id: 11, name: 'Josip Juranovic', position: 'DEF' },
    { id: 12, name: 'Christopher Trimmel', position: 'DEF' },

    { id: 13, name: 'Aljoscha Kemlein', position: 'MID' },
    { id: 14, name: 'Rani Khedira', position: 'MID' },
    { id: 15, name: 'András Schäfer', position: 'MID' },
    { id: 16, name: 'Janik Haberer', position: 'MID' },
    { id: 17, name: 'Alex Král', position: 'MID' },
    { id: 18, name: 'Robert Skov', position: 'MID' },
    { id: 19, name: 'Woo-yeong Jeong', position: 'MID' },

    { id: 20, name: 'Livan Burcu', position: 'ATT' },
    { id: 21, name: 'David Preu', position: 'ATT' },
    { id: 22, name: 'Ilyas Ansah', position: 'ATT' },
    { id: 23, name: 'Andrej Ilic', position: 'ATT' },
    { id: 24, name: 'Oliver Burke', position: 'ATT' },
    { id: 25, name: 'Tim Skarke', position: 'ATT' },
    { id: 26, name: 'Dmytro Bogdanov', position: 'ATT' },
  ],
},
{
  name: 'FC St. Pauli',
  logo: stpauliLogo,

  primaryColor: '#5a2a27',
  secondaryColor: '#ffffff',

  players: [
    { id: 1, name: 'Nikola Vasilj', position: 'GK' },
    { id: 2, name: 'Ben Voll', position: 'GK' },
    { id: 3, name: 'Simon Spari', position: 'GK' },
    { id: 4, name: 'Emil Gazdov', position: 'GK' },

    { id: 5, name: 'Eric Smith', position: 'DEF' },
    { id: 6, name: 'David Nemeth', position: 'DEF' },
    { id: 7, name: 'Tomoya Ando', position: 'DEF' },
    { id: 8, name: 'Hauke Wahl', position: 'DEF' },
    { id: 9, name: 'Adam Dzwigala', position: 'DEF' },
    { id: 10, name: 'Karol Mets', position: 'DEF' },
    { id: 11, name: 'Jannik Robatsch', position: 'DEF' },
    { id: 12, name: 'Louis Oppie', position: 'DEF' },
    { id: 13, name: 'Lars Ritzka', position: 'DEF' },
    { id: 14, name: 'Arkadiusz Pyrka', position: 'DEF' },
    { id: 15, name: 'Manolis Saliakas', position: 'DEF' },
    { id: 16, name: 'Fin Stevens', position: 'DEF' },

    { id: 17, name: 'James Sands', position: 'MID' },
    { id: 18, name: 'Marwin Schmitz', position: 'MID' },
    { id: 19, name: 'Joel Chima Fujita', position: 'MID' },
    { id: 20, name: 'Mathias Rasmussen', position: 'MID' },
    { id: 21, name: 'Connor Metcalfe', position: 'MID' },
    { id: 22, name: 'Jackson Irvine', position: 'MID' },
    { id: 23, name: 'Nick Schmidt', position: 'MID' },
    { id: 24, name: 'Daniel Sinani', position: 'MID' },

    { id: 25, name: 'Mathias Pereira Lage', position: 'ATT' },
    { id: 26, name: 'Andréas Hountondji', position: 'ATT' },
    { id: 27, name: 'Martijn Kaars', position: 'ATT' },
    { id: 28, name: 'Taichi Hara', position: 'ATT' },
    { id: 29, name: 'Ricky-Jade Jones', position: 'ATT' },
    { id: 30, name: 'Abdoulie Ceesay', position: 'ATT' },
  ],
},
{
  name: 'TSG Hoffenheim',
  logo: hoffenheimLogo,

  primaryColor: '#005aa9',
  secondaryColor: '#ffffff',

  players: [
    { id: 1, name: 'Oliver Baumann', position: 'GK' },
    { id: 2, name: 'Luca Philipp', position: 'GK' },
    { id: 3, name: 'Lúkas Petersson', position: 'GK' },

    { id: 4, name: 'Albian Hajdari', position: 'DEF' },
    { id: 5, name: 'Robin Hranac', position: 'DEF' },
    { id: 6, name: 'Ozan Kabak', position: 'DEF' },
    { id: 7, name: 'Koki Machida', position: 'DEF' },
    { id: 8, name: 'Kevin Akpoguma', position: 'DEF' },
    { id: 9, name: 'Kleven Frees', position: 'DEF' },
    { id: 10, name: 'Bernardo', position: 'DEF' },
    { id: 11, name: 'Valentin Gendrey', position: 'DEF' },
    { id: 12, name: 'Vladimír Coufal', position: 'DEF' },

    { id: 13, name: 'Leon Abdullahu', position: 'MID' },
    { id: 14, name: 'Wouter Burger', position: 'MID' },
    { id: 15, name: 'Luis Engels', position: 'MID' },
    { id: 16, name: 'Grischa Prömel', position: 'MID' },
    { id: 17, name: 'Luka Duric', position: 'MID' },
    { id: 18, name: 'Alexander Prass', position: 'MID' },
    { id: 19, name: 'Muhammed Damar', position: 'MID' },
    { id: 20, name: 'Andrej Kramaric', position: 'MID' },

    { id: 21, name: 'Bazoumana Touré', position: 'ATT' },
    { id: 22, name: 'Cole Campbell', position: 'ATT' },
    { id: 23, name: 'Fisnik Asllani', position: 'ATT' },
    { id: 24, name: 'Tim Lemperle', position: 'ATT' },
    { id: 25, name: 'Adam Hlozek', position: 'ATT' },
    { id: 26, name: 'Max Moerstedt', position: 'ATT' },
    { id: 27, name: 'Yannick Eduardo', position: 'ATT' },
    { id: 28, name: 'Deniz Zeitler', position: 'ATT' },
    { id: 29, name: 'Ihlas Bebou', position: 'ATT' },
  ],
},
{
  name: 'Heidenheim',
  logo: heidenheimLogo,

  primaryColor: '#d71920',
  secondaryColor: '#ffffff',

  players: [
    { id: 1, name: 'Diant Ramaj', position: 'GK' },
    { id: 2, name: 'Frank Feller', position: 'GK' },
    { id: 3, name: 'Paul Tschernuth', position: 'GK' },

    { id: 4, name: 'Tim Siersleben', position: 'DEF' },
    { id: 5, name: 'Patrick Mainka', position: 'DEF' },
    { id: 6, name: 'Benedikt Gimber', position: 'DEF' },
    { id: 7, name: 'Adam Kölle', position: 'DEF' },
    { id: 8, name: 'Hennes Behrens', position: 'DEF' },
    { id: 9, name: 'Jonas Föhrenbach', position: 'DEF' },
    { id: 10, name: 'Leart Paqarada', position: 'DEF' },
    { id: 11, name: 'Leonidas Stergiou', position: 'DEF' },
    { id: 12, name: 'Omar Traoré', position: 'DEF' },
    { id: 13, name: 'Marnon Busch', position: 'DEF' },

    { id: 14, name: 'Niklas Dorsch', position: 'MID' },
    { id: 15, name: 'Julian Niehues', position: 'MID' },
    { id: 16, name: 'Jan Schöppner', position: 'MID' },
    { id: 17, name: 'Luca Kerber', position: 'MID' },
    { id: 18, name: 'Nick Rothweiler', position: 'MID' },
    { id: 19, name: 'Arijon Ibrahimovic', position: 'MID' },
    { id: 20, name: 'Adrian Beck', position: 'MID' },

    { id: 21, name: 'Mathias Honsak', position: 'ATT' },
    { id: 22, name: 'Yannik Wagner', position: 'ATT' },
    { id: 23, name: 'Eren Dinkçi', position: 'ATT' },
    { id: 24, name: 'Christian Conteh', position: 'ATT' },
    { id: 25, name: 'Sirlord Conteh', position: 'ATT' },
    { id: 26, name: 'Marvin Pieringer', position: 'ATT' },
    { id: 27, name: 'Mikkel Kaufmann', position: 'ATT' },
    { id: 28, name: 'Budu Zivzivadze', position: 'ATT' },
    { id: 29, name: 'Stefan Schimmer', position: 'ATT' },
  ],
},
{
  name: '1. FC Köln',
  logo: kolnLogo,

  primaryColor: '#e30613',
  secondaryColor: '#ffffff',

  players: [
    { id: 1, name: 'Marvin Schwäbe', position: 'GK' },
    { id: 2, name: 'Ron-Robert Zieler', position: 'GK' },
    { id: 3, name: 'Matthias Köbbing', position: 'GK' },

    { id: 4, name: 'Rav van den Berg', position: 'DEF' },
    { id: 5, name: 'Jahmai Simpson-Pusey', position: 'DEF' },
    { id: 6, name: 'Joël Schmied', position: 'DEF' },
    { id: 7, name: 'Cenk Özkacar', position: 'DEF' },
    { id: 8, name: 'Timo Hübers', position: 'DEF' },
    { id: 9, name: 'Dominique Heintz', position: 'DEF' },
    { id: 10, name: 'Luca Kilian', position: 'DEF' },
    { id: 11, name: 'Kristoffer Lund', position: 'DEF' },
    { id: 12, name: 'Sebastian Sebulonsen', position: 'DEF' },

    { id: 13, name: 'Eric Martel', position: 'MID' },
    { id: 14, name: 'Tom Krauß', position: 'MID' },
    { id: 15, name: 'Fayssal Harchaoui', position: 'MID' },
    { id: 16, name: 'Isak Jóhannesson', position: 'MID' },
    { id: 17, name: 'Denis Huseinbasic', position: 'MID' },
    { id: 18, name: 'Felipe Chávez', position: 'MID' },
    { id: 19, name: 'Alessio Castro-Montes', position: 'MID' },
    { id: 20, name: 'Florian Kainz', position: 'MID' },

    { id: 21, name: 'Said El Mala', position: 'ATT' },
    { id: 22, name: 'Jakub Kamiński', position: 'ATT' },
    { id: 23, name: 'Linton Maina', position: 'ATT' },
    { id: 24, name: 'Marius Bülter', position: 'ATT' },
    { id: 25, name: 'Jan Thielmann', position: 'ATT' },
    { id: 26, name: 'Youssoupha Niang', position: 'ATT' },
    { id: 27, name: 'Ragnar Ache', position: 'ATT' },
    { id: 28, name: 'Luca Waldschmidt', position: 'ATT' },
    { id: 29, name: 'Finn Schenten', position: 'ATT' },
    { id: 30, name: 'Malek El Mala', position: 'ATT' },
  ],
},
{
  name: 'Hamburger SV',
  logo: hsvLogo,

  primaryColor: '#005aaa',
  secondaryColor: '#ffffff',

  players: [
    { id: 1, name: 'Sander Tangvik', position: 'GK' },
    { id: 2, name: 'Daniel Heuer Fernandes', position: 'GK' },
    { id: 3, name: 'Hannes Herrmann', position: 'GK' },
    { id: 4, name: 'Fernando Dickes', position: 'GK' },

    { id: 5, name: 'Luka Vuskovic', position: 'DEF' },
    { id: 6, name: 'Nicolás Capaldo', position: 'DEF' },
    { id: 7, name: 'Jordan Torunarigha', position: 'DEF' },
    { id: 8, name: 'Daniel Elfadli', position: 'DEF' },
    { id: 9, name: 'Warmed Omari', position: 'DEF' },
    { id: 10, name: 'Shafiq Nandja', position: 'DEF' },
    { id: 11, name: 'Miro Muheim', position: 'DEF' },
    { id: 12, name: 'Noah Katterbach', position: 'DEF' },
    { id: 13, name: 'William Mikelbrencis', position: 'DEF' },
    { id: 14, name: 'Giorgi Gocholeishvili', position: 'DEF' },

    { id: 15, name: 'Nicolai Remberg', position: 'MID' },
    { id: 16, name: 'Albert Sambi Lokonga', position: 'MID' },
    { id: 17, name: 'Fábio Vieira', position: 'MID' },
    { id: 18, name: 'Albert Grønbæk', position: 'MID' },
    { id: 19, name: 'Omar Megeed', position: 'MID' },

    { id: 20, name: 'Philip Otele', position: 'ATT' },
    { id: 21, name: 'Alexander Røssing-Lelesiit', position: 'ATT' },
    { id: 22, name: 'Jean-Luc Dompé', position: 'ATT' },
    { id: 23, name: 'Fábio Baldé', position: 'ATT' },
    { id: 24, name: 'Rayan Philippe', position: 'ATT' },
    { id: 25, name: 'Bakery Jatta', position: 'ATT' },
    { id: 26, name: 'Damion Downs', position: 'ATT' },
    { id: 27, name: 'Ransford Königsdörffer', position: 'ATT' },
    { id: 28, name: 'Otto Stange', position: 'ATT' },
    { id: 29, name: 'Robert Glatzel', position: 'ATT' },
    { id: 30, name: 'Yussuf Poulsen', position: 'ATT' },
  ],
},
];