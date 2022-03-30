const fs = require("fs");
const {parse} = require("querystring");

var url = require('url');
var path = require('path');

var list = [];



var readFile = (file) => {
    let html = fs.readFileSync(__dirname + "/views/html/"+ file, "utf8");
    return html;
};

var collectData = (rq, cal) => {
    var data = '';
    rq.on('data', (chunk) => {
        data += chunk;
    });
    rq.on ('end', () => {
        let new_element = parse(data);
        cal(parse(data));
    });
}

var creatlista = (list) =>{
    let listaGerada = '';

    let layot =  `<tr>
    <td>{$Codigo de Indentificação}</td>
      <td>{$Nome}</td>
      <td>{$Valor do Investimento}</td>
      <td>{$Funcionario?}</td>
  </tr>`;

list.forEach(element => {
    listaGerada += layot.replace("{$Codigo de Indentificação}", element.cod)
                                .replace("{$Nome}" , element.fname)
                                .replace("{$Valor do Investimento}" , element.valor)
                                .replace("{$Funcionario?}" , element.sim?"sim": "nao")
                                .replace("{$Funcionario?}" , element.compra?" ": "nao");
});

return listaGerada;

}
module.exports = (request, response) => {
    if (request.method === 'GET') {
        
        let url_parsed = url.parse(request.url, true);
        switch (url_parsed.pathname) {
            case '/':
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(readFile("index.html").replace("@$list@", list.length).replace("@$listindex@" , creatlista(list)))
                break;
            case '/element':
                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end("Elemento: " +url_parsed.query.id + " acessado!");
                break;
                case '/compra':
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(readFile("compra.html").replace("@$listcompra@", list.length));
                break;
            default:
                break;
        }
      } else if (request.method === 'POST') {

        switch (request.url.trim()) {
            case '/salva':
                response.writeHead(200, {'Content-Type': 'text/html'});
                collectData(request, (data) => {
                    console.log(data);
                    list.push(data);
                    //let list = @$list@.
                    //list(data);
                    //this.list();
                     //list;
                     //let = tbody = document.getElementById("tbody");
                     //let tr = document.getElementById('tr');
                     //let td = document.getElementById("nome");
                     //for(let  i =  0; i < list.length; i++)
                     //{
                        //list[i].replace("{$fname}" , fname);
                    // }

                    
                });  
                response.end(readFile("index.html").replace("@$list@", list.length)
                .replace("@$listindex@" , creatlista(list)));  
                break;

                response.end(readFile("compra.html").replace("@$list@", list.length)
                .replace("@$listindex@" , creatlista(list)));  
                break;
            
                
        
            default:
                response.writeHead(404, {'Content-Type': 'text/plain'});
                response.end('Not a post action!');
                break;
        }
      }
};