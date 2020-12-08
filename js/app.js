document.getElementById(`generar-nombre`).addEventListener('submit', cargarNombres);

// Llamado Ajax e imprimir resultados
function cargarNombres(e){
    e.preventDefault;
    
    // leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value

    let url = '';
    url += 'https://randomuser.me/api/?inc=name&noinfo&';

    // Si hay origen agregarlo a url
    if(origenSeleccionado != ''){
        url += `nat=${origenSeleccionado}&`
    }
    // Si hay origen agregarlo a url
    if(generoSeleccionado != ''){
        url += `gender=${generoSeleccionado}&`
    }
    // Si hay una cantidad
    if(cantidad != ''){
        url += `results=${cantidad}&`
    }

    //crear fetch
    fetch(url)
        .then(function(res){
            return res.json()
        })
        .then(function(nombres){
            console.log(nombres)
            nombres.results.forEach(function(nombre){
                let htmlNombres = '<h2>Nombres Generados</h2>';
           
            htmlNombres +='<ul class="lista">'
            // Foreach
            nombres.results.forEach(function(nombre){
            
                htmlNombres += `<li> ${nombre.name.first}
                
                </li>`
                //console.log(i[e])
            })
            htmlNombres +='</ul>'

            document.getElementById('resultado').innerHTML = htmlNombres
            })

        })
        .catch(function(error){
            console.log(error)
        })


}

 