//You may use this as an alternative to test the Regex

//I am providing various test emails to utilize for said test
const email = ["JwRage1883#$@yahoo.com", "5cotty_blastorz21@gmail.com", "Charles-Cerebro@nyu-com", "12freddY@aol.com", "hahahaCheChe@CCL.com", "JConnor91@skynet.com", "RruNNer@beep.com", "Wil-e-Coyote@Acme.gov", "Scaryterry_dream.you", "wubbalubba@dubdubber.rick"];

//setup and define the Regex to validate the email string
const regex = new RegExp(/\b[a-z0-9#$_-]+@[a-z0-9]+\.[a-z]{2,3}\b/, 'i')

//Test to your heart's content, just check the console for the results
email.forEach(email => console.log(email, regex.test(email)));