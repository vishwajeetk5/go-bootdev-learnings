package main


type authenticationInfo struct {
	username string
	password string
}


// create the method below
func (a authenticationInfo) authenticate() string {
	return "Authorization: Basic "+a.username+":"+a.password
}
