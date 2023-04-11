DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Service_provider;
DROP TABLE IF EXISTS Service_type;
DROP TABLE IF EXISTS Services_proposer;
DROP TABLE IF EXISTS Calendar;
DROP TABLE IF EXISTS Appointment;


CREATE TABLE Users(
                      id_user INTEGER,
                      nom VARCHAR(50),
                      prenom VARCHAR(50),
                      mail VARCHAR(100),
                      mot_de_passe VARCHAR(50),
                      PRIMARY KEY(id_user)
);

CREATE TABLE Service_provider(
                                 id_service_provider INTEGER,
                                 mail VARCHAR(100),
                                 mots_de_passe VARCHAR(50),
                                 nom VARCHAR(50),
                                 ville VARCHAR(50),
                                 code_postal INTEGER,
                                 description VARCHAR(255),
                                 mot_cles VARCHAR(50),
                                 photo VARCHAR(255),
                                 PRIMARY KEY(id_service_provider)
);

CREATE TABLE Service_type(
                             id_service_type INTEGER,
                             nom VARCHAR(50),
                             prix DECIMAL(15,2),
                             temps TIME,
                             PRIMARY KEY(id_service_type)
);

CREATE TABLE Calendar(
                         id_calendar INTEGER,
                         jour_ouverture DATE,
                         jour_fermeture DATE,
                         heure_ouverture TIME,
                         heure_fermeture TIME,
                         id_service_provider INTEGER NOT NULL,
                         PRIMARY KEY(id_calendar),
                         UNIQUE(id_service_provider),
                         FOREIGN KEY(id_service_provider) REFERENCES Service_provider(id_service_provider)
);

CREATE TABLE Services_proposer(
                                  id_service_provider INTEGER,
                                  id_service_type INTEGER,
                                  PRIMARY KEY(id_service_provider, id_service_type),
                                  FOREIGN KEY(id_service_provider) REFERENCES Service_provider(id_service_provider),
                                  FOREIGN KEY(id_service_type) REFERENCES Service_type(id_service_type)
);

CREATE TABLE Appointment(
                            id_rdv INTEGER,
                            id_user INTEGER,
                            id_service_provider INTEGER,
                            date_rdv VARCHAR(50),
                            unique (id_service_provider, date_rdv),
                            primary key (id_rdv),
                            FOREIGN KEY(id_user) REFERENCES Users(id_user),
                            FOREIGN KEY(id_service_provider) REFERENCES Service_provider(id_service_provider));