input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.House)
    forward = true
    basic.pause(2500)
    forward = false
    basic.showIcon(IconNames.Yes)
})
let forward = false
basic.showIcon(IconNames.Yes)
forward = false
basic.forever(function () {
    if (forward == true) {
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
    }
})
basic.forever(function () {
    if (forward == true) {
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
    }
})
