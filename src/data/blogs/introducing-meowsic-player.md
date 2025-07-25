---
title: 'Introducing Meowsic Player'
description: 'A beautiful and modern music player for Windows and Linux.'
author: 'Cyan Froste'
date: 2025-07-25
tags: ['typescript', 'react', 'rust', 'tauri', 'meowsic', 'music', 'player', 'windows', 'linux']
related: []
banner: 'https://github.com/CyanFroste/meowsic/raw/master/screenshots/5.png'
---

It all began because I couldn’t find a clean, elegant music player for Windows. Existing apps were either bloated, outdated, or felt more like streaming portals than music players. That frustration sparked the inception of Meowsic, a beautiful yet powerful music player built with Rust, Tauri, and React.

Now I can use Meowsic as a drop-in replacement and is arguably faster than the default Windows Media Player.

<a target="_blank"
    href="https://github.com/CyanFroste/meowsic/releases"
    class="px-4 py-1.5 text-sm border transition-colors w-full lg:w-auto text-center no-underline
    bg-purple-800/20 border-purple-800 text-purple-300 hover:bg-purple-800/40 hover:text-purple-100">
Try Meowsic
</a>

![Player Screenshot](https://github.com/CyanFroste/meowsic/raw/master/screenshots/3.png)
![Albums Screenshot](https://github.com/CyanFroste/meowsic/raw/master/screenshots/6.png)

#### A Dive into Rust’s Audio Ecosystem

One of the toughest challenges was choosing the right Rust audio backend. I experimented with libraries like [Symphonia](https://docs.rs/symphonia/latest/symphonia/) and [Rodio](https://docs.rs/rodio/latest/rodio/) and metadata parsing. It can now play most major music formats, including MP3, FLAC, OGG, and more.

<br/>

### Playlist Management

![Playlist Management Screenshot](https://github.com/CyanFroste/meowsic/raw/master/screenshots/7.png)

Meowsic supports playlist management, allowing you to create, edit and manage custom playlists of your favorite tracks. You can add, remove, and reorder tracks easily. You can also backup and clone playlists.

#### Virtualization & Drag-and-Drop

Playing large libraries posed UI performance challenges. I implemented virtualization techniques to handle large track lists efficiently and added smooth drag-and-drop UI for playlist management. Testing with 100,000+ songs was a breeze.

### Synchronized Lyrics Viewer

![Synchronized Lyrics Viewer Screenshot](https://github.com/CyanFroste/meowsic/raw/master/screenshots/4.png)

Meowsic supports synchronized lyrics (LRC). Features include line-by-line highlighting that scrolls with the song, enabling live karaoke-style viewing. You can add lyrics to your tracks directly from the player.

### Track Rules

![Track Rules Screenshot](https://github.com/CyanFroste/meowsic/raw/master/screenshots/11.png)

I built a small rule engine into the player. These rules let you define timed actions per track like automatically jumping to specific timecodes (“seek rules”) or changing volume. For example, if a track is a long podcast, a rule can skip past the intro automatically. This custom engine offers creative control beyond simple playlists.

### Data Management

![Data Management Screenshot](https://github.com/CyanFroste/meowsic/raw/master/screenshots/12.png)

Meowsic offers easy backup, restore, and reset functionality

- Backup your playlists, rules, and emotions to a zip file.
- Restore from the backup zip file to recover or transfer your library setup across devices.
- Reset the application state entirely if needed, dropping your local database and starting fresh.

<br/>

### Final Thoughts

![Meowsic Screenshot](https://github.com/CyanFroste/meowsic/raw/master/screenshots/5.png)

More features are in the works, and I really hope you’ll give Meowsic a try. Let me know what you think. Every piece of feedback helps shape the future of the player.

⭐ If you’re enjoying Meowsic, please consider starring the repo on GitHub. It helps others discover it and shows that this work is valued.  
🤝 Interested in contributing? Whether it's code, documentation, or ideas, your support is welcome. Raise issues or PRs here: https://github.com/CyanFroste/meowsic/issues
