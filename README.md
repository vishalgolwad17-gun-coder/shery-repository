# shery-repository

# 🔍 Searchable Profile Cards (Vanilla JS)

A simple and clean **searchable profile cards** project built using **HTML, CSS, and Vanilla JavaScript**.  
Users can search profiles in real time, and the UI updates instantly based on the input.

---

## 🚀 Features

- 🔎 **Live Search** – Filters cards as you type
- 🖼️ **Image Cards with Blur Effect** – Stylish background blur using CSS
- ⚡ **Fast & Lightweight** – No frameworks, only Vanilla JS
- 📱 **Responsive Layout** – Flexbox + Tailwind utility classes
- ❌ **No Results Handling** – Shows message when no match is found

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Tailwind CDN** (for quick utility styling)

---

## 📂 Project Structure


├── index.html
├── practo.css
├── scripting.js
└── README.md


## 🧠 How It Works

1. A list of user objects is stored in JavaScript.
2. Cards are dynamically created using `document.createElement()`.
3. An input field listens for `input` events.
4. On every keystroke:
   - The user list is filtered
   - Cards are re-rendered
   - If no match → "No results found" is shown

---

## ✨ Code Snippet (Search Logic)

js
inp.addEventListener("input", function () {
  let filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(inp.value.toLowerCase())
  );

  container.innerHTML = "";

  if (filteredUsers.length === 0) {
    container.innerHTML = "<h2 style='color:red'>No results found</h2>";
  } else {
    showcards(filteredUsers);
  }
});
