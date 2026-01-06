fetch("./scenario/test.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    const content = document.getElementById("content");
    content.textContent = data.text;
  })
  .catch(error => {
    console.error("讀取 scenario 失敗：", error);
  });
