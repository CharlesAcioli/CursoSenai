const apiKey = 'af526ad1433bc1acee233b9d6f99676a';
const botao = document.getElementById('buscar');
const resultadoDiv = document.getElementById('temperature');

function buscarClima() {
    const cidade = document.getElementById('cidade').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&Lang=pt_br`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Cidade não encontrada');
            }
            return response.json();
        })
        .then(data => {
            const temperature = Math.round(data.main.temp);
            const humidade = data.main.humidity;
            const pais = data.sys.country;
            const city = data.name;
            resultadoDiv.innerHTML = `Temperatura em: ${city} ${pais} ${temperature}°C, Humidade: ${humidade}%`;
        })
        .catch(error => {
            resultadoDiv.innerHTML = `Erro: ${error.message}`;
        })
}