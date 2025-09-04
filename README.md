
# PRX India - Article Publisher / Media Coverage Website

## Overview
PRX India is a demo website designed to showcase an **Article Publisher / Media Coverage** platform.  
It includes a homepage, individual article pages, About page, and Contact page with a modern, responsive design.

---

## Features
- **Homepage:**  
  - Hero section with title, description, and CTA button.  
  - Latest articles displayed dynamically from `articles.json`.  
  - Featured topics section with cards and hover effects.  

- **Article Page:**  
  - Displays individual article details dynamically (title, image, author, date, content).  

- **About Page:**  
  - Hero section with description.  
  - Mission and vision section with image.  
  - Features / Why choose us section with cards.  
  - Call-to-action section linking to Contact page.  

- **Contact Page:**  
  - Hero section with title and description.  
  - Contact form (name, email, message) with validation and success message.  
  - Contact info section with office location, email, and phone.  

- Fully **responsive** using **TailwindCSS**.  
- All pages constrained to **max-width 1080px**.  
- Clean, modern UI with hover effects, shadows, and spacing.

---

## Tech Stack
- **HTML5**  
- **TailwindCSS (CDN)**  
- **JavaScript (Vanilla)**  
- **JSON** (for storing articles data)  

No backend required. Fully static site.

---

## File Structure
```
prxindia/
│── index.html        # Homepage
│── article.html      # Individual article page
│── about.html        # About page
│── contact.html      # Contact page
│── script.js         # JS for loading articles dynamically
│── articles.json     # Sample article data
│── README.md         # Project documentation
```

---

## Deployment Instructions

### Local Testing
1. Keep all files in the same folder (`prxindia`).  
2. Open `index.html` in your browser to view the homepage.  
3. Click on an article card to open the individual article page.  
4. Test About and Contact pages for responsiveness.

### Netlify
1. Go to [Netlify](https://www.netlify.com/) → Sign in / Sign up.  
2. Drag & drop the `prxindia` folder onto Netlify.  
3. Your site will be deployed with a live link immediately.

### GitHub Pages
1. Push the `prxindia` folder to a GitHub repository.  
2. Go to **Settings → Pages** → Select the branch (main) and folder (`/root`).  
3. GitHub Pages will generate a live link for your site.

---

## Notes
- Articles are loaded dynamically from `articles.json`. You can add more articles by following the JSON structure.  
- Images are fetched from Unsplash; you can replace URLs with your own.  
- TailwindCSS CDN is used; no extra CSS files required.  

---

## Author
**Ayush Kant**  
Demo Project for Article Publisher / Media Coverage Website
