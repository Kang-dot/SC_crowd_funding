pragma solidity ^0.5.11;

contract crowd_Funding {
    struct Investor {
        address payable addr;
        uint amount;
    }
    
    address payable public owner;
    uint public numInvestors;
    uint public deadline;
    string public status;
    bool public ended;
    uint public goalAmount;
    uint public totalAmount;
    
    mapping (uint =>Investor) public investors;
    
    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }
    
    constructor(uint _duration, uint _goalAmount) public {
        owner = msg.sender;
        deadline = now + _duration;
        goalAmount = _goalAmount;
        status = "in progresㅞs...";
        ended = false;
        
        numInvestors = 0;
        totalAmount = 0;
    }
    
    function fund() public payable {
        require(!ended,"funding is over");  

        Investor storage inv = investors[numInvestors++];
        inv.addr = msg.sender;
        inv.amount = msg.value;
        totalAmount += inv.amount;
    }
    function checkGoalReached () public onlyOwner{
        require(!ended,"funding is over");
        require(now>=deadline,"deadline is over");

        if(totalAmount >= goalAmount) {
            status = "funding success. thank you guys!";
            ended = true;
            
            if(!owner.send(address(this).balance)){
                revert("");
            }
        } else {
            uint i = 0;
            status = "funding failed...";
            ended = true;
            while(i <= numInvestors) {
                if(!investors[i].addr.send(investors[i].amount)){
                    revert("");
                }
                i++;
            }
        }
    }
    function kill() public onlyOwner {
        selfdestruct(owner);
    }
}