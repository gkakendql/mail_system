pragma solidity ^0.4.17;
pragma experimental ABIEncoderV2;
contract MailFactory {
    address[] public deployedMails;

    function createMail() public returns(address){
        address newMail = new Mail(msg.sender);// manager address로 변경 하기
        deployedMails.push(newMail);
        return newMail;
    }

    function getDeployedMails() public view returns (address[]){
        return deployedMails;
    }
}

contract Mail{
    address user = 0x6CcEf8229c07c937A22437eeb13261c4e4b7e835;
    address sendAgency = 0x50FE4cBC3C1E70A3B28590959Dc6aa7906829706;
    address hub = 0x0F66CDf7fEA7697f0269be6fdEB15Ed1d10D8560;
    address receiveAgency = 0x28bB21cE6d500Ba545eDcE0FAAcbDa6203E4a15C;

    struct SenderInfo {
        string senderName;
        string senderPhone;
        string senderEmail;
        string senderAddress;
        string receiverName;
        string receiverPhone;
        string receiverAddress;
    }

    struct MailInfo{
        string productName;
        uint productPrice;
        uint quantity;
        uint weight;
        string other;
        bytes32 password;
        bool complete;
    }


   struct UserData{
        string senderName;
        string receiverName;
        string productName;
        uint productPrice;
        uint quantity;
    }

    SenderInfo[] public senderInfos;
    MailInfo[] public mailInfos;

    address public manager;

    function Mail(address creator) public {
        manager = creator;// manager address로 변경 하기
    }

    function addSenderInfo(string senderName, string senderPhone, string senderEmail, string senderAddress, string receiverName, string receiverPhone, string receiverAddress) public {
        SenderInfo memory newSenderInfo = SenderInfo({
            senderName: senderName,
            senderPhone: senderPhone,
            senderEmail: senderEmail,
            senderAddress: senderAddress,
            receiverName: receiverName,
            receiverPhone: receiverPhone,
            receiverAddress: receiverAddress
        });
        senderInfos.push(newSenderInfo);
    }
    function addMailInfo(string productName, uint productPrice, uint quantity, uint weight, string other, string password) public {
        MailInfo memory newMailInfo = MailInfo({
            productName: productName,
            productPrice: productPrice,
            quantity: quantity,
            weight: weight,
            other: other,
            password: keccak256(password),
            complete: false
        });
        mailInfos.push(newMailInfo);
    }




    function mailComplete(uint index, string password) public {
        MailInfo storage mailInfo = mailInfos[index];

        //require(배송기사 맞는지 확인 넣기)

        require(mailInfo.password == keccak256(password));
        mailInfo.complete = true;
    }

    function senderLength() public view returns (uint) {
        return senderInfos.length;
    }
    function mailLength() public view returns (uint) {
        return mailInfos.length;
    }

    function getSome(uint index) public returns (UserData u)
    {
        UserData memory u;
        u.senderName = senderInfos[index].senderName;
        u.receiverName = senderInfos[index].receiverName;
        u.productName = mailInfos[index].productName;
        u.productPrice = mailInfos[index].productPrice;
        u.quantity = mailInfos[index].quantity;
        return u;
    }



    function data(uint index) public view returns (UserData memory) {
        UserData memory u1 = getSome(index);
        return (u1.senderName);
    }
}

contract Shipping{
     struct SendAgencyInfo{
        string sendAgency;
        string sendAgency_time;
    }

    struct HubInfo{
        string hub;
        string hub_time;
    }

    struct ReceiveAgencyInfo{
        string receiveAgency;
        string receiveAgency_time;
    }

    struct CompliteInfo{
        string complite_time;
    }

    SendAgencyInfo [] public sendAgencyInfos;
    HubInfo [] public hubInfos;
    ReceiveAgencyInfo [] public receiveAgencyInfos;
    CompliteInfo [] public compliteInfos;

    function setSendAgency(string name, string time) public {
        SendAgencyInfo memory newSendAgency = SendAgencyInfo({
            sendAgency: name,
            sendAgency_time: time
        });
        sendAgencyInfos.push(newSendAgency);
    }

    function setHub(string name, string time) public {
       HubInfo memory newHub = HubInfo({
            hub: name,
            hub_time: time
        });
        hubInfos.push(newHub);
    }

    function setReceiveAgency(string name, string time) public {
        ReceiveAgencyInfo memory newReceiveAgency = ReceiveAgencyInfo({
            receiveAgency: name,
            receiveAgency_time: time
        });
        receiveAgencyInfos.push(newReceiveAgency);
    }

    function setComplitey(string time) public {
        CompliteInfo memory newComplite = CompliteInfo({
            complite_time: time
        });
        compliteInfos.push(newComplite);
    }

}
