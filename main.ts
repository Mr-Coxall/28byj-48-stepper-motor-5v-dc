input.onButtonPressed(Button.A, function () {
    forward = true
    basic.pause(10)
    forward = false
})
let forward = false
forward = false
basic.forever(function () {
    if (forward == true) {
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B2)
    }
})
basic.forever(function () {
    if (forward == true) {
        robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B2)
    }
})
