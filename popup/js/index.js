class Fetch{

    render(){
        
        //Instancia do XMLHttpRequest
        const httpRequest = new XMLHttpRequest();

        //Define que a função requestDone será chamdo quando a requisição for concluida
        httpRequest.onreadystatechange = requestDone
        
        //Abre a conexão com a API usando o metodo GET
        httpRequest.open('GET', 'https://rest.coinapi.io/v1/exchangerate/BTC', true);

        //Configura um header de autorização, o primeiro parametro é o nome do parametro e o segundo a chave
        //que foi fornecida para acessar a API
        httpRequest.setRequestHeader('X-CoinAPI-Key', '9E68560C-5F7A-402C-B131-3628228D254A');

        //Envia a requisição
        httpRequest.send();
        
        //Será chamada assim que a requisição for concluida
        function requestDone(){
            const container = document.getElementById('container');

            //Injeta na div container a resposta da requisição
            container.innerText = httpRequest.responseText;
        }
    }
}

const fetch = new Fetch();

fetch.render();