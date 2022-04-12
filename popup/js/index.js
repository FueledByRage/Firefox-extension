class Fetch{

    render(){
        const httpRequest = new XMLHttpRequest();
        
        
        httpRequest.open('GET', 'https://rest.coinapi.io/v1/exchangerate/BTC', true);
        httpRequest.setRequestHeader('X-CoinAPI-Key', '9E68560C-5F7A-402C-B131-3628228D254A');
        httpRequest.send();
        httpRequest.onreadystatechange = requestDone
        
        function requestDone(){
            const container = document.getElementById('container');
            container.innerText = httpRequest.responseText;
        }
    }
}

const fetch = new Fetch();

fetch.render();