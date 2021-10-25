let menofky = ['Ivan', 'Aďa', 'Filip', 'Zuzka', 'Daniel', 'Paulínka', 'Marek'];
menofky.forEach ((name) => {
    $('ul').append("<li>" + name + "</li>");
});
$('menofky').css('font-weight', 'bold');