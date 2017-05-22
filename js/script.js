$(document).ready(function() {

	console.log("Ready!");

	// AJAX -------------------------------------------------------------------------

	var APIKey = "AIzaSyAWyjXY459MAyt2tChVsghBOPVU4ivqFfo";
	var UserID = "105291582947490372952";
	var ShelfID = "1001";

	$("#searchButton").click(function(){

		var search = $("#Search").val().toLowerCase();
		var author = $("#SearchAuthor").val().toLowerCase();
        
		var terms = "intitle";
		var terms2 = "inauthor";

		if (search == "" & author == ""){

			console.log(1);
			alert("A sua pesquisa não possui parâmetros!")
			//$("#bookContainer").hide();
        	container = $("bookContainer");

			//var linkURL = "https://www.googleapis.com/books/v1/volumes?q=" + terms + ":" + search + "+" + terms2 + ":" + author + "&key=" + APIKey

		}
		else if (search != "" & author == ""){

			console.log(2);
			alert("A sua pesquisa não possui autor!")
			var linkURL = "https://www.googleapis.com/books/v1/volumes?q=" + terms + ":" + search + "&key=" + APIKey
			ajaxConnection(linkURL)
		}
		else if (search == "" & author != ""){

			console.log(3);
			alert("A sua pesquisa não possui título!")
			var linkURL = "https://www.googleapis.com/books/v1/volumes?q=" + terms2 + ":" + author + "&key=" + APIKey
			ajaxConnection(linkURL)
		}
		else if (search != "" & author != ""){

			console.log(4);
			alert("A sua pesquisa possui todos os parâmetros!")
			var linkURL = "https://www.googleapis.com/books/v1/volumes?q=" + terms + ":" + search + "+" + terms2 + ":" + author + "&key=" + APIKey
			ajaxConnection(linkURL)
		}



		$("#bookContainer").hide();
        container = $("#searchContainer");



        

        
    });        

	$.ajax({

		url: "https://www.googleapis.com/books/v1/users/" + UserID + "/bookshelves/" + ShelfID + "/volumes?key=" + APIKey // API KEY
		//data: { Authentication: ClienteID } //Cliente ID

	}).done(function(data){

		console.log(data);

		$.each(data.items,function(index,item){

			container = $("#bookContainer");
			LoadDataWithHTML(item, container);
		});
		console.log(data);
	});

	function ajaxConnection(linkURL) {

		$.ajax({

        	url: linkURL
        
        }).done(function(data){

			console.log(data);

			$.each(data.items,function(index,item){

				LoadDataWithHTML(item, container);
			});

			console.log(data);
		});
	}

	// FIM AJAX ---------------------------------------------------------------------

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

	// DECLARAÇÃO FUNÇÕES ---------------------------------------------------------

	function LoadDataWithHTML(book, container){

		var HTMLtoInsert = `
			<div class="col-xs-12 col-md-8 col-md-offset-2 book">
				<div class="grow pic">
					<img class="img-thumbnail center-block img-fluid">
				</div>
				<p></p>
				<div class="jumbotron">
					<h1></h1>
					<p class="descricao"></p>
					<p class="price"></p>

					<div class="fixfloat"></div>
					<br>
					<a class="Wikipedia"></a>
					<a target="_blank "href="https://www.google.pt/">Zoomato</a>
					<br>
					<a target="_blank" href="https://foursquare.com/">Foursquare</a>
					<a target="_blank" href="https://www.google.pt/">Outros</a>
				</div>
			</div> 
		`;

		container.append(HTMLtoInsert);
		$currentBookHTML = $('.book').eq(-1);
		$("h1",$currentBookHTML).text(book.volumeInfo.title);
		$("p.descricao",$currentBookHTML).text(book.volumeInfo.description);
		$("img",$currentBookHTML).attr("src",book.volumeInfo.imageLinks.thumbnail);
		 
		$(".book:first-of-type").addClass("active");
	}

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

	function addRow(id,name,price,opinion){

		$newrow = `
		<tr>
			<td><input type="checkbox" name="select_one" value="1" class="select_one"></td>
			<td>` + id + `</td>
			<td>` + name + `</td>
			<td>` + price + `</td>
			<td>` + opinion + `</td>
		</tr>
		`;

		$("tbody", $("#tablecheckbox")).append($newrow);
	}

	//function deleteRow(){

		$("#deleteButton").click(function(){

			if ($( "input:checked" ).length > 0){

				var tr = $("#tablecheckbox input[name=select_one]:checked").closest('tr');

				tr.fadeOut(600, function() {

					$("#tablecheckbox input[id=select_all]").prop("checked",false); 
      				tr.remove(); 
    			});

			}
			else if ($( "input:checked" ).length <= 0){

				alert("Não tem nenhuma linha selecionada!");
			}
		});
	//}

	// Fim DECLARAÇÃO FUNÇÕES ---------------------------------------------------------

	// LOAD DA PÁGINA -----------------------------------------------------------------

	//LoadDataWithHTML();
	//LoadData();

	// FIM LOAD DA PÁGINA -------------------------------------------------------------

	// INÍCIO CHECKBOX ----------------------------------------------------------------

		$('input[id="select_all"]').click(function(){

			if($(this).prop("checked") == true){
				
				$("#tablecheckbox input[class=select_one]").prop("checked",true);
				$("#tablecheckbox input[name=select_one]:checked").closest('tr').addClass("TR_active");
			}
			else if($(this).prop("checked") == false){

				$("#tablecheckbox input[class=select_one]").prop("checked",false);
				$("#tablecheckbox input[name=select_one]:not(:checked)").closest('tr').removeClass("TR_active");
			}
		});

		$("#tablecheckbox").on("click", 'input[class="select_one"]', function(){

			if($(this).prop("checked") == true) {

				$("#tablecheckbox input[name=select_one]:checked").closest('tr').addClass("TR_active");
			}
			else if($(this).prop("checked") == false) {

				$(this,"#tablecheckbox input[name=select_one]:not(:checked)").closest('tr').removeClass("TR_active");
			}	
		});

		$("#tablecheckbox").on("click", 'input[class="select_one"]', function(){

			if($('input[class="select_one"]').prop("checked") == true){

				$("input[type='checkbox'].select_one").change(function(){

    				var size = $("input[type='checkbox'].select_one");
    				if(size.length == size.filter(":checked").length){

        				$("#tablecheckbox input[id=select_all]").prop("checked",true); 
    				}
				});	
			}

			if($('input[class="select_one"]').prop("checked") == false){

				$("input[type='checkbox'].select_one").change(function(){

    				var size = $("input[type='checkbox'].select_one");
    				if(size.length == size.filter(":not(:checked)").length){

        				$("#tablecheckbox input[id=select_all]").prop("checked",false); 
    				}
				});	

				 
			}
		});

	// FIM CHECKBOX ----------------------------------------------------------------

	// BOTÃO LIKE & DISLIKE --------------------------------------------------------

	var inAnimation = false;

	$("button.like, button.dislike").click(function(){
		
		if(inAnimation == false){

			inAnimation = true;

			$allBooks = $(".book");
			$parent = $(".book.active");

			var index = $allBooks.index($parent);
			$next = $parent.next(".book");
			$parent.removeClass("active");

			if( index >= $allBooks.length-1 ){
				$next = $allBooks.eq(0);
				$("#bookContainer").hide();
				$("#buttons").hide();
				$("#endPage").show();
			}
			
			$parent.fadeOut(500,function(){
				$parent.removeClass("active");
				$next.fadeIn(500,function(){
					$next.addClass("active");
					inAnimation = false;
				});
			});	

			var id = "1";
			var name = $("h1", $parent).text();
			var price = $("p.price",$parent).text();
			var opinion = $(this).attr("name");

			addRow(id,name,price,opinion);
			$("tbody > tr:odd").addClass("odd_active");

			$("tr").hover( function (e) {

				$(this).toggleClass('hover', e.type === 'mouseenter');
			});
		}
	});

	// FIM BOTÃO LIKE & DISLIKE -----------------------------------------------------

	// BOTÃO RESTART ----------------------------------------------------------------

	$("#restartButton").click(function(){

		$("#endPage").hide();
		$("#bookContainer").show();
		$("#buttons").show();
	});

	// FIM BOTÃO RESTART ------------------------------------------------------------

});

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







