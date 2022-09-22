const adaptSize = 1200;

$(() => {
    let windowSize = $(window).width();
    if (windowSize <= adaptSize) insertOffcanvasTogglerToCommonToggler();
    $(window).resize(() => {
        windowSize = $(window).width();
        if (windowSize <= adaptSize) insertOffcanvasTogglerToCommonToggler()
        else removeOffcanvasTogglerToCommonToggler();

    });
});


const insertOffcanvasTogglerToCommonToggler = () => {
    const elemToCut = $('#offCanvasPart')
    const elemToPasteTo = $('#commonTogglerPart')
    if ($(elemToCut).parent().attr('id') === 'commonTogglerPart') {
        return;
    }
    let newli = $(`<li class="nav-item ms-0" id="offCanvasPart">${$(elemToCut).html()}</li>`)
    $(newli).prependTo(elemToPasteTo);
    $(elemToCut).remove();
    $('#mainNav').addClass('navbar-expand-xl')
}

const removeOffcanvasTogglerToCommonToggler = () => {
    const elemToCutInnerHtml = $('#offCanvasPart').html()
    const elemToPasteTo = $('#mainNav')
    if ($('#offCanvasPart').parent().attr('id') === 'mainNav') {
        return;
    }
    $('#offCanvasPart').remove();
    const newNavElem = $('<nav class="navbar col-xl-5" id="offCanvasPart"></nav>')
    $(elemToCutInnerHtml).prependTo(newNavElem)
    $(newNavElem).prependTo(elemToPasteTo)
    $('#mainNav').removeClass('navbar-expand-xl')
    const brand = $('.navbar-brand');
    $(brand).remove();
    $('#mainNav').prepend(brand)
    const basketElem = $('.basket')
    $(basketElem).remove()
    $('#mainNav').append(basketElem)
}