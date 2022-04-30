import { Chess } from "chess.js";

const chess = new Chess();

// while (!chess.game_over()) {
//   const moves = chess.moves();
//   const move = moves[Math.floor(Math.random() * moves.length)];
//   chess.move(move);
// }
console.log(chess.fen());
console.log(chess.game_over());

//first move

chess.move("e4");
chess.move("e5");
chess.move("f4");

console.log(chess.ascii());

console.log(chess.move("d4"));

console.log(chess);
console.log(chess.history());
const pgn = chess.pgn();
chess.load_pgn(
  "1. d4 e6 2. c4 Bb4+ 3. Nc3 b6 4. f3 Nf6 5. e4 Bxc3+ 6. bxc3 Nxe4 7. fxe4 Qh4+ 8. g3 Qxe4+ 9. Ne2 Qxh1 10. Bf4 0-1"
);
chess.move("Nd7");
console.log(chess.pgn());
console.log(chess.fen());
