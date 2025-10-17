# Cirqah - Event Discovery & Creator Platform

![Cirqah Logo](./src/assets/logo.svg)

**Cirqah** is a comprehensive event discovery and creator platform that connects fans with cultural experiences and empowers creators to host events, sell merchandise, and build their audience. Built with modern web technologies, it provides a seamless experience for both event-goers and event creators.

## 🌟 Features

### For Fans

- **Event Discovery**: Browse concerts, festivals, sports events, and cultural experiences
- **Personalized Recommendations**: Get curated event suggestions based on your preferences
- **Ticket Management**: View and manage your purchased tickets
- **Merchandise Shopping**: Purchase exclusive merchandise from your favorite creators
- **Location-Based Events**: Discover events happening in your city
- **Social Features**: Connect with other fans and share experiences

### For Creators

- **Event Hosting**: Create and manage your own events
- **Merchandise Drops**: Sell exclusive merchandise to your audience
- **Audience Building**: Grow your fanbase through the platform
- **Analytics Dashboard**: Track your event performance and audience engagement
- **Revenue Management**: Handle payments and track earnings

### Platform Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Live event updates and notifications
- **Secure Authentication**: Built-in user authentication and authorization
- **Content Management**: Dynamic content powered by Sanity CMS
- **Payment Processing**: Integrated payment system for tickets and merchandise

## 🚀 Tech Stack

### Frontend

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Redux Toolkit** - State management
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

### Backend & Database

- **Supabase** - Backend-as-a-Service with PostgreSQL
- **Sanity CMS** - Headless content management system
- **Real-time subscriptions** - Live data updates

### UI Components & Libraries

- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **React Icons** - Additional icon sets
- **Swiper** - Touch slider component
- **Anime.js** - Animation library
- **Three.js** - 3D graphics (with React Three Fiber)

### Development Tools

- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Babel React Compiler** - Optimized React compilation

## 📁 Project Structure

```
cirqah_new/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── button.tsx
│   │   ├── footer/         # Footer components
│   │   ├── header/         # Header and navigation
│   │   ├── input.tsx
│   │   └── select.tsx
│   ├── pages/              # Page components
│   │   ├── auth/           # Authentication pages
│   │   ├── dashboard/      # User dashboard
│   │   ├── events/         # Event discovery pages
│   │   └── home.tsx
│   ├── features/           # Redux slices and features
│   ├── hooks/              # Custom React hooks
│   ├── context/            # React context providers
│   ├── types/              # TypeScript type definitions
│   ├── assets/             # Static assets
│   ├── router.ts           # Application routing
│   ├── store.ts            # Redux store configuration
│   └── supabase.ts         # Supabase client configuration
├── sanity/                 # Sanity CMS configuration
│   ├── schemas/            # Content schemas
│   └── sanity.config.ts    # Sanity configuration
├── public/                 # Public static files
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account
- Sanity account

### 1. Clone the Repository

```bash
git clone <repository-url>
cd cirqah_new
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Sanity Configuration
VITE_SANITY_PROJECT_ID=your_sanity_project_id
```

### 4. Database Setup

1. Create a new Supabase project
2. Run the database migrations (if available)
3. Set up the required tables: `events`, `profiles`, `address`, `preferences`

### 5. Sanity CMS Setup

1. Create a new Sanity project
2. Configure the schemas in `sanity/schemas/`
3. Deploy your Sanity studio

### 6. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🗄️ Database Schema

### Key Tables

- **events** - Event information and details
- **profiles** - User profile data
- **address** - User address information (home, shipping, billing)
- **preferences** - User preferences and settings

### Content Types (Sanity)

- **nav** - Navigation menu structure
- **onboard** - Onboarding flow content
- **auth** - Authentication page content
- **navItem** - Navigation menu items
- **navLink** - Individual navigation links

## 🔐 Authentication

The application uses Supabase Auth for user authentication with:

- Email/password authentication
- Google OAuth integration
- Session management
- Protected routes
- User profile management

## 🎨 Design System

### Color Palette

- **Green** - Primary brand color
- **Chicago** - Neutral grays for text and backgrounds
- **White** - Clean backgrounds and contrast

### Typography

- **K2D** - Primary font family
- **Instrument Sans** - Secondary font family

### Components

- Consistent button styles
- Form field components
- Navigation components
- Card layouts for events and content

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel/Netlify

1. Connect your repository to your deployment platform
2. Set environment variables in the platform's dashboard
3. Deploy automatically on push to main branch

### Sanity Studio Deployment

```bash
cd sanity
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@cirqah.com or join our community Discord server.

## 🔮 Roadmap

- [ ] Mobile app development
- [ ] Advanced analytics for creators
- [ ] Social features and community building
- [ ] AI-powered event recommendations
- [ ] Live streaming integration
- [ ] Multi-language support
- [ ] Advanced payment options
- [ ] Event creation tools for creators

---

**Built with ❤️ by the Cirqah Team**
