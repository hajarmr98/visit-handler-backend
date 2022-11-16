-- -----------------------------------------------------
-- Table `visitsdb`.`admin`
-- -----------------------------------------------------

CREATE TABLE admin (
    id int primary key,
  	username varchar(32) not null unique,
  	password char(64) not null,
  	email varchar(255) not null
);

-- -----------------------------------------------------
-- Data for table `visitsdb`.`admin`
-- -----------------------------------------------------

INSERT INTO admin (id, username, password , email) VALUES (1, 'Admin1', '$2a$12$s8CaAk3vEm26ecasajZzk.4BtdzMvNsiIritenFtnq8hN/eWPLaKG', 'admin1@gmail.com');