const loadCategories = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCatogories(data.data.news_category));
};
const loadNews = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.data));
};

const displayCatogories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categories.forEach((category) => {
    console.log(category.category_id);
    const categorydiv = document.createElement("div");
    categorydiv.innerHTML = `
                    <div>
                        <button class="btn text-primary">${category.category_name}</button>
                    </div>
        `;
    categoriesContainer.appendChild(categorydiv);
  });
};

const displayNews = (elements) => {
  const newsContainer = document.getElementById("news-container");
  elements.forEach((element) => {
    const elementDiv = document.createElement("div");
    elementDiv.innerHTML = `
            <div class="row g-0 my-3 bg-white rounded">
                <div class="col-md-3">
                <img src="${
                  element.thumbnail_url
                }" class="w-100 rounded-start p-3">
                </div>
                <div class="col-md-8">
                    <div class="card-body px-3">
                        <h5 class="card-title my-3">${element.title}</h5>
                        <p class="card-text mb-4">${element.details.slice(
                          0,
                          350
                        )} ....<span class="text-secondary">see more</span></p>
                        <div class="pb-2 d-flex align-items-center">
                            <div class="d-flex align-items-center">
                                <img src="${
                                  element.author.img
                                }" class="img-width rounded-pill">
                                <p class="px-2 text-secondary">${
                                  element.author.name
                                }</p>
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

// loadNews("08");
loadCategories();
