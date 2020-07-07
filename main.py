def on_button_pressed_a():
    robotbit.stepper_turn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
