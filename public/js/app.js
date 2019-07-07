 // Função para mudar o conteúdo de input
    function modifyInput() {
        let currency = document.getElementById('orig').value;
        let valor = document.getElementById("real");
        valor.value = valor.value.replace(',', '.');
        if (!isNaN(parseFloat(valor.value))) {
            document.getElementById("valor").value = (valor.value * currency).toFixed(2);
            console.log(valor.value);
            console.log(currency);
        }
    }

    // Função para adicionar uma espera de evento em t
    function load() {
        var real =  document.getElementById('real');
        real.addEventListener("keyup", modifyInput, false);
    }

    document.addEventListener("DOMContentLoaded", load, false)