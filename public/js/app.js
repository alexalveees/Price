console.log('javascript no frontend')

fetch('/cotacoes?ativo=aapl').then((response) => { 
    response.json().then((data) => {
        console.log(data);           
    })
})
