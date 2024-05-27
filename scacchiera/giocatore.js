import { elementoCasuale, scacchiera } from "./Scacchi.js"
import {
  mosseLegaliPedone,
  mosseLegaliTorre,
  mosseLegaliAlfiere,
  mosseLegaliCavallo,
  mosseLegaliRegina,
  mosseLegaliRe,
} from "./pedine.js"

// in base al colore prendiamo pedina casuale
// in base alla pedina presa ne prendiamo un movimento legale casuale

// chiedere alla scacchiera tutte le chiavi
// accumuliamo tutte le chiavi relative alle pedine del colore cercato
function posizioniPedinePerColore(colore) {
  let posizioni = Object.keys(scacchiera)
  let coloreChiavi = []
  for (let i = 0; i < posizioni.length; i++) {
    let posizione = posizioni[i]
    if (scacchiera[posizione][1] == colore) {
      coloreChiavi.push(posizione)
    }
  }
  return coloreChiavi
}

export function tutteLeMosseLegaliPerColore(colore) {
  let posizioni = posizioniPedinePerColore(colore)
  // vogliamo che mosseLegali sia un array il cui i-esimo elemento e' cosi fatto:
  // [
  //   "pb", <-- identificativo pedina
  //   "a2", <-- posizione di partenza
  //   "a3", <-- posizione di arrivo
  // ]
  let mosseLegali = []

  for (let i = 0; i < posizioni.length; i++) {
    let pos = posizioni[i]
    let pedina = scacchiera[pos]

    if (pedina[0] == "p") {
      let mosse = mosseLegaliPedone(pos)
      for (let i = 0; i < mosse.length; i++) {
        mosseLegali.push([pedina, pos, mosse[i]])
      }
      mosseLegali = mosseLegali.concat()
    }
    if (pedina[0] == "c") {
      let mosse = mosseLegaliCavallo(pos)
      for (let i = 0; i < mosse.length; i++) {
        mosseLegali.push([pedina, pos, mosse[i]])
      }
      mosseLegali = mosseLegali.concat()
    }
    if (pedina[0] == "t") {
      let mosse = mosseLegaliTorre(pos)
      for (let i = 0; i < mosse.length; i++) {
        mosseLegali.push([pedina, pos, mosse[i]])
      }
      mosseLegali = mosseLegali.concat()
    }
    if (pedina[0] == "a") {
      let mosse = mosseLegaliAlfiere(pos)
      for (let i = 0; i < mosse.length; i++) {
        mosseLegali.push([pedina, pos, mosse[i]])
      }
      mosseLegali = mosseLegali.concat()
    }
    if (pedina[0] == "q") {
      let mosse = mosseLegaliRegina(pos)
      for (let i = 0; i < mosse.length; i++) {
        mosseLegali.push([pedina, pos, mosse[i]])
      }
      mosseLegali = mosseLegali.concat()
    }
    if (pedina[0] == "k") {
      let mosse = mosseLegaliRe(pos)
      for (let i = 0; i < mosse.length; i++) {
        mosseLegali.push([pedina, pos, mosse[i]])
      }
    }
  }
  return mosseLegali
}

export function mossa(colore) {
  let mosseLegali = tutteLeMosseLegaliPerColore(colore)
  if (mosseLegali.length == 0) {
    console.log("non ci sono mosse legali!")
  } else {
    let mossaLegale = elementoCasuale(mosseLegali)
    if (mossaLegale) {
      delete scacchiera[mossaLegale[1]]
      scacchiera[mossaLegale[2]] = mossaLegale[0]
    }
  }
}
