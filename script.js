function toggleButton(articleId) { 
   
    let resourcesHTML = ""
        
    resources.map(resource => {
        if (resource.category === articleId) {
            resourcesHTML += `<article id="${resource.category}">
            <h2>${resource.category}</h2>
            <p>${resource.text}</p>
            <ul>${resource.sources.map(source => 
            `<li><a href="${source.url}">${source.title}</a></li>`
            ).join('')}</ul>
            </article>` 
        }
    })

    const main = document.getElementsByTagName("main")
    main[0].innerHTML =  resourcesHTML
} 

toggleButton(`HTML`)


const buttons = document.querySelectorAll("#buttons button")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"))
        button.classList.add("active")
    })
}) 