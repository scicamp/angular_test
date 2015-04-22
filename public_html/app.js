(function()
{
    var app = angular.module("gemStore", []);
    
    app.controller('StoreController', function()
    {
        this.products = gems;
    });

    var gems = [
    {
        name: 'Dod',
        price: 2.95,
        description: 'some gem called Dod',
        canPurchase: true,
        soldOut : false
    },
    {
        name: 'Bob',
        price: 2.55,
        description: 'some gem called Bob',
        canPurchase: true,
        soldOut : true
    } ,
    {
        name: 'Aoa',
        price: 3.60,
        description: 'some gem called Aoa',
        canPurchase: true,
        soldOut : false
    } 
]
}) ();
    