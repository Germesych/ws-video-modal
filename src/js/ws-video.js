class WsVideo {
  constructor() {
    this.mainBlock = '.ws-video'
    this.renderImg()
  }
  selectors = {
    modal: document.querySelector('.ws-video__modal'),
    modalClose: document.querySelector('.ws-video__close'),
    videoBlock: document.querySelector('.ws-video__video-block'),
  }
  renderImg(){
    let block = document.querySelectorAll(this.mainBlock)
    block.forEach((item)=>{
      let link = item.querySelector('.ws-video__link')
      let img = item.querySelector('.ws-video__img')
      let urlId = link.href.split("/").at(-1)
      link.addEventListener('click', (event)=>{
        event.preventDefault()
        this.modalOpen(event.target.href)
      })
      img.src = `https://img.youtube.com/vi/${urlId}/hqdefault.jpg`
    })
  }
  modalOpen(linkId){
    this.selectors.modalClose.addEventListener('click', this.closeModal)
    this.selectors.modal.style.display = 'flex'
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
    this.selectors.videoBlock.append(div)
  }
}
new WsVideo({
  mainBlock: '.ws-video'
})
