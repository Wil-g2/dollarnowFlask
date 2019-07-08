 // Função para mudar o conteúdo de input
    function modifyInput() {
        let currency = document.getElementById('orig').value;
        let valor = document.getElementById("real");
        valor.value = valor.value.replace(',', '.');
        if (!isNaN(parseFloat(valor.value))) {
            document.getElementById("valor").value = (valor.value * currency).toFixed(2);
        }
    }

    function modifyInputTot() {
        let currency = document.getElementById('orig').value;
        let valor = document.getElementById("valor");
        valor.value = valor.value.replace(',', '.');
        if (!isNaN(parseFloat(valor.value))) {
            document.getElementById("real").value = (valor.value / currency).toFixed(2);
        }
    }

    // Função para adicionar uma espera de evento em t
    function load() {
        var real =  document.getElementById('real');
        var valor =  document.getElementById('valor');
        real.addEventListener("keyup", modifyInput, false);
        valor.addEventListener("keyup", modifyInputTot, false);
    }

    document.addEventListener("DOMContentLoaded", load, false)