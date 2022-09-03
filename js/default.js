// for fetching data and loading all categories by sequence
const loadCategories = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCatogories(data.data.news_category));
};

// function for displaying Catogories
const displayCatogories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categories.forEach((category) => {
    const categorydiv = document.createElement("div");
    categorydiv.innerHTML = `
                    <div>
                        <button onClick="loadNews('${category.category_id}')","status('${category.category_name}')" class="btn text-primary">${category.category_name}</button>
                    </div>
        `;
    categoriesContainer.appendChild(categorydiv);
  });
};

// for fetching data and calling a function to display the news in that category
const loadNews = (id) => {
  toggleSpinner(true);
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.data));
};

//a function to display the news
const displayNews = (elements) => {
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = ``;
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
                        )}.... </p>
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
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            </div>
`;
    newsContainer.appendChild(elementDiv);
  });
  status(newsContainer.childElementCount);
  toggleSpinner(false);
};

//item status function
function status(newsCount) {
  const statusContainer = document.getElementById("status-container");
  const status = document.createElement("p");
  statusContainer.innerHTML = ``;
  status.innerHTML = `
      <p class="py-2 px-4 text-secondary bg-light rounded mt-3">${newsCount} items found</p>
      `;
  statusContainer.appendChild(status);
}
// spinner
const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};

loadCategories();
//status('${category.category_name}','${category.category_id.length}')
