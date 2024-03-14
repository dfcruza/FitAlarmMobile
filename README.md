# Requerimientos
- Node.js
- Android tools
Instalados en su equipo

# Pasos recomendados:
Nota: Asegurese de tener instaladas las dependencias nativas [aquí](https://reactnative.dev/docs/environment-setup#installing-dependencies)
​
### Vista previa y ejecución del proyecto:
1. Ejecute la terminal de comandos presionando la tecla windows + R, escribiendo `cmd` y dando enter.
2. Ubiquese en la carpeta donde clono el repositorio.
3. En la terminal de comandos ejecute `npm install` para instalar todas las dependencias. NOTA: si al finalizar la ejecución le indican el uso del comando `npm audit fix --force` ABSTENGASE de hacer uso de este ya que puede afectar la ejecución del proyecto.  
4. Para equipos iOS (unicamente en MacOS)
    1. Ejecute `npx pod-install`
    2. Posteriormente, ejecute `npx react-native run-ios` para vizualizar en el simulador de iOS o siga las instruciones [aquí](https://reactnative.dev/docs/running-on-device#running-your-app-on-ios-devices) para ejecutarlo en un dispositivo fisico.
5. Para equipos android.
    1. Utilice el dispositvo virtual en [Android Studio](https://developer.android.com/studio/index.html) o siga las instrucciones [aquí](https://reactnative.dev/docs/running-on-device#running-your-app-on-android-devices) para ejecutarlo en un dispositivo fisico.
    3. Ejecute `npx react-native run-android` en la terminal de comandos.
