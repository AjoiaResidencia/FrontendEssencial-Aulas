const baseURL = "https://viacep.com.br/ws/"
const returnType = "/json"
var resultados = [];

function buscarEndereco(event){
    event.preventDefault();
    var cep = document.getElementById("input-cep").value;
    cep = somenteNumeros(cep)
    if(cep.length === 8){
        buscarEnderecoAPI(cep);
        document.getElementById("input-cep").value = "";
        return;
    }
    return alert("CEP deve ter 8 caracteres")    
}

function somenteNumeros(cep){
    return cep.replace(/[^0-9]/g, "").trim()
}

function buscarEnderecoAPI(cep){
    const url = `${baseURL}${cep}${returnType}`
    fetch(url)
        .then((response) => {
            if(!response.ok) throw new Error(`Error. ${response.status}`);
            return response.json();
        })
        .then((data) => {            
            if(!("erro" in data)){
                resultados.push({
                    id: Math.floor(Math.random() * (999999 - 000001) + 000001),
                    cep: data.cep,
                    logradouro: data.logradouro,
                    complemento: data.complemento,
                    bairro: data.bairro,
                    localidade: data.localidade,
                    uf: data.uf,
                    ibge: data.ibge
                })

                localStorage.setItem("resultados", JSON.stringify(resultados));
                atualizarTabela();
            }else{
                alert("CEP não localizado!")
            }
        }).catch((err) => console.log(err))    
}


function atualizarTabela(){
    var linhasTabela = "";
    resultados.map((item) => {
        linhasTabela += `<tr>
                            <th scope="row">${item.cep}</th>
                            <td>${item.logradouro}</td>
                            <td>${item.complemento}</td>
                            <td>${item.bairro}</td>
                            <td>${item.localidade}</td>
                            <td>${item.ibge}</td>
                            <td>
                                <button type="button" onclick="limparRegistroDoHistorico(${item.id});" class="btn btn-danger">Limpar</button>
                            </td>
                        </tr>`
    });

    document.getElementById("corpo-tabela").innerHTML = linhasTabela;
}

function limparRegistroDoHistorico(id){
    var itemLocalizado = resultados.filter((r) => r.id === id);
    if(avisoDeConfirmacao(itemLocalizado.shift())){
       var novaLista = resultados.filter((r) => r.id !== id);
       resultados = novaLista;
       localStorage.setItem("resultados", JSON.stringify(resultados));
       atualizarTabela();
       alert(`Registro de pesquisa foi excluido`);
       return;
    }
}

function avisoDeConfirmacao(registro){
    return confirm(
        `Deseja excluir a pesquisa ${registro.cep} da lista de historicos?`
    )
}

function verificarLocalStorage(){
    var local = JSON.parse(localStorage.getItem("resultados"));
    if(local === null || local.length === 0) return;
    resultados = local;
    atualizarTabela();
}
