input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        robotbit.StepperDual(90, 90)
    }
})
basic.showIcon(IconNames.Yes)
