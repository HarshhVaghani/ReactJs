# BlueBerry eCommerce - React + Vite + Tailwind CSS

A modern, fully-featured eCommerce website for grocery shopping built with React, Vite, and Tailwind CSS.

## 🌟 Features

- **Beautiful UI/UX**: Modern, responsive design with smooth animations
- **Complete Shopping Experience**: 
  - Browse products by categories
  - Grid/List view toggle
  - Product search and filtering
  - Shopping cart with quantity management
  - Wishlist functionality
  - Checkout process
- **Pages Included**:
  - Home page with hero section
  - Categories page with filters
  - Cart page
  - Wishlist page
  - Checkout page
  - Login/Register page
  - FAQ page
  - About Us page
  - Contact Us page
- **State Management**: Context API for cart and wishlist
- **Persistent Storage**: LocalStorage for cart and wishlist
- **Fully Responsive**: Mobile-first design

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**

2. **Install dependencies**
```bash
cd blueberry-ecommerce
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
blueberry-ecommerce/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation and header
│   │   ├── Footer.jsx          # Footer with links
│   │   └── ProductCard.jsx     # Reusable product card
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Categories.jsx      # Products listing with filters
│   │   ├── Cart.jsx            # Shopping cart
│   │   ├── Wishlist.jsx        # Saved items
│   │   ├── Checkout.jsx        # Order checkout
│   │   ├── Login.jsx           # Authentication
│   │   ├── FAQ.jsx             # Frequently asked questions
│   │   ├── About.jsx           # About company
│   │   └── Contact.jsx         # Contact form
│   ├── context/
│   │   └── CartContext.jsx     # Global state management
│   ├── data/
│   │   └── products.js         # Mock product data
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: '#5C6AC4',  // Main brand color
    dark: '#4A56A8',
    light: '#7B87D9',
  },
  // ... more colors
}
```

### Product Data

Edit `src/data/products.js` to add or modify products and categories.

### Pages

All pages are in `src/pages/` and can be customized independently.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📦 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Context API** - State management

## 🎯 Key Features Explained

### Cart Management
- Add/remove products
- Update quantities
- Persistent storage
- Real-time total calculation

### Wishlist
- Save favorite products
- Quick add to cart from wishlist
- Persistent storage

### Categories Page
- Grid/List view toggle
- Sort by price, name, etc.
- Filter by category, price range, rating
- Responsive layout

### Checkout
- Multi-step form
- Order summary
- Multiple payment options
- Form validation

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 💡 Tips

1. **Images**: Replace placeholder images with your own product images
2. **API Integration**: Replace mock data with real API calls
3. **Authentication**: Implement proper authentication with backend
4. **Payment**: Integrate payment gateway (Stripe, PayPal, etc.)
5. **SEO**: Add meta tags and optimize for search engines

## 📞 Support

For questions or issues, please check the FAQ page or contact us through the Contact page.

---

Built with ❤️ using React, Vite, and Tailwind CSS
