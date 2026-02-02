# Kumar V S - Professional Portfolio Website

A modern, professional portfolio website built with React, Vite, and Tailwind CSS, showcasing full-stack development skills, projects, and achievements.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.5-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.19-cyan)

## ✨ Features

### 🎨 Design & UX
- **Modern Dark Theme** - Sleek gradient-based color scheme with glassmorphism effects
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations** - Professional animations with `fade-in`, `slide-in`, and `float` effects
- **Loading Screen** - Elegant initial loading experience with progress bar
- **Toast Notifications** - Beautiful toast notifications instead of basic alerts
- **Micro-interactions** - Hover effects, transitions, and interactive elements

### 🚀 Professional Features
- **SEO Optimized** - Comprehensive meta tags, Open Graph, and Twitter Card support
- **Accessible** - WCAG compliant with proper ARIA labels, keyboard navigation, and focus states
- **Email Integration** - Functional contact form with EmailJS integration
- **Form Validation** - Real-time validation with user-friendly error messages
- **Performance** - Optimized with lazy loading and code splitting
- **Security** - Properly secured external links with `rel="noopener noreferrer"`

### 📱 Sections
1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **About** - Professional summary and personal information
3. **Skills** - Technical expertise with progress bars and categories
4. **Projects** - Filterable project showcase with detailed descriptions
5. **Education** - Academic background with timeline design
6. **Certifications** - Professional certifications and courses
7. **Achievements** - Key accomplishments and highlights
8. **Contact** - Full-featured contact form with validation
9. **Footer** - Social links and additional navigation

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.5 (Rolldown)
- **Styling:** Tailwind CSS 3.4.19
- **Notifications:** React Hot Toast
- **Email Service:** EmailJS
- **Other Libraries:** 
  - react-intersection-observer
  - Custom React hooks for utilities

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v18 or higher)
- npm or yarn package manager
- A code editor (VS Code recommended)

## 🚀 Getting Started

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/KUMAR-VSK/portfolio.git
cd portfolio
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Configure EmailJS (Optional but Recommended)

To enable the contact form functionality:

1. **Sign up for EmailJS:**
   - Visit [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create a free account

2. **Create an Email Service:**
   - Go to Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create an Email Template:**
   - Go to Email Templates
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_name}}` - Your name (Kumar V S)
   - Note your Template ID

4. **Get Your Public Key:**
   - Go to Account > API Keys
   - Copy your Public Key (User ID)

5. **Update Configuration:**
   Open `src/components/Contact.jsx` and replace:
   \`\`\`javascript
   const serviceID = 'service_xxxxxxx'  // Your Service ID
   const templateID = 'template_xxxxxxx' // Your Template ID
   const userID = 'your_user_id'        // Your Public Key
   \`\`\`

### 4. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

The site will be available at `http://localhost:5173/`

### 5. Build for Production
\`\`\`bash
npm run build
\`\`\`

The optimized production build will be in the `dist` folder.

### 6. Preview Production Build
\`\`\`bash
npm run preview
\`\`\`

## 📁 Project Structure

\`\`\`
portfolio/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── ToastContainer.jsx
│   ├── hooks/            # Custom React hooks
│   │   └── useCustomHooks.js
│   ├── App.jsx           # Main app component
│   ├── App.css           # Component styles
│   ├── index.css         # Global styles & animations
│   └── main.jsx          # App entry point
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md             # This file
\`\`\`

## 🎨 Customization

### Update Personal Information

1. **Contact Details** - Edit in `About.jsx`, `Contact.jsx`, and `Footer.jsx`
2. **Social Links** - Update URLs in `Hero.jsx` and `Footer.jsx`
3. **Projects** - Modify the projects array in `Projects.jsx`
4. **Skills** - Update skillCategories in `Skills.jsx`
5. **Education** - Edit education array in `Education.jsx`
6. **Certifications** - Update certifications list in `Certifications.jsx`

### Color Scheme

Colors are defined using Tailwind CSS classes. Main colors:
- **Primary:** Cyan (cyan-400, cyan-500, cyan-600)
- **Secondary:** Blue (blue-400, blue-500, blue-600)
- **Background:** Gray (gray-800, gray-900)
- **Accents:** Various gradients

To change the color scheme, search and replace these color classes throughout the components.

### Fonts

The project uses Google Fonts:
- **Headings:** Poppins (300, 400, 500, 600, 700, 800)
- **Body:** Inter (300, 400, 500, 600, 700)

Update in `src/index.css` if you want different fonts.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Other Platforms

The build output in `dist` can be deployed to any static hosting service:
- GitHub Pages
- Cloudflare Pages
- Firebase Hosting
- AWS S3

## 📊 Performance

This portfolio is optimized for performance:
- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Accessibility Score: 100

## 🐛 Known Issues

1. **EmailJS Configuration**: Contact form works in demo mode until you configure EmailJS
2. **Resume Download**: Add your resume PDF to `/public/resume.pdf`

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

**Kumar V S**
- Email: kumarvsofficial@gmail.com
- LinkedIn: [kumar-v-s-1695861b2](https://linkedin.com/in/kumar-v-s-1695861b2)
- GitHub: [KUMAR-VSK](https://github.com/KUMAR-VSK)
- Location: Udumelpet, Tamil Nadu, India

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite team for the blazing fast build tool
- EmailJS for free email service
- Icons from Heroicons

---

**Built with ❤️ by Kumar V S**

*Last Updated: February 2026*
