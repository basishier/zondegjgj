input.onButtonPressed(Button.A, function () {
    papier += 1
})
input.onButtonPressed(Button.B, function () {
    papier += -1
})
radio.setGroup(1)
let papier = 0
basic.forever(function () {
    if (papier == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (papier == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (papier == 2) {
        basic.showLeds(`
            . . # # #
            . # # . .
            # # . . .
            . # # . .
            . . # # #
            `)
    }
})
