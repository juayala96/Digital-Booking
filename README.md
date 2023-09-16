# DigitalBooking

![Sitio DigitalBooking](https://github.com/juayala96/Digital-Booking/assets/57917174/b70960a5-2b4e-47df-881a-f419c74cc915)



## Introducción
El proyecto DigitalBooking consiste en el desarrollo completo de una aplicación web para la reserva online de alojamientos donde se encuentra una gran variedad de hospedajes organizados en categorías y ubicados en diferentes ciudades del mundo. Los usuarios podrán registrarse, ingresar y reservar aquel que mejor se adapte a sus preferencias y necesidades.
## Objetivos
Como equipo de trabajo, nuestros principales objetivos son:

- 🏆Crear un proyecto asombroso🏆
- 🖥️Aplicar las tecnologías estudiadas en el 1er track de CTD🖥️
- 🤝Vivir la experiencia de un ambiente de trabajo bajo el marco Scrum🤝
- 👩Desarrollar nuestras habilidades blandas👨
- 🤓Aprender de nuestros compañeros🤓
- ✨¡Divertirnos!✨ 

## Metodología de Trabajo
La metodología de trabajo utilizada para el desarrollo de la aplicación fue la conocida metodología Scrum utilizada por la mayoría de las empresas de software, debido a que constituye un marco de trabajo ágil para el equipo que generar valor muy rápido. Esta metodología permite completar ciclos cortos y procesos incrementales con el máximo valor en el menor tiempo posible, mostrando el progreso desde el inicio del proyecto.

Podemos resumir los **puntos positivos** destacados de la metodología a continuación:
- Nos obliga a realizar entregas de valor en intervalos cortos, lo que permite mostrar un mvp funcionando desde el inicio.
- Nos permite recibir feedback desde el incio a través de las reniones de revisión con el product owner, para entonces realizar ajustes lo más pronto posible.
- Nos impulsa a trabajar de forma colaborativa, y realizar un evaluación de la eficiancia y eficacia del equipo a través de las reuniones de retroespectivas.
- Nos ayuda a mantener una comunicación constante entre todas las partes interdiciplinarias que conforman al equipo por medio de las reuniones diarias.
-La participación del Scrum master nos guía a lo largo de cada sprint para asegurar que podamos alcanzar el objetivo y nos ayuda a destrabar obtáculos cuando se presentan.

En la metodología Scrum se definen diferentes roles, los cuales hemos podido asignar dentro del equipo según las habilidades y fortalezas de cada integrante. De esta forma la tareas fueron distribuidas entre dos desarrolladores del FrontEnd, dos desarrolladores del BackEnd, dos testers QA, un developer enfocado en infraestructura.

## Bitácora del Proyecto
El proyecto se ha divido en 4 Sprints a través de los cuales, además de mostrar el progreso de el mvp, pudimos conformar cada vez un mejor equipo de trabajo, aprendiendo sobre las fortalezas y habilidades que en cada uno pudimos reconocer.

**Sprint 1: Página home con buscador, login y crear cuenta**

El primer Sprint dio inicio al proyecto con una gran carga de trabajo en el FrontEnd  el cual demandaba la creación de 3 páginas (Home, crear cuenta y Login). Un gran desafio fue cumplir con la entrega en tiempo y forma con un equipo de 5 integrantes unicamente. Lo cual fue resuelto repartiendo las tareas entre 3 desarrolladores Frontend, 1 desarrollador del Backend y 1 desarrollador dedicado a infraestructura.
Si bien el equipo organizado de esa manera logró alcanzar los objetivos del Sprint, identificamos como oportunidad de mejora iniciar la planificación de los tests desde el inicio del sprint de modo de adelantar el diseño de los casos de pruebas. De esta forma tomamos la decision de asignar especialmente un rol de testing QA para el siguiente Sprint.

**Sprint 2: Página de detalles del producto**

En el segundo Sprint se amplió el equipo de trabajo a 7 integrantes, lo que nos permitió fortalecer el desarrollo del backend e infrestructura, trabajando en ambos 2 developers. Este Sprint nos presentó como desafio la configuración de la infraestructura, para lo cual se dedicaron horas a investigación y estudio, con lo cual obtuvimos muy buenos resultados destancándose en la demo. Un nuevo desafío nos significó cumplir los requerimientos de testing, para los cuales se recurrió a las consultas y tech leads del área especialmente para satisfacer los tests unitarios en JEST. Como resultado se consiguió un gran aprendizaje en testing, tanto en conceptos como en el uso de las herramientas de automatización.

**Sprint 3: Página de reserva y confirmación de reserva**

En el tercer Sprint el equipo completo se encontró con responsabilidades claras y bien distribuidas entre 2 Front developers, 2 Backend developers, 2 tester QA, 1 developer en infraestructura. En este Sprint pudimos cumplir con los tests pendientes del Sprint anterior y cumplir con los nuevos tests diseñados para la nueva funcionalidad. El gran desafio de este Sprint fue implementar la seguridad desde el backend, para llevar a cabo se dedicó tiempo al aprendizaje de la herramienta y fue de gran ayuda el soporte de los techleads con una clase especial sobre el tema. El resultado del sprint puso en evidencia el gran trabajo ejecutado por todas las áreas y la sincronización entre los desarrolladores del back y del front.

**Sprint 4: Página creación producto y presentación final**

En el Sprint 4 se mantuvieron los roles dado al buen resultado del Sprint anterior, lo cual además de cumplir los requerimientos obligatorios pudimos realizar mejoras en el Backend y automatizar los tests de regresión para agilizar la ejecución de los mismos al final del Sprint y de essa forma volcar los resultados obtenidos en un reporte final de testing.

**Fortalezas**

A lo largo del proyecto hemos identificado muchas fortalezas como equipo que nos permitió ser exitosos en la entrega de una aplicación funcional y completa.
Podemos mencionar entre ellas:
- Búsqueda del aprendizaje continuo y la mejora continua.
- Rápida respuesta y colaboración frente a los problemas o consultas.
- Pasión y obsesión por mostrar buenos resultados.
- Buenas relaciones interpersonales de cada integrante para con el resto del equipo.


**Debilidades**

En cuanto a las debilidades del equipo, podemos mencionar la falta de experiencia en algunas de las herramientas y teorías, como son SpringBoot security, automatización de tests con JEST, armado del pipelines en infraestructura. Sin embargo todas estas debilidades finalmente fueron reducidas por el aprendizaje y la puesta en práctica de las herramientas en el proyecto. Incluso en cada retro pudimos realizar ajustes en la distribución de los roles entendiendo los recursos que requiere cada tarea.
## Tech Stack
<h3> Ambiente de Desarrollo </h3>
Instrucciones para el armado del ambiente de desarrollo


   Clonar el repositorio utilizando el siguiente comando en su terminal:

    git clone https://github.com/juayala96/Digital-Booking.git

##### Front end
- Previamente deberá tener instalado en su equipo: Visual Studio Code, React.js y Node.js
- En Visual Studio Code, abrir la carpeta FrontEnd y una nueva terminal. En la terminal ejecutar el comando **npm install** para instalar los paquetes necesarios y luego **npm start** para iniciar el proyecto.
 

##### Back end:
-  Previamente deberá tener instalado en su equipo un IDE para abrir el proyecto, recomendamos que sea IntelliJ IDEA, y el JDK versión 17 (Java Development Kit).
- En IntelliJ IDEA ir a File --> New --> Project from Existing Sources y abrir el archivo **pom.xml** que se encuentra dirigiendose a la carpeta _BackEnd_, luego _proyecto-integrador_ y finalmente la carpeta _demo_. 


##### Buenas prácticas

- Para trabajar en el proyecto, debe crearse una rama individual a partir de la rama developmentBranch. 
- Sugerimos que el nombre de la rama se relacione con la tarea a realizar.
- No realizar commits a la rama main. 
- Utilizar mensajes descriptivos en los commits. 
- Para realizar cambios en la rama developmentBranch, haga un push a la rama individual y luego un merge request para que otro integrante del equipo revise su codigo y lo apruebe. 

<h3> Base de Datos </h3>
Instrucciones para la creación de la base de datos
La base de datos es creada automaticamente al ejecutar el proyecto desde el back end. En el archivo **application.properties** encontrará la configuración de la misma, teniendo dos opciones: ejecutarla en la nube o de manera local. 
Para que la base de datos se cree en su computadora y pueda trabajar de manera local, debe seguir los siguientes pasos: 

1. Debe editar el archivo properties, modificando el username y password e ingresando los que tiene configurados en su equipo, además de comentar las primeras lineas para que el codigo quede de la siguiente manera:

![image](https://github.com/juayala96/Digital-Booking/assets/57917174/81cb32f5-9b90-4a79-b6c3-6bae37ff0f75)


2. Ejecute el proyecto. 
3. Listo, la base de datos fue creada y los datos que se encuentran en el archivo **import.sql** fueron agregados. 

### Diagrama relacional 
![database](https://github.com/juayala96/Digital-Booking/assets/57917174/26bc3567-60e5-4b8e-b661-ba29fd827451)

<h3> BackEnd </h3>

## Arquitectura
![image](https://github.com/juayala96/Digital-Booking/assets/57917174/ea5b18ef-9bca-4b26-88d6-e5fd2f9e64b2)


## Swagger
Para la documentación del Back end utilizamos la herramienta Swagger, en la cual se pueden ver todos los endpoint que hemos desarrollado en nuestra API. Además, muestra la forma en la que se deben pasar los datos para que funcionen de manera correcta. 


<h3> Infraestructura </h3>
![Infrastructure](https://github.com/juayala96/Digital-Booking/assets/57917174/87cd475c-ec2d-4069-987e-2461f44508f7)



### Usuarios: 
Los usuarios se conectan a internet a través de un dispositivo 

### Internet:
Los usuarios ingresan a la página web a través de internet 
### S3:
Este servicio de almacenamiento liviano nos permite almacenar objetos de manera segura, duradera y altamente escalable. Lo utilizamos en dos instancias: la primera para alojar el sitios web estático y la segunda para alojar las imágenes. Empleamos AWS identity and Access Management (IAM) para administrar el acceso a nuestros recursos de Amazon S3.

### EC2:
Crearemos una máquina virtual con este servicio que nos proporciona una capacidad informática más segura y redimensionable en la nube donde podremos alojar nuestro backend. Según los recursos con los que cuenta el proyecto se elege una imagen y una instancia.

### RDS:
Un servicio de administración de base de datos relacional la cual usamos para conectar nuestra base de datos de MySQL, la cual nos proporciona una capacidad rentable y redimensionable, al tiempo que gestiona las lentas tareas de administración de bases de datos.

### Git Repository
Los desarrolladores tenemos acceso al código fuente del proyecto por medio de un repositorio Git de la plataforma GitLab. Esto nos permite trabajar colectivamente en el mismo código mediante control de versiones.

### CI/CD
La plataforma GitLab ofrece una estrategia de desarrollo, despliegue e integracion continua por medio de pipelines que se programan para compilar el código fuente y desplegar las aplicaciones resultantes en los respectivos recursos de la nube.
<h4> Pipeline </h4>
El siguiente diagrama ilustra el flujo de desarrollo, despliegue e integración continuos (CD/CI) adoptado para el desarrollo del proyecto.

(https://github.com/juayala96/Digital-Booking/assets/57917174/90d1079c-64ef-45ce-9fca-7e01be88ecf6)


Gracias a las posibilidades que ofrece Gitlab, se logró programar en un mismo pipeline las instrucciones precisas para que cada vez que se realizara un “push” en determinadas ramas, el código se desplegara automáticamente hacia los recursos alojados en la nube para el uso inmediato de la aplicación por parte de los usuarios. La descripción de la construcción del pipeline se detalla a continuación:

Inicialmente se declaran las variables fijas que se usarán posteriormente en distintas etapas.

```
variables:
  RULES_CHANGES_PATH: "**/*"
  AWS_ACCESS_KEY_ID: $AWS_ACCESS_KEY_ID
  AWS_SECRET_ACCES_KEY: $AWS_SECRET_ACCES_KEY
  AWS_S3_URL: $AWS_S3_URL
  EC2_IPADDRESS: $EC2_IPADDRESS
  SSH_PRIVATE_KEY: $SSH_PRIVATE_KEY
  SSH_USER: $SSH_USER
```

| Variable| Descripción |
| ------ | ------ |
| **RULES_CHANGES_PATH:**| Corresponde a la ruta dentro del repositorio que el pipeline va a monitorear para disparase ante cualquier cambio detectado, Inicialmente se fija como la carpeta raíz.|
| **AWS_ACCESS_KEY_ID:**| Identificador de la clave de acceso provista para para acceder a los recursos de almacenamiento S3|  
| **AWS_SECRET_ACCES_KEY**| Clave de acceso secreta provista para acceder a los recursos de almacenamiento S3 |
| **AWS_S3_URL:** | URL pública para acceder a los recursos del almacenamiento S3 |
| **EC2_IPADDRESS:**| IP pública de la instancia EC2 creada para alojar al BackEnd|
| **SSH_PRIVATE_KEY:**| Clave SSH privada alojada en el archivo .pem para blindar de seguridad a la instancia EC2 |
| **SSH_USER:**| Nombre de usuario creado en el sistema operativo de la instancia EC2 |

Se declaran dos etapas. La primera para la compilacion del código fuente (build) y la segunda para el despliegue en la nube (deploy)

```
stages:
  - build
  - deploy
```

Debido a que tanto el código de BackEnd como el de FrontEnd se encuentran alojados en el mismo repositorio (monorepo), es necesario declarar configuraciones para que los "jobs" asociados al FrontEnd solo se ejecuten ante cambios dentro del directorio "/FrontEnd" y así mismo los "jobs" asociados al BackEnd solo se ejecuten ante cambios dentro del directorio "/BackEnd"

```
.base-rules:
  rules:
    - if: '$CI_PIPELINE_SOURCE == "push"'
      changes:
        - $RULES_CHANGES_PATH
    - when: manual
      allow_failure: true

.backend:
  extends: .base-rules
  variables:
    RULES_CHANGES_PATH: "BackEnd/**/*"

.frontend:
  extends: .base-rules
  variables:
    RULES_CHANGES_PATH: "FrontEnd/**/*"
```

## Jobs relacionados al FrontEnd
La etapa de compilación del FrontEnd hace uso de un contenedor con node.js preinstalado con el fin de tomar el código fuente y generar una _single page application_ lista para producción.
```
frontend-build:
  image: node:16.14.2-alpine
  stage: build
  extends: .frontend
  needs: []
  script:
    - echo "Compiling the frontend code..."
    - cd FrontEnd
    - npm install 
    - CI=false npm run build
    - echo "Compile complete."
  artifacts:
    paths:
    - FrontEnd/build
```
La etapa de despliegue del FrontEnd configura un contenedor con python para instalar allí la suite de comandos de AWS _awscli_. Posteriormente, los artefactos generados en la etapa enterior son enviados y publicados en el bucket S3 que alojará el FrontEnd.
```
frontend-deploy:
  image: python:latest
  stage: deploy
  extends: .frontend
  needs: ["frontend-build"]
  script:
    - echo "Deploying the frontend app..."
    - pip install awscli
    - aws configure set aws_acces_key_id $AWS_ACCESS_KEY_ID
    - aws configure set aws_secret_acces_key  $AWS_SECRET_ACCES_KEY
    - aws s3 sync FrontEnd/build s3://grupo5-0521ptc6n2 --delete
```

## Jobs relacionados al BackEnd
La etapa de compilación del BackEnd hace uso de un contenedor con maven preinstalado que toma el código fuente, genera un archivo .jar y lo publica como artefacto para que el job posterior haga uso de este.

```
backend-build:
  image: maven:latest
  stage: build
  extends: .backend
  needs: []
  script:
    - echo "Building the backend code..."
    - cd BackEnd/proyecto-integrador/demo/
    - mvn clean package -DskipTests -U
  artifacts:
    paths:
    - BackEnd/proyecto-integrador/demo/target/*.jar
```

La etapa de despliegue del BackEnd usa un contenedor genérico de linux y configura un entorno de trabajo con SSH para enviar el archivo .jar a la instancia EC2 por medio de SCP.
```
backend-deploy:
  stage: deploy
  extends: .backend
  needs: ["backend-build"]
  before_script:
    - 'command -v ssh-agent >/dev/null || ( apk add --update openssh )'
    - eval $(ssh-agent -s) 
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
    - mkdir -p ~/.ssh #create a directory
    - chmod 700 ~/.ssh
    - ssh-keyscan $EC2_IPADDRESS >> ~/.ssh/known_hosts
    - chmod 644 ~/.ssh/known_hosts
  script: 
    - scp -o StrictHostKeyChecking=no BackEnd/proyecto-integrador/demo/target/demo-0.0.1-SNAPSHOT.jar ubuntu@52.14.221.16:/home/ubuntu/
    - ssh -o StrictHostKeyChecking=no ubuntu@52.14.221.16 "/home/ubuntu/scripts/shutdown.sh;/home/ubuntu/scripts/startup.sh"
```
Se observa la ejecución remota de dos "bash scripts" denominados _shutdown.sh_ y _startup.sh_ los cuales están alojados en la instancia EC2 y su propósito es el siguiente: 

- startup.sh inicia la aplicación del BackEnd recién recibida, es decir, el archivo .jar y almacena el número de proceso PID que linux asigna. Es conveniente guardar tal número para cuando se requiera terminar la aplicación.
```
#!/bin/bash
sleep 15
nohup java -jar demo-0.0.1-SNAPSHOT.jar > log.txt 2>&1 &
echo $! > pid.file
```
- shutdown.sh termina la aplicación BackEnd haciendo referencia al número de proceso PID previamente almacenado. Siempre es necesario terminar la aplicación antes de ejecutar una nueva para evitar conflictos con el uso del puerto 8080.
```
#!/bin/bash
kill $(cat pid.file)
sleep 15
```
Adicionalmente, se hizo uso de la herramienta [frontail](https://github.com/mthenw/frontail) para publicar en vivo el streaming de logs que va generando la aplicación Spring una vez está corriendo en la nube. Esto resutó muy útil para hacer debugging.


<h3> Testing & QA </h3>
Planilla de testing

[Testing_-_Grupo_5_.xlsx](https://github.com/juayala96/Digital-Booking/files/12641104/Testing_-_Grupo_5_.xlsx)


La planilla incluye:
1. Casos de uso/historias de usuario
1. Casos de pruebas diseñados
1. Casos de pruebas ejecutados manualmente
1. Tests Suites
1. Reporte de defectos
1. Datos del reporte final


