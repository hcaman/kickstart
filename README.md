# KickStartProjects :rocket:

## What the application does :rocket:
This app can help users to create and develop an idea getting contributors. This app can help them to write an idea and found contributors for get a valid budget (Ethereum red) for the process of develop. The creator can handle the budget (Smart Contracts) creating orders which a description, a valid provider and percentage of the money needed for get a certain resource necessary for the project. The order must be approve by the majority of the contributor for be valid, if the order success the money is sended automatically to the provider, its rejected by more than half of contributor the money is not sended and the order is cancelled automatically and the money return to the budget.

## Technologies used :octocat:
I create this app using **Solidity** for handle the **smarts contracts**, **NextJS** for the Back-End and **ReactJS** for the Front-End part into the app. I wrote some test case using **Mocha**. The goal of this project was mainly be familiar with the technology of Smart Contracts, the Ethereum red and the programming languange Solidity. I achieved all this by following a course on udemy ().

## Pre-Requirements :dvd:
* Basics knowledge about the blockchain and smart contracts.
* Install [Nodejs](https://nodejs.dev/en/download/).
* Create a wallet in [Metamask](https://metamask.io/) (keep safe your phrase of 12 words).
* Create a Ethereum in the NETWORK ENDPOINT (testing propose you can use [infra](https://infura.io/)).
* You should be connected to your wallet and you need to have a little quantity of ETH in order to deploy the contract.

## Install and Run the Project :computer

1. Clone the project, run the command `npm install` and open inside a code editor.

2. Create `.env` or `.env.local` file. Inside you must setup the keys with the correct credentials: 
* `ETH_MNEMONIC` (your own phrase with the 12 words of your wallet) 
* `ETH_ENDPOINT` (this your own endpoint create before)

3. Now, I recommend test if it is all running OK, please use the command `npm run test` and you will see result inside the console "6 passing".

4. Now you should deploy a new **Contract**, for that you need open the console and run the command: 
`npm run ethcompile && npm run ethdeploy`

5. As result of this command the console must give you a message "Contract deployed to 0x", you need copy the entire contract address which start with "0x", this string must replace the string **CONTRACT_ADDRESS** inside the file `ethereum\factory.js`.

6. Now you can use the app in localhost port 3000 using the command:

`npm run dev`

## Tests :space_invader:
There are 6 test cases written in **Mocha** inside the file `test\Campaign.test.js` :
    :white_check_mark: Deploys a factory and a campaign.
    :white_check_mark: Marks caller as the campaign manager.
    :white_check_mark: Allows people to contribute money and marks them as approvers.
    :white_check_mark: Requires a minimum contribution.
    :white_check_mark: Allows a manager to make a payment request.
    :white_check_mark: Processes requests.


## How to Use the App :calling:

1. Create a campaign.
2. Indicate the minimun contribution alloweded.
3. Accept the transfer in metamask in order for deploy the contract of the campaign.
4. Wait for the deploy the contract (the creation of your campaign).
5. You will be redirect to the home page where you will find all the campaigns, including yours.
6. Clicking in "View Campaign" and you will see the details of your campaign.
7. If you are the owner of that campaign you will be able to create request.
8. If you are NOT the owner of that campaign you will be able to contribute.
9. Click in the botton "View request" > "Add request" > Fill the fields > click in "Create!" > Conferm the.
10. transaction in Metamask.
11. Now the contributors can approve the Request click in "View request" and clicking in "Approve".
12. When you have more than half approvals, you will be able to proceed clicking in "Finalize".
13. Click "Filnalize" and conferm the transaction in Metamask.
14. Now the money was sended to the "Recipient".

## License :memo:
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)