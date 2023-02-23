$(document).ready(
    $('#btlactivator').click(function () {
    const btl = ($('#btl').val()+'px')
    $('#text').css('border-top-left-radius',btl)
}),
$('#btractivator').click(function () {
    const btr = ($('#btr').val()+'px')
    $('#text').css('border-top-right-radius',btr)
}),
$('#bblactivator').click(function () {
    const bbl = ($('#bbl').val()+'px')
    $('#text').css('border-bottom-left-radius',bbl)
}),
$('#bbractivator').click(function () {
    const bbr = ($('#bbr').val()+'px')
    $('#text').css('border-bottom-right-radius',bbr)
})
)
