window.addEventListener("DOMContentLoaded", function() {
    //when user clicks on load daya button, the data.txt should be dusplayed in the output area ascnycrounsly
    let btn1 = this.document.querySelector("#btn1");
    btn1.addEventListener("click", loadData);

    function loadData() {
        //1 - create an XHR object
        const xhr = new XMLHttpRequest ();

        //2 - configure the request
        xhr.open("GET", "../data/data.txt");

        //3 - action tto take when request is completed
        xhr.onload = function(){
            if(this.status===200){
                document.querySelector("#output").innerHTML = `THE DATA RECIEVED FROM THE FILE IS:  <p style="color:white;background-color:green">${this.responseText}</strong></p>`;
            }else{
                document.querySelector("#output").innerText = "cannot read file - file not found";
            }
            
        };
        //4 - execute the request
        xhr.send();
    }

    let btn2 = this.document.querySelector("#btn2");
    btn1.addEventListener("click", loadData);

    function loadData() {
        //1 - create an XHR object
        const xhr = new XMLHttpRequest ();

        //2 - configure the request
        xhr.open("GET", "../data/data.txt");

        //3 - action tto take when request is completed
        xhr.onload = function(){
            if(this.status===200){
                document.querySelector("#output").innerHTML = `THE DATA RECIEVED FROM THE FILE IS:  <p style="color:white;background-color:green">${this.responseText}</strong></p>`;
            }else{
                document.querySelector("#output").innerText = "cannot read file - file not found";
            }
            
        };
        //4 - execute the request
        xhr.send();
    }




});