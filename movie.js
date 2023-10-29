$('#submit').click(function () {
    const movie = $('#title').val();
    const rating = $('#rating').val();

    if (isNaN(rating) || rating < 0 || rating > 10) {
        alert('Rating must be a number between 0 and 10.');
        return false;
    }

    if (movie.length < 2) {
        alert('Movie title must be at least 2 characters long.');
        return false;
    }

    const newMovie = '<li>' + movie + ' - ' + rating + '<button>remove</button></li>';


    $('ul').append(newMovie);
    $('#title').val('');
    $('#rating').val('');
    $('#title').focus();
    return false;
});

$('ul').on('click', 'button', function () {
    $(this).parent('li').remove();
});