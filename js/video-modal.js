/**
 * Надо получить все блоки которые содержат видео/фрейм с ютуб
 * Повесить на каждый блок, обработчик события
 * Получить данные с фрейма - id
 * Передать их в цикл и вывести в блоке превью
 * 
 * -- Можем менять параметры
 * Ширина
 * Высота
 * Добавить катстомный зааголовок
 * Добавить кастомный текст
 * Поставить сою превью
 * Заменить иконкцуу на превью
 */
 
class VideoModalWS {
  constructor(options) {
    this.$container =  document.querySelector('.ws-video')
    this.$body = document.querySelector('body')
  }

  renderModal(){
    let widthVideo = '';
    let heightVideo  = '';
    let id = '2wQxF7gTcFo';

    let videoBlock = ` 
      <div class="ws-modal__overlay">
        <span class="ws-modal__close">&#10006;</span>
        <iframe class="ws-modal__block" style="width: ${widthVideo || '450px'}; height: ${heightVideo || '250px'};" src="https://www.youtube.com/embed/${id || ''}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `

    let div = document.createElement('div')
    div.className = "ws-modal__video"
    div.innerHTML = `${videoBlock}`
    document.body.prepend(div)
    // console.log(this.modal, videoBlock)
  }

  renderBlock(){
    let id = '2wQxF7gTcFo';
    let alt = 'prevue'
    let videoImgBlock = `
      <div class="ws-modal__wrap">
          <div class="ws-video__icon">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18" role="img" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
              <img src="http://img.youtube.com/vi/${id || ''}/hqdefault.jpg" alt="${alt || ''}" class="ws-video__img">
          </div>
      </div>
    `
    let div = document.createElement('div')
    div.className = "ws-modal__wrap"
    div.innerHTML = `${videoImgBlock}`
    this.$container.prepend(div)
  }
 }
const vidoBlock = new VideoModalWS();
// vidoBlock.renderModal()
// vidoBlock.renderBlock()
// console.log(vidoBlock)
