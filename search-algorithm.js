let users = [
  {
    name: "Goku kakarot",
    pic: "https://imgs.search.brave.com/mZCLD2P9r7_hYEADf78wafau6YhEkZIRcEPxNWsEXnQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzczLzIx/L2Y2LzczMjFmNjRj/NmNkZGQxNzI4ZTBk/OTk3NjllZGIzZjc5/LmpwZw",
    bio: "the greatest super hero of all time",
  },
  {
    name: "Vegeta Prince",
    pic: "https://imgs.search.brave.com/7RnTSsl2Su_wzjAf0nuT4_gDbVQsO522LRP8gl22DCk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZGFy/ay12ZWdldGEtajY3/d2o1eDNja2RlazBt/dC5qcGc",
    bio: "proud saiyan prince with immense power",
  },
  {
    name: "Frieza Lord",
    pic: "https://imgs.search.brave.com/KScl1nrrQ_89AJmmZtKD2mUu_RiVVyLV2MPhtxiMUps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZnJp/ZXphLWRyYWdvbi1i/YWxsLWNoYXJhY3Rl/ci1tbmRhNWI4bXR5/NHh5ODRnLnBuZw",
    bio: "galactic tyrant with absolute authority",
  },
  {
    name: "Piccolo Green",
    pic: "https://imgs.search.brave.com/MtFcPl3Xhq0KNA2YUQqWOklNVRFyLkIEdh7SgtQ60MM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8zOS83/OC81eEE3cG8uanBn",
    bio: "skilled warrior and former enemy turned ally",
  },
  {
    name: "Krillin Baldie",
    pic: "https://imgs.search.brave.com/prE94RHL0OPe6b---agpLSjR49TJ-0qklZPNVDU2OXA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbWFs/bGltZy5wbmdrZXku/Y29tL3BuZy9zbWFs/bC80NDItNDQyNDM3/MV9ib3VuZGxlc3Mt/YW1iaXRpb24ta3Jp/bGxpbi1zdHItc3It/Z2FtZS1jYXJkcy1w/ZXJzb25uYWdlLnBu/Zw",
    bio: "loyal companion and skilled martial artist",
  },
  {
    name: "Trunks Future",
    pic: "https://imgs.search.brave.com/ZMeeVk1zpSf0H9FWN1dQECrWPnvyGtOsT4Vdwq2qMZQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA0L2M1/LzM2LzA0YzUzNjA5/OWM2OTY5N2RmYWZm/NDM1OWFlZmYyYzIz/LmpwZw",
    bio: "time traveler from future seeking to prevent disaster",
  },
  {
    name: "Gohan Scholar",
    pic: "https://imgs.search.brave.com/9R-BiDV9waXCgWFoK-yR2R_6KAQrOUx2g19fvvKYN_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvdGVl/bi1nb2hhbi03YzN2/a2lra28xbjRmNmI3/LmpwZw",
    bio: "powerful warrior balancing scholar life and combat",
  },
];

function showcards(arr){
  arr.forEach(function(user){
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    let blur = document.createElement("div");
    blur.style.backgroundImage = `url(${user.pic})`;
    blur.classList.add("blurred-layer");

    let content = document.createElement("div");
    content.classList.add("content");

    let h3 = document.createElement("h3");
    h3.textContent = user.name;

    let p = document.createElement("p");
    p.textContent = user.bio;

    content.appendChild(h3);
    content.appendChild(p);
    card.appendChild(content);
    card.appendChild(img);
    document.querySelector(".cards").appendChild(card);
  });
}
showcards(users);

let inp = document.querySelector(".inp");

inp.addEventListener("input",function(){
  let newuser = users.filter(function(user){
   return user.name.toLowerCase().includes(inp.value.toLowerCase());
  })

  let container = document.querySelector(".cards");
container.innerHTML = "";

if(newuser.length === 0){
  let h2 = document.createElement("h2")
  h2.textContent = "no results found";
  h2.style.color = "red";
  container.appendChild(h2);
}else{
showcards(newuser);
}

})





