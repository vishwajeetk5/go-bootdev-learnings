package main


func reformat(message string, formatter func(string) string) string {
message = formatter(message)
	message = formatter(message)
	message = formatter(message)


	return "TEXTIO: "+message
	
}

