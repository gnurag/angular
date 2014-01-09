/**
 * Created by Daniel on 1/6/14.
 */
function CartController($scope) {
    $scope.items = [
        {
            title: 'bucket of paint ',
            quantity: 8,
            price: 3.95
        } ,
        {
            title: "ribbon",
            quantity: 10,
            price: 9.95
        },
        {
            title: "ball",
            quantity: 100,
            price: 10
        }
    ];
    $scope.remove = function (index) {
        alert('index = '+ index) ;
        $scope.items.splice(index, 1);
    }
}