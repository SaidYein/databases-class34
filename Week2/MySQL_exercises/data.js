const authorsData = [
  //(author_no(PK), author_name, university, date_of_birth, h_index, gender, mentor(FK))
  `(1, "Carter Cordell", "Shiraz University", "1967-01-23", 5, "M",2);`,
  `(2, "Philis Leguey", "Sendai University", "1966-05-21", 8, "M", 3);`,
  `(3, "Fifi Insoll", "Istanbul Kultur University", "1977-08-05", 5, "M", 5);`,
  `(4, "Wolfie Ivanishchev", "New York Law School", "1971-01-04", 6, "M", 7);`,
  `(5, "Cesar Geipel", "Istanbul Kultur University", "1959-07-24", 6, "M", 11);`,
  `(6, "Sonnie Camble", "Rostov State Medical University", "1986-06-20", 5, "M", 13);`,
  `(7, "Barbey Kayes", "Istanbul Kultur University", "1983-02-26", 9, "M", 15);`,
  `(8, "Wayland Chasemoore", "George Fox University", "1988-01-17", 7, "F", 9);`,
  `(9, "Carlyle Neylan", "University of Newcastle", "1955-08-07", 6, "M", 4);`,
  `(10, "Wylie Fleetham", "Novgorod State University", "1978-09-24", 10, "Other", 14);`,
  `(11, "Armin Tuffrey", "Shiraz University", "1960-09-25", 10, "Other", 6);`,
  `(12, "Sisely Ritelli", "Istanbul Kultur University", "1950-02-14", 8, "Other", 12);`,
  `(13, "Alonzo Denty", "Europa Fachhochschule Fresenius", "1977-02-23", 10, "M", 8);`,
  `(14, "Suzie Breckwell", "George Fox University", "1978-09-25", 8, "M", 10);`,
  `(15, "Joly Dossett", "Shiraz University", "1967-01-04", 10, "M", 1);`,
];

const researchesData = [
  //(paper_id(PK), paper_title, conference, publish_date, author_id(FK))
  `(01, "ultricies eu nibh quisque id justo sit amet", null, "2001-07-21");`,
  `(02, "id nulla ultrices aliquet maecenas leo", null, "2013-11-16");`,
  `(03, "felis eu sapien cursus vestibulum proin", null, "2006-01-26");`,
  `(04, "cum sociis natoque penatibus et magnis", null, "2006-01-23" );`,
  `(05, "dolor sit amet consectetuer adipiscing elit proin interdum", null, "2007-01-09");`,
  `(06, "sagittis dui vel nisl duis ac", null, "2005-05-20");`,
  `(07, "vivamus vel nulla eget eros", null, "2008-06-07");`,
  `(08, "erat id mauris vulputate elementum nullam varius nulla", null, "2014-02-05");`,
  `(09, "luctus cum sociis natoque penatibus et", null, "2015-05-22" );`,
  `(010, "nulla pede ullamcorper augue a suscipit nulla", null, "2011-03-20" );`,
  `(011, "dapibus dolor vel", null, "2003-12-20");`,
  `(012, "massa tempor convallis nulla", null, "2011-02-09");`,
  `(013, "nam ultrices libero", null, "2002-01-06" );`,
  `(014, "mi in porttitor pede justo eu massa donec dapibus", null, "2009-03-22");`,
  `(015, "libero convallis eget eleifend luctus", null, "2001-07-06" );`,
  `(016,'erat volutpat in congue etiam justo etiam pretium iaculis justo in hac', null, '2012-10-05');`,
  `(017,'in faucibus orci luctus et ultrices posuere cubilia curae duis', null, '1993-12-05');`,
  `(018,'etiam faucibus cursus urna ut tellus nulla ut erat id mauris', null, '1996-11-02');`,
  `(019,'neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis', null, '1998-01-11');`,
  `(020,'ultrices libero non mattis pulvinar nulla', null, '2012-03-07');`,
  `(021,'nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium', null, '2011-06-28');`,
  `(022,'nulla neque libero convallis eget eleifend luctus ultricies eu nibh', null, '1995-07-10' );`,
  `(023,'ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec', null, '2020-01-16');`,
  `(024,'rutrum nulla nunc purus phasellus in felis donec', null, '1993-07-13');`,
  `(025,'semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum', null, '2010-11-01' );`,
  `(026,'mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim', null, '2002-12-05');`,
  `(027,'curabitur in libero ut massa volutpat convallis morbi odio odio', null, '2013-05-22');`,
  `(028,'sed interdum venenatis turpis enim blandit mi in porttitor', null, '2021-03-05');`,
  `(029,'erat volutpat in congue etiam justo etiam pretium', null, '2010-02-27' );`,
  `(030,'quis lectus suspendisse potenti in eleifend quam', null, '2018-04-26' );`,
];

const author_researchData = [];

module.exports = { authorsData, researchesData, author_researchData };
