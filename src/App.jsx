import './App.css';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { AxiosProvider } from './context/AxiosContext';
import Topbar from './components/Topbar.jsx';

const App = () => {
  //TODO: enforce versioning to prevent browser cache errors
  //TODO: inform player if this doesn't load properly
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/picresse.loader.js",
    dataUrl: "build/picresse.data.unityweb",
    frameworkUrl: "build/picresse.framework.js.unityweb",
    codeUrl: "build/picresse.wasm.unityweb"
  });

  return (
    <AxiosProvider>
      <div className="app">
        <Topbar />
        <div className='app-unity-container'>
          {/*TODO: WebGL warning: clientWaitSync: ClientWaitSync must return TIMEOUT_EXPIRED until control has returned to the user agent's main loop. (only warns once)  */}
          {/* <Unity unityProvider={unityProvider} className='app-unity-viewport' />  */}
        </div>
      </div>
    </AxiosProvider>
  );
}

export default App;
