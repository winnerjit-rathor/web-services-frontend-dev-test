function getSuperHeroes(){$.ajax({url:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json",method:"GET",dataType:"json",data:{format:"json"}}).then(function(e){renderSuperHeroes(e)})}function renderSuperHeroes(e){$.each(e,function(e,a){a=`
          <div class="hero__container flex">
              <div class="hero__img">
                  <img src="${a.images.sm}" alt="Super Heroes">
              </div>

              <div class="hero-info">
                  <h2>${a.name}</h2>
                  <p class="fullname">Full Name: ${a.biography.fullName}</p>
                  <p class="race">Race: ${a.appearance.race}</p>
                  <p class="alignment">Alignment: ${a.biography.alignment}</p>
                  <p class="publisher">Publisher: ${a.biography.publisher}</p>
              </div>
          </div>`;$("#suphero-list").append(a)})}$(function(){getSuperHeroes()});