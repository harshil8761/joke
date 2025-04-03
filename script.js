const apiBody = document.getElementById('api_body');
const apiUrl = 'https://icanhazdadjoke.com/';

const fetchData = () => {
    fetch(apiUrl,{
        headers:{
            Accept: 'application/json',
        },
    }).then((res) => {
        return res.json();
    }).then((data) => {
        apiBody.innerHTML = data.joke;
    }).catch((error) => {
        apiBody.innerHTML = 'Api is not Working';
    })
}

fetchData();


document.getElementById('fetApi').addEventListener('click',fetchData);