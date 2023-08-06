# Ejercicio 2 (Test unitarios con Jest)

Esta es la solución del segundo ejercicio de la prueba técnica en el cual se realizaron pruebas unitarias con Jest

## Paquetes instalados

```
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript react-test-renderer @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

## Test a realizar

1. Probar que el componente UserItem se renderiza correctamente.
2. Probar que el componete UserTable se renderiza correctamete.
3. Probar que en el componente UserTable las filas se colorean al dar clic en el botón colorear.

Los archivos de los test, se encuentran creados detro de la carpeta de cada uno de los compoentes.

## Ejecución de los test

Para probar los test se deberán ejecutar los siguientes comando desde la terminal, hubicados en la carpeta del proyecto.

```
npm install
npm run test
```

Así mismo, si se desea saber que tanto han cubierto los test se puede ejecutar el siguiente comando.

```
npm run test -- --coverage
```

Nota: La URL a la cual la API se conecta se encuetra en el archivo src/app.config.ts