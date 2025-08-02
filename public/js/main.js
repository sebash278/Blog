//  window.addEventListener('beforeunload', function() {
//     window.scrollTo(0, 0);
//  });

//  window.addEventListener('load', function() {
//      window.scrollTo(0, 0);
//  });

document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector(".typing-text");
  const cursorElement = document.querySelector(".typing-cursor");

  if (typingElement && cursorElement) {
    const text = typingElement.dataset.text;
    let index = 0;

    typingElement.textContent = "";

    function typeWriter() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;

        const speed = Math.random() * 100 + 50;
        setTimeout(typeWriter, speed);
      } else {
        cursorElement.style.animation = "blink 1s infinite";
      }
    }

    setTimeout(typeWriter, 1000);
  }

  const heroCtaLink = document.querySelector(".hero-cta");

  if (heroCtaLink) {
    heroCtaLink.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        smoothScrollTo(targetElement);
      }
    });
  }

  function smoothScrollTo(element) {
    const targetPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      const currentPosition = startPosition + distance * easedProgress;

      window.scrollTo(0, currentPosition);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        element.style.transform = "scale(1.02)";
        element.style.transition = "transform 0.3s ease";

        setTimeout(() => {
          element.style.transform = "scale(1)";
        }, 300);
      }
    }

    requestAnimationFrame(animation);
  }
});

async function toggleLike(button) {
  const postId = button.dataset.postId;
  const likeCount = button.querySelector(".like-count");
  const isLiked = button.classList.contains("liked");

  try {
    const response = await fetch(`/api/like/${postId}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      likeCount.textContent = data.likes;

      if (data.userLiked) {
        button.classList.add("liked");
      } else {
        button.classList.remove("liked");
      }
    } else if (response.status === 401) {
      window.location.href = "/login";
    } else {
      console.error("Error:", data.error);
    }
  } catch (error) {
    console.error("Error de red:", error);
  }
}
