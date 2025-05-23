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

> Add updated screenshots of the Search + Filter UI here

---

## 📚 Technologies Used

* **React Native**
* **Expo**
* **React Navigation**
* **React Native Paper**
* **TMDb API**
* **Context API**
* **AsyncStorage**
