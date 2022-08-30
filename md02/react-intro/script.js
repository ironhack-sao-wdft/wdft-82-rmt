// const root = document.getElementById("root");

// const h1 = document.createElement("h1");

// h1.innerText = "Hello world!";

// root.appendChild(h1);

const root = document.getElementById("root");

const p = React.createElement("p", { children: "P dentro do H1" });
const h1 = React.createElement("h1", {
  children: "Hello, world!",
  className: "title",
});

const page = React.createElement("div", {
  children: [h1, p],
});

ReactDOM.createRoot(root).render(page);
