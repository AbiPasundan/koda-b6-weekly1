const url =
  "https://raw.githubusercontent.com/AbiPasundan/koda-b6-weekly1/refs/heads/main/data.json";

import readline from "readline";

const rl = readline.createInterface(process.stdin, process.stdout);

export function menu() {
  fetch(url).then((obj) => {
    obj.text().then((val) => {
      const data = JSON.parse(val);
      const result = data.map((x) => {
        console.table(x);
        console.log(`Pilih menu dengan menuliskan id
        0. Kembali
        `);
      });
    });
  });
}
