$.getJSON('/json/livsmedelsdata.json', start);

function start(livsmedel){

    let ul = $('<ul></ul>');

    for(let element of livsmedel){

        let li = $('<li></li>');

        li.text(element.Namn);

        ul.append(li);

        console.log(element)
    }

    $('body').append(ul)

}



