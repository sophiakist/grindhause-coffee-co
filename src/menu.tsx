import "./menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1>Our Menu</h1>

      {/* Seasonal Specials Section */}
      <div className="menu-section">
        <h2 className="menu-header">Seasonal Specials</h2>
        <div className="menu-category">
          <div className="menu-items">
            <div className="menu-item">
              <h3>Honey Lavender Latte</h3>
              <p>Iced latte with subtle floral notes and a touch of honey.</p>
            </div>
            <div className="menu-item">
              <h3>Orange Cream Macchiato</h3>
              <p>Iced macchiato with orange-vanilla syrup and cold foam.</p>
            </div>
            <div className="menu-item">
              <h3>Strawberry Matcha</h3>
              <p>Iced matcha layered over strawberry-infused milk.</p>
            </div>
            <div className="menu-item">
              <h3>Coconut Cold Brew Float</h3>
              <p>Cold brew with coconut milk and vanilla ice cream.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Coffee / Espresso Drinks Section */}
      <div className="menu-section">
        <h2 className="menu-header">Coffee / Espresso Drinks</h2>
        <div className="menu-category">
          <div className="menu-items">
            <div className="menu-item">
              <h3>Espresso</h3>
              <p>A strong, concentrated shot of coffee.</p>
            </div>
            <div className="menu-item">
              <h3>Latte</h3>
              <p>Espresso with steamed milk and a light layer of foam.</p>
            </div>
            <div className="menu-item">
              <h3>Cappuccino</h3>
              <p>Espresso with equal parts steamed milk and foam.</p>
            </div>
            <div className="menu-item">
              <h3>Americano</h3>
              <p>Espresso diluted with hot water for a smoother taste.</p>
            </div>
            <div className="menu-item">
              <h3>Flat White</h3>
              <p>Velvety microfoam over a double shot of espresso.</p>
            </div>
            <div className="menu-item">
              <h3>Mocha</h3>
              <p>Espresso, chocolate, and steamed milk—rich and sweet.</p>
            </div>
            <div className="menu-item">
              <h3>Macchiato</h3>
              <p>Espresso with a dollop of milk foam.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cold Brew & Teas Section */}
      <div className="menu-section">
        <h2 className="menu-header">Cold Brew & Teas</h2>
        <div className="menu-category">
          <div className="menu-items">
            <div className="menu-item">
              <h3>Cold Brew</h3>
              <p>Slow-steeped for maximum flavor.</p>
            </div>
            <div className="menu-item">
              <h3>Vanilla Sweet Cream Cold Brew</h3>
              <p>Cold brew topped with house-made vanilla sweet cream.</p>
            </div>
            <div className="menu-item">
              <h3>Nitro Cold Brew</h3>
              <p>Infused with nitrogen for a smooth, creamy finish.</p>
            </div>
            <div className="menu-item">
              <h3>Chai Tea</h3>
              <p>A spicy, warming tea blend.</p>
            </div>
            <div className="menu-item">
              <h3>Iced Chai Latte</h3>
              <p>Chai tea with milk over ice.</p>
            </div>
            <div className="menu-item">
              <h3>Matcha Latte</h3>
              <p>Ground green tea blended with milk, hot or iced.</p>
            </div>
            <div className="menu-item">
              <h3>Herbal Tea</h3>
              <p>Caffeine-free blends like mint, chamomile, and hibiscus.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pastries / Vegan Options Section */}
      <div className="menu-section">
        <h2 className="menu-header">Pastries / Vegan Options</h2>
        <div className="menu-category">
          <div className="menu-items">
            <div className="menu-item">
              <h3>Blueberry Muffin</h3>
              <p>Freshly baked, perfect with your coffee.</p>
            </div>
            <div className="menu-item">
              <h3>Vegan Chocolate Cookie</h3>
              <p>Dairy-free & decadently delicious.</p>
            </div>
            <div className="menu-item">
              <h3>Croissant</h3>
              <p>Buttery, flaky, and golden brown.</p>
            </div>
            <div className="menu-item">
              <h3>Banana Bread (Vegan)</h3>
              <p>Moist, nutty, and made with plant-based ingredients.</p>
            </div>
            <div className="menu-item">
              <h3>Lemon Poppyseed Loaf</h3>
              <p>Citrusy and sweet with a delicate crunch.</p>
            </div>
            <div className="menu-item">
              <h3>Vegan Apple Crumble Bar</h3>
              <p>Layers of spiced apple and oat crumble.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
