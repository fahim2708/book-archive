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
    // Show total search result
    const totalSearch = document.getElementById('total-search');
    const total = docs.length;
    if (total > 0) {
        totalSearch.innerText = `Total ${total} books found `;
    }
    else {
        totalSearch.innerHTML = `<span class="text-danger">No Result found</span>`;
    }
    //clear previous search result
    searchResult.textContent = "";
    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 bg-dark border border-secondar">
        <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top h-75 w-50 mx-auto mt-3">
            <div class="card-body text-center">
                <h4 class="card-title text-white"><b> ${doc.title} </b></h4>
                <p class="card-text text-secondary"><i>By ${doc.author_name?.[0]} </i></p>
                <p class="card-text text-white"><b>Publisher: </b> ${doc.publisher?.[0]}</p>
                <p class="card-text text-white"><b>First Publish Year: </b> ${doc.first_publish_year}</p>
                <button class="btn btn-success text-white fw-bold"><i class="fas fa-download">      Download</i></button>
            </div>
        </div>`;
        searchResult.appendChild(div);
    });

}