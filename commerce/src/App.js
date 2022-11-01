
import './App.css';
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
function App() {
  return (
    <>
<BrowserRouter>
<Routes>
      <Route index element={<Home/>}/>
       </Routes>
    </BrowserRouter>

    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
