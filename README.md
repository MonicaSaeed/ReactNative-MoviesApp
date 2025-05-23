# 🎬 React Native Movies App

A sleek, modern movie browser built with **React Native**, integrating with **The Movie Database (TMDb)** API. This app allows users to explore **popular**, **top-rated**, and **upcoming** movies, search for specific titles, and manage their favorites via persistent local storage. Navigation is handled through a **Drawer + Stack** navigation system.

---

## 🚀 Features

* Browse movies by category: **Popular**, 🎖️ **Top Rated**, 📅 **Upcoming**
* **Search** movie titles across selected or all categories
* **Filter** by category using a modern modal selector
* **Favorite movies** with persistent local storage
* **Movie detail screen** for additional information
* Smooth UI with React Navigation & Paper components


---

## 🔧 Setup Instructions

### 1. Prerequisites

* Node.js >= 16.x
* Expo CLI: `npm install -g expo-cli`
* TMDb API Key

### 2. Clone the Repo

```bash
git clone https://github.com/your-username/movies-app.git
cd movies-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Add TMDb API Key

Create a file at `env/myEnv.js`:

```js
export const API_KEY = 'Bearer YOUR_TMDB_BEARER_TOKEN';
```

### 5. Run the App

```bash
npm run start
```

Scan the QR code using your Expo Go app or run in a local emulator.

---

## 📸 Screenshots
![splash screen](https://github.com/user-attachments/assets/f2c587ba-2e8a-4238-8969-93bb6ca3e6d8)
![Home](https://github.com/user-attachments/assets/7411d20e-afac-40fd-80de-31e920e3084c)
![emptyFav](https://github.com/user-attachments/assets/0a2d8c02-007c-4d48-bfd7-56e9a04a5004)
![fav](https://github.com/user-attachments/assets/0a31a28f-1e6d-46c3-a36f-cd9532cc4bdd)
![movie details](https://github.com/user-attachments/assets/188d826c-5eaa-4138-a2f7-9bbe0d63bfc2)
![about](https://github.com/user-attachments/assets/62fb3eba-d0fc-45fe-91a1-69c14c0bca56)

---

## 📚 Technologies Used

* **React Native**
* **Expo**
* **React Navigation**
* **React Native Paper**
* **TMDb API**
* **Context API**
* **AsyncStorage**
