const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skills = document.getElementById("skills-section") as HTMLElement; // Corrected the id here

toggleButton.addEventListener('click', () => {
    if (skills.style.display === 'none' || skills. style. display ==='') {
        skills.style.display = 'block';
    } else {
        skills.style.display = 'none';
    }
});
