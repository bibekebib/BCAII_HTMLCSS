// document.getElementById('index').innerHTML = 'Hello World!';
// document.getElementsByClassName('test1')[0].innerHTML = 'Nice to Meet you!';


document.getElementsByTagName('p')[0].innerHTML = 'Getting this through p tag';

document.querySelector('.test1').innerHTML = 'This is h1 tag';

document.querySelectorAll('p')[0].classList.remove('test');
  

// document.getElementsByClassName('naya-class')[0].style.color = 'red';

const NewImgTag = document.createElement('img')
NewImgTag.setAttribute('src','../G.C.N.png')
NewImgTag.setAttribute('alt', 'this is a logo')
NewImgTag.setAttribute('height', '800')
NewImgTag.setAttribute('width', '800')
document.body.appendChild(NewImgTag)
const NewElement =  document.createElement('div')
NewElement.setAttribute('class', 'newclass')
NewElement.setAttribute('id', 'newid')
document.body.appendChild(NewElement)
const h1Tag = document.getElementById('index')
const WholeBody = document.body
WholeBody.insertBefore(NewImgTag, h1Tag)
document.getElementsByTagName('div')[0].innerHTML = 'this is new'
document.getElementById('index').style.fontFamily = 'cursive'

let i = 0;
document.getElementById('button').addEventListener('click', ()=>{
    i = i+1;
    console.log(i)
})



