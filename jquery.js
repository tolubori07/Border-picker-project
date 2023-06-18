$(document).ready(function () {
   $('#btl').change(function (e) { 
    e.preventDefault();
    const btl = ($('#btl').val()+'px')
    $('#text').css('border-top-left-radius',btl)
   });
   $('#bbr').change(function (e) { 
    e.preventDefault();
    const bbr  = ($('#bbr').val()+'px')
    $('#text').css('border-bottom-right-radius',bbr)
   });
   $('#bbl').change(function (e) { 
    e.preventDefault();
    const bbl = ($('#bbl').val()+'px')
    $('#text').css('border-bottom-left-radius',bbl)
   });
   $('#btr').change(function (e) { 
    e.preventDefault();
    const btr = ($('#btr').val()+'px')
    $('#text').css('border-top-right-radius',btr)
   });
})


