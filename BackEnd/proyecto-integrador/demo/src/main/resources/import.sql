---categorias---
insert into categorias (descripcion,imagenurl,titulo)values('807.105 hoteles','https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/categorias/cat-1.jpg','Hoteles');
insert into categorias (descripcion,imagenurl,titulo)values('807.105 hostels','https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/categorias/cat-2.jpg','Hostels');
insert into categorias (descripcion,imagenurl,titulo)values('807.105 departamentos','https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/categorias/cat-3.jpg','Departamentos');
insert into categorias (descripcion,imagenurl,titulo)values('807.105 bed and breakfasts','https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/categorias/cat-4.jpg','Bed and breakfast');

---caracteristicas---
insert into caracteristicas (caracteristica,iconourl)values('Cocina','https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/assets/amenities/kitchen.png');
insert into caracteristicas (caracteristica,iconourl)values('Televisor','https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/assets/amenities/tv.png');
insert into caracteristicas (caracteristica,iconourl)values('Aire Acondicionado','https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/assets/amenities/air.png');
insert into caracteristicas (caracteristica,iconourl)values('Apto mascotas','https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/assets/amenities/pet.png');
insert into caracteristicas (caracteristica,iconourl)values('Estacionamiento gratuito','https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/assets/amenities/car.png');
insert into caracteristicas (caracteristica,iconourl)values('Pileta','https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/assets/amenities/icon+hombre+nadando.png');
insert into caracteristicas (caracteristica,iconourl)values('Wifi','https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/assets/amenities/freewifi.png');

---provincias---
insert into provincias (provincia)values('Buenos Aires');
insert into provincias (provincia)values('Mendoza');
insert into provincias (provincia)values('Salta');
insert into provincias (provincia)values('Cordoba');
insert into provincias (provincia)values('Catamarca');

---ciudades---
insert into ciudades (ciudad)values('Mar del Plata');
insert into ciudades (ciudad)values('Quilmes');
insert into ciudades (ciudad)values('Godoy Cruz');
insert into ciudades (ciudad)values('Junín');
insert into ciudades (ciudad)values('Cafayate');

--Role

INSERT INTO roles (id, descripcion, nombre) VALUES (1, 'Administrador de propiedades', 'ROLE_ADMIN');
INSERT INTO roles (id, descripcion, nombre) VALUES (2, 'Usuario Inquilino', 'ROLE_USER');

--Usuarios
INSERT INTO usuarios (apellido, ciudad, email, nombre, password, id_role) VALUES ('almario','Buenos Aires', 'alma@gmail.com', 'carlos', '$2a$10$4dAIrzOOLdix4M25EAocX.6Vm2ICOfcic6UvUYs05pt.SGBsmVcsK', 2);
INSERT INTO usuarios (apellido, ciudad, email, nombre, password, id_role) VALUES ('Fernandez','Buenos Aires', 'hector@gmail.com', 'hector', '$2a$10$K/i4XpJbtDkZMMBJrBMv7OB/JnEocQx71y6fjV/gHjKi39LPVKnU.', 1);


---politicas---
insert into politicas (cancelacion, normas, seguridad)values('Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía', 'Check-out: 10:00', 'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus');
insert into politicas (cancelacion, normas, seguridad)values(null, 'No se permiten fiestas', 'Detector de humo');
insert into politicas (cancelacion, normas, seguridad)values(null, 'No fumar', 'Depósito de seguridad');

---productos---
insert into productos (descripcion, disponibilidad, imagen_principalurl,precio,titulo,titulo_descripcion,ubicacion,id_categoria,id_ciudad,id_politica,id_provincia, id_usuario)values('Una vez en el alojamiento, hay jardín, estacionamiento privado y terraza. También cuenta con cocina compartida, room service y wifi gratis en todas las instalaciones. El hotel dispone de habitaciones familiares. El Palacio Barolo se encuentra a 3,7 km del hotel, mientras que el teatro Colón está a 3,8 km. El aeropuerto más cercano es el aeropuerto Jorge Newbery Airfield, situado a 6 km del Hotel Provincial del Once.',null,'https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto1/prod1-1.jpg',8000,'Hotel Provincial del Once','El Hotel Provincial del se encuentra en Buenos Aires, a 3,6 km del Obelisco de Buenos Aires.','24 de Noviembre 191',2,2,1,1,1);
insert into productos (descripcion, disponibilidad, imagen_principalurl,precio,titulo,titulo_descripcion,ubicacion,id_categoria,id_ciudad,id_politica,id_provincia, id_usuario)values('Este hotel de 3 estrellas ofrece actividades para niños, salón compartido y wifi gratis. Hay recepción 24 horas, room service y cambio de divisa. Las habitaciones disponen de aire acondicionado, escritorio, caja fuerte, TV de pantalla plana y baño privado con bidet. Todas las habitaciones del Hotel Traful están equipadas con ropa de cama y toallas. El alojamiento sirve un desayuno buffet. El Hotel Traful ofrece alojamiento de 3 estrellas con pileta cubierta y parque infantil.',null,'https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto2/prod2-1.jpg',9000,'Hotel Traful','El Hotel Traful se encuentra en Mar del Plata, a 200 metros de la playa de La Perla, y ofrece alojamiento con terraza y estacionamiento privado.',' Hipólito Yrigoyen 1190, La Perla',1,1,1,1,2);
insert into productos (descripcion, disponibilidad, imagen_principalurl,precio,titulo,titulo_descripcion,ubicacion,id_categoria,id_ciudad,id_politica,id_provincia, id_usuario)values('El lodge ofrece patio, vistas a la pileta, zona de estar, TV de pantalla plana vía satélite, zona de cocina totalmente equipada con microondas y heladera y baño privado con bidet y secador de pelo. El Complejo Turístico Chachingo cuenta con parrilla. Se proporciona servicio de alquiler de autos.',null,'https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto3/prod3-1.jpg',10000,'Complejo Turístico Chachingo','El Complejo Turístico Chachingo se encuentra en Maipú, a 8 km de la bodega La Rural y de la bodega Trapiche, y ofrece alojamiento con wifi gratis, aire acondicionado y acceso a un jardín con pileta al aire libre.','Unión Vecinal 5507',2,3,1,2,1);
insert into productos (descripcion, disponibilidad, imagen_principalurl,precio,titulo,titulo_descripcion,ubicacion,id_categoria,id_ciudad,id_politica,id_provincia, id_usuario)values('Los alojamientos están equipados con TV de pantalla plana con canales vía satélite, zona de cocina con heladera, microondas, fogones y hervidor de agua, y baño privado con bañera o ducha, bidet, artículos de aseo gratuitos y secador de pelo. Algunos incluyen zona de comedor y/o patio. Se proporciona la ropa de cama.',null,'https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto4/prod4-1.jpg',11000,'Finca Fisterra','La Finca Fisterra ofrece alojamiento con aire acondicionado en Maipú, a 8 km de la bodega La Rural. Además, se halla a 9 km de la bodega Trapiche y proporciona conexión WiFi gratuita.','Videla Aranda 7685',1,3,1,2,2);
insert into productos (descripcion, disponibilidad, imagen_principalurl,precio,titulo,titulo_descripcion,ubicacion,id_categoria,id_ciudad,id_politica,id_provincia, id_usuario)values('Las habitaciones del Hostal Rustyk tienen baño privado o compartido. Las habitaciones superiores gozan de vistas al jardín. El Hostal Rustyk dispone de zona de parrilla, jardín y mostrador de información turística. El Hostal Rustyk se encuentra a 186 km del aeropuerto internacional Martín Miguel de Güemes.',null,'https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto5/prod5-1.jpg',12000,'Hostal Rustyk','El Hostal Rustyk está situado a 200 metros del centro de Cafayate y a 5 km de las cataratas del río Colorado. Ofrece desayunos continentales, conexión de wifi gratis y cocina común completamente equipada.','Rivadavia 281',2,1,1,3,1);
insert into productos (descripcion, disponibilidad, imagen_principalurl,precio,titulo,titulo_descripcion,ubicacion,id_categoria,id_ciudad,id_politica,id_provincia, id_usuario)values('Se encuentra a 500 metros de la Bodega Nanni y ofrece jardín y estacionamiento privado gratuito. Esta casa cuenta con aire acondicionado, 1 dormitorio, TV de pantalla plana, zona de comedor y cocina con heladera y horno. Se proporcionan toallas y ropa de cama. Los viñedos de San Carlos se encuentran a 13 km de la casa.',null,'https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto6/prod6-1.jpg',13000,'Lo de Vichenzo','Lo de Vicente ofrece vistas al jardín y alojamiento con patio y hervidor de agua a 1,9 km de Bodega el Esteco.','Barrio el Tránsito 4427',1,5,1,3,2);
insert into productos (descripcion, disponibilidad, imagen_principalurl,precio,titulo,titulo_descripcion,ubicacion,id_categoria,id_ciudad,id_politica,id_provincia, id_usuario)values('This apartment is 5.2 km from Cordoba Shopping Mall and 8.9 km from Mario Alberto Kempes Football Stadium. This air-conditioned apartment features 1 bedroom, a flat-screen TV, and a kitchen. Cordobas Civic Centre is 2.7 km from the apartment, while España Square is 3.7 km from the property.',null,'https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto7/prod7-1.jpg',11000,'La Cañada','Situated 1.7 km from Patio Olmos Shopping Mall, 1.5 km from Catedral de Cordoba and 1.6 km from Jesuit Square, La Cañada features accommodation set in Cordoba.','468 Avenida Figueroa Alcorta 6 G',3,4,1,4,1);
insert into productos (descripcion, disponibilidad, imagen_principalurl,precio,titulo,titulo_descripcion,ubicacion,id_categoria,id_ciudad,id_politica,id_provincia, id_usuario)values('Los alojamientos disponen de cocina totalmente equipada, TV de pantalla plana y aire acondicionado. El AT Suites alberga una terraza. También ofrece consigna de equipaje y servicio de camarera de pisos diario. Se proporciona ropa de cama. Este alojamiento se encuentra a 12,8 km del aeropuerto internacional Ingeniero Ambrosio Taravella. Nuestros clientes dicen que esta parte de Córdoba es su favorita, según los comentarios independientes.',null,'https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto8/prod8-1.jpg',13000,'AT Suites','¡Podés conseguir un descuento Genius en AT Suites!','Boulevard Iliia 50, Nueva Córdoba',4,5,1,4,2);
insert into productos (descripcion, disponibilidad, imagen_principalurl,precio,titulo,titulo_descripcion,ubicacion,id_categoria,id_ciudad,id_politica,id_provincia, id_usuario)values('El Departamento Chacabuco 2 ofrece alojamiento con wifi gratis en San Fernando del Valle de Catamarca, a 2,1 km de la plaza del Aborigen, a 1,8 km de la Plazoleta Los Primeros Vecinos y a 3,1 km de la Plazoleta de la Ermita de Nuestra Señora del Valle. Este departamento se encuentra a 3,4 km de la plaza y a 3,6 km de Popular Norte.',null,'https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto9/prod9-1.jpg',14000,'Departamento Chacabuco','Departamento con aire acondicionado, 1 dormitorio, TV de pantalla plana y cocina.','145 Avenida Los Olivos',3,2,1,5,1);
insert into productos (descripcion, disponibilidad, imagen_principalurl,precio,titulo,titulo_descripcion,ubicacion,id_categoria,id_ciudad,id_politica,id_provincia, id_usuario)values('Todos los alojamientos disponen de aire acondicionado, baño privado, TV de pantalla plana y cocina totalmente equipada. La Quebrada se encuentra a 3 km del departamento, mientras que San Isidro está a 8 km. El aeropuerto más cercano es el aeropuerto internacional Coronel Felipe Varela, ubicado a 15 km del Lyfrago.',null,'https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto10/prod10-1.jpg',15000,'Lyfrago','El Lyfrago se encuentra en San Fernando del Valle de Catamarca, en la provincia de Catamarca, y ofrece alojamiento con estacionamiento privado gratuito.','Doctor Tadeo Acuña 4700',4,4,1,5,2);

---imagenes---
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto1/prod1-1.jpg','producto1-1',1);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto1/prod1-2.jpg','producto1-2',1);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto1/prod1-3.jpg','producto1-3',1);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto1/prod1-4.jpg','producto1-4',1);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto1/prod1-5.jpg','producto1-5',1);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto2/prod2-1.jpg','producto2-1',2);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto2/prod2-2.jpg','producto2-2',2);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto2/prod2-3.jpg','producto2-3',2);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto2/prod2-4.jpg','producto2-4',2);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto2/prod2-5.jpg','producto2-5',2);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto3/prod3-1.jpg','producto3-1',3);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto3/prod3-2.jpg','producto3-2',3);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto3/prod3-3.jpg','producto3-3',3);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto3/prod3-4.jpg','producto3-4',3);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto3/prod3-5.jpg','producto3-5',3);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto4/prod4-1.jpg','producto4-1',4);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto4/prod4-2.jpg','producto4-2',4);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto4/prod4-3.jpg','producto4-3',4);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto4/prod4-4.jpg','producto4-4',4);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto4/prod4-5.jpg','producto4-5',4);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto5/prod5-1.jpg','producto5-1',5);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto5/prod5-2.jpg','producto5-2',5);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto5/prod5-3.jpg','producto5-3',5);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto5/prod5-4.jpg','producto5-4',5);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto5/prod5-5.jpg','producto5-5',5);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto6/prod6-1.jpg','producto6-1',6);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto6/prod6-2.jpg','producto6-2',6);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto6/prod6-3.jpg','producto6-3',6);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto6/prod6-4.jpg','producto6-4',6);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto6/prod6-5.jpg','producto6-5',6);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto7/prod7-1.jpg','producto7-1',7);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto7/prod7-2.jpg','producto7-2',7);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto7/prod7-3.jpg','producto7-3',7);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto7/prod7-4.jpg','producto7-4',7);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto7/prod7-5.jpg','producto7-5',7);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto8/prod8-1.jpg','producto8-1',8);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto8/prod8-2.jpg','producto8-2',8);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto8/prod8-3.jpg','producto8-3',8);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto8/prod8-4.jpg','producto8-4',8);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto8/prod8-5.jpg','producto8-5',8);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto9/prod9-1.jpg','producto9-1',9);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto9/prod9-2.jpg','producto9-2',9);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto9/prod9-3.jpg','producto9-3',9);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto9/prod9-4.jpg','producto9-4',9);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto9/prod9-5.jpg','producto9-5',9);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto10/prod10-1.jpg','producto10-1',10);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto10/prod10-2.jpg','producto10-2',10);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto10/prod10-3.jpg','producto10-3',10);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto10/prod10-4.jpg','producto10-4',10);
insert into imagenes (url, titulo, id_producto)values('https://0521ptc6n2db-grupo5-imagenes.s3.us-east-2.amazonaws.com/imagenes-frontend/producto10/prod10-5.jpg','producto10-5',10);


---caracteristica_por_producto
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(1,1);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(1,2);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(1,3);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(1,4);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(1,5);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(1,6);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(1,7);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(2,1);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(2,2);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(2,3);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(2,6);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(2,7);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(3,2);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(3,4);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(3,5);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(3,7);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(4,4);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(4,5);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(4,6);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(5,1);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(5,3);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(5,4);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(5,5);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(5,6);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(6,1);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(6,5);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(7,3);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(7,5);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(7,7);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(8,2);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(8,3);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(8,4);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(8,5);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(8,6);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(8,7);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(9,3);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(9,4);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(9,6);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(9,7);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(10,1);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(10,3);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(10,4);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(10,6);
insert into caracteristica_por_producto (id_producto,id_caracteristica)values(10,7);


----reservas
--
--INSERT INTO reservas (horallegada, fecha_final, fecha_inicial, id_producto, id_usuario) VALUES ('4:00', '2022-11-15 22:53:24','2022-11-10 22:53:24',1,1),
--INSERT INTO reservas (horallegada, fecha_final, fecha_inicial, id_producto, id_usuario) VALUES ('4:00', '2022-11-20 22:53:24','2022-11-16 22:53:24',2,2),
--INSERT INTO reservas (horallegada, fecha_final, fecha_inicial, id_producto, id_usuario) VALUES ('4:00', '2022-11-25 22:53:24','2022-11-21 22:53:24',1,1);
--

