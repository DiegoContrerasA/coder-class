
import './App.css';
// import Contador1 from './componentsWithCustomHook/Contador1';
// import Contador2 from './componentsWithCustomHook/Contador2';
// import Contador3 from './componentsWithCustomHook/Contador3';

// import Contador1 from './componentsWithHOC/Contador1';
// import Contador2 from './componentsWithHOC/Contador2';
// import Contador3 from './componentsWithHOC/Contador3';

import Contador1 from './componentsWithRenderProps/Contador1';
import Contador2 from './componentsWithRenderProps/Contador2';
import Contador3 from './componentsWithRenderProps/Contador3';

function App() {
  return (
    <div className="App">
     <h1>Custom Hooks</h1>
     <Contador1 />
     <br />
     <hr />
     <br />
     <Contador2 />
     <br />
     <hr />
     <br />
     <Contador3 />
    </div>
  );
}

export default App;
