import { getFlagEmoji } from "./utils.js";

const baseHTML = `
<!DOCTYPE html>
<html lang="en" id="html" class="dark scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Badak Terbang Proxy</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        poppins: ['Poppins', 'sans-serif'],
                    },
                    colors: {
                        'dark-bg': '#121212',
                        'dark-card': '#1E1E1E',
                        'dark-text': '#E0E0E0',
                        'dark-accent': '#BB86FC',
                        'dark-primary': '#03DAC6',
                    },
                },
            },
        };
    </script>
</head>
<body class="bg-dark-bg text-dark-text font-poppins">

    <!-- Notification Badge -->
    <div id="notification" class="fixed top-5 right-5 bg-dark-primary text-dark-bg py-2 px-4 rounded-lg shadow-lg opacity-0 transition-opacity duration-300 z-50">
        Copied to clipboard!
    </div>

    <!-- Main Container -->
    <div class="container mx-auto px-4 py-8">

        <!-- Header -->
        <header class="text-center mb-8">
            <h1 id="main-title" class="text-4xl font-bold text-dark-primary">PLACEHOLDER_TITLE</h1>
            <p id="info-container" class="text-md text-dark-text mt-2">PLACEHOLDER_INFO</p>
        </header>

        <!-- Proxy Cards Grid -->
        <div id="proxy-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            PLACEHOLDER_PROXY_CARDS
        </div>

        <!-- Pagination -->
        <nav id="pagination-container" class="flex justify-center mt-8 space-x-4">
            PLACEHOLDER_PAGINATION
        </nav>
    </div>

    <!-- Floating Action Buttons -->
    <div class="fixed bottom-5 right-5 flex flex-col items-center space-y-4">
         <a href="PLACEHOLDER_DONATE_LINK" target="_blank" class="bg-dark-accent hover:bg-opacity-80 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transform hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.87 7.73l7.92 4.22a2 2 0 001.42 0l7.92-4.22m-15.84 9.54a2 2 0 001.42 0l7.92-4.22 7.92 4.22m-17.26-4.22V7.73a2 2 0 011.42-1.94l7.92-4.22a2 2 0 011.42 0l7.92 4.22A2 2 0 0120.55 7.73v5.54a2 2 0 01-1.42 1.94l-7.92 4.22a2 2 0 01-1.42 0l-7.92-4.22A2 2 0 013.29 13.27z" /></svg>
        </a>
        <button onclick="toggleDarkMode()" class="bg-dark-primary hover:bg-opacity-80 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transform hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a
