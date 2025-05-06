# 🛒 ProStore – Full-Stack E-Commerce Application

**Live Preview:** [prostore-project-lilac.vercel.app](https://prostore-project-lilac.vercel.app)

ProStore is a modern full-stack e-commerce platform built with Next.js 15, React 19, TypeScript, Prisma, PostgreSQL, and shadcn/ui. Developed as part of Brad Traversy's advanced Next.js course, this project showcases a comprehensive shopping experience with robust features and a clean, responsive design.

---

## ✨ Features

- **Authentication**: Secure user authentication using NextAuth.js.
- **Admin Dashboard**: Manage products, orders, and users with insightful statistics and charts powered by Recharts.
- **Product Management**: Create, edit, and delete products with support for multiple images and featured banners.
- **Shopping Cart**: Add, remove, and adjust product quantities with real-time updates.
- **Checkout Process**: Streamlined checkout with shipping address, payment method selection (Stripe, PayPal, or Cash on Delivery), and order summary.
- **User Profile**: View and manage personal information and order history.
- **Search and Filtering**: Advanced search functionality with category filtering, price range, and rating filters.
- **Reviews and Ratings**: Users can leave reviews and rate products.
- **Responsive Design**: Fully responsive layout with light and dark mode support.

---

## 🧰 Technologies Used

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Prisma ORM, PostgreSQL
- **Authentication**: NextAuth.js
- **Payments**: Stripe, PayPal
- **File Uploads**: Uploadthing
- **Email Notifications**: Resend
- **Testing**: Jest
- **Deployment**: Vercel

---

## 🚀 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/prostore.git
   cd prostore
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Rename `.env.example` to `.env` and fill in the required values:

   ```env
   DATABASE_URL=your_postgres_database_url
   NEXTAUTH_SECRET=your_nextauth_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_APP_SECRET=your_paypal_app_secret
   UPLOADTHING_TOKEN=your_uploadthing_token
   UPLOADTHING_SECRET=your_uploadthing_secret
   UPLOADTHING_APPID=your_uploadthing_appid
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🌱 Seeding the Database

To populate the database with initial data:

```bash
npx prisma db seed
```

---

## 📚 Learn More

This project is part of the [Next.js Ecommerce course by Brad Traversy](https://www.udemy.com/course/nextjs-ecommerce-course/), which covers building a full-featured shopping platform from scratch using modern technologies.

---

## 👨‍💻 Author

**František Stolar**
Frontend Developer passionate about building modern web applications.

---
