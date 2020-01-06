<!DOCTYPE html>
<html lang="ko">
 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
 
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script type="text/javascript"
        src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.34/dist/web3.min.js"></script>
 
    <script>
        var web3 = new Web3('http://localhost:8545');
 
        const abi = [
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_greeting",
                        "type": "string"
                    }
                ],
                "name": "setGreeting",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_greeting",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "greeting",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "say",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ];
 
        const contractAddress = "0x31c0501800491113570010504c23707c98a14ef5";
 
        var helloContract = new web3.eth.Contract(abi, contractAddress);
 
    </script>
</head>
 
<body>
    <h1>Web3 client</h1>
    <button onclick="say();">클릭</button>
    <div id="result">
 
    </div>
    <script>
        // async function say() {
        //     let result = await helloContract.methods.say().call();
        //     console.log(result);
        //     $("#result").text("결과 : " + result);
 
        // }
        function say() {
            helloContract.methods.say().call()
                .then(result => {
                    console.log(result);
                    $("#result").text("결과 : " + result);
                })
        }

    </script>
</body>
 
 
</html>