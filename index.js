document.getElementById('searchBtn').addEventListener('click', transfarData => {
    loadData(document.getElementById('input-box').value)
    console.log(document.getElementById('input-box').value);
    
})

const loadData = async(input) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    try{
        fetch(url)
        .then(res => res.json())
        .then(data => showDataToCard(data.meals))
    }
    catch(err){
        console.log(err);
    }
}

const showDataToCard = cardsAll =>{
    console.log(cardsAll);
    const cardContainer = document.getElementById('card-container')
    
    
    
    for (const cards of cardsAll) {
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = ""
        cardDiv.innerHTML = `
        <div class="card card-side bg-base-100 border">
        <figure class="w-1/2 rounded-lg"><img src="${cards.strMealThumb}" alt=""/></figure>
                <div class="card-body w-1/2">
                  <h2 class="card-title">${cards.strMeal}</h2>
                  <p class="">${cards.strArea}</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary bg-[#FFC107] hover:bg-[#EEB200] border-none text-black">View Details</button>
                  </div>
                </div>
                </div>
        `
        cardContainer.appendChild(cardDiv);
    }

    document.getElementById('input-box').value = "";
}

loadData();