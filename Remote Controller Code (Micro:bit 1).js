input.onButtonPressed(Button.A, function () {
    radio.sendString("forward")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("stop")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("backward")
})
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
