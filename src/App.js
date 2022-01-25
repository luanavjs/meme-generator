import { useState } from "react"
import './App.css'
import html2canvas from 'html2canvas'

function App() {

  const [linea1,setLinea1] = useState('')
  const [linea2,setLinea2] = useState('')
  const [imagen,setImagen] = useState('')

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value)
  }
  const onChangeImagen = function(evento){
    setImagen(evento.target.value)
  }

  const onClickExportar = function (evento) {

    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="monkey-nervous">Monkey Nervous</option>
        <option value="pressure-guy">Pressure Guy</option>
        <option value="cabo">Cabo</option>
      </select><br/>
      <input onChange={onChangeLinea1} type="text" placeholder="Primera línea"/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder="Segunda línea"/><br></br>
      <button onClick={onClickExportar}>Exportar</button>
      
      <div className="meme" id="meme">
        <span>{linea1}</span><br/>
        <span>{linea2}</span>
        <img src={"/images/" + imagen + ".jpg"}></img>
      </div>

    </div>
  );
}

export default App;
