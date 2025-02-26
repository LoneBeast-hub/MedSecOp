const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");

const videoURL = "https://www.youtube.com/embed/hfxkqn21RF4?si=ayzJq3EJFiMruT6W";

openModal.addEventListener("click", () => {
    videoFrame.src = videoURL;
    videoModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    videoFrame.src = "";
    videoModal.classList.add("hidden");
});

// Close modal when clicking outside of it
videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
        videoFrame.src = "";
        videoModal.classList.add("hidden");
    }
});