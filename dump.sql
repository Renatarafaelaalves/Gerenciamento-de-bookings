CREATE DATABASE gerenciamento_de_bookings;

CREATE TABLE usuarios (
   id SERIAL PRIMARY KEY,
   nome TEXT NOT NULL,
   email TEXT UNIQUE NOT NULL,
   senha TEXT NOT NULL
);

CREATE TABLE clientes (
	ID SERIAL PRIMARY KEY,
	empresa TEXT NOT NULL,
	email TEXT UNIQUE NOT NULL,
	cnpj CHAR(14) UNIQUE NOT NULL,
	cep TEXT,
	rua TEXT,
	numero TEXT,
	bairro TEXT,
	cidade TEXT,
	estado TEXT,
   telefone TEXT
);

CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    booking_numero TEXT,
    data_embarque DATE, 
    observacao TEXT,
    cliente_id INTEGER REFERENCES clientes(id)
    
);

CREATE TABLE containers (
    id SERIAL PRIMARY KEY,
    numero_container VARCHAR(10),
    booking_id INTEGER REFERENCES bookings(id),
    tipo VARCHAR(50),
    tamanho VARCHAR(50),
    CONSTRAINT fk_booking_id FOREIGN KEY (booking_id) REFERENCES bookings(id)
);