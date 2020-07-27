$(document).ready(function () {

    const calendar = $("div.container");
    const dateDisplay = $("#currentday");
    let today = moment().format();

    function createCalendar(now, events) {

        let hour = moment(now).hour(6);
        for (let i = 0; i < 6; i++) {
            let row = $("<div>").addclass("row");
        }
    }
}
