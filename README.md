# 💬 Chatbot Frontend - Prueba Técnica

**Frontend moderno de aplicación web fullstack** que permite a los usuarios interactuar con un chatbot inteligente en tiempo real. Construido con **React + TypeScript + Vite** para máximo rendimiento y experiencia de usuario excepcional.

## 🚀 Tecnologías Utilizadas

- **React** - Librería para interfaces de usuario
- **Vite** - Entorno de desarrollo ultrarrápido y moderno  
- **TypeScript** - Tipado seguro y mayor mantenibilidad
- **Tailwind CSS** - Framework CSS utility-first para estilos rápidos
- **DaisyUI** - Componentes visuales preconstruidos para UI moderna
- **Axios** - Cliente HTTP para comunicación con backend

---

## ⚡ Vista Previa

**Funcionalidades principales:**
- ✨ **Chat en tiempo real** con respuestas instantáneas
- 🎨 **Interfaz moderna y responsive**
- 📱 **Optimizado para móvil y desktop**
- 💾 **Historial de mensajes persistente**
- 🤖 **Diferenciación visual** entre mensajes de usuario y bot
- 📜 **Scroll automático** hacia nuevos mensajes

---

## 📋 Requisitos Previos

### **Frontend:**
- **Node.js** (v18 o superior)
- **npm** (viene con Node.js)

### **Backend Requerido:**
- **Backend corriendo en:** `http://localhost:3000`
- **Rutas necesarias:** `/messages` (GET y POST)
- **Base de datos:** MySQL configurada

> 💡 **Nota:** El backend debe estar ejecutándose antes de usar el frontend

---

## ⚡ Instalación Rápida

### 1. **Clonar el repositorio**

```bash
git clone https://github.com/sorukenss/chatbot-frontend-vite.git
cd chatbot-frontend
```

### 2. **Instalar dependencias**

```bash
npm install
```

### 3. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

**La aplicación estará disponible en:** `http://localhost:5173`

---

## 🔧 Scripts Disponibles

```bash
# Desarrollo con hot-reload
npm run dev

# Compilar para producción
npm run build

# Preview de build de producción
npm run preview

# Linting de código
npm run lint

# Formatear código
npm run format
```

---

## 🗂️ Estructura del Proyecto

```
chatbot-frontend/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── chat/           # Contenedor principal del chat
│   │   ├── messageinput/   # Campo de entrada de texto
│   │   ├── messagelist/    # Lista de mensajes del chat
│   │   └── messageitem/    # Componente de mensaje individual
│   ├── services/           # Servicios de API
│   │   └── api.ts         # Configuración de Axios y endpoints
│   ├── types/             # Definiciones de TypeScript
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada de la aplicación
│   └── index.css          # Estilos globales (Tailwind)
├── public/                # Archivos estáticos
├── package.json          # Dependencias del proyecto
└── README.md            # Este archivo
```

---

## 📡 Comunicación con Backend

### **Endpoints utilizados:**

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/messages` | Obtener historial de mensajes |
| `POST` | `/messages` | Enviar mensaje y recibir respuesta del bot |

### **Configuración de API:**

```typescript
// src/services/api.ts
const API_BASE_URL = 'http://localhost:3000';

// Ejemplo de uso
const sendMessage = async (content: string) => {
  const response = await axios.post(`${API_BASE_URL}/messages`, {
    content,
    sender: 'user'
  });
  return response.data;
};
```

### **Cambiar URL del backend:**

Si tu backend corre en otra URL, modifica el archivo `src/services/api.ts`:

```typescript
const API_BASE_URL = 'http://tu-backend-url:puerto';
```

---

## 🎨 Diseño y Estilos

### **Sistema de Diseño:**
- **Tailwind CSS** - Para estilos utility-first
- **DaisyUI** - Componentes preconstruidos y temas
- **Diseño responsive** - Optimizado para todas las pantallas

### **Características Visuales:**
- 💬 **Burbujas de chat diferenciadas** por usuario/bot
- 🎨 **Animaciones suaves** en transiciones
- 📱 **Layout responsive** para móvil y desktop
- ⚡ **Carga rápida** con lazy loading
- 🔄 **Estados de carga** visuales

---

## 🧪 Testing y Desarrollo

### **Probar la aplicación:**

1. **Inicia el backend** en `http://localhost:3000`
2. **Ejecuta el frontend:** `npm run dev`
3. **Abre tu navegador** en `http://localhost:5173`
4. **Envía un mensaje** y verifica la respuesta del bot

### **Debug mode:**

```bash
# Desarrollo con debug detallado
npm run dev -- --debug
```

---

## ⚠️ Solución de Problemas

### **Error de conexión con backend:**
```bash
# Verifica que el backend esté corriendo
curl http://localhost:3000/messages
```

### **Puerto 5173 ocupado:**
```bash
# Cambiar puerto en vite.config.ts
export default defineConfig({
  server: {
    port: 3001
  }
})
```

### **Problemas de CORS:**
- Verifica que el backend tenga CORS configurado
- El backend debe permitir `http://localhost:5173`

---



## 👨‍💻 Desarrollado por

**Isaac Pimienta Morales**

- 📧 **Email:** isaacpimienta358@gmail.com
- 🐙 **GitHub:** [@sorukenss](https://github.com/sorukenss)
- 💼 **LinkedIn:** [Isaac Pimienta](https://linkedin.com/in/isaac-pimienta)

---
