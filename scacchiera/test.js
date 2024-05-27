import { stampaScacchiera, scacchiera } from "./Scacchi.js"

import { mossa } from "./giocatore.js"

stampaScacchiera()
for (let i = 0; i < 100; i++) {
  let statusPedine = Object.values(scacchiera)
  let blacKing = statusPedine.find((el) => el == "kn")
  let whiteKing = statusPedine.find((el) => el == "kb")
  if (!blacKing) {
    console.log("White is the winner")
    break
  }
  if (!whiteKing) {
    console.log("Black is the winner")
    break
  }
  if (i % 2 == 0) {
    mossa("b")
  } else {
    mossa("n")
  }
  console.log("")
  stampaScacchiera()
}
