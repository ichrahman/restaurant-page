export function createMenuPage() {
    const menuContent = document.createElement('div');
    menuContent.innerHTML = '<h2>Our Menu</h2><ul><li>Appletizers</li><li>Main Courses</li><li>Desserts</li></ul>';

    return menuContent;
}