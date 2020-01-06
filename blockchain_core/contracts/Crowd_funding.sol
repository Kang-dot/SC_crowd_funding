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
        status = "in progress...";
        ended = false;
        
        numInvestors = 0;
        totalAmount = 0;
    }
    
    function fund() public payable returns(uint) {
        require(!ended);
        
        Investor storage inv = investors[numInvestors++];
        inv.addr = msg.sender;
        inv.amount = msg.value;
        totalAmount += inv.amount;

        return inv.amount;
    }
    
    function checkGoalReached () public onlyOwner returns (string memory){
        require(!ended);
        require(now>=deadline, "this funding is still progressing");
        
        if(totalAmount >= goalAmount) {
            status = "funding success. thank you guys!";
            ended = true;
            if(!owner.send(address(this).balance)){
                revert();
            }
        } else {
            uint i = 0;
            status = "funding failed...";
            ended = true;
            
            while(i <= numInvestors) {
                if(!investors[i].addr.send(investors[i].amount)){
                    revert();
                }
                i++;
            }
        }
        return status;
    }
    
    function kill() public onlyOwner {
        selfdestruct(owner);
    }
}