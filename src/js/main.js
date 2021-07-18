/***********************************************
// Get superheroes from API
 **********************************************/
function getSuperHeroes() {
  $.ajax({
    url: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json",
    method: 'GET',
    dataType: 'json',
    data: {
      format: 'json',
    }
  }).then(function(data){
    renderSuperHeroes(data);
  });
}

function renderSuperHeroes(data) {
  $.each(data, function(index, val){
          let superhero = `
          <div class="hero__container flex">
              <div class="hero__img">
                  <img src="${val.images.sm}" alt="Super Heroes">
              </div>

              <div class="hero-info">
                  <h2>${val.name}</h2>
                  <p class="fullname">Full Name: ${val.biography.fullName}</p>
                  <p class="race">Race: ${val.appearance.race}</p>
                  <p class="alignment">Alignment: ${val.biography.alignment}</p>
                  <p class="publisher">Publisher: ${val.biography.publisher}</p>
              </div>
          </div>`;
      $('#suphero-list').append(superhero);
  });

  
}

$(function(){
  getSuperHeroes();
});
