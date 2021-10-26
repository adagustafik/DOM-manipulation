let menofky = ['Ivan', 'Filip', 'Zuzka', 'Daniel', 'Paulínka', 'Marek', 'Aďa'];
menofky.forEach ((meno) => {
    $('ul').append("<li>" + meno + "</li>");
});
$("li").last().css('font-weight', 'bold');

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};
$('body').append('<h2>'+ additionalBlock.title + '</h2>');
$('body').append('<p>'+ additionalBlock.text + '</p>');