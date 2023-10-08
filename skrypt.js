function wyczyscEkran() {
    document.getElementById('display').value = "";
}
function dodajDoWyniku(value) {
    document.getElementById("display").value += value;
}
function oblicz() {
    try {
        let dzialanie = document.getElementById('display').value;
        dzialanie = dzialanie.replace(/(\d+)\^(\d+)/g, '$1**$2');
        dzialanie = dzialanie.replace(/(\d+)%/g, '($1/100)');
        const wynik = eval(dzialanie);
        document.getElementById("display").value = wynik;
    } catch (error) {
        document.getElementById("display").value = "Błąd";
    }
}
