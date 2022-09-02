const loadCategories = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
};
const loadNews = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.data));
};

const displayNews = (elements) => {
  console.log(elements);
  const newsContainer = document.getElementById("news-container");
  elements.forEach((element) => {
    const elementDiv = document.createElement("div");
    elementDiv.innerHTML = `
            <div class="row g-0 mb-3 bg-white rounded">
                <div class="col-md-4">
                <img src="${element.thumbnail_url}" class="img-fluid rounded-start p-3">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.details}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <br>
                    <img src="${element.author.img}" class="w-25 rounded-pill">
                </div>
                </div>
            </div>
`;
    newsContainer.appendChild(elementDiv);
  });
};

loadNews("01");
