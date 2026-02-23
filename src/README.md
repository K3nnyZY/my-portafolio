# Estructura base (arquitectura limpia)

Esta carpeta queda preparada para crecer sin mezclar responsabilidades:

- `app/`: rutas, layouts y estructura de páginas (Next.js App Router).
- `components/`: UI reutilizable (presentacional).
- `features/`: lógica por dominio/feature (servicios, schemas, repos, casos de uso).
- `hooks/`: hooks reutilizables de React.
- `lib/`: helpers y utilidades generales.
- `types/`: tipos compartidos.
- `config/`: configuración centralizada (sitio, constantes de app, etc.).

Regla práctica inicial:
- Si algo renderiza UI: `components/` o `app/`.
- Si algo contiene reglas del negocio: `features/`.
- Si algo es reutilizable y genérico: `hooks/`, `lib/`, `types/`, `config/`.
