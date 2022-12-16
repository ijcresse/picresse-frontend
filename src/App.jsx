import './App.css';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const App = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/0.1.0.loader.js",
    dataUrl: "build/0.1.0.data.unityweb",
    frameworkUrl: "build/0.1.0.framework.js.unityweb",
    codeUrl: "build/0.1.0.wasm.unityweb"
  });

  return (
    <div className="App">
      <Unity unityProvider={unityProvider} style={{ width: 1200, height: 900 }} /> 
      <h1>this is my web site - haazasahasmie ;)</h1>
    </div>
  );
}

export default App;
