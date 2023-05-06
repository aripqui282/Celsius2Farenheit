input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(C_a_F(input.temperature()))
    basic.pause(1000)
})
function C_a_F (C: number) {
    return C * 1.8 + 32
}
