  pragma solidity ^0.4.17;

  contract MailFactory {
      address[] public deployedMails;

      function createMail() public{
          address newMail = new Mail(msg.sender);// manager address로 변경 하기
          deployedMails.push(newMail);
      }

      function getDeployedMails() public view returns (address[]){
          return deployedMails;
      }
  }

  contract Mail{
      struct SenderInfo {
          string senderName;
          string senderPhone;
          string senderEmail;
          string senderAddress;
      }

      struct ReceiverInfo{
          string receiverName;
          string receiverPhone;
          string receiverAddress;
      }

      struct MailInfo{
          string mailName;
          uint mailQuantity;
          uint weight;
          bytes32 password;
          bool complete;
      }

      SenderInfo[] public senderInfos;
      ReceiverInfo[] public receiverInfos;
      MailInfo[] public mailInfos;
      address public manager;

      function Mail(address creator) public {
          manager = creator;// manager address로 변경 하기
      }

      function addSenderInfo(string senderName, string senderPhone, string senderEmail, string senderAddress) public {
          SenderInfo memory newSenderInfo = SenderInfo({
              senderName: senderName,
              senderPhone: senderPhone,
              senderEmail: senderEmail,
              senderAddress: senderAddress
          });
          senderInfos.push(newSenderInfo);
      }

      function addReceiverInfo(string receiverName, string receiverPhone, string receiverAddress) public {
          ReceiverInfo memory newReceiverInfo = ReceiverInfo({
              receiverName: receiverName,
              receiverPhone: receiverPhone,
              receiverAddress: receiverAddress
          });
          receiverInfos.push(newReceiverInfo);
      }

      function addMailInfo(string mailName, uint mailQuantity, uint weight, string password) public {
          MailInfo memory newMailInfo = MailInfo({
              mailName: mailName,
              mailQuantity: mailQuantity,
              weight: weight,
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
  }
