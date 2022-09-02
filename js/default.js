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
            <div class="row g-0 my-3 bg-white rounded">
                <div class="col-md-3">
                <img src="${element.thumbnail_url}" class="img-fluid rounded-start p-3">
                </div>
                <div class="col-md-9">
                    <div class="card-body px-3">
                        <h5 class="card-title my-2">${element.title}</h5>
                        <p class="card-text mb-4">${element.details}</p>
                        <div class="d-flex align-items-center">
                            <div class="d-flex align-items-center">
                                <img src="${element.author.img}" class="img-width rounded-pill">
                                <p class="px-2 text-secondary">${element.author.name}</p>
                            </div>
                            <div class="px-5 text-secondary">
                                <p>Views:${element.total_view}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
`;
    newsContainer.appendChild(elementDiv);
  });
};

loadNews("01");
