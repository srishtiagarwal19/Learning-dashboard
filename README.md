# Learning Dashboard

A modern and responsive Learning Dashboard built using **Next.js**, **Tailwind CSS**, **Framer Motion**, and **Supabase**.

The dashboard allows users to track learning progress, monitor weekly activity, view achievements, and manage profile settings through an interactive and visually appealing interface.

---

## Live Demo

https://learning-dashboard-dx6g.vercel.app/

---

## Features

### Dashboard

* Modern hero section with gradient design
* Animated course cards
* Progress tracking bars
* Weekly activity visualization
* Responsive layout

### Achievements

* Achievement tracking system
* Locked and unlocked achievement badges
* Responsive achievement cards
* Interactive UI components

### Settings

* User profile overview
* Learning preferences
* Daily learning goals
* Difficulty settings
* Notification preferences

### Responsive Design

* Desktop sidebar navigation
* Mobile bottom navigation
* Fully responsive layouts
* Optimized for different screen sizes

---

## Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Framer Motion

### Backend & Database

* Supabase

### Deployment

* Vercel

---

## Project Structure

```bash
src/
│
├── app/
│   ├── achievements/
│   ├── settings/
│   ├── courses/
│   ├── components/
│   ├── lib/
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│
└── package.json
```

---

## Database Tables

### courses

| Column    | Type   |
| --------- | ------ |
| id        | bigint |
| title     | text   |
| progress  | int    |
| icon_name | text   |

### activity

| Column | Type   |
| ------ | ------ |
| id     | bigint |
| day    | text   |
| value  | int    |

### achievements

| Column      | Type    |
| ----------- | ------- |
| id          | bigint  |
| title       | text    |
| description | text    |
| unlocked    | boolean |

### settings

| Column          | Type   |
| --------------- | ------ |
| id              | bigint |
| username        | text   |
| difficulty      | text   |
| daily_goal      | text   |
| preferred_topic | text   |

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

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

Start development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Key Highlights

* Modern UI/UX
* Dark Theme Design
* Smooth Animations
* Supabase Integration
* Responsive Navigation
* Scalable Component Structure
* Production Deployment on Vercel

---

## Author

**Srishti Agarwal**

GitHub: https://github.com/srishtiagarwal19

---

## License

This project is developed for educational and learning purposes.
