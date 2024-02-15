// Thay đổi nội dung búc thư ở đây
var letterContent = "Nếu cuộc đời này như một bức họa thì em sẽ là ngôi sao sáng nhất thổi hồn cho bức họa ấy. Anh yêu em, trước đây, hiện tại và sau này vẫn yêu em. Mãi mãi không đổi thay. Anh yêu em. Hoàng Việt yêu Duyên tồ"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50

// Hiệu ứng gõ chữ

function effectWrite() {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")

    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val
        }, durationWrite * index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if (cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})