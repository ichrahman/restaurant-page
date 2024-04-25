export function createAboutPage() {
    const aboutContent = document.createElement('div');

    aboutContent.innerHTML = '<h2>About Us</h2><p>We are a family-owned restaurant dedicated to serving high-quality food.</p>';

    return aboutContent;
}