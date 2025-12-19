const axios = require("axios");

async function getUserData(req, res) {
  try {
    // 1️⃣ Random User
    const userResponse = await axios.get("https://randomuser.me/api/");
    const user = userResponse.data.results[0];

    const country = user.location.country;

    // 2️⃣ Countrylayer
    const countryResponse = await axios.get(
      `http://api.countrylayer.com/v2/name/${country}?access_key=${process.env.COUNTRY_API_KEY}`
    );

    const countryData = countryResponse.data[0];

    // 3️⃣ Exchange Rate (используем KZT если нет валюты)
    const baseCurrency = "KZT";

    const exchangeResponse = await axios.get(
      `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/${baseCurrency}`
    );

    // 4️⃣ News
    const newsResponse = await axios.get(
      `https://newsapi.org/v2/everything?q=${country}&language=en&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`
    );

    res.json({
      user: {
        firstName: user.name.first,
        lastName: user.name.last,
        gender: user.gender,
        age: user.dob.age,
        dob: user.dob.date,
        city: user.location.city,
        country: country,
        address: `${user.location.street.name} ${user.location.street.number}`,
        picture: user.picture.large
      },
      countryInfo: {
        name: countryData.name,
        capital: countryData.capital,
        region: countryData.region
      },
      exchangeRates: {
        USD: exchangeResponse.data.conversion_rates.USD,
        KZT: exchangeResponse.data.conversion_rates.KZT
      },
      news: newsResponse.data.articles.map(article => ({
        title: article.title,
        description: article.description,
        url: article.url,
        image: article.urlToImage
      }))
    });

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = { getUserData };
