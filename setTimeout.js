
//print number in sequence order using let
function letSequenceLogic() {
    for(let i=0;i<5;i++) {
        setTimeout(function () {
            console.log(i) // 0 1 2 3 4
        },2000)
    }
}
letSequenceLogic();

//print number in sequence order using var
function varSequenceLogic() {
    for(var i=0;i<5;i++) {
        function close(i) {
            setTimeout(function () {
                console.log(i) // 0 1 2 3 4
            },2000)
        }
        close(i)
    }
}
varSequenceLogic();

//print same number using var
function varLogic() {
    for(var i=0;i<5;i++) {
        setTimeout(function () {
            console.log(i) // 5 5 5 5 5
        },2000)
    }
}
varLogic();