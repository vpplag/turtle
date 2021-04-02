input.onButtonPressed(Button.A, function () {
    if (speed >= 10) {
        speed += -10
        turtle.setSpeed(speed)
    }
})
input.onButtonPressed(Button.B, function () {
    if (speed < 50) {
        speed += 10
        turtle.setSpeed(speed)
    }
})
let speed = 0
turtle.setBrightness(64)
speed = 20
turtle.setSpeed(speed)
basic.forever(function () {
    turtle.setPosition(2, 2)
    for (let index = 0; index <= 1; index++) {
        turtle.turnRight()
        turtle.forward(1)
    }
    for (let index = 0; index <= 1; index++) {
        turtle.turnRight()
        turtle.forward(2)
    }
    for (let index = 0; index <= 1; index++) {
        turtle.turnRight()
        turtle.forward(3)
    }
    for (let index = 0; index <= 2; index++) {
        turtle.turnRight()
        turtle.forward(4)
    }
})
