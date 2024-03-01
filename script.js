let guzik = document.querySelector("#guzik");

guzik.addEventListener("click", function(){
    let liczba = document.querySelector("#liczba").value;
    let tabela = document.querySelectorAll("table tr");

    // dla pierwszego wiersza
    let komorki = tabela[0].querySelectorAll("td");
    for(let i = 0; i < komorki.length; i++) {
        komorki[i].style.backgroundColor = "hsl(" + liczba + ", 100%, 50%)";
    }

    // dla drugiego wiersza
    komorki = tabela[1].querySelectorAll("td");
    let sValues = [80, 60, 40, 20];
    for(let i = 0; i < komorki.length; i++) {
        komorki[i].style.backgroundColor = "hsl(" + liczba + ", " + sValues[i] + "%, 50%)";
    }
});
