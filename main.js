const fortuneCookie = document.querySelector('.fortune-cookie')
const openedCookie = document.querySelector('.opened-cookie')
const title = document.querySelector('h1')
const button = document.querySelector('button')
const titleText = ['Qual é a sua sorte<br> de hoje?', 'Aqui está a sua sorte de hoje:']
const p = document.querySelector('p')
const luckyText = ['Abra o biscoito e descubra!',
                  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
                  'A vida trará coisas boas se tiver paciência.',
                  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
                  'Não compense na ira o que lhe falta na razão.',
                  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
                  'A maior de todas as torres começa no solo.',
                  'Não há que ser forte. Há que ser flexível.',
                  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
                  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
                  'A juventude não é uma época da vida, é um estado de espírito.',
                  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.']


fortuneCookie.addEventListener('click', toggleScreen)
button.addEventListener ('click', resetCookie)

function toggleScreen(e) {
  fortuneCookie.classList.toggle('hide')
  openedCookie.classList.toggle('hide')
  button.classList.toggle('hide')
  p.classList.toggle('lucky-text')
  changeTitle(titleText)
  toggleLuckyText(luckyText, ramdomNumber())
}

function resetCookie(e) {
  toggleScreen()
}
  
function changeTitle(titleText) {
  title.innerHTML =  titleText.indexOf(title.innerHTML) == 0 ? titleText[1] : titleText[0]
}

function toggleLuckyText(luckyText, ramdomNumber) {
  p.innerHTML =  luckyText.indexOf(p.innerHTML) == 0 ? luckyText[ramdomNumber] : luckyText[0]
}

function ramdomNumber() {
  const number = Math.round(Math.random() * 10) + 1;
  console.log(number)
  return number
}