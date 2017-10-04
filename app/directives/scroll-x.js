var app = angular.module('app');

app.directive('scrollX', function () {
    return {
        link: function ($scope, element, attrs) {
            element.bind("mousewheel", function (event) {
                var e = event.originalEvent,
                    direction = e.detail ? e.detail * -120 : e.wheelDelta,
                    position = element.scrollLeft();

                position += direction > 0 ? -120 : 120;
                element.scrollLeft(position);
                event.preventDefault();
            });
        }
    }
});