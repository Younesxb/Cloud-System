//KLANTEN

fetch("https://randomuser.me/api/?results=12")
  .then((response) => response.json())
  .then((data) => {
    const customers = data.results;
    const container = document.getElementById("customerContainer");

    customers.forEach((customer) => {
      const customerCard = document.createElement("ul");
      customerCard.classList.add("customer-card");

      const customerImage = document.createElement("img");
      customerImage.src = customer.picture.large;
      customerImage.alt = `${customer.name.first} ${customer.name.last}'s foto`;
      customerImage.classList.add("customer-image");

      const title = customer.name.title;
      const firstName = customer.name.first;
      const lastName = customer.name.last;
      const country = customer.location.country;

      customerCard.innerHTML = `
            <img src="${customer.picture.large}" alt="${firstName} ${lastName}'s foto" class="customer-image">
            <h4>${title} ${firstName} ${lastName}</h4>
            <p>${country}</p>
          `;


      container.appendChild(customerCard);
    });
  })
  .catch((error) => console.error("Error fetching customer data:", error));