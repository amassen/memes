import React, {useState} from 'react';
import html2canvas from 'html2canvas';

const Imgmeme = () => {

    const [textmeme, setTextmeme]= useState(); //funcion encargda de manipular la variable
    const [imgmeme, setImgmeme]= useState();

    const textomeme = (e) => { //evento
        setTextmeme(e.target.value);
        console.log(e.target.value);
    }

    const seleccionarImg = (e) => { //evento
        setImgmeme(e.target.value);
        console.log(e.target.value);
    }

    const descarga = (e) => {
        html2canvas(document.querySelector("#exportar")).then(function(canvas) {
          let img = canvas.toDataURL("./memesImg/png");
          let link = document.createElement("a");
          link.download = "memepropio.png";
          link.href = img;
          link.click();
      });
      }

    return(

        <div className='box mt-5'>
            <h1>Meme Maker</h1>

            <div className='my-5'>
            <h3 className='py-3'>Elegi la imagen</h3>
            <div className='imagenes' >
                   
            <select onChange={seleccionarImg} className="form-select form-select-lg" name="" id="">
                    <option>Selecciona una imagen</option>
                    <option value={1}>fuego</option>
                    <option value={2}>cálculo</option>
                    <option value={3}>Julio Iglesias</option>
                    <option value={4}>Eddie</option>
                    <option value={5}>nene</option>
                    <option value={6}>Osvaldo Laport</option>                    
            </select> 
            </div>

            <div className='my-5'>
            <h3 className='py-3 '>Escribí el texto</h3>            
            <input onChange={textomeme} className='textInput' type='text' placeholder='Escribí el texto' />
            </div>
            </div>



            <figure className='text-center meme b-3' id='exportar'>
                <p className='mt-5 h1 text-center text-dark bg'>{textmeme}</p>
                <img src={`../memesImg/Imagen${imgmeme}.png`} className='figure-img mt-3 d-block m-auto' alt='imagen elegida'/>
            </figure>

            <button onClick={descarga} type='button' className='btn btn-primary mt-5 mb-4'>Descargar meme</button>

        </div>

    )
}

export default Imgmeme;