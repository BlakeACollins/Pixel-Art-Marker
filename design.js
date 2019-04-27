$(document).ready(function() {
    $('#sizePicker').submit(function makeGrid(grid){
       const row_input = $('#input_height').val();
       const col_input = $('#input_width').val();
        for (var x = 1; x <= row_input; x++){
            $('table').append('<tr></tr>');
            for (var i = 1; i <= col_input; i++){
                $('tr:last').append('<td></td>');
                $('td').attr('Class', 'cells');
        }
        }
        grid.preventDefault();

        $('.cells').click(function(event){
            var paint = $('#colorPicker').val();
            $(event.target).css('background-color', paint);
        });
    });
});