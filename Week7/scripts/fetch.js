window.addEventListener("DOMContentLoaded", function () {
  // when user clicks on Load Data button, the data.txt should be displayed in "output" area asynchrnously.
  let btn1 = this.document.querySelector("#btn1");
  btn1.addEventListener("click", loadData);

  let btn2 = this.document.querySelector("#btn2");
  btn2.addEventListener("click", loadJSON);

  let btn3 = this.document.querySelector("#btn3");
  btn3.addEventListener("click", loadJSONS);

  let btn4 = this.document.querySelector("#btn4");

  btn4.addEventListener("click", loadAPI);

  function loadData() {
    // console.log(fetch("../data/data.txt"));

    fetch("../data/data.txt")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not found - file may be deleted");
        }
        return response.text();
      })
      .then((data) => {
        // console.log(data);
        document.querySelector(
          "#output"
        ).innerHTML = `<strong>${data}</strong>`;
      })
      .catch((error) => {
        document.querySelector(
          "#output"
        ).innerHTML = `<strong>${error}</strong>`;
      });
  }

  function loadJSON() {
    fetch("../data/user.json")
      .then((response) => {
        // console.log(response.json());
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // document.querySelector("#output").innerHTML =
      });
  }

  function loadJSONS() {
    fetch("../data/users.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not found - file may be deleted");
        }
        return response.json();
      })
      .then((data) => {
        data.forEach(
          (user) =>
            (document.querySelector(
              "#output"
            ).innerHTML += `<h1>${user.name}</h1>`)
        );
      })
      .catch((error) => {
        document.querySelector("#output").innerHTML;
      });
  }

  function loadAPI() {

    fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {return response.json()}).then((data) => { document.querySelector("#output"). innerHTML +=
      
      console.log(hello);
    })
  }
});
