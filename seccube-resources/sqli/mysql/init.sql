USE db;

CREATE TABLE IF NOT EXISTS users
(
  `id`         int(11) NOT NULL AUTO_INCREMENT,
  `name`     text,
  `password` text,
  PRIMARY KEY (`id`)
);

INSERT INTO users (id, name, password) VALUES (1, 'admin', 'dwasdwacenauukmznm');

CREATE user 'user'@'%' identified by 'password';

GRANT SELECT ON *.* To 'user'@'%';