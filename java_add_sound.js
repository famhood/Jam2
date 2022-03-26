ion.sound({
    sounds: [
        {
            name: "blue",
            volume: 0.5,
            preload: false
        }
    ],
    volume: 0.5,
    path: "asset/blue.mp3",
    preload: true
});

ion.sound.play("blue");
