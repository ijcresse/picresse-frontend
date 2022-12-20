import './App.css';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

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
    <div className="App">
      <Topbar />
      {/* <Unity unityProvider={unityProvider} style={{ width: 1200, height: 900 }} />  */}
      
    </div>
  );
}

export default App;
