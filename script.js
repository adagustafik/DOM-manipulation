let menofky = ['Ivan', 'Filip', 'Zuzka', 'Daniel', 'Paulínka', 'Marek', 'Aďa'];
menofky.forEach ((meno) => {
    $('ul').append("<li>" + meno + "</li>");
});
$("li").last().css('font-weight', 'bold');

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};
$('ul').last().append('<h3>'+ additionalBlock.title + '</h3>');
$('ul').last().append('<p>'+ additionalBlock.text + '</p>');