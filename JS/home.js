function initialize() {
    const slider = document.querySelector('.b3 ');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });

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
        var timewidth = $('.b3 .timeline > :last-child').offset().left - $('.b3 .timeline > :first-child')
            .offset()
            .left + $('.b3 .timeline > :last-child').width();
        var linewidth = timewidth - $('.b3 .timeline > :first-child').width() / 2 - $(
            '.b3 .timeline > :last-child').width() / 2;
        $(".b3 .timeline-wrap").width(timewidth + "px");
        $(".b3 .timeline").width(timewidth + "px");
        $(".b3 .line").width(linewidth + "px");
    }, 20)
}
$(initialize)