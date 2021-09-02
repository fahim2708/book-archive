//Get Search Input Data
const searchBook = () => {
    const getSearchInput = document.getElementById('search-field');
    const searchInput = getSearchInput.value;
    //console.log(searchInput);
    getSearchInput.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchInput}`;
    //console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}

//Display Search Result
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    //clear previous search result
    searchResult.textContent = "";
    docs.forEach(doc => {
        //console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top h-75 w-50 mx-auto mt-3">
            <div class="card-body text-center">
                <h4 class="card-title"><b> ${doc.title} </b></h4>
                <p class="card-text text-secondary"><i> ${doc.author_name?.[0]} </i></p>
                <p class="card-text"><b>Publisher: </b> ${doc.publisher?.[0]}</p>
                <p class="card-text"><b>First Publish Year: </b> ${doc.first_publish_year}</p>
            </div>
        </div>`;
        searchResult.appendChild(div);




    });

}