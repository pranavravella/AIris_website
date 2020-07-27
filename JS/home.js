function initialize() {
    setInterval(function () {
        if ($(window).scrollTop() == 0) {
            $("nav").css('background-color', 'transparent');
            $("nav").css('box-shadow', 'none');
            $("nav .right").css('padding-top', '2vh');
            $("nav *").css('color', '#fff');
            $("nav span:hover").css('color', '#000');
        } else {
            $("nav").css('background-color', '#fff');
            $("nav").css('box-shadow', `
                0 2.8px 2.2px rgba(0, 0, 0, 0.014),
                0 6.7px 5.3px rgba(0, 0, 0, 0.018),
                0 1.5px 2px rgba(0, 0, 0, 0.02),
                0 2.3px 2px rgba(0, 0, 0, 0.022),
                0 3.8px 2px rgba(0, 0, 0, 0.026),
                0 4px 5px rgba(0, 0, 0, 0.05)`);
            $("nav .right").css('padding-top', '0vh');
            $("nav *").css('color', '#1B98E0');
            $("nav span:hover").css('color', '#06D6A0');
        }
    }, 20)
}
$(initialize)