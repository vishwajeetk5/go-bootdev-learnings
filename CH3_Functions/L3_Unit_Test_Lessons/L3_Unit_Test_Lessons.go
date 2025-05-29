package main


func getMonthlyPrice(tier string) int {
	// if tier == "basic"{
	// 	return 10000.00
	// }
	// if tier == "premium"{
	// 	return 15000.00
	// }
	// if tier == "enterprise" {
	// 	return 50000.00
	// }


	// return 0.0
	switch tier {
	case "basic":
		return 10000
	case "premium":
		return 15000
	case "enterprise":
		return 50000
	default:
		return 0
	}
}

