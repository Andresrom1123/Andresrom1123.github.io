Vue.component('card', {
  props: ['title', 'description', 'image', 'url', 'codigo'],
  template: `
<div class="col-sm-12 col-lg-4 mb-5">
  <div class="border border-top-0 marco">
    <div class="scroll" style="overflow: auto;  height: 200px" >
      <img  class="" :src="image" width="100%"  ></img>
    </div>
    <p class="text-center text-info mb-0">{{ codigo }}</p>
    <h5 class="pl-3 pt-2 verde">{{title}}</h5>
    <div class="" style="height: 160px; overflow: auto;">
      <p class="mt-3  pl-3 pr-3">{{ description }}</p>
    </div>
    <div class="mr-3 ml-3 pb-4">
      <a class="text-decoration-none" target="_blank" :href="url">
          <button type="button" class="btn btn-outline-secondary btn-block text-dark border-secondary">Ver la web</button>
      </a>
    </div>
  </div>
</div>
  `
})
new Vue({
  el: '#app',
  data: {
    cardProject: [
      { 
        id: 1,
        title: 'Expert Answers(Desarrollando)',
        codigo: 'Vue - Django',
        description: 'Una red social de preguntas y respuestas que en un primer contacto te hace recordar a Yahoo! Respuesta',
        url: 'https://dev-expert-answers.netlify.app/',
        image: '/imagenes/expert-answer.png'
      },
      { 
        id: 2,
        codigo: 'Vue - Django',
        title: 'Newsletters(Desarrollando)',
        description: 'Interfaz para que los usuarios puedan suscribirse al boletín de su preferencia, también podrán votar para que se agreguen nuevos boletines',
        url: 'https://awesome-visvesvaraya-2565c3.netlify.app/',
        image: '/imagenes/newsletters.png'
      }
    ],
    cardPractices: [
      { 
        id: 1,
        title: 'Tarjeta Trello',
        codigo: 'Vue js - Html',
        description: 'Practica de una tarjeta similares a las de trello creada con vue y html',
        url: 'https://vibrant-bose-3bdd9c.netlify.app/',
        image: 'https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d71827232c7d1018dc87779/screenshot.png'
      },
      {
        id: 2,
        codigo: 'Html - Css',
        title: 'Banner Netflix La Casa de Papel',
        description: 'Practica de un Banner de Netflix',
        url: 'https://wizardly-easley-4a0880.netlify.app/',
        image: '/imagenes/banner-casa-de-papel.png',
      }
    ],
  }
})
