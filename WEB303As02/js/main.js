//  WEB303 Assignment 2
// Name: Gurjeet Singh
// Student ID:0792908

$(function(){

    const contentEl = $('#content');

    $('#prospect').click(load);
    $('#convert').click(load);
    $('#retain').click(load);

    function load(event) {
        contentEl.slideUp();
        const dataFile = event.target.id + '.html';
        const xhr = new XMLHttpRequest();
        xhr.open('GET', dataFile, true);

        xhr.onload = function(){
            contentEl.html(this.responseText);
            contentEl.slideDown();
        }

        xhr.send();

    }
    
});