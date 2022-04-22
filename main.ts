bluetooth.onBluetoothConnected(function () {
    sprite = 2
    if (next == 2) {
        basic.showString("READY")
        basic.setLedColor(0x00ff00)
    }
})
bluetooth.onBluetoothDisconnected(function () {
    if (next == 1) {
        basic.showString("CONNECT YOUR PHONE")
        basic.setLedColor(0xffff00)
        basic.pause(100)
        basic.setLedColor(0xffff00)
    }
})
let sprite = 0
let next = 0
next = 0
for (let index = 0; index < 4; index++) {
    basic.setLedColor(0xff0000)
    basic.pause(200)
    basic.turnRgbLedOff()
    basic.pause(200)
}
basic.showString("SDM", 250)
next = 1
basic.forever(function () {
    basic.showNumber(devices.signalStrength())
})
basic.forever(function () {
    if (next == 2) {
        motors.motorCommand(MotorCommand.Coast)
        motors.motorPower(50)
    }
})
