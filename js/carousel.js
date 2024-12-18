export default function carouselInit() {
  const carouselImages = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-images img");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let index = 0;

  if (nextButton && prevButton && images && carouselImages) {
    // Função para atualizar o carrossel
    function updateCarousel() {
      const offset = -index * 100;
      carouselImages.style.transform = `translateX(${offset}%)`;
    }

    // Botão para imagem anterior
    prevButton.addEventListener("click", () => {
      index = index === 0 ? images.length - 1 : index - 1;
      updateCarousel();
    });

    // Botão para próxima imagem
    nextButton.addEventListener("click", () => {
      index = (index + 1) % images.length;
      updateCarousel();
    });

    // Rotação automática
    setInterval(() => {
      index = (index + 1) % images.length;
      updateCarousel();
    }, 10000); // Troca a cada 3 segundos
  }
}
