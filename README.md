# 3DAMNA - PGL > UT3 > Counter App With State Management (Context API)

Esta es una aplicación de contador simple desarrollada en Ionic. La aplicación muestra un contador y permite al usuario aumentar o disminuir el valor del contador haciendo clic en botones. También se puede alternar el idioma entre Español e Inglés.

## Características

- Muestra un contador en pantalla.
- Permite al usuario aumentar o disminuir el contador haciendo clic en botones.
- Alternar idioma entre español e inglés.
- La aplicación utiliza el manejo de estados con Zustand para gestionar el estado del contador de manera global y compartida entre componentes.

## Zustand

Zustand es una biblioteca de gestión de estado mínima y liviana para React que facilita la administración del estado global en tus aplicaciones. Puedes obtener más información sobre Zustand en su [sitio de documentación oficial](https://github.com/pmndrs/zustand).

## Interacción y Componentes

La aplicación utiliza algunos conceptos clave de interacción y componentes en Ionic:

- Utiliza botones (`IonFab`) de [DOCS de Ionic](https://ionicframework.com/docs/api/fab) para permitir al usuario interactuar con la aplicación y modificar el contador.
- Los componentes de texto (`IonText`) se utilizan para mostrar el valor actual del contador en la pantalla.

Para obtener más información sobre cómo agregar interactividad a las aplicaciones de ionic y aprender sobre los componentes disponibles, consulta la [documentación oficial de ionic](https://ionicframework.com/docs/).

## Navegación por Pestañas

Si deseas explorar la navegación por pestañas en Ionic, puedes consultar la documentación de [Tabs de Ionic](https://ionicframework.com/docs/api/tabs).

## Ejemplo de Uso

### 1. Configuración de Zustand

Primero, configuramos nuestro estado global utilizando Zustand en un archivo separado, como `CounterStore.ts`.

```javascript
// src/CounterStore.ts
import create from 'zustand';

type CounterStoreType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStoreType>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

### 2. Uso de Zustand en Componentes

Ahora, podemos usar el estado global de Zustand en nuestros componentes. Por ejemplo:

```javascript
import React from 'react';
import {
  IonContent,
  IonButton,
  IonText,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { useCounterStore } from './CounterStore';

const CounterApp: React.FC = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Counter App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonText className="counter-text">{count}</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                expand="full"
                color="primary"
                onClick={increment}
              >
                Increment
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                expand="full"
                color="danger"
                onClick={decrement}
              >
                Decrement
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CounterApp;
