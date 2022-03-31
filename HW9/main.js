let bike = {
    {"manufacturer" : "Chevy",
        "model" : "Malibu",
        "owner" : {
            "firstName" : "Nick",
            "lastName" : "Jones"
        },
        "colors" : [
            "grey",
            "white",
            "red",
            "black"
        ]
    }

$(function () {
$("button").click(function () {
    showCarInfo();
});

});

function showCarInfo()
{
    $("#carInformation").html("Manufacturer: " + car.manufacturer 
    + "<br>Model:" + car.model + "<br>First Name:" + car.owner.firstName + "<br>Last Name:" 
    + car.owner.lastName + "<br>Colors Available:<br>" +
    car.colors[0] + "<br>" + car.colors[1] + "<br>" + car.colors[2] + "<br>" + car.colors[3]);
}