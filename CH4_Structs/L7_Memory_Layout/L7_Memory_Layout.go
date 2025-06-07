package main

type contact struct {
	userID       string  //8 bytes
	sendingLimit int32   //4 bytes
	age          int32   //4 bytes
}

type perms struct {
	
	canSend         bool
	canReceive      bool
	canManage       bool
	_               byte  //padding optional
	permissionLevel int  

	//total size: 1 + 1 + 1 + 1 + 8 = 12 bytes else 16
}

//Rearranged properly for proper memory layout without padding and wastage of memory
