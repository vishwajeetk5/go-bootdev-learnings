package main


type messageToSend struct {
	message   string
	sender    user
	recipient user
}


type user struct {
	name   string
	number int
}


func canSendMessage(mToSend messageToSend) bool {
	// ?
	if mToSend.sender.number == 0 || mToSend.sender.name == "" || mTosend.recipent.name == "" || mToSend.recipient.number == 0 {
		return false
	}
	return true
}

