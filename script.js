/* Members render function */
function renderMembers(inMembers) {
  const membersDiv = document.getElementById("members-list");
  if(membersDiv) {
    for(const member of inMembers) {
      const memberDiv = document.createElement("div");
      memberDiv.classList.add("member-div");

      const memberImg = document.createElement("img");
      memberImg.src = member.img;
      memberImg.setAttribute("loading", "lazy");
      memberDiv.appendChild(memberImg);

      const memberName = document.createElement("p");
      memberName.textContent = member.name;
      memberName.classList.add("name");
      memberDiv.appendChild(memberName);

      const memberRole = document.createElement("p");
      memberRole.textContent = member.role;
      memberRole.classList.add("role");
      memberDiv.appendChild(memberRole);

      const place = document.createElement("p");
      place.textContent = member.place;
      place.classList.add("role");
      memberDiv.appendChild(place);

      membersDiv.appendChild(memberDiv);
    }
  }
}

/* Slideshow control */
const controllers = new Map();
function initSlideshow(containerId) {
  const container = document.getElementById(containerId);
  const slides = Array.from(container.getElementsByClassName("mySlides"));

  let index = 1;
  function show(n) {
    if(n > slides.length) {
      index = 1;
    }
    else if(n < 1) {
      index = slides.length;
    }
    else {
      index = n;
    }

    slides.forEach(s => (s.style.display = "none"));
    slides[index - 1].style.display = "block";
  }

  function plus(n) {
    show(index + n);
  }

  function go(n) {
    show(n);
  }

  container.querySelector(".prev")?.addEventListener("click", () => plus(-1));
  container.querySelector(".next")?.addEventListener("click", () => plus(1));

  controllers.set(containerId, { plus, go, container });
  show(1);
}

window.plusSlides = function (n, el) {
  const container = el?.closest(".slideshow");
  if(!container) {
    return;
  }
  controllers.get(container.id)?.plus(n);
};

window.currentSlide = function (n, el) {
  const container = el?.closest(".slideshow");
  if(!container) {
    return;
  }
  controllers.get(container.id)?.go(n);
};

initSlideshow("slideshow1");
initSlideshow("slideshow2");

/* Hamburger navigation */
const hamBtn = document.getElementById("ham");
const closeBtn = document.getElementById("close");
const nav = document.getElementsByTagName("NAV");
const header = document.querySelector(".header");

hamBtn.onclick = function() {
  header.style.flexWrap = "wrap";
  hamBtn.style.display = "none";
  nav[0].style.display = "flex";
  closeBtn.style.display = "block";
};

closeBtn.onclick = function() {
  header.style.flexWrap = "nowrap";
  hamBtn.style.display = "block";
  nav[0].style.display = "none";
  closeBtn.style.display = "none";
};
