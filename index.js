const { menu } = require("./menu.js");

const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

const url =
  "https://raw.githubusercontent.com/AbiPasundan/koda-b6-weekly1/refs/heads/main/data.json";

function mainMenu() {
  console.log(`Main Menu
        1. Tambah Data
        2. Lihat Data Pembelian
        3. Keranjang
        0. Kembali
        `);
  rl.on("line", (a) => {
    return handleMenu(a);
  });
}
mainMenu();



function handleMenu(a) {
  //
  
  switch (a) {
    case "1":
        console.log("Sedang memproses mohon ditunggu");
        menu()
      break;
    case "2":
      console.log("data kedua");
      break;
    case "3":
      console.log("data ketiga");
      break;
    case "0":
      rl.question('Exit (y or n)? ', (input) => {
        if (input.match(/^y(es)?$/i)) {
          console.log('Exiting application...');
          rl.close();
        } else {
          console.log('Cancelled exit. Returning to menu.');
          menu(); 
        }
      });
      break;
    default:
      console.log("input tidak valid");
      mainMenu();
      break;
  }
}