function getSuperHeroes(){$.ajax({url:"https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json",method:"GET",dataType:"json",data:{format:"json"}}).then(function(e){renderSuperHeroes(e)})}function renderSuperHeroes(e){$.each(e,function(e,a){a=`
          <div class="hero">
              <div class="hero__img">
                  <img src="${a.images.sm}" alt="Super Heroes">
              </div>

              <div class="hero__info ${a.biography.alignment}">
                  <h2 class="title">${a.name}</h2>
                  <p class="fullname">Full Name: ${a.biography.fullName}</p>
                  <p class="race">Race: ${a.appearance.race}</p>
                  <p class="alignment">Alignment: ${a.biography.alignment}</p>
                  <p class="publisher">Publisher: ${a.biography.publisher}</p>
              </div>
          </div>`;$("#hero-container").append(a)})}function nameLiveSearch(e){setTimeout(function(){filterByName(e.target.value)},500)}function filterByName(t){$.each($(".hero"),function(e,a){let n=$(a).find(".title").text();n=n.toLowerCase(),n.includes(t.trim().toLowerCase())?$(a).show():$(a).hide()})}$(function(){getSuperHeroes();const a=document.querySelector("#name");a.addEventListener("change",nameLiveSearch),a.addEventListener("keyup",nameLiveSearch),$("form").on("submit",function(e){e.preventDefault(),filterByName(a.value)})});