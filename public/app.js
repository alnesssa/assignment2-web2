const button = document.getElementById("loadUser");
const content = document.getElementById("content");

button.addEventListener("click", async () => {
  content.innerHTML = `<div class="loading">Loading...</div>`;


  const response = await fetch("/api/user");
  const data = await response.json();

  content.innerHTML = `
  <div class="card user-card">
    <img src="${data.user.picture}">
    <h2>${data.user.firstName} ${data.user.lastName}</h2>
    <p><strong>Gender:</strong> ${data.user.gender}</p>
    <p><strong>Age:</strong> ${data.user.age}</p>
    <p><strong>Date of Birth:</strong> ${new Date(data.user.dob).toLocaleDateString()}</p>
    <p><strong>City:</strong> ${data.user.city}</p>
    <p><strong>Country:</strong> ${data.user.country}</p>
    <p><strong>Address:</strong> ${data.user.address}</p>
  </div>

  <div class="card">
    <h3>🌍 Country Information</h3>
    <p><strong>Capital:</strong> ${data.countryInfo.capital}</p>
    <p><strong>Region:</strong> ${data.countryInfo.region}</p>
  </div>

  <div class="card">
    <h3>💱 Exchange Rates</h3>
    <p>1 KZT = ${data.exchangeRates.USD} USD</p>
    <p>1 KZT = ${data.exchangeRates.KZT} KZT</p>
  </div>

  <div class="card">
    <h3>📰 Latest News</h3>
    ${data.news.map(n => `
      <div class="news-item">
        ${n.image ? `<img src="${n.image}">` : ""}
        <div class="news-content">
          <h4>${n.title}</h4>
          <p>${n.description || ""}</p>
          <a href="${n.url}" target="_blank">Read →</a>
        </div>
      </div>
    `).join("")}
  </div>
`;
});
