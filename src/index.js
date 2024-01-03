(function start() {
  const img = document.querySelector("img");
  const change = document.querySelector(".change");
  const search = document.querySelector(".search");
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=soxaaxPuKt6EKETgCVcyjuBVv3E8Wt7H&s=google",
    {
      mode: "cors",
    },
  )
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    });
  change.addEventListener("click", () => {
    fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=soxaaxPuKt6EKETgCVcyjuBVv3E8Wt7H&s=google",
      {
        mode: "cors",
      },
    )
      .then((response) => response.json())
      .then((response) => {
        img.src = response.data.images.original.url;
      });
  });
  search.addEventListener("click", (event) => {
    const input = document.querySelector("input");
    event.preventDefault();
    const data = input.value;
    input.value = "";
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=soxaaxPuKt6EKETgCVcyjuBVv3E8Wt7H&s=${data}`,
      { mode: "cors" },
    ).then((response)=> response.json())
    .then((response)=>{img.src=response.data.images.original.url})
    .catch(()=>{console.log("stop it now")});
  });
})();
