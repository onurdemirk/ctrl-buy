const apiKey = import.meta.env.VITE_API_KEY;
const currentYear = new Date().getFullYear();

const formatDate = (date) => date.toISOString().split("T")[0];

const today = new Date();
const todayStr = formatDate(today);

// --- Last 30 Days ---
const last30Start = new Date(today);
last30Start.setDate(today.getDate() - 30);
const last30StartStr = formatDate(last30Start);

// --- This Week (Monday to Sunday) ---
const jsDay = today.getDay(); // 0 (Sunday) to 6 (Saturday)
const mondayOffset = (jsDay + 6) % 7; // Convert to Monday-based week
const monday = new Date(today);
monday.setDate(today.getDate() - mondayOffset);
const sunday = new Date(monday);
sunday.setDate(monday.getDate() + 6);

const weekStart = formatDate(monday);
const weekEnd = formatDate(sunday);

export const endpoints = [
  // Main
  {
    id: "main",
    url: `https://api.rawg.io/api/games?key=${apiKey}&page_size=15`,
    text: "Games",
  },

  // Time-based filters
  {
    id: "last-30-days",
    url: `https://api.rawg.io/api/games?key=${apiKey}&dates=${last30StartStr},${todayStr}&ordering=-added&page_size=15`,
    text: "Last 30 Days",
  },
  {
    id: "this-week",
    url: `https://api.rawg.io/api/games?key=${apiKey}&dates=${weekStart},${weekEnd}&ordering=-added&page_size=15`,
    text: "This Week",
  },
  {
    id: "best-of-the-year",
    url: `https://api.rawg.io/api/games?key=${apiKey}&dates=${currentYear}-01-01,${currentYear}-12-31&ordering=-rating&page_size=15`,
    text: `Best of the ${currentYear}`,
  },
  {
    id: "popular-in-2025",
    url: `https://api.rawg.io/api/games?key=${apiKey}&dates=2025-01-01,2025-12-31&ordering=-added&page_size=15`,
    text: "Popular in 2025",
  },
  {
    id: "all-the-top",
    url: `https://api.rawg.io/api/games?key=${apiKey}&ordering=-rating&page_size=15`,
    text: "All the Top",
  },

  // Platforms
  {
    id: "pc",
    url: `https://api.rawg.io/api/games?key=${apiKey}&platforms=4&page_size=15`,
    text: "PC",
  },
  {
    id: "playstation",
    url: `https://api.rawg.io/api/games?key=${apiKey}&platforms=187&page_size=15`,
    text: "PlayStation",
  },
  {
    id: "xbox-one",
    url: `https://api.rawg.io/api/games?key=${apiKey}&platforms=1&page_size=15`,
    text: "Xbox One",
  },
  {
    id: "nintendo",
    url: `https://api.rawg.io/api/games?key=${apiKey}&platforms=7&page_size=15`,
    text: "Nintendo",
  },
  {
    id: "ios",
    url: `https://api.rawg.io/api/games?key=${apiKey}&platforms=3&page_size=15`,
    text: "iOS",
  },
  {
    id: "android",
    url: `https://api.rawg.io/api/games?key=${apiKey}&platforms=21&page_size=15`,
    text: "Android",
  },

  // Genres
  {
    id: "indie",
    url: `https://api.rawg.io/api/games?key=${apiKey}&genres=indie&page_size=15`,
    text: "Indie",
  },
  {
    id: "action",
    url: `https://api.rawg.io/api/games?key=${apiKey}&genres=action&page_size=15`,
    text: "Action",
  },
  {
    id: "adventure",
    url: `https://api.rawg.io/api/games?key=${apiKey}&genres=adventure&page_size=15`,
    text: "Adventure",
  },
  {
    id: "rpg",
    url: `https://api.rawg.io/api/games?key=${apiKey}&genres=role-playing-games-rpg&page_size=15`,
    text: "RPG",
  },
  {
    id: "strategy",
    url: `https://api.rawg.io/api/games?key=${apiKey}&genres=strategy&page_size=15`,
    text: "Strategy",
  },
  {
    id: "shooter",
    url: `https://api.rawg.io/api/games?key=${apiKey}&genres=shooter&page_size=15`,
    text: "Shooter",
  },
];
