
//buscar os links salvos
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key);

    let linksSave = JSON.parse(myLinks) || [];

    return linksSave;
}

//salvar um link no storega
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //se já tive um link salvo com algum id, não deixar duplicar
    const hasLink = linksStored.some( link => link.id === newLink.id )

    if (hasLink){
        console.log("esse link ja existe na sua lista");
        return;
    }

    //adicionar esse novo link na lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log("link salvo com sucesso");
}

//deletar algns link salvo
export function deleteLink(links, id){
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log("link deletado com sucesso");

    return myLinks;
}