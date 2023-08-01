var btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("click", async function(){
    var txt = document.getElementById("txt").value;
    var response = false;

    if (!txt) {
        swal("Atenção!", "Favor digite um texto ou palavra...", "warning");
    } else {
        response = await call_fetch('/palindrome.php?txt='+txt);
        trueOrFalse(response.data);
    }

});



async function call_fetch(url) {
    const resp = await fetch(url, {
        method: "GET"
    });
    return resp.json()
}

function trueOrFalse(string){
    var result = document.getElementById("result");
    result.innerHTML = "";
    result.innerHTML = `<span class="${string == 'PALINDROME' ? 'text-success' : 'text-danger'}">${string}</span>`;
}