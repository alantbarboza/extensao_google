document.addEventListener('DOMContentLoaded', function(){ 

    let chave = window.localStorage.getItem('chaveAnotacoes');
    document.getElementById('txtAnotacoes').value = JSON.parse(chave);


    document.getElementById('txtAnotacoes').addEventListener('input', function() {
        let valorInput = JSON.stringify(this.value);
        window.localStorage.setItem('chaveAnotacoes',valorInput);
    });
})
