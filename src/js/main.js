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
          <div class="hero">
              <div class="hero__img">
                  <img src="${val.images.sm}" alt="Super Heroes">
              </div>

              <div class="hero__info ${val.biography.alignment}">
                  <h2 class="title">${val.name}</h2>
                  <p class="fullname">Full Name: ${val.biography.fullName}</p>
                  <p class="race">Race: ${val.appearance.race}</p>
                  <p class="alignment">Alignment: ${val.biography.alignment}</p>
                  <p class="publisher">Publisher: ${val.biography.publisher}</p>
              </div>
          </div>`;
      $('#hero-container').append(superhero);
  });
}

function nameLiveSearch(e) {
  var delayInMilliseconds = 500; //0.5 second
  setTimeout(function() {
    filterByName(e.target.value);
  }, delayInMilliseconds);
}

function filterByName(inputName) {
  $.each($(".hero"), function(index, hero){
    let title_text = $(hero).find(".title").text();
    title_text = title_text.toLowerCase();
    if(title_text.includes(inputName.trim().toLowerCase())) {
      $(hero).show();
    } else {
      $(hero).hide();
    }
  });
}

$(function(){

  getSuperHeroes();
  
  const name_input = document.querySelector('#name');
  name_input.addEventListener('change', nameLiveSearch);
  name_input.addEventListener("keyup", nameLiveSearch);

  $("form").on("submit", function(e){
    e.preventDefault();
    filterByName(name_input.value);
  });

});
