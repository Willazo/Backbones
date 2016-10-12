$(document).ready(function(){
	console.log('main.js loaded');
	//ajax request /articles.js
	window.collections.articles = new Puls3.Collections.Articles();

	window.collections.articles.on('add', function(model){
		//console.log('Se ha agregado', model.toJSON());
	//aqui agregamos nuevas vistas
		var view = new Puls3.Views.Article({model: model});
		view.render();
		view.$el.appendTo('.posts');
	});
	//Cada vez qye agregamos algo al modelo lanza el mensaje por consola
	window.collections.articles.fetch();
});
