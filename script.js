const text = document.querySelector("#paragraph");

document.body.addEventListener("input", function(e){

    let a = document.querySelector('input[name="color"]');
    text.style.color = a.value;
    let b = document.querySelector('input[name="size"]');
    text.style.fontSize = b.value + 'px';
    let c = document.querySelector('select[name="police"]');
    text.style.fontFamily = c.value;
});