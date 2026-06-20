# Learning Dashboard

A modern and responsive Learning Dashboard built using Next.js, Tailwind CSS, Supabase, and Framer Motion.

## Features

### Dashboard

* Dynamic course cards fetched from Supabase
* Animated progress bars
* Hero section with learning streak
* Weekly activity tracker
* Responsive layout

### Achievements Page

* Achievement cards loaded from Supabase
* Trophy indicators
* Locked and unlocked achievement states
* Responsive grid layout

### Settings Page

* User profile section
* Learning preferences
* Daily learning goals
* Notification settings

### UI Enhancements

* Smooth animations using Framer Motion
* Responsive sidebar navigation
* Mobile bottom navigation
* Dark modern dashboard theme
* Loading screen support

## Tech Stack

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React Icons

## Project Structure

```text
src/
 ├── app/
 │   ├── achievements/
 │   ├── settings/
 │   ├── components/
 │   ├── lib/
 │   ├── page.tsx
 │   └── loading.tsx
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Installation

Clone the repository:

```bash
git clone https://github.com/srishtiagarwal19/Learning-dashboard.git
```

Navigate to the project:

```bash
cd Learning-dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Deployment

The project can be deployed on Vercel.

### Environment Variables Required on Vercel

```env
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## Author

Srishti Agarwal

## License

This project is developed for educational and learning purposes.
