function renderMembers(inMembers) {
  const membersDiv = document.getElementById("members-list");
  if(membersDiv) {
    for(const member of inMembers) {
      const memberDiv = document.createElement("div");
      memberDiv.classList.add("member-div");

      const memberImg = document.createElement("img");
      memberImg.src = member.img;
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
