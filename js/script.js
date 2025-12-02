$(function () {
  const $naglowek = $('header');
  $naglowek.css('position', 'relative');
  $naglowek.animate({ left: '30px' }, 700);

  const $listaAut = $('#lista-aut');
  const $nowyTytul = $('#nowe-ogloszenie');
  const $noweZdjecie = $('#nowe-zdjecie');

  function dodajOgloszenie(nazwa, srcZdjecia) {
    const $ogloszenie = $('<li>').hide().css('opacity', 0);
    $ogloszenie.append($('<span>').addClass('nazwa-auta').text(nazwa));
    if (srcZdjecia) {
      const $zdjecie = $('<img>').addClass('zdjecie-aut').attr('src', srcZdjecia).hide();
      $ogloszenie.append($zdjecie);
    }
    $listaAut.append($ogloszenie);
    $ogloszenie.slideDown(200, function () { $ogloszenie.animate({ opacity: 1 }, 200); });
  }

  $('#pokaz-btn').on('click', function () { $listaAut.slideDown(250); });
  $('#ukryj-btn').on('click', function () { $listaAut.slideUp(250); });
  $('#przelacz-btn').on('click', function () { $listaAut.slideToggle(300); });

  $('#formularz-dodaj').on('submit', function (e) {
    e.preventDefault();
    const nazwa = $nowyTytul.val().trim();
    if (!nazwa) { $nowyTytul.fadeOut(80).fadeIn(80); return; }
    const plik = $noweZdjecie[0] && $noweZdjecie[0].files && $noweZdjecie[0].files[0];
    if (plik) {
      const czytnik = new FileReader();
      czytnik.onload = function (ev) { dodajOgloszenie(nazwa, ev.target.result); };
      czytnik.readAsDataURL(plik);
    } else {
      dodajOgloszenie(nazwa);
    }
    $nowyTytul.val('');
    if ($noweZdjecie[0]) $noweZdjecie[0].value = '';
  });

  $('#zmien-naglowek').on('click', function () {
    $('header h1').fadeOut(120, function () { $(this).text('Zmieniony nagłówek — prosty przykład').fadeIn(120); });
  });

  $('#podswietl').on('click', function () {
    $listaAut.find('li').addClass('highlight');
    setTimeout(function () { $listaAut.find('li').removeClass('highlight'); }, 700);
  });

  $listaAut.on('click', 'li', function () {
    const $ogloszenie = $(this);
    const $zdjecie = $ogloszenie.find('img.zdjecie-aut');
    if ($zdjecie.length) { $zdjecie.slideToggle(300); return; }
    $ogloszenie.fadeTo(80, 0.4).fadeTo(200, 1);
    alert('Wybrano: ' + $ogloszenie.text());
  });
});
