# Modern Portfolio Website

A responsive, feature-rich portfolio website built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Seamlessly adapts to all screen sizes
- **Dark/Light Mode**: Built-in theme switching capability
- **Smooth Animations**: Uses Framer Motion for fluid transitions
- **Interactive UI**: Modern, user-friendly interface components
- **Contact Form**: Integrated contact form with form validation
- **Project Showcase**: Dynamic project cards with live demo links
- **Skills Section**: Visual representation of technical skills
- **Education Timeline**: Structured display of educational background

## 🚀 Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Shadcn/ui
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Form Handling**: React Hook Form
- **Icons**: Lucide React & React Icons
- **Build Tool**: Vite

## 🛠️ Setup & Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📁 Project Structure

src/
├── assets/         # Static assets (images, etc.)
├── components/     # React components
│   ├── ui/        # Reusable UI components
│   └── ...        # Feature components
├── hooks/         # Custom React hooks
├── lib/           # Utilities and configurations
└── pages/         # Page components

## ✨ Key Components

### Home Page
- Hero section with animated introduction
- Dynamic project showcase
- Skills and expertise display
- Contact form integration

### Features
- Responsive navigation
- Dark/Light theme toggle
- Project filtering
- Smooth scroll animations
- Form validation
- Social media integration

## 🎨 Styling Guide

### Colors
```css
Primary: Cyan (#00FFFF)
Background: Slate (#0f172a)
Text: White (#FFFFFF)
Accent: Violet (#8B5CF6)
```

### Typography
- Headers: Poppins
- Body: Inter
- Code: Monospace

## 💻 Development

### Prerequisites
- Node.js v16+
- npm/yarn
- Basic knowledge of React & TypeScript

### Local Development
```bash
# Start development server
npm run dev

# Run type checking
tsc --noEmit

# Build for production
npm run build
```

### Environment Variables
Create a `.env` file:
```env
VITE_APP_API_URL=your_api_url
VITE_APP_FORM_ENDPOINT=your_form_endpoint
```

## 📱 Responsive Breakpoints

```css
Mobile: 320px - 480px
Tablet: 481px - 768px
Desktop: 769px - 1024px
Large Desktop: 1025px+
```

## 🚀 Deployment

The site can be deployed to various platforms:

### Vercel
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📝 Notes

- Keep dependencies updated
- Test across different browsers
- Maintain accessibility standards
- Optimize images before adding
- Follow React best practices

## 🔗 Resources

- [React Documentation](https://reactjs.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

