package main


func adder() func(int) int {
	sum := 0
	// This function returns a function that has reference to an enclosed sum value
	return func(x int)int{
		sum+=x
		return sum;
	}
}

