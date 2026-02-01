// ==UserScript==
// @name         Green Mastery Borders
// @namespace    RetroAchievements
// @version      1.0.0
// @description  green :3
// @author       VeronicaVyxie
// @match        https://retroachievements.org/user/*
// @exclude      https://retroachievements.org/user/*/progress
// @exclude      https://retroachievements.org/user/*/posts
// @exclude      https://retroachievements.org/user/*/games
// @exclude      https://retroachievements.org/user/*/developer
// @exclude      https://retroachievements.org/user/*/developer/*
// @exclude      https://retroachievements.org/user/*/tickets
// @run-at       document-start
// @icon         https://static.retroachievements.org/assets/images/favicon.webp
// @grant    GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    .goldimage {
        border:2px solid green !important;
    }
` );
