export { button };

const button = () => {
  let btn = document.createElement("BUTTON"); // Create a <button> element
  btn.innerHTML = "CLICK ME"; // Insert text
  document.body.appendChild(btn); // Append <button> to <body>
};
