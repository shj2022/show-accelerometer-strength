/**
 * - Press A to turn on, press B to turn off.
 * 
 * - Pressing B clears the data. 
 * 
 * - While on, LED displays the maximum accelerometer strength recorded during the latest "on" period.
 * 
 * - The units for the accelerometer strength is mg.
 * 
 * - Default acceleration strength (with no movement) is approximately 1000mg (=1g) due to gravity.
 */
input.onButtonPressed(Button.A, function () {
    On = true
})
input.onButtonPressed(Button.B, function () {
    On = false
    max_acceleration_strength = 0
    led.stopAnimation()
})
let max_acceleration_strength = 0
let On = false
On = false
max_acceleration_strength = 0
loops.everyInterval(100, function () {
    if (On == true) {
        basic.showNumber(max_acceleration_strength)
        if (input.acceleration(Dimension.Strength) > max_acceleration_strength) {
            max_acceleration_strength = input.acceleration(Dimension.Strength)
        }
    }
})
