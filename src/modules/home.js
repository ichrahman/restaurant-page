export function createHomePage() {
    const homeContent = document.createElement('div');
    homeContent.innerHTML = '<h2>Welcome to Our Restaurant!</h2><p>We offer delicious dishes and cozy atmosphere.</p>';

    return homeContent;
}