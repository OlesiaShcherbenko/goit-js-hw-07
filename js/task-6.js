function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const input = document.querySelector("#controls input");
  const createBtn = document.querySelector("[data-create]");
  const destroyBtn = document.querySelector("[data-destroy]");
  const boxesContainer = document.querySelector("#boxes");
  
  createBtn.addEventListener("click", () => {
    const amount = Number(input.value.trim());
    
    if (amount >= 1 && amount <= 100) {
      destroyBoxes(); // Очистити перед створенням нової колекції
      createBoxes(amount);
      input.value = ""; // Очистити інпут
    }
  });
  
  destroyBtn.addEventListener("click", destroyBoxes);
  
  function createBoxes(amount) {
    const boxes = [];
    let size = 30;
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = "5px";
      boxes.push(box);
      size += 10;
    }
  
    boxesContainer.append(...boxes); // Додати всі елементи за одну операцію
  }
  
  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }