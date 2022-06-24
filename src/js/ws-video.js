class WsVideo {
  constructor() {
    this.mainBlock = '.ws-video'
    this.addModal()
    this.renderImg()
  }
  renderImg(){
    let block = document.querySelectorAll(this.mainBlock)
    block.forEach((item)=>{
      let link = item.querySelector('.ws-video__link')
      let img = item.querySelector('.ws-video__img')
      let urlId = link.href.split("/").at(-1)
      let span = document.createElement('span')
      span.className = 'play'
      span.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>'
      link.append(span)
      link.addEventListener('click', (event)=>{
        event.preventDefault()
        this.modalOpen(event.target.href)
      })
      img.src = `https://img.youtube.com/vi/${urlId}/hqdefault.jpg`
    })
  }
  modalOpen(linkId){
    document.querySelector('.ws-video__close').addEventListener('click', this.closeModal)
    document.querySelector('.ws-video__modal').style.display = 'flex'
    this.addVideoFromModal(linkId.split("/").at(-1))
    document.body.style.overflowY = 'hidden'
  }
  closeModal(event){
    document.querySelector('.ws-video__modal').style.display = 'none'
    document.querySelector('.iframe-wrap').remove()
    document.querySelector('.ws-video__modal').removeEventListener('click', this.closeModal)
    document.body.style.overflowY = ''
  }
  addVideoFromModal(linkId){
    let div = document.createElement('div')
    div.className = 'iframe-wrap'
    div.innerHTML = `<iframe class="ws-modal__iframe" src="https://www.youtube.com/embed/${linkId || ""}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    document.querySelector('.ws-video__video-block').append(div)
  }
  addModal(){
    let div = document.createElement('div')
    div.className = 'ws-video__modal ws-video__overlay'
    div.innerHTML = '<div class="ws-video__video-block"> <button class="ws-video__close"> <span class="close-line"></span> </button> </div>'
    document.querySelector('body').prepend(div)
  }
}
new WsVideo({
  mainBlock: '.ws-video'
})
