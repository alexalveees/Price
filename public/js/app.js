console.log('javascript no frontend')

fetch('http://localhost:3000/cotacoes?ativo=aapl').then((response) => { 
    response.json().then((data) => {
        console.log(data);           
    })
})
