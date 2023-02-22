input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.pause(500)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.ringTone(262)
})
