import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/perfil';

function App() {
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <h1>Mis desarrolladores favoritos son</h1>
      <Perfil 
        nombre='Guillermo Rodas'
        pais='Colombia'
        imagen='guillermo'
        cargo='Ingeniero de Software Fullstack Javascript'
        empresa='Undefinedshell'
        perfil='Guillermo Rodas is a Full-stack JavaScript Engineer from Colombia. His favorites CSS colors are tomato, rebeccapurple, and papayawhip.'
        linkedin='https://www.linkedin.com/in/guillermorodas/'
        youtube='https://www.youtube.com/guillermorodas'
        twitter='https://twitter.com/rodasdev'
      />
      <Perfil 
        nombre='Oscar Barajas Tavares'
        pais='Mexico'
        imagen='oscar'
        cargo='Learning Engineer at Platzi | Experto en JavaScript'
        empresa='GNDX'
        perfil='apasionado por las tecnologías Web, enseño programación con JavaScript, Solidity, React, NextJS, Astro, TypeScript, Node, GitHub.'
        linkedin='https://www.linkedin.com/in/oscarbarajas/'
        youtube='https://www.youtube.com/@gndx?sub_confirmation=1'
        twitter='https://twitter.com/gndx'
      />
      <Perfil 
        nombre='MiduDev'
        pais='Barcelona'
        imagen='miguel'
        cargo='Ingeniero de Software'
        empresa='minudev'
        perfil='Es un Youtuber Programador JavaScript y Desarrollo Web. Reconocido Google Developer Expert, Microsoft MVP y GitHub Star'
        linkedin='https://es.linkedin.com/company/midudev'
        youtube='https://www.youtube.com/c/midudev'
        twitter='https://twitter.com/midudev?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
      />

     </div>
    </div>
  );
}

export default App;