sonido = new Audio('red-swan.mp3');
$(document).ready(function(){
    $('#carta').on('click', function(){
        $(this).hide();
        sonido.play();
        $('#mensaje').fadeIn(1000).animate({
            scale: '1.0'
        }, {
            duration: 1000,
            step: function(now, fx) {
                $(this).css('transform', 'scale(' + now + ')');
            }
        });
        setTimeout(()=>{
            $('#primer2').fadeIn(1500);
        },1000)
    });
});

mensaje = document.getElementById('mensaje');

document.getElementById('primer2').addEventListener('click',()=>{
    mensaje.style.display = 'none';
    document.getElementById('primer2').style.display = 'none';
    document.getElementById('title').style.display = 'block';
    document.getElementById('encuesta').style.display = 'flex';
})

//Mensaje ganador
document.getElementById('listo').addEventListener('click', ()=>{
    document.getElementById('encuesta').style.display = 'none';
    mensaje.style.display = 'block'
    mensaje.innerHTML = `
    <h1>¡Felicidades amor!<br>ฅ(^◕ᴥ◕^)ฅ</h1>
    <p>Ya somos novios uwu ahora abrazame</p>
    <div id="emotes1">
        <img src="em1.webp" class="emote">
        <img src="em2.webp" class="emote">
    </div>
    <div id="cont">
        <div id="recompensa">
            <p>Te amo mucho baby ❤️</p>
        </div>
    </div>
    <div id="emotes2">
        <img src="em3.webp" class="emote">
        <img src="em4.webp" class="emote">
    </div>`

    $('.emote').each(function(index) {
        $(this).delay(750 * index).animate({ opacity: 1 }, 750);
    });
    
    $('#cont').slideDown(1000);

    setTimeout(()=>{
        $(document).ready(function(){
            $('#recompensa').fadeIn(4000);
        });
    },3000)

    setTimeout(() => {
        $('#cont').fadeOut(1000, function() {
            $('#cont').empty().fadeIn(4000).html(`
                <img src="nosotros.jpg">
                <p>Te amo mucho baby ❤️</p>
                <p>Seremos una linda pareja :D</p>
                <div style="display:flex">
                    <img style="width:48%" src="nvos.jpeg">
                    <img style="width:48%" src="nyo.jpg">
                </div>
            `);
        });
    }, 6000);
})