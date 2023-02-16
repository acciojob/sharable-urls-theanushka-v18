// your code here

let button = document.getElementById('button');


button.addEventListener("click", function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let year = document.getElementById('year').value;
    let h3 = document.getElementById("url");
    if(name != "" && year!= "") {
        h3.innerHTML = "https://localhost:8080/" + "?name=" + name + "&year=" + year;
    }

    if(name != "" && year == "") {
        h3.innerHTML = "https://localhost:8080/" + "?name=" + name;
    }

    if(name == "" && year != "") {
        h3.innerHTML = "https://localhost:8080/" + "?year=" + year;
    }
})
