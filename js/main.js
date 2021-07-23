// import VideoModalWS from './video-modal.js'
window.addEventListener('DOMContentLoaded', ()=>{
	const modalVideoConstructor = function(options){

		const $container =  document.querySelector('#ws-v');
  	const $body = document.querySelector('body');
		const $video = $container.querySelectorAll('.ws-video');

		const renderBlock = function(el){
			console.log(el)

				    // let id = '2wQxF7gTcFo';
				    // let alt = 'prevue'
				    // let videoImgBlock = `
				    //   <div class="ws-modal__wrap">
				    //       <div class="ws-video__icon">
				    //           <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18" role="img" viewBox="0 0 576 512">
				    //               <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
				    //           <img src="http://img.youtube.com/vi/${id || ''}/hqdefault.jpg" alt="${alt || ''}" class="ws-video__img">
				    //       </div>
				    //   </div>
				    // `
				    // let div = document.createElement('div')
				    // div.className = "ws-modal__wrap"
				    // div.innerHTML = `${videoImgBlock}`
				    // el.$container.prepend(div)
					}

		function eventClickVideoBlock(){
			/**
			 * Получаем все эелементыс нашими будущими видео
			 * далее, отрисовываем наши привью блоки
			 * на которые в будущем повесим клик,
			 * по которому будет рендериться наш блок
			 */
			$video.forEach(function(item) {
				renderBlock(item)
			});
		}
    
    function renderModal(id = '2wQxF7gTcFo'){
    	let widthVideo = options.widthVideo;
    	let heightVideo  = options.heightVideo;
    	let alt = options.alt;

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
    }
    renderModal()
    eventClickVideoBlock()

    // var a = str.split('+')[0]
    let lenghtId = $video[0].textContent
    let idV = lenghtId.split('/').length
    //console.log(idV)
	}


	modalVideoConstructor({
		container: '#ws-v',
		elements: '',
		widthVideo: '500px',
    heightVideo: '320px',
    idVideo: ['https://youtu.be/qrELr8yrO1A'],
    alt: 'prevue',
	})




















})