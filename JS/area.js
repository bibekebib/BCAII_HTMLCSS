function area() {
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);
let percentage = (parseInt(length) + parseInt(width) / 2) ;
document.getElementById('percentage').innerText = percentage;
    if (percentage > 32 ){
        alert('You are passedFailed');
    } else {
        alert('Failed');
    }
}
