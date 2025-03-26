---
title: Kira Color Theme
postDate: 22 de Marzo - 2025
summary: Sobre mi proceso de desarrollo y fundamentos con los que construí mi tema de color "Kira" para VSCode. También
---
Cuando estoy programando, puedo sentir de alguna manera el código, aunque sea una sensación muy leve o ilusoria quizá. Quizá es algún tipo de sinestesia, o quizá una asociación por experiencia, como esos experimentos donde se comprobaba que los lunes se sentían azules por unos calendarios que vendía cierta empresa donde lo coloreaban de azul, o algo así. 

Este tema representa mi visión del código, imbuída por aspectos personales como mi encanto por el cyberpunk y la visión retrofuturista de la tecnología que se plantea en películas de ciencia-ficción-acción *ochenteras* y *noventeras* como *Robocop*, *Demolition Man* o *Johnny Mnemonic*, que tan profundamente calaron en mí.

![Como luce Kira Color Theme, con tonos fríos azules y violetas sobre un fondo negro vacío](/assets/img/kiraPreview.png)
> Vistazo general al aspecto de Kira Theme con un ejemplo de código en C++

## Por qué

Un tema para *VSCode* es algo artístico a la par que funcional —*tal y como me gustan las cosas a mí*— es por eso que fue una de las primeras cosas que quería hacer cuando aprendí a programar.

Lo cierto es que apenas hay que picar código para construir este proyecto, pero nunca podría haberlo creado sin llevar un pequeño tiempo programando.

Podría comenzar hablando en relación a la ***funcionalidad***. Un tema para un IDE en mi opinión debe aportarle alguna mejora: ya sea hacer la lectura del código más agradable, o el entorno más acogedor, o ambas, o más cosas si fuera posible. 

Para crear este tema he considerado dos aspectos separados: El *syntax highlighting* y la *interfaz de usuario*. Sí, realmente uno es componente de lo otro, pero plantear estos conceptos por separado me ha ayudado bastante a llegar a un diseño más acertado, o al menos eso creo. 

Como los temas oscuros suelen ser en general menos agresivos para la vista, con múltiples excepciones por supuesto, decidí que por el momento *Kira* sería un tema oscuro principalmente. 

> Además *Kira* era el nombre de mi perra, y era negra, así que nada, el tema será oscuro. 

A continuación destaco una de las ideas claves para el tema:
### "Errors are red, functions are blue. Other theme users will be confused, not you"

Estamos muy acostumbrados —*al menos en occidente, no he comprobado esto para el resto del mundo*— a ver el color rojo para señalar cosas que son peligrosas, presentan algún problema o simplemente requieren más atención. Pensando en esto, incluso me planteé como afectaría a nuestra percepción en términos de psicología del color que nuestra sangre fuera roja. Los momentos en los que vemos sangre habitualmente no son agradables, y había un tío que se llamaba Pavlov el cual hablaba de como se asocian este tipo de estímulos, recomiendo *muchísimo* investigarlo.

Muchos temas que he usado incluían el rojo como color principal en su *syntax highlighting*.  De hecho, muchos de los temas más valorados en Marketplace lo hacen, partiendo incluso de los esquemas de color más famosos del mundo como *Gruvbox* o *Tokyo Night*. Quizá es un mal uso de los mismos. Al final, si una variable es roja, mi cerebro es el que detectará inconscientemente el concepto "error", igual que si es amarillo o naranja lo primero que leerá es "atención". Quería evitar esto en *Kira*.

> A continuación es cuando empiezo a ***fliparme***.
> 
> Tómese esto como un *disclaimer*, todo esto son suposiciones y solo recomiendo escribir algo así bajo vuestra responsabilidad...

## Mi visión

La decisión de los colores viene por una idea principal intuitiva: El código es algo frío en realidad, como las máquinas pero, ¿Es inerte? No del todo. En realidad conforma algo *dinámico*, algo *vivo* incluso podríamos decir. Es por eso que los colores del *syntax highlight* de *Kira* son tonos azules, fríos, pero *vibrantes* en contraste al oscuro fondo que presenta la UI, oscuro sobre el cual también he tomado decisiones en base a esta idea.

El color de fondo más oscuro de Kira es #0A0A0A, con cantidades homogéneas de RGB para que sea puro, ni azulado ni verdoso ni rojizo. Es aplicado al fondo del editor. Cuando estuve decidiendo esto, pensaba en el concepto del "*Ciberespacio*" de la novela de ciencia ficción *Neuromante* de William Gibson. Cuando edito un código, me gusta pensar que estoy en las *tripas* de la máquina, alterando a través de una ventana el *ciberespacio*. Es por eso que el color del fondo del editor es el más oscuro que puede apreciarse en la UI, indica que *está en el vacío del espacio*. El IDE es esa ventana a través del la cual lo edito, y como es una ventana *hecha de código*, ¿Debería ser fría entonces, no?

Es por eso que su color #0C0C10 Parte del *negro vacío* que uso para el fondo del editor, pero añadiendo un poco de *azul* a la mezcla y aclarándolo un poco. Añadiéndole *un poco de código* al final. El resto de tonos de oscuro se crean a partir de estos dos colores, aplicando opacidad o añadiendo más azul. Luego existen ciertos detalles que no están elegidos al azar, fundamento mis decisiones en reglas, pero en este caso son mis propias reglas, en base a lo que me gusta creer. 

![Ejemplo del mismo fragmento de código, pero focalizado en una única función "main" para resaltar la diferenciación entre los colores](/assets/img/snipettcpp.png)
*Ejemplo de fragmento de código en C++ del proyecto [vscode-theme-tester](https://github.com/microsoft/vscode-theme-tester)*

Por ejemplo, el hover sobre un archivo es más oscuro, pero no *tan* oscuro, es porque estás *a punto* de llevarlo al *ciberespacio*. La pestaña seleccionada en el editor por ejemplo sí que posee el mismo tono *negro vacío*, indicando que *ya está allí*.

Efectivamente, antes he mencionado que **el código añadía azul**, primeras pistas sobre como se construirá el *syntax highlight*.

El azul es un color frío digamos por excelencia, es por eso que es la piedra angular de este tema. Por algún motivo, siempre sentí **variables o clases** con un color azul cielo, probablemente derivado de creer que las máquinas son frías. A partir de esa idea, de una manera inductiva prácticamente, entendía que **las funciones** debían ser de un azul más vibrante y eléctrico, al fin y al cabo una función es un trozo de código que **contiene más código**. Es una simple relación directamente proporcional. 

Luego, en contraste a las variables o las funciones, existen los ***strings***. Son parte del código, pero quizá podría decirse que son su parte **más humana**. Es probablemente la parte del código que alguien que no sepa programar sabría identificar. Algo como un mensaje de error o un "*Introduzca sus datos, por favor: "*. Los humanos —*con excepciones por supuesto*— no somos fríos como máquinas. Es por eso que su tono *se aleja* del azul hacia una de las fronteras con los colores cálidos, lo que lo sitúa en un tono **verde**.

Ocurre de forma similar con el **rosa**, elegido para los **números** del código. ¿Es porque los números de un código también se acercan a lo humano? Creo que lo hacen, pero no de la misma forma que los strings.

Es una cuestión de *abstracción*. Una variable o una constante son *abstractas*, representan "*algo*", y las demás estructuras de programación derivan de esas abstracciones. Según hemos planteado, eso provocaría tonos azules en ellas, y los tienen de hecho asignados. Sin embargo, un número es una representación *concreta*. El número **1** representa... **1**, nada más. Es por eso que *se acerca* a lo humano, pero desde otro ángulo. 

Y cuando hablo de *acercarse*, de ángulos o de fronteras, hablo **literalmente**. Mediante la rueda de matices del color (*color hue*).
![](/assets/img/colorhueFrontiers.png)
Es mi intento por ser lo más coherente posible con mis decisiones, con un esfuerzo por fundamentarlas lo más sólidamente posible. 

Para las palabras reservadas o ***Keywords*** queda el color violeta, mi color favorito de hecho. Al ser representaciones de componentes básicos del lenguaje: **if, for, while...** su nivel de abstracción es menor al de una función, pero quizá no es tan concreto como un número, por ello resulta lógico y adecuado asignarle este *tono intermedio* entre azul y rosa.

## Para terminar

Creo que mis ideas más relevantes y que quería transmitir han sido expuestas en los párrafos previos a esta sección, y creo que son aquellas en las que más me he detenido para darles solidez. Sin embargo, a veces me da la sensación de que el resto de decisiones no las desarrollo tanto porque me resultan obvias, o de sentido común digamos. 

Por ejemplo, el texto base del editor creo que es eso, *texto*, por lo que me resulta bastante coherente establecerlo en un color con contraste máximo con el color oscuro del fondo, y este es el blanco. Testado y calibrado además usando la herramienta de contrastes en [Coolors](https://coolors.co/contrast-checker/e5e5e5-0a0a0a), nos da una puntuación de *Super, great contrast for all text sizes* con un valor numérico de *15.72*, en una escala donde *1* es "*Very poor*" y *5* es "*Good*". Muchos de los otros colores dan valores de al menos "Good", es la referencia a partir de la cual he considerado como calibrado el color que estuviera probando.

Luego tendríamos los paréntesis, que quizá debería haber mencionado en la sección anterior, pero tampoco quería seguir rizando el rizo. La idea es simplemente que en el código, un paréntesis es una delimitación clara. Casi como las líneas de una carretera. Determina donde empieza y acaba una sección de código a la que habrá que prestarle más atención. Entonces decidí diferenciarlos de manera que delimiten usando el verde por contraste y por ser algo directamente relacionado con la legibilidad (humano). Además muchas veces suelo localizar con la mirada los inicios y finales de estos para leer mejor el código, y esta diferenciación suele ayudarme.

Por supuesto, muchos aspectos del tema los considero inconsistentes, y quizá no será para todo el mundo, de hecho a ratos, ni siquiera lo es para mí. Pero creo que es importante finalizar los proyectos, construirlos con calma, atención y dedicación. Es lo que he intentado conseguir aquí.

El esquema de color *Kira* está disponible en el [siguiente enlace](https://github.com/cromeoli/kira-color-palette). Actualmente existen [un tema de color para Firefox](https://addons.mozilla.org/es-ES/firefox/addon/kira-theme/) y también [pronto publicaré una modificación del tema para XFCE4 *Juno ocean*](https://github.com/cromeoli/Juno-ocean-kira/), con los acentos de color modificados para que correspondan con los de *Kira*. Muy pronto también adjuntaré al repositorio de la paleta de color configuraciones base para emuladores de terminal (probablemente los primeros serán *Terminator* y *Ghostty*) 

La paleta posee una licencia MIT, por lo que cualquiera puede sentirse libre de usarla para crear cualquier cosa, de hecho me gustaría mucho si alguien lo hiciera.

Muchas gracias por leerme, y si te ha gustado todo esto, pues supongo que ya estoy contento la verdad.

Espero que pronto, habrá más.

Christian.