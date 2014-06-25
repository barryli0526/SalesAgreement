var soap = require('./lib/soap-server');

function MyTestService(){
}
MyTestService.prototype.getProduct = function(input){
    console.log(input);
    return "This is response from barry";
};

var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('testService', new MyTestService());

soapServer.listen(1337, '127.0.0.1');