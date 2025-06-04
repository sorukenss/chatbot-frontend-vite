# React + TypeScript + Vite
Proyecto frontend hecho con:

✅ React
✅ Vite
✅ TypeScript
✅ Tailwind CSS
✅ DaisyUI (para mejorar el diseño visual)
Este README es ideal para que los evaluadores entiendan rápidamente de qué trata tu proyecto, cómo instalarlo y ejecutarlo.

💬 Chatbot Frontend - Prueba Técnica
Este es el frontend de una aplicación web fullstack que permite a los usuarios interactuar con un chatbot. El usuario puede escribir mensajes, enviarlos al backend y recibir una respuesta del bot usando una IA externa. Todo esto se muestra en tiempo real en una interfaz moderna.

🧩 Tecnologías utilizadas
React : Para la interfaz de usuario.
Vite : Entorno de desarrollo rápido y moderno.
TypeScript : Tipado seguro y mayor mantenibilidad.
Tailwind CSS : Estilos rápidos y responsivos.
DaisyUI : Componentes visuales preconstruidos para mejorar la UI.
Axios : Para comunicarse con el backend.

📦 Requisitos del Backend
Este frontend está diseñado para conectarse con un backend realizado en Node.js + Express + MySQL , disponible en la misma carpeta del proyecto.

Debe estar corriendo en http://localhost:3000 o ajustar la URL en el archivo de servicios (src/services/api.ts).
El backend debe tener configurada la base de datos y las rutas /messages.

🚀 Instalación
Clona el repositorio
-------------------------
git clone https://github.com/tu-usuario/chatbot-frontend.git .\
cd chatbot-frontend
------------------------------
Instala dependencias : npm install
---------------------------------
Ejecuta el proyecto en modo desarrollo .\
npm run dev

------------------------
📁 Estructura del Proyecto .\
src/
├── components/           # Componentes reutilizables
│   ├── chat/             # Contenedor principal del chat
│   ├── messageinput/     # Campo de entrada de texto
│   ├── messagelist/      # Lista de mensajes
│   └── messagetem/       # Cada mensaje individual
├── services/             # Servicios de llamado a API
│   └── api.ts
├── App.tsx               # Componente principal
├── main.tsx              # Punto de entrada
└── index.css             # Archivo global de estilos (incluye Tailwind)

-----------------------------------------------------------------------------
🎨 Diseño y Estilos
Tailwind CSS : Usado para todo el estilo del proyecto. .\
DaisyUI : Librería de componentes para darle mejor apariencia visual al chat.\
Interfaz totalmente responsive y centrada.\
Mensajes del usuario y del bot diferenciados visualmente.\
Scroll automático cuando llega un nuevo mensaje.\
-----------------------------------------------------------------------------
📡 Comunicación con el Backend
Se comunica con el backend a través de Axios.
Llama a las siguientes rutas: .\
GET /messages: Obtiene el historial de mensajes.
POST /messages: Envía un mensaje del usuario y recibe la respuesta del bot.

--------------------------------------------------------------------------------
🧪 Funcionalidades principales
Enviar mensajes desde el usuario.
Mostrar respuestas del bot en tiempo real.
Historial de mensajes persistente.
Interfaz moderna y responsive.
Scroll automático hacia abajo al recibir nuevos mensajes.

------------------------------------------------------------------------------

👥 Desarrollado por Isaac Pimienta Morales .\
📧 isaacpimienta358@gmail.com .\
📱 GitHub: sorukenss


