// ------------------ SELECTORS ------------------
const addnote = document.querySelector("#add-note");
const form_container = document.querySelector(".form-wrapper");
const cardsContainer = document.querySelector(".cards-container");
const closed_form = document.querySelector("#close-form");
const form = document.querySelector("form");

const upbutton = document.querySelector("#up-btn");
const downbutton = document.querySelector("#down-btn");

const imageUrlInput = document.querySelector(
  'input[placeholder="https://example.com/photo.jpg"]'
);
const fullNameInput = document.querySelector(
  'input[placeholder="Enter full name"]'
);
const homeTownInput = document.querySelector(
  'input[placeholder="Enter home town"]'
);
const purposeInput = document.querySelector(
  'input[placeholder="e.g., Quick appointment note"]'
);
const categoryRadios = document.querySelectorAll(
  'input[type="radio"][name="category"]'
);



// ------------------ LOCAL STORAGE ------------------
function savetolocalstorage(obj){ 
  if(localStorage.getItem("tasks") === null)
    { let tasks = []; 
      tasks.push(obj); 
      localStorage.setItem("tasks",JSON.stringify(tasks)); 
    }else{ 
      let tasks = JSON.parse(localStorage.getItem("tasks")); 
      tasks.push(obj); 
      localStorage.setItem("tasks",JSON.stringify(tasks)); 
    } }

// ------------------ SHOW CARDS ------------------
function showCards() {
  cardsContainer.innerHTML = "";

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((tas, index) => {
    const card = document.createElement("div");
    card.className = "card";

  

    // ---------- HEADER ----------
    const header = document.createElement("div");
    header.className = "card-header";

    const avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = tas.imageurl || "";

    const info = document.createElement("div");
    info.className = "info";

    const h3 = document.createElement("h3");
    h3.textContent = tas.fullname;

    const p = document.createElement("p");
    p.className = "sub";
    p.textContent = tas.hometown;

    info.append(h3, p);
    header.append(avatar, info);

    // ---------- BODY ----------
    const body = document.createElement("div");
    body.className = "card-body";

    const row = document.createElement("div");
    row.className = "row";

    const span1 = document.createElement("span");
    span1.textContent = tas.hometown;

    const span2 = document.createElement("span");
    span2.className = "right";
    span2.textContent = tas.purpose;

    row.append(span1, span2);
    body.append(row);

    // ---------- FOOTER ----------
    const footer = document.createElement("div");
    footer.className = "card-footer";

    const callBtn = document.createElement("button");
    callBtn.className = "btn primary";
    callBtn.textContent = "📞 Call";

    const msgBtn = document.createElement("button");
    msgBtn.className = "btn";
    msgBtn.textContent = "Message";

    footer.append(callBtn, msgBtn);

    // ---------- ASSEMBLE ----------
    card.append(header, body, footer);
    cardsContainer.append(card);
  });
}

// ------------------ EVENTS ------------------
addnote.addEventListener("click", () => {
  form_container.style.display = "block";
  cardsContainer.style.display = "none";
});

closed_form.addEventListener("click", () => {
  cardsContainer.style.display = "block";
  form_container.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const imageurl = imageUrlInput.value.trim();
  const fullname = fullNameInput.value.trim();
  const hometown = homeTownInput.value.trim();
  const purpose = purposeInput.value.trim();

  let selected = "";
  categoryRadios.forEach((cat) => {
    if (cat.checked) selected = cat.value;
  });

  if (!imageurl || !fullname || !hometown || !purpose || !selected) {
    alert("Please fill all fields");
    return;
  }

  savetolocalstorage({
    imageurl,
    fullname,
    hometown,
    purpose,
    selected
  });


  showCards();
  form.reset();
  form_container.style.display = "none";
  cardsContainer.style.display = "block";
});

function updatecards(){
  const cards = document.querySelectorAll(".cards-container",".cards");

  cards.forEach(function(card , index){
 card.style.zIndex = 3 - index;
 card.style.transform = `translateY(${index * 10}px) scale (${1 - index * 0.02})`;
 card.style.opacity = `${1 - index * 0.02}`;
  })
}


upbutton.addEventListener("click",function(u){
  let lastchild = cardsContainer.lastElementChild;
  if(lastchild){
    cardsContainer.insertBefore(lastchild, cardsContainer.firstElementChild);
    updatecards();
  }
});

downbutton.addEventListener("click",function(d){
 let firstchild = cardsContainer.firstElementChild;
 if(firstchild){
  cardsContainer.appendChild(firstchild);
  updatecards();
 }

});

// ------------------ INITIAL LOAD ------------------
showCards();
