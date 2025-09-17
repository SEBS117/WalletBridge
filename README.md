#          **WalletBridge: Plataforma de Pagos Interoperable con Programa de Lealtad**

##                              **Resumen del Proyecto**

**WalletBridge** es una plataforma web diseñada para fungir como un **Conector Estratégico** para la red de Interledger. Nuestro proyecto resuelve la exclusión financiera al ofrecer un modelo que impulsa la adopción de la red, convirtiéndola en un canal de pagos eficiente para comunidades y servicios esenciales.

##                               **1. ¿Cuál es el problema?**

El problema central es la **exclusión financiera** generada por las altas comisiones y la falta de soluciones eficientes para el flujo de efectivo. Esto afecta principalmente a:

**Trabajadores Migrantes:** Sufren el **"impuesto invisible"** de las altas comisiones en remesas.
**Negocios Informales y Estudiantes:** Se enfrentan a la **inseguridad** del manejo de efectivo en transacciones cotidianas (comercio local, cafeterías, etc.) y carecen de sistemas de ahorro y pago accesibles.

##                               **2. ¿Cuál es la solución?**

La solución es **WalletBridge**, una plataforma que utiliza la **API de Open Payments** para crear un **círculo virtuoso de valor y lealtad**:

1.  **Remesas Ultra-Bajo Costo:** Transferencias P2P eficientes con tarifas mínimas.
2.  **Programa de Lealtad Estratégico (El Conector):** Un sistema de **recompensas** (5% de descuento en servicios) que incentiva el uso recurrente de la plataforma. La recompensa es un **subsidio digital** que demuestra la eficiencia de Interledger para la distribución de apoyos empresariales o gubernamentales.

##                               **3. ¿Cuáles son los beneficios?**

**Atracción de Mercado** El programa de recompensas es el principal motor para que los usuarios abandonen los sistemas costosos y adopten la red de Interledger. 
**Inclusión Financiera** Ofrecemos una herramienta segura y accesible para la gestión de pagos cotidianos (servicios, pequeños comercios) a comunidades con acceso limitado a bancos. 
**Transparencia Total** El protocolo garantiza la **cotización** (`quote`) y la **autorización interactiva** del usuario en cada pago, asegurando la transparencia y el consentimiento. 
**Escalabilidad** La solución es extensible a grandes corporaciones y programas de gobierno que busquen eficiencia en el manejo de subsidios. |

##                               **4. Análisis de Viabilidad (Análisis Cuantitativo)**

* **Viabilidad Técnica:** **Alta.** Usaremos un stack probado (Web App / PHP o Java) y nos enfocaremos únicamente en consumir la API de Open Payments.
* **Impacto Sostenible:** El costo del 5% de la recompensa se justifica como un **Costo de Adquisición de Clientes (CAC)** que es inferior al gasto operativo que las empresas y gobiernos asumen en los sistemas de pago tradicionales y en la logística de distribución de subsidios.

##                                **5. ¿Cuál es su arquitectura/stack simple?**

* **Arquitectura:** **Modelo Cliente-Servidor Desacoplado.** Somos un **Cliente Autenticado** que realiza peticiones a la API, no una billetera.
* **Stack:**
    * **Backend:** PHP o Java, encargado de la autenticación, la firma digital y la orquestación del flujo de 3 pasos de la API.
    * **Frontend:** HTML, CSS y JavaScript, responsable de la interfaz, la lógica de la interacción y la visualización del proceso.

##                                **6. ¿Qué funciones son indispensables (MVP)?**

1.  **Configuración Segura:** Uso correcto del par de llaves (privada en el servidor, pública en el JSON) y el `keyId` para la autenticación.
2.  **Flujo de Transacción Completo:** Implementar la lógica de: **Cotización (`quote`)** -> **Autorización Interactiva** (simulación del consentimiento) -> **Pago Saliente** (`outgoing payment`).
3.  **Visualización de Recompensa:** Mostrar en la demo la **transferencia de fondos** y el mensaje de **5% de descuento/cashback** obtenido al completarse la transacción.

##                                **7. ¿Quién será responsable de construir qué parte?**

Alexis Becerril Ramirez: **Backend (Core Logic)**  Configuración del entorno (PHP/Java), manejo seguro de la Llave Privada y el `keyId`. |
Sebastian Flores Becerril: **Backend (API Flow)**  Implementación de los endpoints, la lógica de los 3 pasos de la transacción y el sistema de recompensas.
Alicia Piña : **Frontend (UX/Design)**  Diseño de la interfaz, estructura HTML y el diseño visual de la **pantalla de recompensas**. |
Netzin Kiyoshi Trejo Muratalla: **Frontend (Logic/Interaction)**  Lógica de JavaScript, manejo de la interacción con el usuario y creación del flujo de **aceptación de la transacción**. 
