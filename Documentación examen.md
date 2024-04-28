### Nombre: Matias Aguilera

### Evento
La interfaz `Evento` define la estructura de un evento en un sistema, con las siguientes propiedades:

1. `nombre`: una cadena de texto que representa el nombre del evento.
2. `afectaSalud`: un valor booleano que indica si el evento afecta la salud de los individuos en el sistema.
3. `afectaCarga`: un valor booleano que indica si el evento afecta la carga de trabajo de los individuos en el sistema.

Esta interfaz se puede utilizar para definir eventos específicos en un sistema y determinar cómo afectan a la salud y la carga de trabajo de los individuos. Por ejemplo, un evento podría ser "accidente laboral", que afecta tanto a la salud como a la carga de trabajo de un individuo en el sistema.

En este caso, `eventoEjemplo` es un objeto que cumple con la estructura de la interfaz `Evento`, con el nombre "accidente laboral" y que afecta tanto a la salud como a la carga de trabajo.

Esta interfaz es una forma clara y consistente de definir eventos en un sistema y especificar cómo afectan a los individuos en el mismo.


### Index

El código importa varios módulos y clases, crea instancias de objetos y llama a funciones de un módulo `functionalities`. Aquí tienes una documentación para entender mejor el código:

1. **Importaciones**:
   - `NaveEspacial` se importa desde el archivo `spaceships`, que probablemente contiene la definición de una clase `NaveEspacial`.
   - `Planeta` y `TipoRecurso` se importan desde el archivo `planet`, que probablemente contiene la definición de la clase `Planeta` y un enum `TipoRecurso`.
   - `Evento` se importa desde el archivo `event`, que probablemente contiene la definición de la interfaz `Evento`.
   - `Funcionalidades` se importa desde el archivo `functionalities`, que probablemente contiene varias funciones relacionadas con las operaciones que se pueden realizar en el sistema.

2. **Creación de objetos**:
   - Se crea un objeto `nave` de tipo `NaveEspacial` con una salud de 100, capacidad de carga de 50 y velocidad de 10.
   - Se crea un objeto `planeta1` de tipo `Planeta` con el nombre "Saturno", tipo de recurso "Mineral" y sin presencia de vida.
   - Se crea un objeto `evento1` de tipo `Evento` con el nombre "Tormenta de asteroides", que afecta a la salud pero no a la carga.

3. **Llamadas a funciones**:
   - `Funcionalidades.explorar("norte")`: Llama a la función `explorar` del módulo `Funcionalidades` con el argumento "norte".
   - `Funcionalidades.recolectarRecursos<number>(planeta1, 10)`: Llama a la función `recolectarRecursos` del módulo `Funcionalidades` con el planeta `planeta1` y la cantidad 10 de recursos a recolectar.
   - `Funcionalidades.manejarEvento(evento1)`: Llama a la función `manejarEvento` del módulo `Funcionalidades` con el evento `evento1`.

En resumen, el código importa clases e interfaces de diferentes archivos, crea instancias de objetos y llama a funciones del módulo `functionalities` para realizar operaciones relacionadas con naves espaciales, planetas y eventos en un sistema espacial ficticio.

### Funcionalidades

Este código exporta tres funciones desde el módulo `functionalities`. Aquí tienes una documentación para entender su propósito y cómo se espera que sean utilizadas:

1. **Función `explorar`**:
   - **Descripción**: Esta función se encarga de realizar la exploración en una dirección específica en el espacio.
   - **Parámetros**:
     - `direccion`: Un valor de tipo string literal que puede ser "norte", "sur", "este" o "oeste".
   - **Tipo de retorno**: `void` (ningún valor se devuelve).

2. **Función `recolectarRecursos`**:
   - **Descripción**: Esta función se encarga de recolectar recursos de un planeta específico.
   - **Parámetros**:
     - `planeta`: Un objeto de tipo `Planeta` que representa el planeta del cual se van a recolectar los recursos.
     - `cantidad`: Un número que indica la cantidad de recursos a recolectar.
   - **Tipo de retorno**: Un array de tipo genérico `T` que contendrá los recursos recolectados.

3. **Función `manejarEvento`**:
   - **Descripción**: Esta función se encarga de manejar un evento específico en el sistema.
   - **Parámetros**:
     - `evento`: Un objeto de tipo `Evento` que representa el evento a manejar.
   - **Tipo de retorno**: `void` (ningún valor se devuelve).

Estas funciones pueden ser utilizadas para realizar operaciones relacionadas con la exploración espacial, la recolección de recursos en planetas y el manejo de eventos en un sistema espacial. Se espera que se llamen con los parámetros adecuados según su propósito y que realicen las operaciones correspondientes dentro del sistema.

### Planeta

El código proporcionado define un enum `TipoRecurso` y una clase `Planeta`. Aquí tienes una documentación para entender su propósito y cómo se espera que sean utilizados:

1. **Enum `TipoRecurso`**:
   - **Descripción**: Enumeración que define los tipos de recursos disponibles en el sistema.
   - **Valores**:
     - `Mineral`: Representa un recurso mineral.
     - `Agua`: Representa un recurso de agua.
     - `Oxigeno`: Representa un recurso de oxígeno.
     - `Planta`: Representa un recurso de planta.

2. **Clase `Planeta`**:
   - **Descripción**: Clase que representa un planeta en el sistema espacial.
   - **Propiedades**:
     - `nombre`: Una cadena que indica el nombre del planeta.
     - `tipoRecurso`: Un valor del enum `TipoRecurso` que especifica el tipo de recurso principal del planeta.
     - `peligro`: Un booleano que indica si el planeta presenta algún tipo de peligro.
   - **Constructor**:
     - `constructor(nombre: string, tipoRecurso: TipoRecurso, peligro: boolean)`: Constructor de la clase que inicializa las propiedades del planeta con los valores proporcionados.

Estas definiciones permiten crear instancias de la clase `Planeta` con un nombre, un tipo de recurso principal y la información sobre si el planeta es peligroso o no. El enum `TipoRecurso` facilita la especificación del tipo de recurso al momento de crear o interactuar con instancias de la clase `Planeta`.


### NaveEspacial

El código proporcionado define una interfaz `NaveEspacial`. Aquí tienes una documentación para entender su propósito y cómo se espera que sea utilizada:

1. **Interfaz `NaveEspacial`**:
   - **Descripción**: Interfaz que describe la estructura de una nave espacial en el sistema espacial.
   - **Propiedades**:
     - `salud`: Un número que representa el nivel de salud de la nave espacial.
     - `capacidadCarga`: Un número que indica la capacidad de carga de la nave espacial, es decir, la cantidad de recursos que puede transportar.
     - `velocidad`: Un número que especifica la velocidad de la nave espacial.

Esta interfaz define la estructura básica que deben cumplir las instancias de objetos que representen naves espaciales en el sistema. Al implementar esta interfaz en una clase o en un objeto, se espera que se definan las propiedades `salud`, `capacidadCarga` y `velocidad` y que se les asigne un valor adecuado para cada propiedad. Esto facilita la creación y manipulación de naves espaciales de manera consistente en el sistema espacial.
