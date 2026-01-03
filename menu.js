const url =
  "https://raw.githubusercontent.com/AbiPasundan/koda-b6-weekly1/refs/heads/main/data.json";

export async function menu() {
  fetch(url).then((obj) => {
    // 1
    obj.text().then((val) => {
      const data = JSON.parse(val);
      const result = data.map((x) => {
        console.table(x);
        // return x;
      });
    });

    // 2
    // obj.json().then(data => {
    //     console.log(data[0].name);
    // })
  });
}

// function menu() {
//     fetch(url).then(res => {
//         res.text
//         // const result = JSON.parse(res)
//         // return result
//     }).then( res => {
//         const result = JSON.parse(res)
//         return result
//     }
//         // const result = JSON.parse(res)
//         // return result
//     )
// }

// menu()

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
