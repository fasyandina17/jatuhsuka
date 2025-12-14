document.addEventListener('DOMContentLoaded', () => {
    const lyricOutput = document.getElementById('lyric-output');
    const backgroundMusic = document.getElementById('background-music');

    // **Lirik Lagu "Jatuh Suka - Tulus"**
    // Lirik disimpan dalam array, di mana setiap elemen adalah baris lirik.
    // Lirik DIBUAT PERSIS seperti di video (dengan sedikit penyesuaian untuk ketikan).
    const lyrics = [
        "== Jatuh Suka - Tulus ==",
        "Beginikah surga",
        "Bayangkan",
        "Bila",
        "Kau ajakku bicara",
        "Ini semua bukan salahmu",
        "Punya magis perekat yang sekuat itu",
        "Dari lahir sudah begitu",
        "Maafkan...",
        "Aku jatuh suka"
    ];

    // Array of time delays (in seconds) for each line, as seen in the video.
    // Disesuaikan agar sesuai dengan timing di video.
    // Note: Delay pertama (0.4s) adalah sebelum lirik pertama muncul.
    const delays = [0.4, 1.6, 2.5, 3.1, 8.4, 5.2, 3.2, 5.0, 7.5];

    let lyricIndex = 0;

    // Fungsi untuk mensimulasikan efek ketikan per karakter
    function typeWriter(text, lineIndex, delay) {
        let charIndex = 0;
        lyricOutput.innerHTML += "\n"; // Tambah baris baru untuk lirik
        
        // Tambahkan kursor berkedip saat sedang mengetik
        lyricOutput.classList.add('typing-cursor');

        const interval = setInterval(() => {
            if (charIndex < text.length) {
                // Tambahkan karakter berikutnya
                lyricOutput.innerHTML = lyricOutput.innerHTML.slice(0, -1) + text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(interval);
                // Hapus kursor setelah selesai mengetik baris
                lyricOutput.classList.remove('typing-cursor'); 
                
                // Panggil fungsi untuk baris berikutnya setelah jeda waktu yang sesuai (delay)
                setTimeout(startTyping, delay * 1000); 
            }
        }, 80); // Kecepatan ketikan per karakter (80ms)
    }

    // Fungsi untuk memulai animasi ketikan
    function startTyping() {
        if (lyricIndex < lyrics.length) {
            const currentLyric = lyrics[lyricIndex];
            const currentDelay = delays[lyricIndex] || 3.0; // Gunakan 3.0s jika delay tidak ada
            
            // Perbarui kursor
            lyricOutput.classList.add('typing-cursor');
            
            // Mulai ketikan
            typeWriter(currentLyric, lyricIndex, currentDelay);
            lyricIndex++;
        } else {
            // Animasi selesai, hilangkan kursor final
            lyricOutput.classList.remove('typing-cursor');
        }
    }

    // Awalnya, beri sedikit jeda sebelum memulai
    setTimeout(() => {
        // Coba mainkan musik otomatis (perlu interaksi pengguna di beberapa browser)
        // backgroundMusic.play().catch(error => {
        //     console.log("Auto-play blocked. User interaction needed to play music.");
        //     // Anda bisa menambahkan tombol "Mulai" untuk memicu musik dan animasi
        // });
        startTyping();
    }, 500); // Jeda 0.5 detik sebelum lirik pertama
});
