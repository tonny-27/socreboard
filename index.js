
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let guestStoreEl =document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function increaseHomeScoreOne(incrementBy) {
    homeScore += incrementBy
    homeStoreEl.textContent = homeScore
}

function increaseGuestScoreOne(incrementBy) {
    guestScore += incrementBy
    guestStoreEl.textContent = guestScore
}