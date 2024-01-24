let resourcesHTML = ""

resources.map(resource => resourcesHTML += `<article>
    <h2>${resource.category}</h2>
    <p>${resource.text}</p>
    <ul>${resource.sources.map(source => 
      `<li><a href="${source.url}">${source.title}</a></li>`
    ).join('')}</ul>
    </article>`)


const main = document.getElementsByTagName("main")
main[0].innerHTML =  resourcesHTML
       
    