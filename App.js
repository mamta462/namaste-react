const heading = React.createElement("h1",
    { id: "heading", class: "main" },
    "Hello word from react");

const div = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" },
    [React.createElement("h1", { id: "heading", class: "main" }, "I am h1 tag"),
    React.createElement("h1", { id: "heading", class: "main" }, "I am h2 tag")])
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
