import {useState} from "react";
// import BoutonStyle from "./BoutonStyle";
import classes from "./Compteur.module.css"
// import "./styles.css";
function Compteur(props) {

  const [valeur, setValeur] = useState(0);

  return (
      <>
        <p>{valeur}</p>
        <button className={classes.button} onClick={() => setValeur(valeur + 1)}>
          Incrémenter
        </button>

      </>
  )
}

export default Compteur;