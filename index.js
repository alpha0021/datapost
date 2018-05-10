	$(document).ready(function(){
	
				$('#postForm').submit(function(e){
				e.preventDefault();

				var title = $('#title').val();
				var body = $('#body').val();
				var url = $(this).attr('action');

				$.post(url ,{title:title ,body:body}).
				done(function(data){
					console.log('Post Saved');
					console.log(data);
				}); 
			});

		});