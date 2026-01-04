const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const url =
  "https://raw.githubusercontent.com/AbiPasundan/koda-b6-weekly1/refs/heads/main/data.json";

let currentMenu = "MAIN";
let data = [];
let cart = [];
let bill = [];

async function loadData() {
  if (data.length > 0) {
    return;
  }
  const res = await fetch(url);
  data = await res.json();
}

function mainMenu() {
  console.clear();
  console.log(`
=== MAIN MENU ===
1. Tambah Data
2. Lihat Keranjang
3. Check Out
4. History
0. Keluar
`);
  currentMenu = "MAIN";
}

function showDataMenu() {
  console.clear();
  console.log("=== DATA PEMBELIAN ===");
  console.table(data);

  console.log(`
Masukkan ID menu untuk menambahkan ke keranjang
0. Kembali
`);
  currentMenu = "ADD";
}

function showCart() {
  console.clear();
  console.log("=== KERANJANG ===");

  if (cart.length === 0) {
    console.log("Keranjang masih kosong");
  } else {
    console.table(cart);
  }

  console.log(`
0. Kembali
`);
  currentMenu = "CART";
}

function checkOut() {
  console.clear();
  console.log("=== CHECKOUT ===");
  if (cart.length === 0) {
    console.log("belum ada barang belanjaan");
  } else {
    // console.log("yakin ingin Checkout?");
    console.log(cart);
  }
  console.log(`
1. Checkout
0. Kembali
`);
// inisialisasi
  currentMenu = "CHECKOUT";
}

function historyBill() {
  console.clear();
  console.log("=== History ===");
  if (data.length === 0) {
    console.log("Riwayat Belanja Masih Kosong");
  } else {
    console.log("Ok ada Riwayat Belanja");
    console.log(data);
  }
  console.log(`
1. Nyenyenye
0. Kembali
`);
// inisialisasi
  currentMenu = "CHECKOUT";
}

rl.on("line", async (input) => {
  switch (currentMenu) {
    case "MAIN":
      await handleMainMenu(input);
      break;
    case "ADD":
      handleAddMenu(input);
      break;
    case "CART":
      if (input.trim() === "0") mainMenu();
      break;
    case "CHECKOUT":
      hanleCheckOut(input);
      break;
    case "HISTORY":
      handleHistoryBill(input);
      break;
  }
});

async function handleMainMenu(input) {
  switch (input.trim()) {
    case "1":
      console.log("Memuat data...");
      await loadData();
      showDataMenu();
      break;
    case "2":
      showCart();
      break;
    case "3":
      checkOut();
      break;
    case "4":
      historyBill();
      break;

    case "0":
      rl.question("Apakah yakin ingin keluar (y/n)? ", (answer) => {
        if (/^y(es)?$/i.test(answer)) {
          rl.close();
        } else {
          mainMenu();
        }
      });
      break;

    default:
      console.log("Input tidak valid");
  }
}

function handleAddMenu(input) {
  input = input.trim();

  if (input === "0") {
    mainMenu();
    return;
  }

  const id = Number(input);
  if (Number.isNaN(id)) {
    console.log("ID harus berupa angka");
    return;
  }

  const selected = data.find((item) => item.id === id);

  if (!selected) {
    console.log("ID tidak ditemukan");
    return;
  }

  cart.push({ ...selected });

  console.log("Menu berhasil ditambahkan ke keranjang");
  console.table([selected]);
}

function hanleCheckOut(input) {
  input = input.trim();
  if (input === "0") {
    mainMenu();
    return;
  }
  if (input === "1") {
    // mainMenu();
    rl.question("yakin ingin Checkout? y/n", (answer) => {
      if (/^y(es)?$/i.test(answer)) {
        console.log("ok let's go");
        console.log(data.push(bill.name));
        //   mainMenu();
      } else {
        mainMenu();
      }
    });
    return;
  } else if (input !== "0" && input !== "1") {
    console.log("input tidak palid");
    return;
  }
}

function handleHistoryBill(input) {
  console.log("history", input);
}

mainMenu();
