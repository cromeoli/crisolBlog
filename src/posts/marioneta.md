---
title: Marionetas
postDate: "5 de Noviembre - 2023"
summary: "Te sigue alguien en twitter y le sigues de vuelta, parece alguien guay. Pero, ¿Acaso es real?"
---

Domingo noche. A *Luis* le llama la atención el iconito de "X" de su móvil (twitter... para que nos entendamos). Abre la app y ve que tiene un seguidor nuevo. 

Primero decide amortiguar un poco: "*Será un bot seguramente... desde que el Elon Musk la compró esto está fatal* ". 

"*Laura, eh* "

Bueno, a ver que tal. Entras en su perfil y la *bicheas* un poco. 

"*Hostias, pues si que me ha seguido esta tía. Que curioso. Pero bueno, puede pasar, ¿no?* ". 

Pone un par de tuits, le llegan sus me gustas habituales, y entre ellos se cuela alguno de la chica misteriosa. Pasa otro par de días y a *Luis* le llega un mensaje directo. 

"*Uy, ¿será ella? Pues sí, sí que es efectivamente*"

Hablan, y se cuentan la vida... La chavala parece la caña la verdad, super buen rollo. Hablan un día sí, un día también. Hasta que un día de repente pasa algo raro.

"*Oye Luis tío, me sabe horrible pedirte esto pero no tengo a nadie más y la verdad, últimamente he sentido que eras literalmente la única persona en la que puedo confiar aún conociendote tan poco. Verás tío, estoy desesperada. Tengo a mi madre enferma y justo por una movida con la seguridad social no me dan sus pastillas en la farmacia. Cuestan 120€, por favor Luis, me los dejas y te los devuelvo en cuanto pueda? Por favor lo necesito*"

*Luis* es un hombre de 55 años, está fijo en su empresa y sin pareja. Acaba de conocer a la chica y le parece genial, además de... atractiva. Él se considera además una buena persona por lo que no iba a dejarla en esa situación pudiendo hacer algo. Le pasa los 120€. Luego fueron 100€. Luego 60€. Hasta 250€ llegó a "prestarle".

Nunca tuvo nada de vuelta.

Por supuesto, Laura Carmona Olívarez de 28 años nunca existió. Era de hecho la *Sock Puppet* de un ciberdelicuente que tenía desde hace tiempo en el punto de mira  a Luis y estuvo investigándolo, preparando su ataque para sacarle la máxima cantidad de dinero que le fuera posible.

## Que es eso de *Sock puppet*

El término es básicamente "marioneta de trapo" en inglés, y es lo que en jerga de ciberseguridad se utiliza para referirse a una identidad falsa minuciosamente construida y detallada que le permitirá a su propietario tomar acciones de forma encubierta y en el mejor de los casos actuar sin dejar rastro. Por supuesto, el caso anterior es tan solo un posible caso de uso de ésta técnica camaleónica, muchos investigadores disponen de un *Sock Puppet* para sus labores de ciberinvestigación, e incluso gobiernos pueden llegar a utilizarlas para alterar tendencias políticas, o crearlas directamente. 

No tienen por qué ser una persona, pueden llegar a ser una entidad completa como por ejemplo una empresa pequeña. Quien sabe, hoy en día, con la suficiente preparación, podrían ser incluso un supuesto "modelo de IA avanzado". Podría ser interesante estudiarlo en el futuro.

Un gran ciberinvestigador habrá creado, desarrollado y mantenido sus propias *sock puppets* para tener acceso a lugares de interés cuando lo necesite. En muchos foros por ejemplo, es necesario tener cierta interacción en el tiempo para poder participar o acceder a cierta información. 

En esta entrada del blog vamos a ver como podríamos crear nuestra propia *Sock Puppet* en detalle, te lo cuento a continuación

## Nuestra propia *Sock Puppet*

### Primero, atamos cabos

Primero de todo, tenemos que empezar a cubrir nuestros rastro y huellas desde el momento primero, para eso debemos tener en cuenta un par de cosas:

- No podemos empezar a desarrollar la *sock puppet* desde nuestro PC, porque nuestros cacharritos tienen dirección IP, cosita que muchas redes sociales utilizan para recomendarnos sugerencias de amistad, que nos podría delatar. Necesitaríamos otro equipo totalmente limpio. En nuestro caso, ya que tampoco está bien que nos pillemos un portátil para trastear un poquito, nos sirve con una máquina virtual totalmente limpia.
- Desde el momento cero trabajaremos con ella. El proceso de investigación y desarrollo de la identidad (obtención de tarjetas de crédito, números de teléfonos, imágenes) podría ir en un ordenador aparte. En el caso de que alguien consiguiera rastrear nuestra marioneta podría descubrirnos rápidamente si ve que hemos generado imágenes con IA recientemente, sobretodo si buscamos "Realist model" o similar. También si ve que en nuestro historial está literalmente "fakenamegenerator.com", podría ser _bastante_ sospechoso.
- Por supuesto durante todo el proceso, sobretodo registros en sitios web o servicios etc, necesitaremos una VPN y debería ser coherente con nuestra historia el servidor que estemos utilizando. No puede ser que nuestro personaje sea de Jaén, y su IP de Serbia (A no ser que esté justificado de alguna forma, como veremos)

Una vez que tenemos nuestra máquina, necesitamos una historia personal, una identidad real. Que de verdad creas que lo que hay al otro lado es alguien real. Yo personalmente he decidido crear la identidad de una chica que se acaba de hacer twitter (o X), emigró a Reino Unido para buscar trabajo (durante todo el proceso operaremos con una VPN que oculte nuestra IP real desde Reino Unido). 

Necesito en primer lugar construir su ficha, sus datos.

Un buen modo de automatizarnos esto es irnos a la ya mencionada *fakenamegenerator.com* y hacernos con algunos datos. 

Nos dará a elegir entre varios *Name sets*, el género y el país. 

![fakenamegenerator](/assets/img/4.png)

Nota: Recomiendo el *name set* "ninja" por cierto, no para  nuestra marioneta, pero oye, quien sabe para qué. A lo mejor quieres infiltrarte en un viejo clan ninja.

Por desgracia, aunque generemos muchos, en esta web nos llegamos encontrar nombres "Hispánicos" como "Eufemia, Betiana o Amarilis"... 

A ver, ¿se pueden usar? Bueno, en mi opinión es un componente más a tener en cuenta, que alguien tenga un nombre tan curioso debería tener en la mayoría de los casos una justificación. Es un paso para este caso innecesario. Igualmente, yo he decidido quedarme con estos datos:

![datos sock puppet 1](/assets/img/5.png)
![datos sock puppet 2](/assets/img/6.png)

Por supuesto, Eneyén es completamente ridículo (Perdón a las *Eneyénes*), así que lo vamos a cambiar por algo más normalito como por ejemplo "Laura". También cambiaremos otros datos, no entiendo muy bien por qué muchas personas se ciñen a los datos que esta web ofrece, creo que es limitarse al final. Seremos flexibles y ajustaremos todo a lo que vayamos necesitando, siempre respetando por supuesto la coherencia. Hay muchos datos que la página nos ofrece cuya calidad deja que desear... 

¿Quien demonios usa "Teleworm" para su correo electrónico? 

En este punto vamos a preparnos una ficha con nuestro método favorito de toma de notas, en mi caso es obsidian, ya que funciona con almacenamiento local y claro, estos son *datos sensibles*. Rellenaremos la ficha con todos los datos de nuestra marioneta para que podamos consultarlos cuando lo necesitemos. Fakegenerator nos da algunos datos de interés aleatorios como el grupo sanguíneo, el coche que conduce o el *user agent* de su navegador.

Bueno, tras cambiar algunos datos, el perfil que nos queda es **Laura Carmona Olívarez**, nacida en Jaén, una chica de 28 años de edad, recién cumplidos este pasado 2 de octubre. Tendrá una estatura de aproximadamente 1.65m. Complexión media, aspecto normativo.

Esto se debe a que los modelos de IA de generación de imágenes que utilizaremos tienen por lo general tendencia a la belleza y lo normativo. Nos ajustaremos a ello para dar realismo a nuestro perfil.

Para nuestra historia vamos a utilizar una VPN que apunta hacia un servidor en Londres, Inglaterra. Vamos a utilizar sencillamente una extensión de firefox para conseguirlo llamada TouchVPN (Promoción gratis...). Podemos comprobar que funciona simplemente yendo a un sitio web de "Cual es mi IP" y asegurándonos de que nos indica Londres, Reino Unido. 

![datos sock puppet 2](/assets/img/13.jpeg)

Como mencionamos anteriormente, lo justificaremos con que esta chica habrá emigrado a Reino Unido para encontrar trabajo, como formación tendrá un ciclo formativo de grado superior en dietética además de bachillerato, cuantos más datos cubramos e incluyamos en la historia, mejor.

Habrá una serie de datos clave, como lo será su teléfono móvil, correo electrónico o tarjeta de crédito que examinaremos más adelante.

**El plan es el siguiente:** Vamos a crearnos un perfil de X (Twitter) y un curiousCat, una red social de preguntas anónimas. El motivo de esta elección es que en general, en twitter aunque hay usuarios que suben fotos de sí mismos, muchos no lo hacen y digamos que no está tan enfocada a eso como otras como pueden ser facebook o instagram. Entonces podremos trabajar con tan solo un par de fotos y el resto pueden ser avatares o contenido adicional, cosa que muchos usuarios suelen utilizar par sus perfiles. Muchos *tuiteros* utilizan memes o personajes famosos para sus avatares y solo se muestran a sí mismos en algunas publicaciones, ese será nuestro enfoque. 

Crear un perfil de tiktok podría llegar a ser sospechoso si nuestro personaje nunca aparece por los videos, podría enfocar a otras cosas y poner texto o algo así, pero sería algo que requeriría mayor preparación y tiempo.

Bien, con esto en mente, vamos a crear primero uno de los ejes de nuestra *sock puppet*: **Una cuenta de gmail**. 

Para crearla, desde nuestra máquina virtual lista y con la VPN apuntando al servidor de Londres, nos vamos a registrar simplemente en google. Seguiremos los pasos hasta que... ¡Oh no!

![datos sock puppet 1](/assets/img/7.png)

Esto es realmente un problema, pero hay un truquito que nos puede funcionar. Para una marioneta sólida, necesitaríamos un número de teléfono con capacidad para al menos recibir bastantes mensajes. Uno de los métodos que podríamos utilizar es el del usuario *garretmickley* de Reddit, en el que nos explica una serie de pasos para hacernos con tarjetas SIM de prepago que pueden llegar a recibir hasta 100 SMS. También utilizar un móvil desechable que podamos usar y tirar, o *wipear* completamente. Sería lo ideal, digno de *Better Call Saúl* eh, pero nosotros usaremos una alternativa rápida.

Existen webs de teléfonos virtuales que permiten recibir mensajes y es lo que usaremos, concretamente vamos a usar la web *quackr.io* que nos permitirá usar de hecho móviles con SIM de Reino Unido. 

Entonces nos hacemos con uno de estos números desde la web y le solicitamos el mensaje:

![datos sock puppet 1](/assets/img/8.png)

Estos números virtuales no suelen funcionar, pero hemos tenido suerte y efectivamente tenemos nuestro código de google ahí, lo introducimos y...

![datos sock puppet 1](/assets/img/9.png)

![datos sock puppet 1](/assets/img/10.png)


Bingo. Ya tenemos una cuenta gmail que vamos a utilizar par registrarnos tanto en X como en curiousCat, o donde queramos, aquí es donde nos llegarán mensajes de confirmación de los registros. 

He elegido usar "*lauracarmon95@gmail.com*" debido a que es una combinación habitual el usar tu nombre y apellidos junto a tu año de nacimiento como formato email, la de nombres completos seguidos de apellidos suelen usarlas personas más mayores o más bien para correos plenamente formales de búsqueda de empleo por ejemplo o perfiles oficiales. Por cierto, podríamos seguir utilizando ese número virtual de *quackr.io*, así que nos lo guardamos también en nuestra ficha. Es importante saber que con éste método de conseguir una cuenta no vamos a tener algo persistente en el tiempo, es posible que ese teléfono virtual se dé de baja y no podamos nunca más recibir un mensaje, pero para esta prueba nos servirá.

Recordatorio de que todo esto debe suceder en una máquina virtual. Un error de VPN o máquina virtual registrando la cuenta de correo y google sabrá que no estamos en Londres y que de hecho nos rodean personas más bien conocidas...

Vamos ahora a registrarnos en X, simplemente iremos a la web de X y haremos un proceso de registro habitual usando la cuenta que acabamos de crear. 

En el registro por supuesto elegiremos autenticarnos por email y usaremos la cuenta de gmail que acabamos de crear para recibir un código.

Lo introducimos y resulta que X aparentemente está siguiendo una política estricta de control de bots en su red social, nos pide verificar si somos humanos. 

![datos sock puppet 2](/assets/img/11.jpeg)

Por suerte, aunque nuestro personaje no existe, nosotros si que somos humanos y pasaremos el test.

![datos sock puppet 2](/assets/img/12.jpeg)

Una vez superado esto por fin estamos dentro.

![datos sock puppet 2](/assets/img/14.jpeg)

Una vez dentro hay que poner en orden todo esto, empezaremos por una foto de perfil. En este caso vamos a coger un personaje de la película "El viaje de chihiro", un fondo aestethic y vamos a inventarnos una bio que encaje más o menos con el perfil que queremos dar.

![datos sock puppet 2](/assets/img/15.jpeg)

Mucho mejor. 

Aquí veo una dificultad para hacer este perfil creíble pero que si se sobrepasa será un gran paso: **Conseguir seguidores**. A poder ser, *de calidad* (no bots o cuentas generales/agencias de algún tipo), ya que nos darán una credibilidad muy grande. Es un proceso largo y mucha gente querría saber como conseguir una cantidad grande en poco tiempo, pero de momento lo que necesitaremos es tiempo para desarrollar nuestra cuenta. Mientras tengamos acceso a nuestro gmail, podremos seguir usando nuestra cuenta de X.

Por supuesto, nos ponemos a interaccionar con diferentes cuentas, citar tuits, dar "me gusta" o tuitear a secas:



Para rematar nuestra cuenta de twitter e intentar ganar algo de credibilidad, a continuación vamos a usar un modelo de generación de imágenes de IA para crearnos una imagen que nos sirva como post que nuestro personaje haría. Usaremos la web *civitai.com* para intentar generarnos alguna imagen que nos pueda resultar útil.

Vamos a utilizar un modelo llamado Realistic Vision V5.1 para intentar generar una imagen convincente. 

![datos sock puppet 2](/assets/img/modelo.png)

Es proceso complicado, ya que cada modelo es distinto y necesita de unos prompts concretos para sacar algo de calidad. Por suerte podemos mirar los prompts que los usuarios utilizaron para guiarnos. 

Tras muchos intentos, consigo esta foto:

![datos sock puppet 2](/assets/img/16.png)

Es muy complicado conseguir que salga 100% perfecta, pero hay partes de la imagen que sí lo es, así que las vamos a utilizar. Vamos a aprovechar esta imagen para poner un post hablando de esos pantalones que han salido genial, como excusa para recortar la foto por arriba.

![datos sock puppet 2](/assets/img/lau.jpeg)

¿Convicente? 

Para no existir nada de eso, no está mal en mi opinión. Además, la parte de arriba recortada le da misterio.

Ahora vamos a por el perfil de curiousCat, este es mas facilito que X, porque su contenido es tan solo texto, y hay preguntas autogeneradas de la plataforma que puedes contestar tu mismo. Opino que en las respuestas de curiousCat puede obtenerse _bastante_ información de una persona, por lo que en nuestro caso eso juega a nuestro favor para ir añadiendo detalles sobre la historia de nuestro personaje.

Si quisiéramos algo sólido, lo ideal sería crear estas cuentas con espacios de tiempo entre ellas, para aportar naturalidad. Es un poco raro que alguien se cree de repente 4 redes sociales en un día. 

Bien, resulta que curiousCat nos permite *linkear* la cuenta de twitter, por lo que sencillamente lo hacemos y nos ahorramos trabajo.

![datos sock puppet 2](/assets/img/cc.jpeg)

Vamos a contestar una de las preguntas genéricas que nos hace para empezar a meter contenido poco a poco:

![datos sock puppet 2](/assets/img/cc3.jpeg)

Y nos lo ponemos en el encabezado de twitter, una práctica bastante habitual. Si hubieramos construido un instagram, sería fantástico ponerlo aquí también, pero para eso necesitamos muchas imágenes y bastante trabajo. 

![datos sock puppet 2](/assets/img/cc2.jpeg)

Quizá la biografía está un poco desafinada y desacarada, pero bueno, a partir de este punto la cuestión es ir afinando.

Podemos completar nuestro perfil con multitud de datos, uno importante que nos hemos dejado es la tarjeta de cŕédito. 

Existe una la web *privacy.com* que nos permite generar tarjetas virtuales de usar y tirar, pero necesitaremos un número de Estados Unidos válido para poder usarla. Más alla de eso conseguir una tarjeta virtual no es tan sencillo pero puede llegar a hacerse. 

Como hemos visto, hay bastantes dificultades a la hora de crear una buena *sock puppet*. El proceso puede complicarse mucho si queremos llegar a una calidad alta y debemos ser ingeniosos y utilizar todos los recursos que estén a nuestro alcance. Realmente cualquier persona lo puede hacer, y nunca se sabe que puede llegar a hacer alguien... (¿Os dice algo el nombre *CathyVipi*?). 

Una idea que tuve durante el proceso fue entrenar a la IA de generación de imágenes Stable Diffusion LoRA mediante uno de los cuadernillos de Google Colab con una serie de imágenes de alguna persona de internet o de incluso imágenes generadas con IA, para asignarle esa forma a un *token*, de manera que en el prompt pueda escribir "Una imagen de \<*el nombre de mi token*\> en su casa tomando un  café". Para así conseguir generar múltiples escenarios y contextos, completando incluso un instagram. Pero para ello necesitamos una tarjeta gráfica potente que nos permita generar las imágenes, que antes nos prestaba Google mediante los cuadernillos de colab, pero que recientemente han limitado debido al uso masivo que ha recibido.

En España no existe una ley que prohíba explícitamente el uso de sock puppets, sin embargo, si alguien lo usara para usos fraudulentos  o para violar políticas de una plataforma online podría considerarse una infracción de ley. 

Debemos hacer uso de estos conocimientos de manera ética y responsable. Más hoy, en el contexto tecnológico tan volátil en el que nos encontramos.

Espero que hayais aprendido algo durante esta entrada y si habéis llegado hasta aquí agradeceros muchísimo la lectura y recordad: **Nunca sabes quien está al otro lado de la pantalla**.

Nos vemos pronto, Christian.

