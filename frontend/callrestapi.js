var url = "http://localhost:8080/api/users";

function postUser() {
	console.log(url);

	var myName = $('#name').val();
	var myImage = $('#image').val();
	var myAppearance = $('#appearance').val();
	var myBiography = $('#biography').val();

	var myuser = {
		name: myName,
		image: myImage,
		appearance: myAppearance,
		biography: myBiography
	};

console.log(myuser);

$.ajax({
	url: url,
	type: 'post',
	dataType: 'json',
	contentType: 'application/json',
	sucess: function (data) {
		console.log(data);
		$('#resultado').html(JSON.stringify(data.user));
	},
	data: JSON.stringify(myuser)
});
}

function getUsers() {
  console.log(url);

  $.getJSON(url, function(json) {
      console.log(json);

      var arrUsers = json.users;

      var htmlTableUsers = '<table border=1>';

      arrUsers.forEach(function(item) {
        console.log(item);

        htmlTableUsers += '<tr>' +
          '<td>' + item.name + '</td>' +
          '<td> <img src="'+item.image+'"></td>' +
          '<td>' + item.appearance + '</td>' +
          '<td>' + item.biography + '</td>' +
          '</tr>';

      });

      htmlTableUsers += '</table>';

      $('#resultado').html(htmlTableUsers);

    }
  );
}
