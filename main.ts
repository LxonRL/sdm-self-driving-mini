let next = 0
for (let index = 0; index < 4; index++) {
    basic.setLedColor(0xff0000)
    basic.pause(200)
    basic.turnRgbLedOff()
    basic.pause(200)
}
basic.showString("SDM", 250)
next = 1
basic.forever(function () {
    if (next == 1) {
        basic.showString("READY")
        basic.setLedColor(0x00ff00)
    }
    next = 2
})
basic.forever(function () {
    if (next == 2) {
        motors.motorCommand(MotorCommand.Coast)
        motors.motorPower(50)
    }
})
