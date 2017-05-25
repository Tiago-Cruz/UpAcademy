$(document).ready(function() {

	console.log("Ready!");

	// DATABASE -------------------------------------------------------------------------

	var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

	db.transaction(function (tx) {
		
    	tx.executeSql('CREATE TABLE IF NOT EXISTS books (id unique, opinion)');
 	});

	// DATABASE -------------------------------------------------------------------------

	// AJAX -----------------------------------------------------------------------------

	var APIKey = "AIzaSyAWyjXY459MAyt2tChVsghBOPVU4ivqFfo";
	var UserID = "105291582947490372952";
	var ShelfID = "1001";

	/*$("#Search, #SearchFilter").keyup(function(event){
		
		var search = $("#Search").val().toLowerCase();
		var searchfilter = $("#SearchFilter").val().toLowerCase();
		var option = $("#filterOptions option").filter(':selected').text();

		var defaultLink = "https://www.googleapis.com/books/v1/volumes?q=" + search + "+";
		var linkURL = " ";

		switch (option.toLowerCase()) {

			case 'title':
				console.log(1);
				linkURL = defaultLink + "intitle:" + searchfilter
				break;

			case 'author':
				console.log(2);
				linkURL = defaultLink + "inauthor:" + searchfilter
				break;

			case 'publisher':
				console.log(3);
				linkURL = defaultLink + "inpublisher:" + searchfilter
				break;

			case 'volume':
				console.log(4);
				linkURL = defaultLink + "subject:" + searchfilter
				break;

			case 'isbn':
				console.log(5);
				linkURL = defaultLink + "isbn:" + searchfilter
				break;

			default:
				console.log('fgh');
				break;
		}

		ajaxConnection(linkURL);
		$("#bookContainer").hide();
		container = $("#searchContainer");
	});*/

	$("#searchButton").click(function(){

		var search = $("#Search").val().toLowerCase();
		var searchfilter = $("#SearchFilter").val().toLowerCase();
		var option = $("#filterOptions option").filter(':selected').text();

		var defaultLink = "https://www.googleapis.com/books/v1/volumes?q=" + search + "+";
		var linkURL = " ";

		switch (option.toLowerCase()) {

			case 'title':
				console.log(1);
				linkURL = defaultLink + "intitle:" + searchfilter
				break;

			case 'author':
				console.log(2);
				linkURL = defaultLink + "inauthor:" + searchfilter
				break;

			case 'publisher':
				console.log(3);
				linkURL = defaultLink + "inpublisher:" + searchfilter
				break;

			case 'volume':
				console.log(4);
				linkURL = defaultLink + "subject:" + searchfilter
				break;

			case 'isbn':
				console.log(5);
				linkURL = defaultLink + "isbn:" + searchfilter
				break;

			default:
				console.log('fgh');
				break;
		}

		ajaxConnection(linkURL);
		$("#bookContainer").hide();
		container = $("#searchContainer");

		/*if (search == "" & author == ""){

			console.log(1);
			alert("A sua pesquisa não possui parâmetros!")
			
			container = $("bookContainer");
		}
		else if (search != "" & author == ""){

			console.log(2);
			alert("A sua pesquisa não possui autor!")
			var linkURL = "https://www.googleapis.com/books/v1/volumes?q=" + terms + ":" + search + "&key=" + APIKey
			ajaxConnection(linkURL);
			$("#bookContainer").hide();
			container = $("#searchContainer");
		}
		else if (search == "" & author != ""){

			console.log(3);
			alert("A sua pesquisa não possui título!")
			var linkURL = "https://www.googleapis.com/books/v1/volumes?q=" + terms2 + ":" + author + "&key=" + APIKey
			ajaxConnection(linkURL);
			$("#bookContainer").hide();
			container = $("#searchContainer");
		}
		else if (search != "" & author != ""){

			console.log(4);
			alert("A sua pesquisa possui todos os parâmetros!")
			var linkURL = "https://www.googleapis.com/books/v1/volumes?q=" + terms + ":" + search + "+" + terms2 + ":" + author + "&key=" + APIKey
			ajaxConnection(linkURL);
			$("#bookContainer").hide();
			container = $("#searchContainer");
		}*/     
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

	// DECLARAÇÃO FUNÇÕES -----------------------------------------------------------

	// FUNCAO LOAD DATA -------------------------------------------------------------

	function LoadDataWithHTML(book, container){

		var HTMLtoInsert = `
		<div class="col-xs-12 col-md-8 col-md-offset-2 book">
		<div class="grow pic">
		<img class="img-thumbnail center-block img-fluid">
		</div>
		<p></p>
		<div class="jumbotron">
		<h1></h1>
		<p class="descricao comment"></p>
		<p class="price"></p>

		<input type="hidden" class="hiddenFieldId"></input>

		<button data-opinion="Like" name="Like" type="button" class="btn btn-success btn-lg like">
			<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Gosto!
		</button>
		<button data-opinion="Dislike" name="DisLike" type="button" class="btn btn-danger btn-lg dislike">
			<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span> Não Gosto!
		</button>

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
		$('.hiddenFieldId',$currentBookHTML).text(book.id);

		if (typeof book.volumeInfo.imageLinks != "undefined") {

			$("img",$currentBookHTML).attr("src",book.volumeInfo.imageLinks.thumbnail);
		}
		else {

			$("img",$currentBookHTML).attr("src","img/noImg.jpg");
		}

		$( ".dropdown" ).hover(
			function(){
				$(this).children(".dropdown-menu").slideDown(200);
			},
			function(){
				$(this).children(".dropdown-menu").slideUp(200);
			}
		);
		
		$(".comment").shorten();
		$(".book:first-of-type").addClass("active");
	}

	// FIM FUNCAO LOAD DATA -------------------------------------------------------------

	// FUNCAO LESS OR MORE...--------------------------------------------------------

	(function($) {
		$.fn.shorten = function (settings) {

			var config = {
				showChars: 100,
				ellipsesText: "...",
				moreText: "more",
				lessText: "less"
			};

			if (settings) {
				$.extend(config, settings);
			}

			$(document).off("click", '.morelink');

			$(document).on({click: function () {

				var $this = $(this);
				if ($this.hasClass('less')) {
					$this.removeClass('less');
					$this.html(config.moreText);
				} else {
					$this.addClass('less');
					$this.html(config.lessText);
				}
				$this.parent().prev().toggle();
				$this.prev().toggle();
				return false;
			}
		}, '.morelink');

			return this.each(function () {

				var $this = $(this);
				if($this.hasClass("shortened")) return;

				$this.addClass("shortened");
				var content = $this.html();
				if (content.length > config.showChars) {
					var c = content.substr(0, config.showChars);
					var h = content.substr(config.showChars, content.length - config.showChars);
					var html = c + '<span class="moreellipses">' + config.ellipsesText + ' </span><span class="morecontent"><span>' + h + '</span> <a href="#" class="morelink">' + config.moreText + '</a></span>';
					$this.html(html);
					$(".morecontent span").hide();
				}
			});

		};

	})(jQuery);

	// FIM FUNCAO LESS OR MORE...-------------------------------------------------

	// FUNCAO ADDROW -------------------------------------------------------------

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

	// FUNCAO DELETE ROW --------------------------------------------------------------

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
	
	// FIM FUNCAO DELETE ROW --------------------------------------------------------------

	// FIM DECLARAÇÃO FUNÇÕES ---------------------------------------------------------

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

	db.transaction(function (tx) {

		tx.executeSql('DROP TABLE books');
		tx.executeSql('CREATE TABLE IF NOT EXISTS books (id unique, opinion)');
	});

	var inAnimation = false;

	$("#bookContainer").on("click",".book button",function(){//$("button.like, button.dislike").click(function(){
		console.log('button')
		if(inAnimation == false){

			inAnimation = true;

			$allBooks = $(".book");
			//$parent = $(".book.active");
			$book = $(".book.active");

			var index = $allBooks.index($book);
			$next = $book.next(".book");
			$book.removeClass("active");

			if( index == $allBooks.length-1 ){
				$next = $allBooks.eq(0);
				$("#bookContainer").hide();
				//$("#buttons").hide();

				$("#endPage").show();
			}

			// vamos buscar o ID ao nosso hiddenfield
			$id = $(".hiddenFieldId",$book).text();

			// vamos buscar a opinion ao nosso custom attribute
			$opinion = $(this).attr("data-opinion");

			db.transaction(function (tx) {

				//insert na table que criámos
				tx.executeSql("INSERT INTO books(id, opinion) VALUES('" + $id + "','" + $opinion + "')");
			});
			
			$book.fadeOut(500,function(){
				$book.removeClass("active");//$parent.removeClass("active");
				$next.fadeIn(500,function(){
					$next.addClass("active");
					inAnimation = false;
				});
			});	

			var id = index;
			var name = $("h1", $book).text();
			var price = $("p.price",$book).text();
			var opinion = $(this).attr("name");

			addRow(id,name,price,opinion);
			$("tbody > tr:odd").addClass("odd_active");

			$("tr").hover( function (e) {

				$(this).toggleClass('hover', e.type === 'mouseenter');
			});
		}
	});

	// FIM BOTÃO LIKE & DISLIKE -----------------------------------------------------

	// CONSULTA BASE DE DADOS -------------------------------------------------------

	$('#consultDb').click(function(){
		db.transaction(function (tx) {
		//buscar todos os resultados da nossa table
			tx.executeSql('SELECT * FROM books', [], function (tx, results) {
	   			$.each(results.rows,function(index,item){
	   				//output de todas as rows/todos os resultados
					console.log(item);
				});
			}, null);
		});
	});

	// FIM CONSULTA BASE DE DADOS ---------------------------------------------------

	// BOTÃO RESTART ----------------------------------------------------------------

	$("#restartButton").click(function(){

		$("#endPage").hide();
		
		$("#bookContainer").show();
		//$("#buttons").show();
	});

	// FIM BOTÃO RESTART ------------------------------------------------------------

});
	
	// Nota: on click utilizado para fazer botões em sítios que ainda não fizeram load
	// Exemplo: botões dentro da div bookContainer

	//array opinion[] botão voltar a trás

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







