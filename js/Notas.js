// DECLARAÇÃO DICIONÁRIOS -------------------------------------------------------

	/*var bookDictionary1 = {
		id: "1", 
		name:"Harry Potter e o Calice de Fogo!", 
		descricao: "Harry Potter e o Cálice de Fogo (no original em inglês Harry Potter and the Goblet of Fire) é o quarto livro dos sete volumes da série de fantasia Harry Potter, tanto em termos cronológicos como em ordem de publicação, da autora inglesa J. K. Rowling.", 
		price: 19.99, 
		img: "img/Harry Potter1.jpg",
		href: "https://www.wikipedia.org/"
	};

	var bookDictionary2 = {
		id: "2", 
		name:"Harry Potter e as Reliquias da Morte!", 
		descricao: "The Deathly Hallows, publicado no Brasil sob o título Harry Potter e as Relíquias da Morte e em Portugal como Harry Potter e os Talismãs da Morte, é o sétimo livro série Harry Potter da escritora britânica J. K. Rowling.", 
		price: 20.99, 
		img: "img/Harry Potter2.jpg",
		href: "https://www.wikipedia.org/"
	};

	var bookDictionary3 = { 
		id: "3",
		name:"Harry Potter e a Pedra Filosofal!", 
		descricao: "Harry Potter e a Pedra Filosofal (no original em inglês Harry Potter and the Philosopher's Stone) é o primeiro livro dos sete volumes da série de fantasia Harry Potter, tanto em termos cronológicos como em ordem de publicação, da autora inglesa J. K. Rowling.", 
		price: 30.99, 
		img: "img/Harry Potter3.png",
		href: "https://www.wikipedia.org/"
	};

	var sectionTable = { 
		name:"Tinder dos Livros"
	};*/

	//var Library = new Array(bookDictionary1, bookDictionary2, bookDictionary3);

	// FIM DECLARAÇÃO DICIONÁRIOS -------------------------------------------------

/*function LoadData(){

		$allBooks = $(".book");

		jQuery.each(Library,function(index,value){

			$currentBook = $allBooks.eq(index);

			$("h1",$currentBook).text(value.name);
			$("p.descricao",$currentBook).text(value.descricao);
			$("p.price",$currentBook).text(value.price);
			$("img",$currentBook).attr("src",value.img);
			$("a.Wikipedia",$currentBook).attr("href",value.href);
			$("a.Wikipedia", $currentBook).text("Wikipedia");

		});

		var $alteracTable = $(".endPageTable");
		$("h1", $alteracTable).text(sectionTable.name);
	}*/

	//$("#tablecheckbox input[type=checkbox]:checked");
		//$("#tablecheckbox input[id=select_all]:checked");
		//var teste = $("#tablecheckbox input[id=select_all]:checked");
		//console.log("teste", teste);

		/*$("#select_all").click(function() {

			if ($("#tablecheckbox input[id=select_all]:checked")){

				$("#tablecheckbox input[type=checkbox]").prop("checked",true);
			} else {

				$("#tablecheckbox input[type=checkbox]").prop("checked",false);
			}
		});*/

		/*$(".book button.dislike").click(function() {

		$allBooks = $(".book");
		$parent = $(this).parents(".book");

		var id = "1";
		var name = $("h1", $parent).text();
		var price = $("p.price",$parent).text();
		var opinion = $(this).attr("name");
		
		addRow(id,name,price,opinion);
		$("tbody > tr:odd").css("background-color", "white");

		$("tr").hover( function (e) {

			$(this).toggleClass('hover', e.type === 'mouseenter');
		});
		
		var index = $allBooks.index($parent);
		$next = $parent.next(".book");
		$parent.removeClass("active");

		if( index >= $allBooks.length-1 ){
			$next = $allBooks.eq(0);
			$("#bookContainer").hide();
			$("#endPage").show();
		}
		
		$parent.fadeOut(500,function(){
			$parent.removeClass("active");
			$next.fadeIn(500,function(){
				$next.addClass("active");
			});
		});
	});*/

	// Nota: on click utilizado para fazer botões em sítios que ainda não fizeram load
	// Exemplo: botões dentro da div bookContainer

	//array opinion[] botão voltar a trás

	//<form class="navbar-form navbar-left">
	//</form>

	/*$('#topicInput').keyup(function(){

        var topic = $(this).val();
        if (topic==''){
            $('#tagResult').css("display" , "none");
        }
        else{
            //$('div').click(function(){
                //$('#tagResult').css("display" , "none");

            //});
            $('#tagResult').css("display" , "block");

                $.post('../topic.php' , {topic: topic} , function(response){

                $('#tagResult').html(response);     
                });
            }
    });
     //the above code is working properly

$('.topicResult').click(function(){
    alert(1);   //this is just a test, but it never shows up
});*/

