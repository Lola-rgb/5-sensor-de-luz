basic.forever(function () {
    if (input.lightLevel() > 50) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.clearScreen()
    }
})
