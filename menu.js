const url = "https://raw.githubusercontent.com/AbiPasundan/koda-b6-weekly1/refs/heads/main/data.json";

export async function menu() {
  fetch(url).then(obj => { obj.text()
    .then(val => {
    const data = JSON.parse(val);
    data.map((x) => {
        console.table(x);
        console.log(`Pilih menu dengan memasukan Id 
        0. Kembali
        `);
        switch (key) {
            case value:
                
                break;
        
            default:
                break;
        }
      });
    });

  });
}


// fetch(url)
//   .then(obj => {
//     // 1
//     obj.text()
//     .then(val => {
//         const data = JSON.parse(val)
//         const result = data.map(x => {
//           console.log(x);
//           return x
//         })
//     })

//     // 2
//     // obj.json().then(data => {
//     //     console.log(data[0].name);
//     // })
// })


// Catat waktu mulai sebelum fetch
// ai
// const startTime = new Date();

// fetch('https://raw.githubusercontent.com/AbiPasundan/koda-b6-weekly1/refs/heads/main/data.json";')
//   .then(response => response.json())
//   .then(data => {
//     // Catat waktu selesai setelah data diterima
//     const endTime = new Date();

//     // Hitung durasi dalam milidetik
//     const duration = endTime - startTime;

//     console.log(`Pengambilan data selesai dalam ${duration} milidetik.`);
//     console.log('Data yang diterima:', data);
//   })
//   .catch(error => {
//     // Catat waktu selesai meskipun terjadi kesalahan
//     const endTime = new Date();
//     const duration = endTime - startTime;

//     console.error(`Fetch gagal setelah ${duration} milidetik:`, error);
//   });



// Source - https://stackoverflow.com/a
// Posted by vsync, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-04, License - CC BY-SA 4.0

// const startTime = performance.now()

// menu()   // <---- measured code goes between startTime and endTime
    
// const endTime = performance.now()

// console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)




// function menu() {
//   fetch(url).then(obj => { obj.text()
//     .then(val => {
//     const endTime = performance.now()
//     const data = JSON.parse(val);
//     const result = data.map((x) => {
//         console.table(endTime - startTime);
//         // return x;
//       });
//     });

//   });
// }

// menu()