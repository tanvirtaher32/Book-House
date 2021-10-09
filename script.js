let searchField = document.querySelector('#searchField');
let searchBtn = document.querySelector('#searchBtn');
let searchResult = document.querySelector('#searchResult');



searchBtn.addEventListener('click',  () => {

    const url = `https://openlibrary.org/search.json?q=${searchField.value}`;
     fetch(url)
    .then(response =>  response.json())
    .then(res => displayData(res))
    
})

let displayData = (data) => {
    searchField.value='';
    searchResult.innerHTML = '';
    console.log(data);
    let h4 = document.createElement('h4');
    h4.innerHTML = `Total results found : ${data.numFound}`;
    searchResult.appendChild(h4);
    
    
    data.docs.forEach(book => {

        let div = document.createElement('div');
        div.innerHTML = `
    
                        
                      

                        <div class="col">
                            <div class="card h-100">
                            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top"   alt="...">
                                <div class="card-body">
                                    <h5 class="card-title text-start">${book.title}</h5>
                                    <p class="card-text text-start">${book.author_name}</p>
                                    <h6 class="text-start">First Published : ${book.first_publish_year}</h6>
                                </div>
                            </div>
                        </div>
                        

                    `

    searchResult.appendChild(div);

    })

 
    

    if(data.numFound === 0){
        h4.innerHTML ='Oops! No data found'
    }


}