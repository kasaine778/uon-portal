function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

const resultsSection = document.getElementById("resultsSection");
const addRowBtn = document.getElementById("addRowBtn");
const calcGpaBtn = document.getElementById("calcGpaBtn");
const resultsTable = document.getElementById("resultsTable").querySelector("tbody");

document.querySelectorAll(".sidebar ul li").forEach((item) => {
  item.addEventListener("click", () => {
    if (item.textContent === "Results") {
      document.querySelector(".cards").style.display = "none";
      resultsSection.classList.remove("hidden");
    } else {
      document.querySelector(".cards").style.display = "flex";
      resultsSection.classList.add("hidden");
    }
  });
});

addRowBtn.addEventListener("click", () => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
    <td contenteditable="true"></td>
  `;
  resultsTable.appendChild(row);
});

calcGpaBtn.addEventListener("click", () => {
  const rows = resultsTable.querySelectorAll("tr");
  let total = 0, count = 0;
  rows.forEach(r => {
    const point = parseFloat(r.children[3].textContent);
    if (!isNaN(point)) {
      total += point;
      count++;
    }
  });
  const gpa = count ? (total / count).toFixed(2) : "0.00";
  document.querySelector(".card p").textContent = gpa;
});
